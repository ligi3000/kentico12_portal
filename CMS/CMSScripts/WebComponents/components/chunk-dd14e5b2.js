/*! Built with http://stenciljs.com */
const{h:e}=window.components;import{a as t}from"./chunk-d01dc526.js";import{b as r,c as o}from"./chunk-1df0e24b.js";for(var n=[],c=0;c<256;++c)n[c]=(c+256).toString(16).substr(1);const l={logError:e=>{t(r.MESSAGING_ERROR,e,"*")},logException:e=>{console.error(e),t(r.MESSAGING_EXCEPTION,(e=>null.get(e))(o.LocalizationService).getLocalization("errors.generalerror"),"*")},logExceptionWithMessage:(e,o)=>{console.error(e),t(r.MESSAGING_EXCEPTION,o,"*")},logWarning:e=>{t(r.MESSAGING_WARNING,e,"*")}},s=(e,t,r)=>{t.innerHTML=e;const o=t.querySelectorAll("script");Array.prototype.forEach.call(o,e=>{const t=e.parentNode,o=document.createElement("script");try{e.src?(o.classList.add("ktc-tmp-element"),o.classList.add(r),o.src=e.src,o.type=e.type,document.head.appendChild(o)):(o.innerHTML=e.innerHTML,t.replaceChild(o,e)),e.remove()}catch(e){l.logException(e)}})},i=e=>{const t=document.head.querySelectorAll(`.${e}`);Array.prototype.forEach.call(t,e=>{e.remove()})},a=(e,t)=>{const r=e.innerHTML,o="…",n=[".","-","–","—"," ","_"].slice(0);let c,l,s=n[0];const i=(t,p)=>{const d=r.replace(o,"");if(c||(s=n.length>0?n.shift():"",c=d.split(s)),c.length>1?(l=c.pop(),a(t,c.join(s))):c=null,c&&e.clientHeight<=p){if(""===s)return;a(t,c.join(s)+s+l),c=null}i(t,p)};function a(e,t){e.innerHTML=t+o}const p=parseInt(getComputedStyle(e).getPropertyValue("line-height"),10)*t;p<e.clientHeight&&i(e,p)};export{i as a,s as b,a as c,l as d};