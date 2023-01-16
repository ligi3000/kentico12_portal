﻿using System;
using System.Web.UI;

using CMS.Base.Web.UI;
using CMS.Blogs;
using CMS.DocumentEngine;
using CMS.Helpers;
using CMS.SiteProvider;
using CMS.UIControls;


public partial class CMSModules_Blogs_Controls_Unsubscription : CMSUserControl
{
    #region "Private variables"

    private Guid mSubGuid = Guid.Empty;
    string mSubscriptionHash;
    string mRequestTime;
    private BlogPostSubscriptionInfo mSubscriptionObject;
    private TreeNode mSubscriptionSubject;

    #endregion


    #region "Public properties"

    /// <summary>
    /// Gets or sets successful approval text.
    /// </summary>
    public string SuccessfulUnsubscriptionText
    {
        get;
        set;
    }


    /// <summary>
    /// Gets or sets unsuccessful approval text.
    /// </summary>
    public string UnsuccessfulUnsubscriptionText
    {
        get;
        set;
    }


    /// <summary>
    /// Gets or sets the confirmation info label text.
    /// </summary>
    public string UnsubscriptionInfoText
    {
        get;
        set;
    }


    /// <summary>
    /// Gets or sets the confirmation button text.
    /// </summary>
    public string UnsubscriptionButtonText
    {
        get;
        set;
    }


    /// <summary>
    /// Gets or sets the confirmation label CSS class.
    /// </summary>
    public string UnsubscriptionInfoCssClass
    {
        get;
        set;
    }


    /// <summary>
    /// Gets or sets the confirmation button CSS class.
    /// </summary>
    public string UnsubscriptionButtonCssClass
    {
        get;
        set;
    }


    /// <summary>
    /// Get message board subscription object
    /// </summary>
    private BlogPostSubscriptionInfo SubscriptionObject
    {
        get
        {
            if (mSubscriptionObject == null)
            {
                mSubscriptionObject = BlogPostSubscriptionInfoProvider.GetBlogPostSubscriptionInfo(mSubGuid) ?? BlogPostSubscriptionInfoProvider.GetBlogPostSubscriptionInfo(mSubscriptionHash);
            }

            return mSubscriptionObject;
        }
    }


    /// <summary>
    /// Get subject of subscription
    /// </summary>
    public TreeNode SubscriptionSubject
    {
        get
        {
            if ((mSubscriptionSubject == null) && (SubscriptionObject != null))
            {
                // Get blog post
                TreeProvider tp = new TreeProvider();
                mSubscriptionSubject = tp.SelectSingleDocument(SubscriptionObject.SubscriptionPostDocumentID);
            }

            return mSubscriptionSubject;
        }
    }

    #endregion


    #region "Control methods"

    /// <summary>
    /// Page load event
    /// </summary>
    protected void Page_Init(object sender, EventArgs e)
    {
        // Get data from query string
        mSubGuid = QueryHelper.GetGuid("blogsubguid", Guid.Empty);
        mSubscriptionHash = QueryHelper.GetString("blogsubscriptionhash", string.Empty);
        mRequestTime = QueryHelper.GetString("datetime", string.Empty);
    }


    /// <summary>
    /// Page load event
    /// </summary>
    protected void Page_Load(object sender, EventArgs e)
    {
        // If StopProcessing flag is set, do nothing
        if (StopProcessing)
        {
            Visible = false;
            return;
        }

        bool controlPb = false;

        if (RequestHelper.IsPostBack())
        {
            Control pbCtrl = ControlsHelper.GetPostBackControl(Page);
            if (pbCtrl == btnConfirm)
            {
                controlPb = true;
            }
        }

        // Setup controls
        SetupControls(!controlPb);

        if (!controlPb)
        {
            CheckAndUnsubscribe(mSubGuid, mSubscriptionHash, mRequestTime, true);
        }
    }


    /// <summary>
    /// Button confirmation click event
    /// </summary>
    protected void btnConfirm_Click(object sender, EventArgs e)
    {
        CheckAndUnsubscribe(mSubGuid, mSubscriptionHash, mRequestTime, false);
    }


    /// <summary>
    /// Initialize controls properties
    /// <param name="forceReload">Force reloading control</param>
    /// </summary>
    private void SetupControls(bool forceReload)
    {
        lblInfo.CssClass = DataHelper.GetNotEmpty(UnsubscriptionInfoCssClass, "InfoLabel");
        btnConfirm.CssClass = UnsubscriptionButtonCssClass;

        if (forceReload)
        {
            lblInfo.Text = DataHelper.GetNotEmpty(UnsubscriptionInfoText, GetString("general.unsubscription_confirmtext"));
            btnConfirm.Text = DataHelper.GetNotEmpty(UnsubscriptionButtonText, GetString("general.unsubscription_confirmbutton"));
        }
    }


    /// <summary>
    /// Check that subscription hash is valid and subscription didn't expire
    /// </summary>
    /// <param name="subGuid">Subscription GUID for subscriptions without</param>
    /// <param name="subscriptionHash">Subscription hash to check</param>
    /// <param name="requestTime">Date time of subscription request</param>
    /// <param name="checkOnly">Indicates if only check will be performed</param>
    private void CheckAndUnsubscribe(Guid subGuid, string subscriptionHash, string requestTime, bool checkOnly)
    {
        OptInApprovalResultEnum result = OptInApprovalResultEnum.NotFound;

        // Get date and time
        DateTime datetime = DateTimeHelper.ZERO_TIME;
        if (!String.IsNullOrEmpty(requestTime))
        {
            try
            {
                datetime = DateTimeUrlFormatter.Parse(requestTime);
            }
            catch
            {
                DisplayError(GetString("general.unsubscription_unsuccessful"));
                return;
            }
        }

        if (SubscriptionObject != null)
        {
            if (subGuid != Guid.Empty)
            {
                if (!checkOnly)
                {
                    BlogPostSubscriptionInfoProvider.DeleteBlogPostSubscriptionInfo(SubscriptionObject);
                    result = OptInApprovalResultEnum.Success;
                }
                else
                {
                    // Subscription exists but do nothing automatically, wait to user action
                    return;
                }
            }
            // Check if subscription approval hash is supplied
            else if (!string.IsNullOrEmpty(subscriptionHash))
            {
                result = checkOnly 
                    ? BlogPostSubscriptionInfoProvider.ValidateHash(SubscriptionObject, subscriptionHash, SiteContext.CurrentSiteName, datetime) 
                    : BlogPostSubscriptionInfoProvider.Unsubscribe(subscriptionHash, true, SiteContext.CurrentSiteName, datetime);
            }
        }

        switch (result)
        {
            // Approving subscription was successful
            case OptInApprovalResultEnum.Success:
                if (!checkOnly)
                {
                    ShowInfo(DataHelper.GetNotEmpty(SuccessfulUnsubscriptionText, GetString("Unsubscribe.Unsubscribed")));
                }
                break;

            // Subscription was already approved
            case OptInApprovalResultEnum.Failed:
                DisplayError(DataHelper.GetNotEmpty(UnsuccessfulUnsubscriptionText, GetString("general.unsubscription_unsuccessful")));
                break;

            case OptInApprovalResultEnum.TimeExceeded:
                DisplayError(DataHelper.GetNotEmpty(UnsuccessfulUnsubscriptionText, GetString("general.unsubscription_timeexceeded")));
                break;

            // Subscription not found
            default:
                DisplayError(DataHelper.GetNotEmpty(UnsuccessfulUnsubscriptionText, GetString("general.unsubscription_NotSubscribed")));
                break;
        }
    }

    #endregion


    #region "Helper methods"

    /// <summary>
    /// Display error message
    /// </summary>
    /// <param name="errorText">Error text to display</param>
    private void DisplayError(string errorText)
    {
        lblInfo.CssClass = "ErrorLabel";
        lblInfo.Text = errorText;
        btnConfirm.Visible = false;
    }


    /// <summary>
    /// Display information message
    /// </summary>
    /// <param name="infoText">Information to display</param>
    private void ShowInfo(string infoText)
    {
        lblInfo.CssClass = "InfoLabel";
        lblInfo.Text = infoText;
        btnConfirm.Visible = false;
    }

    #endregion
}