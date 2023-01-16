using System;
using System.Data;
using System.Text;
using CMS.DocumentEngine;
using CMS.Helpers;
using CMS.Taxonomy;

namespace CMS.DocumentEngine.Web.UI
{
    /// <summary>
    ///     Extends the CMSTransformation partial class.
    /// </summary>
    public partial class CMSTransformation
    {
        public string ParseSelectedListToUl(String value)
        {
            var retVal = new StringBuilder();
            try
            {
                var splits = (Array)value.Split('|');
                if (splits.Length > 0)
                {
                    retVal.Append("<ul>");

                    foreach (var split in splits)
                    {
                        retVal.Append("<li>" + split + "</li>");
                    }

                    retVal.Append("</ul>");
                }
            }
            catch
            {
                return string.Empty;
            }

            return retVal.ToString();
        }
	
        public string GetDocumentCategoriesLinks(int documentId, string documentListAliasPath)
        {
            if (documentId < 1)
            {
                throw new Exception("Invalid document ID");
            }

            // Uses the current document's alias path if one is not specified
            if (documentListAliasPath == null)
            {
                documentListAliasPath = DocumentContext.CurrentAliasPath;
            }

            // Initializes the HTML code result
            var result = "";

            // Gets the categories of the specified document
            DataSet ds = DocumentCategoryInfoProvider.GetDocumentCategories(documentId);

            if (!DataHelper.DataSourceIsEmpty(ds))
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    // Constructs links for the assigned categories
                    // The links lead to a page containing a list of documents that belong to the same category, with the category ID in the query string
                    var categoryId = ValidationHelper.GetInteger(row["CategoryID"], 0);
                    var categoryName = ValidationHelper.GetString(row["CategoryDisplayName"], null);

                    result += "<a href=\"" + URLHelper.ResolveUrl(DocumentURLProvider.GetUrl(documentListAliasPath));
                    result += "?category=" + categoryId;
                    result += "\">" + categoryName + "</a>&nbsp;";
                }
            }

            return result;
        }

        public string GetDocumentCategoriesUl(int documentId)
        {
            if (documentId < 1)
            {
                throw new Exception("Invalid document ID");
            }

            // Initializes the HTML code result
            var result = string.Empty;

            // Gets the categories of the specified document
            DataSet ds = DocumentCategoryInfoProvider.GetDocumentCategories(documentId);

            if (!DataHelper.DataSourceIsEmpty(ds))
            {
                result += "<ul>";
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    // Constructs links for the assigned categories
                    // The links lead to a page containing a list of documents that belong to the same category, with the category ID in the query string
                    var categoryName = ValidationHelper.GetString(row["CategoryDisplayName"], null);

                    result += "<li>" + categoryName + "<li/>";
                }

                result += "</ul>";
            }

            return result;
        }
    }
}