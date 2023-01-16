/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,s)}c((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};components.loadBundle("kentico-personalization-button",["exports","./chunk-5dc1aa56.js","./chunk-b1e25892.js","./chunk-aa1bef35.js","./chunk-60b77363.js"],function(t,e,n,i,o){var r,a,s,c=window.components.h;!function(t){t.WidgetProperties="WidgetProperties",t.SectionProperties="SectionProperties",t.TemplateProperties="TemplateProperties",t.Custom="Custom"}(r||(r={})),function(t){t.Center="center",t.Left="left",t.Right="right"}(a||(a={})),function(t){t.AddWidget="addWidget",t.AddSection="addSection",t.ChangeSection="changeSection",t.Personalization="personalization"}(s||(s={}));var l,p=function(t,n){void 0===n&&(n=e.POP_UP_CONTAINER_WIDTH/2);var i=d(t),o=u(n);return i.left<o?a.Right:i.right<o?a.Left:a.Center},u=function(t){var e=document.body.querySelector("kentico-pop-up-container");return e&&e.offsetWidth?e.offsetWidth/2:t},d=function(t){return{left:t.left,right:window.innerWidth-t.right}};!function(t){t[t.ConditionTypeListing=0]="ConditionTypeListing",t[t.VariantListing=1]="VariantListing",t[t.VariantConfiguration=2]="VariantConfiguration"}(l||(l={}));var g=function(){function t(){var t=this;this.dialogMode=l.ConditionTypeListing,this.reset=function(e){t.hasConditionType?t.dialogMode=l.VariantListing:(t.dialogMode=l.ConditionTypeListing,t.selectedConditionType=null),t.selectedVariantIdentifier=null,t.variantParameters=null,t.variantName=null,e&&t.updatePositionDelayed()},this.selectConditionTypeHandler=function(e){e.stopPropagation(),t.selectedConditionType=e.detail.key,t.dialogMode=l.VariantConfiguration,t.updatePositionDelayed()},this.updatePosition=function(){return t.personalizationPopupPosition=p(t.thisElement.getBoundingClientRect())},this.updatePositionDelayed=function(){window.requestAnimationFrame(t.updatePosition)},this.closePersonalizationPopupHandler=function(e){e.stopPropagation(),t.closePersonalizationPopup.emit()},this.onAddVariantButtonClick=function(e){e.stopPropagation(),t.dialogMode=l.VariantConfiguration,t.updatePositionDelayed()},this.onEditVariantButtonClick=function(e){t.selectedVariantIdentifier=e.key,t.variantParameters=e.parameters,t.variantName=e.name,t.dialogMode=l.VariantConfiguration,t.updatePositionDelayed()},this.render=function(){return c("div",{class:"ktc-widget-header-personalization-wrapper"},c("div",{class:"ktc-widget-header-personalization"},c("a",{class:"ktc-widget-header-icon",title:t.personalizationTooltip,onClick:function(){return t.openPersonalizationPopup.emit()}},t.hasConditionType?c("i",{"aria-hidden":"true",class:"icon-personalisation-variants"}):c("i",{"aria-hidden":"true",class:"icon-personalisation"})),t.showPersonalizationPopup&&c("kentico-pop-up-container",{localizationService:t.localizationService,headerTitle:t.headerText,theme:n.Theme.Widget,showBackButton:t.dialogMode===l.VariantConfiguration,position:t.personalizationPopupPosition,onClick:function(t){return t.stopPropagation()},onClosePopup:t.closePersonalizationPopupHandler,onBackClick:t.reset.bind(t,!0)},c("div",{slot:"pop-up-content"},t.renderPopupContent()),t.dialogMode===l.VariantListing?c("div",{slot:"pop-up-footer",class:"ktc-popup-footer"},c("kentico-submit-button",{onButtonClick:t.onAddVariantButtonClick,buttonText:t.getString(t.localizationService,"variant.add"),buttonTooltip:t.getString(t.localizationService,"variant.addTooltip")})):null)))},this.renderPopupContent=function(){switch(t.dialogMode){case l.VariantListing:return c("div",null,c("div",{class:"ktc-pop-up-content-header"},t.variantListingContentHeaderText),c("kentico-variant-listing",{activeItemIdentifier:t.activeItemIdentifier,variants:t.popupItems,localizationService:t.localizationService,deleteVariant:t.deleteVariant,editVariant:t.onEditVariantButtonClick,selectVariant:t.selectVariant,changeVariantsPriority:t.changeVariantsPriority}));case l.ConditionTypeListing:return c("div",null,c("div",{class:"ktc-pop-up-content-header"},t.conditionTypeListingContentHeaderText),c("kentico-pop-up-listing",{activeItemIdentifier:t.activeItemIdentifier,items:t.popupItems,onSelectItem:t.selectConditionTypeHandler,singleColumn:!0}));case l.VariantConfiguration:var e=t.getString(t.localizationService,t.personalizationConditionTypes[t.currentConditionType].hint);return c("div",null,e&&c("div",{class:"ktc-pop-up-content-header"},e),c("kentico-personalization-configuration",{builderConfig:t.builderConfig,httpClient:t.httpClient,localizationService:t.localizationService,personalizationConditionTypes:t.personalizationConditionTypes,selectedConditionType:t.currentConditionType,variantIdentifier:t.selectedVariantIdentifier,variantName:t.variantName,variantParameters:t.variantParameters,configurationLoaded:t.updatePositionDelayed,addVariant:t.addVariant,updateVariant:t.updateVariant}))}}}return Object.defineProperty(t.prototype,"personalizationTooltip",{get:function(){return this.getString(this.localizationService,"widget.personalizeTooltip")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentConditionType",{get:function(){return this.selectedConditionType?this.selectedConditionType:this.conditionType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasConditionType",{get:function(){return!!this.conditionType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headerText",{get:function(){switch(this.dialogMode){case l.ConditionTypeListing:return this.getString(this.localizationService,"widget.conditiontypepopup.header");case l.VariantListing:return this.personalizationConditionTypes[this.currentConditionType].name;case l.VariantConfiguration:return this.getString(this.localizationService,this.selectedVariantIdentifier?"variant.edit":"variant.add")}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"conditionTypeListingContentHeaderText",{get:function(){return this.getString(this.localizationService,"widget.conditiontypepopup.conditiontypeheader")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"variantListingContentHeaderText",{get:function(){return this.getString(this.localizationService,"widget.conditiontypepopup.variantheader")},enumerable:!0,configurable:!0}),t.prototype.showPersonalizationPopupChanged=function(){this.reset(!1)},Object.defineProperty(t,"is",{get:function(){return"kentico-personalization-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeItemIdentifier:{type:String,attr:"active-item-identifier"},addVariant:{type:"Any",attr:"add-variant"},builderConfig:{type:"Any",attr:"builder-config"},changeVariantsPriority:{type:"Any",attr:"change-variants-priority"},conditionType:{type:String,attr:"condition-type"},deleteVariant:{type:"Any",attr:"delete-variant"},dialogMode:{state:!0},getString:{context:"getString"},httpClient:{type:"Any",attr:"http-client"},localizationService:{type:"Any",attr:"localization-service"},personalizationConditionTypes:{type:"Any",attr:"personalization-condition-types"},personalizationPopupPosition:{type:"Any",attr:"personalization-popup-position",mutable:!0},popupItems:{type:"Any",attr:"popup-items"},selectedConditionType:{state:!0},selectedVariantIdentifier:{state:!0},selectVariant:{type:"Any",attr:"select-variant"},showPersonalizationPopup:{type:Boolean,attr:"show-personalization-popup",watchCallbacks:["showPersonalizationPopupChanged"]},thisElement:{elementRef:!0},updateVariant:{type:"Any",attr:"update-variant"},variantName:{state:!0},variantParameters:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"openPersonalizationPopup",method:"openPersonalizationPopup",bubbles:!0,cancelable:!0,composed:!0},{name:"closePersonalizationPopup",method:"closePersonalizationPopup",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"[class*=\" icon-\"],[class^=icon-]{font-family:Core-icons;display:inline-block;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:none}[class^=icon-]:before{content:\"\\e619\"}.ktc-icon-only:before{content:none}kentico-personalization-button .ktc-widget-header-personalization-wrapper{position:relative}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization{display:inline-block}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization .ktc-widget-header-icon i{cursor:pointer;color:#fff;padding:8px 4px}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container{position:absolute;border-color:transparent transparent #0f6194;top:41px;left:50%;z-index:-1}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container:before{content:'';display:block;position:absolute;left:50%;margin-left:-10px;width:0;height:0;top:-20px;pointer-events:none;border:10px solid;border-color:inherit}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container[position=center]{-webkit-transform:translateX(-50%);transform:translateX(-50%)}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container[position=left]{-webkit-transform:translateX(-100%) translateX(18px);transform:translateX(-100%) translateX(18px)}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container[position=left]:before{left:calc(100% - 18px)}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container[position=right]{-webkit-transform:translateX(-18px);transform:translateX(-18px)}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization kentico-pop-up-container[position=right]:before{left:18px}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization .icon-personalisation:before{content:\"\\e900\"}kentico-personalization-button .ktc-widget-header-personalization-wrapper .ktc-widget-header-personalization .icon-personalisation-variants:before{content:\"\\e901\"}"},enumerable:!0,configurable:!0}),t}(),f={insertItemIntoArray:function(t,e,n){return n>t.length||n<0?t:t.slice(0,n).concat([e],t.slice(n))},replaceItem:function(t,e,n){return!t.length||n>t.length||n<0?t:t.slice(0,n).concat([e],t.slice(n+1))},removeItem:function(t,e){return e>t.length||e<0?t:t.slice(0,e).concat(t.slice(e+1))},moveItemBetweenArrays:function(t,e,n,i){void 0===i&&(i=null);var o=null===i?t.length-1:i.length;if(n<0||n>o)throw new RangeError("The [position] argument is invalid.");if(!f.contains(t,e))throw new Error("The [item] was not found in [sourceArray].");var r=t.filter(function(t){return t!==e});return null===i?{sourceArray:f.insertItemIntoArray(r,e,n),destinationArray:null}:{sourceArray:r,destinationArray:f.insertItemIntoArray(i,e,n)}},getUniqueValues:function(t,e){return void 0===e&&(e=function(t){return t}),new Set(t.map(e)).slice()},contains:function(t,e){return t.indexOf(e)>=0},move:function(t,e,n){return t.splice(n,0,t.splice(e,1)[0]),t}},h=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n},y=function(){function t(){var t=this;this.variantNamePropertyName="variantName",this.externalScriptIdentifier="ktc-personalization-configuration-script",this.logError=function(e){var n=new Error(t.getString(t.localizationService,e));i.logger.logExceptionWithMessage(n,t.getString(t.localizationService,"errors.generalerror"))},this.getConditionMarkup=function(){return __awaiter(t,void 0,void 0,function(){var t,e,n,o,r,a,s;return __generator(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),e=this.personalizationConditionTypes[this.selectedConditionType].markupUrl,n=this.variantParameters||{},o=this.builderConfig.getComponentMarkupData(Object.assign({},n,((t={})[this.variantNamePropertyName]=this.variantName,t))),[4,this.httpClient.post(e,o)];case 1:return r=c.sent(),this.configurationMarkup=this.ensureStyles(r.data,this.hostElement.nodeName),[3,3];case 2:return a=c.sent(),s=this.getString(this.localizationService,"errors.generalerror"),this.configurationMarkup='<div class="ktc-variant-configuration-error">'+s+"</div>",i.logger.logExceptionWithMessage(a,s),[3,3];case 3:return[2]}})})},this.renderNewMarkup=function(){i.renderMarkup(t.configurationMarkup,t.configurationElement,t.externalScriptIdentifier),t.configurationForm=t.configurationElement.getElementsByTagName("form")[0],t.configurationForm?(t.configurationForm.addEventListener("submit",t.onSubmit),t.configurationLoaded&&t.configurationLoaded()):t.logError("conditiontype.missingConfigForm")},this.onSubmit=function(e){return __awaiter(t,void 0,void 0,function(){var t,n,o,r,a,s,c;return __generator(this,function(l){switch(l.label){case 0:if(e.preventDefault(),!this.configurationForm)return this.logError("conditiontype.missingConfigForm"),[2];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,this.httpClient.post(this.configurationForm.action,new FormData(this.configurationForm))];case 2:return t=l.sent(),[3,4];case 3:return n=l.sent(),i.logger.logExceptionWithMessage(n,this.getString(this.localizationService,"errors.generalerror")),[2];case 4:return f.contains(t.headers["content-type"],"text/html")?(this.configurationMarkup=this.ensureStyles(t.data,this.hostElement.nodeName),i.removeScriptElements(this.externalScriptIdentifier),this.renderNewMarkup(),[2]):f.contains(t.headers["content-type"],"application/json")?(o=t.data,r=this.variantNamePropertyName,a=o[r],s=h(o,["symbol"==typeof r?r:r+""]),a?(c=a.trim(),this.variantIdentifier?this.updateVariant(c,s,this.variantIdentifier):this.addVariant(c,this.selectedConditionType,s)):this.logError("conditiontype.missingVariantName"),[2]):(this.logError("conditiontype.wrongFormPostResponse"),[2])}})})},this.render=function(){return c("div",{class:"ktc-variant-configuration ktc-form-wrapper"},c("div",{ref:function(e){return t.configurationElement=e},class:"ktc-form"}),c("div",{class:"ktc-configuration-footer"},c("kentico-submit-button",{onButtonClick:t.onSubmit,buttonText:t.buttonText,buttonTooltip:t.buttonTooltip})))}}return Object.defineProperty(t.prototype,"buttonText",{get:function(){var t=this.variantIdentifier?"variant.apply":"variant.add";return this.getString(this.localizationService,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buttonTooltip",{get:function(){var t=this.variantIdentifier?"variant.applyTooltip":"variant.addTooltip";return this.getString(this.localizationService,t)},enumerable:!0,configurable:!0}),t.prototype.componentWillLoad=function(){return this.getConditionMarkup()},t.prototype.componentDidLoad=function(){this.renderNewMarkup()},t.prototype.componentDidUnload=function(){i.removeScriptElements(this.externalScriptIdentifier)},Object.defineProperty(t,"is",{get:function(){return"kentico-personalization-configuration"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{addVariant:{type:"Any",attr:"add-variant"},builderConfig:{type:"Any",attr:"builder-config"},configurationLoaded:{type:"Any",attr:"configuration-loaded"},ensureStyles:{context:"ensureStyles"},getString:{context:"getString"},hostElement:{elementRef:!0},httpClient:{type:"Any",attr:"http-client"},localizationService:{type:"Any",attr:"localization-service"},personalizationConditionTypes:{type:"Any",attr:"personalization-condition-types"},selectedConditionType:{type:String,attr:"selected-condition-type"},updateVariant:{type:"Any",attr:"update-variant"},variantIdentifier:{type:String,attr:"variant-identifier"},variantName:{type:String,attr:"variant-name"},variantParameters:{type:"Any",attr:"variant-parameters"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"kentico-personalization-configuration .ktc-checkbox input:disabled+input[type=hidden]+label:before{content:\"\\e6f0\"}kentico-personalization-configuration .ktc-checkbox input:checked+input[type=hidden]+label::after{content:\"\\e6b0\"}kentico-personalization-configuration .ktc-variant-configuration{padding-top:8px}kentico-personalization-configuration .ktc-variant-configuration .ktc-variant-configuration-error{color:#d12127}kentico-personalization-configuration .ktc-variant-configuration .ktc-configuration-footer{background-color:#fff;min-height:57.6px}kentico-personalization-configuration .ktc-variant-configuration .ktc-configuration-footer::before{content:'';border-bottom:1px solid #d6d9d6;width:100%;display:block;padding-top:8px}kentico-personalization-configuration .ktc-variant-configuration .ktc-configuration-footer kentico-submit-button{float:right;margin-top:8px}"},enumerable:!0,configurable:!0}),t}();t.KenticoPersonalizationButton=g,t.KenticoPersonalizationConfiguration=y,Object.defineProperty(t,"__esModule",{value:!0})});