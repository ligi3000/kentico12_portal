/*! Built with http://stenciljs.com */
components.loadBundle("chunk-e5d72975.js",["exports","./chunk-60b77363.js","./chunk-b1e25892.js"],function(n,o,e){window.components.h;var s=window.kentico=window.kentico||{},i=s._confirmDialog=s._confirmDialog||{};n.confirm=function(n){return new Promise(function(s){i.resolve=s,o.postMessage(e.MessageTypes.CONFIRM,{message:n},"*")})}});