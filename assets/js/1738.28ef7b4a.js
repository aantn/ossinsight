(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[1738],{95537:function(t,r,e){"use strict";var n=e(88169),i=e(85893);r.Z=(0,n.Z)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},86886:function(t,r,e){"use strict";e.d(r,{ZP:function(){return k}});var n=e(63366),i=e(87462),o=e(67294),a=e(86010),s=e(95408),c=e(39707),u=e(94780),l=e(90948),f=e(71657);var p=o.createContext(),d=e(34867);function g(t){return(0,d.Z)("MuiGrid",t)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var m=(0,e(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((t=>`spacing-xs-${t}`)),...["column-reverse","column","row-reverse","row"].map((t=>`direction-xs-${t}`)),...["nowrap","wrap-reverse","wrap"].map((t=>`wrap-xs-${t}`)),...h.map((t=>`grid-xs-${t}`)),...h.map((t=>`grid-sm-${t}`)),...h.map((t=>`grid-md-${t}`)),...h.map((t=>`grid-lg-${t}`)),...h.map((t=>`grid-xl-${t}`))]),v=e(85893);const b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function x(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function w(t,r,e={}){if(!r||!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[e[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`];const{xs:n,sm:i,md:o,lg:a,xl:s}=t;return[Number(n)>0&&(e[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(i)>0&&(e[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(e[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(e[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(e[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const y=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{container:e,direction:n,item:i,lg:o,md:a,sm:s,spacing:c,wrap:u,xl:l,xs:f,zeroMinWidth:p}=t.ownerState;return[r.root,e&&r.container,i&&r.item,p&&r.zeroMinWidth,...w(c,e,r),"row"!==n&&r[`direction-xs-${String(n)}`],"wrap"!==u&&r[`wrap-xs-${String(u)}`],!1!==f&&r[`grid-xs-${String(f)}`],!1!==s&&r[`grid-sm-${String(s)}`],!1!==a&&r[`grid-md-${String(a)}`],!1!==o&&r[`grid-lg-${String(o)}`],!1!==l&&r[`grid-xl-${String(l)}`]]}})((({ownerState:t})=>(0,i.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})),(function({theme:t,ownerState:r}){const e=(0,s.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,s.k9)({theme:t},e,(t=>{const r={flexDirection:t};return 0===t.indexOf("column")&&(r[`& > .${m.item}`]={maxWidth:"none"}),r}))}),(function({theme:t,ownerState:r}){const{container:e,rowSpacing:n}=r;let i={};if(e&&0!==n){const r=(0,s.P$)({values:n,breakpoints:t.breakpoints.values});i=(0,s.k9)({theme:t},r,(r=>{const e=t.spacing(r);return"0px"!==e?{marginTop:`-${x(e)}`,[`& > .${m.item}`]:{paddingTop:x(e)}}:{}}))}return i}),(function({theme:t,ownerState:r}){const{container:e,columnSpacing:n}=r;let i={};if(e&&0!==n){const r=(0,s.P$)({values:n,breakpoints:t.breakpoints.values});i=(0,s.k9)({theme:t},r,(r=>{const e=t.spacing(r);return"0px"!==e?{width:`calc(100% + ${x(e)})`,marginLeft:`-${x(e)}`,[`& > .${m.item}`]:{paddingLeft:x(e)}}:{}}))}return i}),(function({theme:t,ownerState:r}){let e;return t.breakpoints.keys.reduce(((n,o)=>{let a={};if(r[o]&&(e=r[o]),!e)return n;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:r.columns,breakpoints:t.breakpoints.values}),u="object"==typeof c?c[o]:c;if(null==u)return n;const l=Math.round(e/u*1e8)/1e6+"%";let f={};if(r.container&&r.item&&0!==r.columnSpacing){const e=t.spacing(r.columnSpacing);if("0px"!==e){const t=`calc(${l} + ${x(e)})`;f={flexBasis:t,maxWidth:t}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},f)}return 0===t.breakpoints.values[o]?Object.assign(n,a):n[t.breakpoints.up(o)]=a,n}),{})}));var k=o.forwardRef((function(t,r){const e=(0,f.Z)({props:t,name:"MuiGrid"}),s=(0,c.Z)(e),{className:l,columns:d,columnSpacing:h,component:m="div",container:x=!1,direction:k="row",item:S=!1,lg:A=!1,md:M=!1,rowSpacing:$,sm:T=!1,spacing:j=0,wrap:O="wrap",xl:z=!1,xs:I=!1,zeroMinWidth:E=!1}=s,B=(0,n.Z)(s,b),C=$||j,_=h||j,N=o.useContext(p),W=x?d||12:N,P=(0,i.Z)({},s,{columns:W,container:x,direction:k,item:S,lg:A,md:M,sm:T,rowSpacing:C,columnSpacing:_,wrap:O,xl:z,xs:I,zeroMinWidth:E}),D=(t=>{const{classes:r,container:e,direction:n,item:i,lg:o,md:a,sm:s,spacing:c,wrap:l,xl:f,xs:p,zeroMinWidth:d}=t,h={root:["root",e&&"container",i&&"item",d&&"zeroMinWidth",...w(c,e),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==f&&`grid-xl-${String(f)}`]};return(0,u.Z)(h,g,r)})(P);return(0,v.jsx)(p.Provider,{value:W,children:(0,v.jsx)(y,(0,i.Z)({ownerState:P,className:(0,a.Z)(D.root,l),as:m,ref:r},B))})}))},32667:function(t,r,e){var n=e(9950),i=e(25419);e(17381);function o(t){return null==t}function a(t){(t=function(t){var r={};for(var e in t)r[e]=t[e];return r}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var r=this.options,e=r.whiteList,n=r.onAttr,a=r.onIgnoreAttr,s=r.safeAttrValue;return i(t,(function(t,r,i,c,u){var l=e[i],f=!1;if(!0===l?f=l:"function"==typeof l?f=l(c):l instanceof RegExp&&(f=l.test(c)),!0!==f&&(f=!1),c=s(i,c)){var p,d={position:r,sourcePosition:t,source:u,isWhite:f};return f?o(p=n(i,c,d))?i+":"+c:p:o(p=a(i,c,d))?void 0:p}}))},t.exports=a},9950:function(t,r){function e(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var n=/javascript\s*\:/gim;r.whiteList=e(),r.getDefaultWhiteList=e,r.onAttr=function(t,r,e){},r.onIgnoreAttr=function(t,r,e){},r.safeAttrValue=function(t,r){return n.test(r)?"":r}},29970:function(t,r,e){var n=e(9950),i=e(32667);for(var o in(r=t.exports=function(t,r){return new i(r).process(t)}).FilterCSS=i,n)r[o]=n[o];"undefined"!=typeof window&&(window.filterCSS=t.exports)},25419:function(t,r,e){var n=e(17381);t.exports=function(t,r){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var e=t.length,i=!1,o=0,a=0,s="";function c(){if(!i){var e=n.trim(t.slice(o,a)),c=e.indexOf(":");if(-1!==c){var u=n.trim(e.slice(0,c)),l=n.trim(e.slice(c+1));if(u){var f=r(o,s.length,u,l,e);f&&(s+=f+"; ")}}}o=a+1}for(;a<e;a++){var u=t[a];if("/"===u&&"*"===t[a+1]){var l=t.indexOf("*/",a+2);if(-1===l)break;o=(a=l+1)+1,i=!1}else"("===u?i=!0:")"===u?i=!1:";"===u?i||c():"\n"===u&&c()}return n.trim(s)}},17381:function(t){t.exports={indexOf:function(t,r){var e,n;if(Array.prototype.indexOf)return t.indexOf(r);for(e=0,n=t.length;e<n;e++)if(t[e]===r)return e;return-1},forEach:function(t,r,e){var n,i;if(Array.prototype.forEach)return t.forEach(r,e);for(n=0,i=t.length;n<i;n++)r.call(e,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},9996:function(t){"use strict";var r=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var r=Object.prototype.toString.call(t);return"[object RegExp]"===r||"[object Date]"===r||function(t){return t.$$typeof===e}(t)}(t)};var e="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,r){return!1!==r.clone&&r.isMergeableObject(t)?c((e=t,Array.isArray(e)?[]:{}),t,r):t;var e}function i(t,r,e){return t.concat(r).map((function(t){return n(t,e)}))}function o(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(r){return t.propertyIsEnumerable(r)})):[]}(t))}function a(t,r){try{return r in t}catch(e){return!1}}function s(t,r,e){var i={};return e.isMergeableObject(t)&&o(t).forEach((function(r){i[r]=n(t[r],e)})),o(r).forEach((function(o){(function(t,r){return a(t,r)&&!(Object.hasOwnProperty.call(t,r)&&Object.propertyIsEnumerable.call(t,r))})(t,o)||(a(t,o)&&e.isMergeableObject(r[o])?i[o]=function(t,r){if(!r.customMerge)return c;var e=r.customMerge(t);return"function"==typeof e?e:c}(o,e)(t[o],r[o],e):i[o]=n(r[o],e))})),i}function c(t,e,o){(o=o||{}).arrayMerge=o.arrayMerge||i,o.isMergeableObject=o.isMergeableObject||r,o.cloneUnlessOtherwiseSpecified=n;var a=Array.isArray(e);return a===Array.isArray(t)?a?o.arrayMerge(t,e,o):s(t,e,o):n(e,o)}c.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,e){return c(t,e,r)}),{})};var u=c;t.exports=u},31486:function(t,r){var e,n,i;n=[],e=function(){"use strict";function t(t,r){var e,n,i;for(e=1,n=arguments.length;e<n;++e)if(null!=(r=arguments[e]))for(i in r)s(r,i)&&(t[i]=r[i]);return t}function r(t,r){return r.length-t.length}function e(t,r){return t.factor-r.factor}function n(t){return t.replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")}function i(t,r){var e,n;for(e=0,n=t.length;e<n;++e)r(t[e],e)}function o(t,r){var e;for(e in t)s(t,e)&&r(t[e],e)}var a,s=(a=Object.prototype.hasOwnProperty,function(t,r){return null!=t&&a.call(t,r)});function c(t,r){for(;"string"==typeof r;)r=t[r];return r}function u(t){this._prefixes=t;var i=[],a=[];o(t,(function(t,r){i.push(n(r)),a.push({factor:t,prefix:r})}));var c=this._lcPrefixes={};o(t,(function(r,e){var n=e.toLowerCase();s(t,n)||(c[n]=e)})),a.sort(e),this._list=a,i.sort(r),this._regexp=new RegExp("^\\s*(-)?\\s*(\\d+(?:\\.\\d+)?)\\s*("+i.join("|")+")\\s*(.*)\\s*?$","i")}u.create=function(t,r,e){var n={};return void 0===e&&(e=0),i(t,(function(t,i){n[t]=Math.pow(r,i+e)})),new u(n)},u.prototype.findPrefix=function(t){for(var r,e=this._list,n=0,i=e.length-1;n!==i;)e[r=n+i+1>>1].factor>t?i=r-1:n=r;return e[n]},u.prototype.parse=function(t,r){var e=t.match(this._regexp);if(null!==e){var n,i=e[3];if(s(this._prefixes,i))n=this._prefixes[i];else{if(r||(i=i.toLowerCase(),!s(this._lcPrefixes,i)))return;i=this._lcPrefixes[i],n=this._prefixes[i]}var o=+e[2];return void 0!==e[1]&&(o=-o),{factor:n,prefix:i,unit:e[4],value:o}}};var l={binary:u.create(",Ki,Mi,Gi,Ti,Pi,Ei,Zi,Yi".split(","),1024),SI:u.create("y,z,a,f,p,n,\xb5,m,,k,M,G,T,P,E,Z,Y".split(","),1e3,-8)},f={maxDecimals:2,separator:" ",unit:""},p={scale:"SI",strict:!1};function d(r,e){var n=(e=t({},f,e)).decimals;void 0!==n&&delete e.maxDecimals;var i=b(r,e);r=void 0!==n?i.value.toFixed(n):String(i.value);var o=i.prefix+e.unit;return""===o?r:r+e.separator+o}var g={scale:"binary",unit:"B"};function h(r,e){return d(r,void 0===e?g:t({},g,e))}function m(t,r){var e=v(t,r);return e.value*e.factor}function v(r,e){if("string"!=typeof r)throw new TypeError("str must be a string");e=t({},p,e);var n=c(l,e.scale);if(void 0===n)throw new Error("missing scale");var i=n.parse(r,e.strict);if(void 0===i)throw new Error("cannot parse str");return i}function b(r,e){if(0===r)return{value:0,prefix:""};if(r<0){var n=b(-r,e);return n.value=-n.value,n}if("number"!=typeof r||Number.isNaN(r))throw new TypeError("value must be a number");e=t({},p,e);var i,o=c(l,e.scale);if(void 0===o)throw new Error("missing scale");var a=e.maxDecimals,u="auto"===a;u?i=10:void 0!==a&&(i=Math.pow(10,a));var f,d=e.prefix;if(void 0!==d){if(!s(o._prefixes,d))throw new Error("invalid prefix");f=o._prefixes[d]}else{var g=o.findPrefix(r);if(void 0!==i)do{var h=(f=g.factor)/i;r=Math.round(r/h)*h}while((g=o.findPrefix(r)).factor!==f);else f=g.factor;d=g.prefix}return r=void 0===i?r/f:Math.round(r*i/f)/i,u&&Math.abs(r)>=10&&(r=Math.round(r)),{prefix:d,value:r}}return d.bytes=h,d.parse=m,m.raw=v,d.raw=b,d.Scale=u,d},void 0===(i="function"==typeof e?e.apply(r,n):e)||(t.exports=i)},51455:function(t){"use strict";t.exports=t=>{if("number"!=typeof t)throw new TypeError("Expected a number");const r=t>0?Math.floor:Math.ceil;return{days:r(t/864e5),hours:r(t/36e5)%24,minutes:r(t/6e4)%60,seconds:r(t/1e3)%60,milliseconds:r(t)%1e3,microseconds:r(1e3*t)%1e3,nanoseconds:r(1e6*t)%1e3}}},73258:function(t,r,e){"use strict";const n=e(51455);t.exports=(t,r={})=>{if(!Number.isFinite(t))throw new TypeError("Expected a finite number");r.colonNotation&&(r.compact=!1,r.formatSubMilliseconds=!1,r.separateMilliseconds=!1,r.verbose=!1),r.compact&&(r.secondsDecimalDigits=0,r.millisecondsDecimalDigits=0);const e=[],i=(t,n,i,o)=>{if(!(0!==e.length&&r.colonNotation||0!==t||r.colonNotation&&"m"===i))return;let a,s;if(o=(o||t||"0").toString(),r.colonNotation){a=e.length>0?":":"",s="";const t=o.includes(".")?o.split(".")[0].length:o.length,r=e.length>0?2:1;o="0".repeat(Math.max(0,r-t))+o}else a="",s=r.verbose?" "+(c=n,1===t?c:`${c}s`):i;var c;e.push(a+o+s)},o=n(t);if(i(Math.trunc(o.days/365),"year","y"),i(o.days%365,"day","d"),i(o.hours,"hour","h"),i(o.minutes,"minute","m"),r.separateMilliseconds||r.formatSubMilliseconds||!r.colonNotation&&t<1e3)if(i(o.seconds,"second","s"),r.formatSubMilliseconds)i(o.milliseconds,"millisecond","ms"),i(o.microseconds,"microsecond","\xb5s"),i(o.nanoseconds,"nanosecond","ns");else{const t=o.milliseconds+o.microseconds/1e3+o.nanoseconds/1e6,e="number"==typeof r.millisecondsDecimalDigits?r.millisecondsDecimalDigits:0,n=t>=1?Math.round(t):Math.ceil(t),a=e?t.toFixed(e):n;i(Number.parseFloat(a,10),"millisecond","ms",a)}else{const e=((t,r)=>{const e=Math.floor(t*10**r+1e-7);return(Math.round(e)/10**r).toFixed(r)})(t/1e3%60,"number"==typeof r.secondsDecimalDigits?r.secondsDecimalDigits:1),n=r.keepDecimalsOnWholeSeconds?e:e.replace(/\.0+$/,"");i(Number.parseFloat(n,10),"second","s",n)}if(0===e.length)return"0"+(r.verbose?" milliseconds":"ms");if(r.compact)return e[0];if("number"==typeof r.unitCount){const t=r.colonNotation?"":" ";return e.slice(0,Math.max(r.unitCount,1)).join(t)}return r.colonNotation?e.join(""):e.join(" ")}},9701:function(t,r,e){"use strict";var n=e(67294);function i(){return i=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},i.apply(this,arguments)}var o=function(t){var r=(0,n.useRef)(t);return r.current=t,r};r.ZP=function(t){var r=void 0===t?{}:t,e=r.useBorderBoxSize,a=r.breakpoints,s=r.updateOnBreakpointChange,c=r.shouldUpdate,u=r.onResize,l=r.polyfill,f=(0,n.useState)({currentBreakpoint:"",width:0,height:0}),p=f[0],d=f[1],g=(0,n.useRef)({}),h=(0,n.useRef)(),m=(0,n.useRef)(),v=(0,n.useRef)(!1),b=(0,n.useRef)(),x=o(u),w=o(c),y=(0,n.useCallback)((function(){m.current&&m.current.disconnect()}),[]),k=(0,n.useCallback)((function(t){t&&t!==b.current&&(y(),b.current=t),m.current&&b.current&&m.current.observe(b.current)}),[y]);return(0,n.useEffect)((function(){if(!("ResizeObserver"in window&&"ResizeObserverEntry"in window||l))return console.error("\ud83d\udca1 react-cool-dimensions: the browser doesn't support Resize Observer, please use polyfill: https://github.com/wellyshen/react-cool-dimensions#resizeobserver-polyfill"),function(){return null};var t=null;return m.current=new(l||ResizeObserver)((function(r){var n=r[0];t=requestAnimationFrame((function(){var t=n.contentBoxSize,r=n.borderBoxSize,i=n.contentRect,o=t;e&&(r?o=r:v.current||(console.warn("\ud83d\udca1 react-cool-dimensions: the browser doesn't support border-box size, fallback to content-box size. Please see: https://github.com/wellyshen/react-cool-dimensions#border-box-size-measurement"),v.current=!0));var c=(o=Array.isArray(o)?o[0]:o)?o.inlineSize:i.width,u=o?o.blockSize:i.height;if(c!==g.current.width||u!==g.current.height){g.current={width:c,height:u};var l,f,p,m,b={currentBreakpoint:"",width:c,height:u,entry:n,observe:k,unobserve:y};a?(b.currentBreakpoint=(l=a,f=c,p="",m=-1,Object.keys(l).forEach((function(t){var r=l[t];f>=r&&r>m&&(p=t,m=r)})),p),b.currentBreakpoint!==h.current&&(x.current&&x.current(b),h.current=b.currentBreakpoint)):x.current&&x.current(b);var S={currentBreakpoint:b.currentBreakpoint,width:c,height:u,entry:n};w.current&&!w.current(S)||(!w.current&&a&&s?d((function(t){return t.currentBreakpoint!==S.currentBreakpoint?S:t})):d(S))}}))})),k(),function(){y(),t&&cancelAnimationFrame(t)}}),[JSON.stringify(a),e,k,y,s]),i({},p,{observe:k,unobserve:y})}},82302:function(t,r,e){var n=e(29970).FilterCSS,i=e(29970).getDefaultWhiteList,o=e(75938);function a(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var s=new n;function c(t){return t.replace(u,"&lt;").replace(l,"&gt;")}var u=/</g,l=/>/g,f=/"/g,p=/&quot;/g,d=/&#([a-zA-Z0-9]*);?/gim,g=/&colon;?/gim,h=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,v=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function x(t){return t.replace(f,"&quot;")}function w(t){return t.replace(p,'"')}function y(t){return t.replace(d,(function(t,r){return"x"===r[0]||"X"===r[0]?String.fromCharCode(parseInt(r.substr(1),16)):String.fromCharCode(parseInt(r,10))}))}function k(t){return t.replace(g,":").replace(h," ")}function S(t){for(var r="",e=0,n=t.length;e<n;e++)r+=t.charCodeAt(e)<32?" ":t.charAt(e);return o.trim(r)}function A(t){return t=S(t=k(t=y(t=w(t))))}function M(t){return t=c(t=x(t))}r.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},r.getDefaultWhiteList=a,r.onTag=function(t,r,e){},r.onIgnoreTag=function(t,r,e){},r.onTagAttr=function(t,r,e){},r.onIgnoreTagAttr=function(t,r,e){},r.safeAttrValue=function(t,r,e,n){if(e=A(e),"href"===r||"src"===r){if("#"===(e=o.trim(e)))return"#";if("http://"!==e.substr(0,7)&&"https://"!==e.substr(0,8)&&"mailto:"!==e.substr(0,7)&&"tel:"!==e.substr(0,4)&&"data:image/"!==e.substr(0,11)&&"ftp://"!==e.substr(0,6)&&"./"!==e.substr(0,2)&&"../"!==e.substr(0,3)&&"#"!==e[0]&&"/"!==e[0])return""}else if("background"===r){if(m.lastIndex=0,m.test(e))return""}else if("style"===r){if(v.lastIndex=0,v.test(e))return"";if(b.lastIndex=0,b.test(e)&&(m.lastIndex=0,m.test(e)))return"";!1!==n&&(e=(n=n||s).process(e))}return e=M(e)},r.escapeHtml=c,r.escapeQuote=x,r.unescapeQuote=w,r.escapeHtmlEntities=y,r.escapeDangerHtml5Entities=k,r.clearNonPrintableCharacter=S,r.friendlyAttrValue=A,r.escapeAttrValue=M,r.onIgnoreTagStripAll=function(){return""},r.StripTagBody=function(t,r){"function"!=typeof r&&(r=function(){});var e=!Array.isArray(t),n=[],i=!1;return{onIgnoreTag:function(a,s,c){if(function(r){return!!e||-1!==o.indexOf(t,r)}(a)){if(c.isClosing){var u="[/removed]",l=c.position+u.length;return n.push([!1!==i?i:c.position,l]),i=!1,u}return i||(i=c.position),"[removed]"}return r(a,s,c)},remove:function(t){var r="",e=0;return o.forEach(n,(function(n){r+=t.slice(e,n[0]),e=n[1]})),r+=t.slice(e)}}},r.stripCommentTag=function(t){for(var r="",e=0;e<t.length;){var n=t.indexOf("\x3c!--",e);if(-1===n){r+=t.slice(e);break}r+=t.slice(e,n);var i=t.indexOf("--\x3e",n);if(-1===i)break;e=i+3}return r},r.stripBlankChar=function(t){var r=t.split("");return(r=r.filter((function(t){var r=t.charCodeAt(0);return 127!==r&&(!(r<=31)||(10===r||13===r))}))).join("")},r.cssFilter=s,r.getDefaultCSSWhiteList=i},68924:function(t,r,e){var n=e(82302),i=e(73268),o=e(82973);function a(t,r){return new o(r).process(t)}for(var s in(r=t.exports=a).filterXSS=a,r.FilterXSS=o,n)r[s]=n[s];for(var s in i)r[s]=i[s];"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},73268:function(t,r,e){var n=e(75938);function i(t){var r=n.spaceIndex(t);if(-1===r)var e=t.slice(1,-1);else e=t.slice(1,r+1);return"/"===(e=n.trim(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}function o(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(t,r){for(;r<t.length;r++){var e=t[r];if(" "!==e)return"="===e?r:-1}}function c(t,r){for(;r>0;r--){var e=t[r];if(" "!==e)return"="===e?r:-1}}function u(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}r.parseTag=function(t,r,e){"use strict";var n="",a=0,s=!1,c=!1,u=0,l=t.length,f="",p="";t:for(u=0;u<l;u++){var d=t.charAt(u);if(!1===s){if("<"===d){s=u;continue}}else if(!1===c){if("<"===d){n+=e(t.slice(a,u)),s=u,a=u;continue}if(">"===d){n+=e(t.slice(a,s)),f=i(p=t.slice(s,u+1)),n+=r(s,n.length,f,p,o(p)),a=u+1,s=!1;continue}if('"'===d||"'"===d)for(var g=1,h=t.charAt(u-g);""===h.trim()||"="===h;){if("="===h){c=d;continue t}h=t.charAt(u-++g)}}else if(d===c){c=!1;continue}}return a<t.length&&(n+=e(t.substr(a))),n},r.parseAttr=function(t,r){"use strict";var e=0,i=[],o=!1,l=t.length;function f(t,e){if(!((t=(t=n.trim(t)).replace(a,"").toLowerCase()).length<1)){var o=r(t,e||"");o&&i.push(o)}}for(var p=0;p<l;p++){var d,g=t.charAt(p);if(!1!==o||"="!==g)if(!1===o||p!==e||'"'!==g&&"'"!==g||"="!==t.charAt(p-1))if(/\s|\n|\t/.test(g)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(d=s(t,p))){f(n.trim(t.slice(e,p))),o=!1,e=p+1;continue}p=d-1;continue}if(-1===(d=c(t,p-1))){f(o,u(n.trim(t.slice(e,p)))),o=!1,e=p+1;continue}}else;else{if(-1===(d=t.indexOf(g,p+1)))break;f(o,n.trim(t.slice(e+1,d))),o=!1,e=(p=d)+1}else o=t.slice(e,p),e=p+1}return e<t.length&&(!1===o?f(t.slice(e)):f(o,u(n.trim(t.slice(e))))),n.trim(i.join(" "))}},75938:function(t){t.exports={indexOf:function(t,r){var e,n;if(Array.prototype.indexOf)return t.indexOf(r);for(e=0,n=t.length;e<n;e++)if(t[e]===r)return e;return-1},forEach:function(t,r,e){var n,i;if(Array.prototype.forEach)return t.forEach(r,e);for(n=0,i=t.length;n<i;n++)r.call(e,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var r=/\s|\n|\t/.exec(t);return r?r.index:-1}}},82973:function(t,r,e){var n=e(29970).FilterCSS,i=e(82302),o=e(73268),a=o.parseTag,s=o.parseAttr,c=e(75938);function u(t){return null==t}function l(t){(t=function(t){var r={};for(var e in t)r[e]=t[e];return r}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=i.onIgnoreTagStripAll),t.whiteList=t.whiteList||t.allowList||i.whiteList,t.onTag=t.onTag||i.onTag,t.onTagAttr=t.onTagAttr||i.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||i.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||i.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||i.safeAttrValue,t.escapeHtml=t.escapeHtml||i.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}l.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var r=this.options,e=r.whiteList,n=r.onTag,o=r.onIgnoreTag,l=r.onTagAttr,f=r.onIgnoreTagAttr,p=r.safeAttrValue,d=r.escapeHtml,g=this.cssFilter;r.stripBlankChar&&(t=i.stripBlankChar(t)),r.allowCommentTag||(t=i.stripCommentTag(t));var h=!1;if(r.stripIgnoreTagBody){h=i.StripTagBody(r.stripIgnoreTagBody,o);o=h.onIgnoreTag}var m=a(t,(function(t,r,i,a,h){var m,v={sourcePosition:t,position:r,isClosing:h,isWhite:e.hasOwnProperty(i)};if(!u(m=n(i,a,v)))return m;if(v.isWhite){if(v.isClosing)return"</"+i+">";var b=function(t){var r=c.spaceIndex(t);if(-1===r)return{html:"",closing:"/"===t[t.length-2]};var e="/"===(t=c.trim(t.slice(r+1,-1)))[t.length-1];return e&&(t=c.trim(t.slice(0,-1))),{html:t,closing:e}}(a),x=e[i],w=s(b.html,(function(t,r){var e,n=-1!==c.indexOf(x,t);return u(e=l(i,t,r,n))?n?(r=p(i,t,r,g))?t+'="'+r+'"':t:u(e=f(i,t,r,n))?void 0:e:e}));a="<"+i;return w&&(a+=" "+w),b.closing&&(a+=" /"),a+=">"}return u(m=o(i,a,v))?d(a):m}),d);return h&&(m=h.remove(m)),m},t.exports=l},88473:function(t,r,e){"use strict";function n(t){return null==t?null:function(t){if("function"!=typeof t)throw new Error;return t}(t)}e.d(r,{j:function(){return n}})},74792:function(t,r,e){"use strict";e.d(r,{Z:function(){return y}});var n=e(88473);function i(){return 0}function o(t){return function(){return t}}const a=4294967296;function s(t,r){for(var e,n,i=0,o=(t=function(t,r){let e,n,i=t.length;for(;i;)n=r()*i--|0,e=t[i],t[i]=t[n],t[n]=e;return t}(Array.from(t),r)).length,a=[];i<o;)e=t[i],n&&l(n,e)?++i:(n=p(a=c(a,e)),i=0);return n}function c(t,r){var e,n;if(f(r,t))return[r];for(e=0;e<t.length;++e)if(u(r,t[e])&&f(d(t[e],r),t))return[t[e],r];for(e=0;e<t.length-1;++e)for(n=e+1;n<t.length;++n)if(u(d(t[e],t[n]),r)&&u(d(t[e],r),t[n])&&u(d(t[n],r),t[e])&&f(g(t[e],t[n],r),t))return[t[e],t[n],r];throw new Error}function u(t,r){var e=t.r-r.r,n=r.x-t.x,i=r.y-t.y;return e<0||e*e<n*n+i*i}function l(t,r){var e=t.r-r.r+1e-9*Math.max(t.r,r.r,1),n=r.x-t.x,i=r.y-t.y;return e>0&&e*e>n*n+i*i}function f(t,r){for(var e=0;e<r.length;++e)if(!l(t,r[e]))return!1;return!0}function p(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return d(t[0],t[1]);case 3:return g(t[0],t[1],t[2])}}function d(t,r){var e=t.x,n=t.y,i=t.r,o=r.x,a=r.y,s=r.r,c=o-e,u=a-n,l=s-i,f=Math.sqrt(c*c+u*u);return{x:(e+o+c/f*l)/2,y:(n+a+u/f*l)/2,r:(f+i+s)/2}}function g(t,r,e){var n=t.x,i=t.y,o=t.r,a=r.x,s=r.y,c=r.r,u=e.x,l=e.y,f=e.r,p=n-a,d=n-u,g=i-s,h=i-l,m=c-o,v=f-o,b=n*n+i*i-o*o,x=b-a*a-s*s+c*c,w=b-u*u-l*l+f*f,y=d*g-p*h,k=(g*w-h*x)/(2*y)-n,S=(h*m-g*v)/y,A=(d*x-p*w)/(2*y)-i,M=(p*v-d*m)/y,$=S*S+M*M-1,T=2*(o+k*S+A*M),j=k*k+A*A-o*o,O=-(Math.abs($)>1e-6?(T+Math.sqrt(T*T-4*$*j))/(2*$):j/T);return{x:n+k+S*O,y:i+A+M*O,r:O}}function h(t,r,e){var n,i,o,a,s=t.x-r.x,c=t.y-r.y,u=s*s+c*c;u?(i=r.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(n=(u+a-i)/(2*u),o=Math.sqrt(Math.max(0,a/u-n*n)),e.x=t.x-n*s-o*c,e.y=t.y-n*c+o*s):(n=(u+i-a)/(2*u),o=Math.sqrt(Math.max(0,i/u-n*n)),e.x=r.x+n*s-o*c,e.y=r.y+n*c+o*s)):(e.x=r.x+e.r,e.y=r.y)}function m(t,r){var e=t.r+r.r-1e-6,n=r.x-t.x,i=r.y-t.y;return e>0&&e*e>n*n+i*i}function v(t){var r=t._,e=t.next._,n=r.r+e.r,i=(r.x*e.r+e.x*r.r)/n,o=(r.y*e.r+e.y*r.r)/n;return i*i+o*o}function b(t){this._=t,this.next=null,this.previous=null}function x(t,r){if(!(a=(e=t,t="object"==typeof e&&"length"in e?e:Array.from(e)).length))return 0;var e,n,i,o,a,c,u,l,f,p,d,g;if((n=t[0]).x=0,n.y=0,!(a>1))return n.r;if(i=t[1],n.x=-i.r,i.x=n.r,i.y=0,!(a>2))return n.r+i.r;h(i,n,o=t[2]),n=new b(n),i=new b(i),o=new b(o),n.next=o.previous=i,i.next=n.previous=o,o.next=i.previous=n;t:for(l=3;l<a;++l){h(n._,i._,o=t[l]),o=new b(o),f=i.next,p=n.previous,d=i._.r,g=n._.r;do{if(d<=g){if(m(f._,o._)){i=f,n.next=i,i.previous=n,--l;continue t}d+=f._.r,f=f.next}else{if(m(p._,o._)){(n=p).next=i,i.previous=n,--l;continue t}g+=p._.r,p=p.previous}}while(f!==p.next);for(o.previous=n,o.next=i,n.next=i.previous=i=o,c=v(n);(o=o.next)!==i;)(u=v(o))<c&&(n=o,c=u);i=n.next}for(n=[i._],o=i;(o=o.next)!==i;)n.push(o._);for(o=s(n,r),l=0;l<a;++l)(n=t[l]).x-=o.x,n.y-=o.y;return o.r}function w(t){return Math.sqrt(t.value)}function y(){var t=null,r=1,e=1,s=i;function c(n){const o=function(){let t=1;return()=>(t=(1664525*t+1013904223)%a)/a}();return n.x=r/2,n.y=e/2,t?n.eachBefore(k(t)).eachAfter(S(s,.5,o)).eachBefore(A(1)):n.eachBefore(k(w)).eachAfter(S(i,1,o)).eachAfter(S(s,n.r/Math.min(r,e),o)).eachBefore(A(Math.min(r,e)/(2*n.r))),n}return c.radius=function(r){return arguments.length?(t=(0,n.j)(r),c):t},c.size=function(t){return arguments.length?(r=+t[0],e=+t[1],c):[r,e]},c.padding=function(t){return arguments.length?(s="function"==typeof t?t:o(+t),c):s},c}function k(t){return function(r){r.children||(r.r=Math.max(0,+t(r)||0))}}function S(t,r,e){return function(n){if(i=n.children){var i,o,a,s=i.length,c=t(n)*r||0;if(c)for(o=0;o<s;++o)i[o].r+=c;if(a=x(i,e),c)for(o=0;o<s;++o)i[o].r-=c;n.r=a+c}}}function A(t){return function(r){var e=r.parent;r.r*=t,e&&(r.x=e.x+t*r.x,r.y=e.y+t*r.y)}}},91029:function(t,r,e){"use strict";e.d(r,{Z:function(){return m}});var n=e(88473);function i(t){var r=0,e=t.children,n=e&&e.length;if(n)for(;--n>=0;)r+=e[n].value;else r=1;t.value=r}function o(t,r){t instanceof Map?(t=[void 0,t],void 0===r&&(r=s)):void 0===r&&(r=a);for(var e,n,i,o,c,f=new l(t),p=[f];e=p.pop();)if((i=r(e.data))&&(c=(i=Array.from(i)).length))for(e.children=i,o=c-1;o>=0;--o)p.push(n=i[o]=new l(i[o])),n.parent=e,n.depth=e.depth+1;return f.eachBefore(u)}function a(t){return t.children}function s(t){return Array.isArray(t)?t[1]:null}function c(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function u(t){var r=0;do{t.height=r}while((t=t.parent)&&t.height<++r)}function l(t){this.data=t,this.depth=this.height=0,this.parent=null}l.prototype=o.prototype={constructor:l,count:function(){return this.eachAfter(i)},each:function(t,r){let e=-1;for(const n of this)t.call(r,n,++e,this);return this},eachAfter:function(t,r){for(var e,n,i,o=this,a=[o],s=[],c=-1;o=a.pop();)if(s.push(o),e=o.children)for(n=0,i=e.length;n<i;++n)a.push(e[n]);for(;o=s.pop();)t.call(r,o,++c,this);return this},eachBefore:function(t,r){for(var e,n,i=this,o=[i],a=-1;i=o.pop();)if(t.call(r,i,++a,this),e=i.children)for(n=e.length-1;n>=0;--n)o.push(e[n]);return this},find:function(t,r){let e=-1;for(const n of this)if(t.call(r,n,++e,this))return n},sum:function(t){return this.eachAfter((function(r){for(var e=+t(r.data)||0,n=r.children,i=n&&n.length;--i>=0;)e+=n[i].value;r.value=e}))},sort:function(t){return this.eachBefore((function(r){r.children&&r.children.sort(t)}))},path:function(t){for(var r=this,e=function(t,r){if(t===r)return t;var e=t.ancestors(),n=r.ancestors(),i=null;t=e.pop(),r=n.pop();for(;t===r;)i=t,t=e.pop(),r=n.pop();return i}(r,t),n=[r];r!==e;)r=r.parent,n.push(r);for(var i=n.length;t!==e;)n.splice(i,0,t),t=t.parent;return n},ancestors:function(){for(var t=this,r=[t];t=t.parent;)r.push(t);return r},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(r){r.children||t.push(r)})),t},links:function(){var t=this,r=[];return t.each((function(e){e!==t&&r.push({source:e.parent,target:e})})),r},copy:function(){return o(this).eachBefore(c)},[Symbol.iterator]:function*(){var t,r,e,n,i=this,o=[i];do{for(t=o.reverse(),o=[];i=t.pop();)if(yield i,r=i.children)for(e=0,n=r.length;e<n;++e)o.push(r[e])}while(o.length)}};var f={depth:-1},p={},d={};function g(t){return t.id}function h(t){return t.parentId}function m(){var t,r=g,e=h;function i(n){var i,o,a,s,c,g,h,m,x=Array.from(n),w=r,y=e,k=new Map;if(null!=t){const r=x.map(((r,e)=>function(t){let r=(t=`${t}`).length;b(t,r-1)&&!b(t,r-2)&&(t=t.slice(0,-1));return"/"===t[0]?t:`/${t}`}(t(r,e,n)))),e=r.map(v),i=new Set(r).add("");for(const t of e)i.has(t)||(i.add(t),r.push(t),e.push(v(t)),x.push(d));w=(t,e)=>r[e],y=(t,r)=>e[r]}for(a=0,i=x.length;a<i;++a)o=x[a],g=x[a]=new l(o),null!=(h=w(o,a,n))&&(h+="")&&(m=g.id=h,k.set(m,k.has(m)?p:g)),null!=(h=y(o,a,n))&&(h+="")&&(g.parent=h);for(a=0;a<i;++a)if(h=(g=x[a]).parent){if(!(c=k.get(h)))throw new Error("missing: "+h);if(c===p)throw new Error("ambiguous: "+h);c.children?c.children.push(g):c.children=[g],g.parent=c}else{if(s)throw new Error("multiple roots");s=g}if(!s)throw new Error("no root");if(null!=t){for(;s.data===d&&1===s.children.length;)s=s.children[0],--i;for(let t=x.length-1;t>=0&&(g=x[t],g.data===d);--t)g.data=null}if(s.parent=f,s.eachBefore((function(t){t.depth=t.parent.depth+1,--i})).eachBefore(u),s.parent=null,i>0)throw new Error("cycle");return s}return i.id=function(t){return arguments.length?(r=(0,n.j)(t),i):r},i.parentId=function(t){return arguments.length?(e=(0,n.j)(t),i):e},i.path=function(r){return arguments.length?(t=(0,n.j)(r),i):t},i}function v(t){let r=t.length;if(r<2)return"";for(;--r>1&&!b(t,r););return t.slice(0,r)}function b(t,r){if("/"===t[r]){let e=0;for(;r>0&&"\\"===t[--r];)++e;if(0==(1&e))return!0}return!1}}}]);