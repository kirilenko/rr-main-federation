import{r as Ie}from"./index-938f3533.js";import{importShared as Y}from"./__federation_fn_import.js";var te={},Me={get exports(){return te},set exports(e){te=e}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=Ie,Fe=Symbol.for("react.element"),Le=Symbol.for("react.fragment"),je=Object.prototype.hasOwnProperty,ze=Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0};function ve(e,r,t){var n,a={},i=null,s=null;t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(s=r.ref);for(n in r)je.call(r,n)&&!He.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)a[n]===void 0&&(a[n]=r[n]);return{$$typeof:Fe,type:e,key:i,ref:s,props:a,_owner:ze.current}}K.Fragment=Le;K.jsx=ve;K.jsxs=ve;(function(e){e.exports=K})(Me);const De=te.jsx;function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ne.apply(this,arguments)}function xe(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var We=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ue=xe(function(e){return We.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function qe(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Be(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ge=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Be(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=qe(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",X="-moz-",f="-webkit-",we="comm",oe="rule",ce="decl",Ve="@import",ke="@keyframes",Xe=Math.abs,Z=String.fromCharCode,Ye=Object.assign;function Ke(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function Se(e){return e.trim()}function Ze(e,r){return(e=r.exec(e))?e[0]:e}function u(e,r,t){return e.replace(r,t)}function ae(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function j(e,r,t){return e.slice(r,t)}function R(e){return e.length}function fe(e){return e.length}function q(e,r){return r.push(e),e}function Je(e,r){return e.map(r).join("")}var J=1,N=1,Ce=0,C=0,v=0,F="";function Q(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:J,column:N,length:s,return:""}}function L(e,r){return Ye(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}function Qe(){return v}function er(){return v=C>0?w(F,--C):0,N--,v===10&&(N=1,J--),v}function O(){return v=C<Ce?w(F,C++):0,N++,v===10&&(N=1,J++),v}function $(){return w(F,C)}function B(){return C}function D(e,r){return j(F,e,r)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return J=N=1,Ce=R(F=e),C=0,[]}function Ee(e){return F="",e}function G(e){return Se(D(C-1,ie(e===91?e+2:e===40?e+1:e)))}function rr(e){for(;(v=$())&&v<33;)O();return z(e)>2||z(v)>3?"":" "}function tr(e,r){for(;--r&&O()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return D(e,B()+(r<6&&$()==32&&O()==32))}function ie(e){for(;O();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&ie(v);break;case 40:e===41&&ie(e);break;case 92:O();break}return C}function nr(e,r){for(;O()&&e+v!==47+10;)if(e+v===42+42&&$()===47)break;return"/*"+D(r,C-1)+"*"+Z(e===47?e:O())}function ar(e){for(;!z($());)O();return D(e,C)}function ir(e){return Ee(V("",null,null,null,[""],e=Pe(e),0,[0],e))}function V(e,r,t,n,a,i,s,o,m){for(var x=0,l=0,h=s,_=0,P=0,p=0,c=1,g=1,y=1,b=0,k="",I=a,A=i,E=n,d=k;g;)switch(p=b,b=O()){case 40:if(p!=108&&w(d,h-1)==58){ae(d+=u(G(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:d+=G(b);break;case 9:case 10:case 13:case 32:d+=rr(p);break;case 92:d+=tr(B()-1,7);continue;case 47:switch($()){case 42:case 47:q(sr(nr(O(),B()),r,t),m);break;default:d+="/"}break;case 123*c:o[x++]=R(d)*y;case 125*c:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+l:P>0&&R(d)-h&&q(P>32?le(d+";",n,t,h-1):le(u(d," ","")+";",n,t,h-2),m);break;case 59:d+=";";default:if(q(E=ue(d,r,t,x,l,a,o,k,I=[],A=[],h),i),b===123)if(l===0)V(d,r,E,E,I,i,h,o,A);else switch(_===99&&w(d,3)===110?100:_){case 100:case 109:case 115:V(e,E,E,n&&q(ue(e,E,E,0,0,a,o,k,a,I=[],h),A),a,A,h,o,n?I:A);break;default:V(d,E,E,E,[""],A,0,o,A)}}x=l=P=0,c=y=1,k=d="",h=s;break;case 58:h=1+R(d),P=p;default:if(c<1){if(b==123)--c;else if(b==125&&c++==0&&er()==125)continue}switch(d+=Z(b),b*c){case 38:y=l>0?1:(d+="\f",-1);break;case 44:o[x++]=(R(d)-1)*y,y=1;break;case 64:$()===45&&(d+=G(O())),_=$(),l=h=R(k=d+=ar(B())),b++;break;case 45:p===45&&R(d)==2&&(c=0)}}return i}function ue(e,r,t,n,a,i,s,o,m,x,l){for(var h=a-1,_=a===0?i:[""],P=fe(_),p=0,c=0,g=0;p<n;++p)for(var y=0,b=j(e,h+1,h=Xe(c=s[p])),k=e;y<P;++y)(k=Se(c>0?_[y]+" "+b:u(b,/&\f/g,_[y])))&&(m[g++]=k);return Q(e,r,t,a===0?oe:o,m,x,l)}function sr(e,r,t){return Q(e,r,t,we,Z(Qe()),j(e,2,-2),0)}function le(e,r,t,n){return Q(e,r,t,ce,j(e,0,n),j(e,n+1,-1),n)}function M(e,r){for(var t="",n=fe(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function or(e,r,t,n){switch(e.type){case Ve:case ce:return e.return=e.return||e.value;case we:return"";case ke:return e.return=e.value+"{"+M(e.children,n)+"}";case oe:e.value=e.props.join(",")}return R(t=M(e.children,n))?e.return=e.value+"{"+t+"}":""}function cr(e){var r=fe(e);return function(t,n,a,i){for(var s="",o=0;o<r;o++)s+=e[o](t,n,a,i)||"";return s}}function fr(e){return function(r){r.root||(r=r.return)&&e(r)}}var ur=function(r,t,n){for(var a=0,i=0;a=i,i=$(),a===38&&i===12&&(t[n]=1),!z(i);)O();return D(r,C)},lr=function(r,t){var n=-1,a=44;do switch(z(a)){case 0:a===38&&$()===12&&(t[n]=1),r[n]+=ur(C-1,t,n);break;case 2:r[n]+=G(a);break;case 4:if(a===44){r[++n]=$()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Z(a)}while(a=O());return r},dr=function(r,t){return Ee(lr(Pe(r),t))},de=new WeakMap,hr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!de.get(n))&&!a){de.set(r,!0);for(var i=[],s=dr(t,i),o=n.props,m=0,x=0;m<s.length;m++)for(var l=0;l<o.length;l++,x++)r.props[x]=i[m]?s[m].replace(/&\f/g,o[l]):o[l]+" "+s[m]}}},pr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Oe(e,r){switch(Ke(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+X+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+u(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+u(e,"shrink","negative")+e;case 5292:return f+e+S+u(e,"basis","preferred-size")+e;case 6060:return f+"box-"+u(e,"-grow","")+f+e+S+u(e,"grow","positive")+e;case 4554:return f+u(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+X+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ae(e,"stretch")?Oe(u(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,R(e)-3-(~ae(e,"!important")&&10))){case 107:return u(e,":",":"+f)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var mr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ce:r.return=Oe(r.value,r.length);break;case ke:return M([L(r,{value:u(r.value,"@","@"+f)})],a);case oe:if(r.length)return Je(r.props,function(i){switch(Ze(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return M([L(r,{props:[u(i,/:(read-\w+)/,":"+X+"$1")]})],a);case"::placeholder":return M([L(r,{props:[u(i,/:(plac\w+)/,":"+f+"input-$1")]}),L(r,{props:[u(i,/:(plac\w+)/,":"+X+"$1")]}),L(r,{props:[u(i,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},gr=[mr],yr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var g=c.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var a=r.stylisPlugins||gr,i={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(c){for(var g=c.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)i[g[y]]=!0;o.push(c)});var m,x=[hr,pr];{var l,h=[or,fr(function(c){l.insert(c)})],_=cr(x.concat(a,h)),P=function(g){return M(ir(g),_)};m=function(g,y,b,k){l=b,P(g?g+"{"+y.styles+"}":y.styles),k&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new Ge({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:m};return p.sheet.hydrate(o),p},br=!0;function vr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ae=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||br===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},xr=function(r,t,n){Ae(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function wr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var kr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sr=/[A-Z]|^ms/g,Cr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_e=function(r){return r.charCodeAt(1)===45},he=function(r){return r!=null&&typeof r!="boolean"},ee=xe(function(e){return _e(e)?e:e.replace(Sr,"-$&").toLowerCase()}),pe=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(Cr,function(n,a,i){return T={name:a,styles:i,next:T},a})}return kr[r]!==1&&!_e(r)&&typeof t=="number"&&t!==0?t+"px":t};function H(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return T={name:t.name,styles:t.styles,next:T},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)T={name:n.name,styles:n.styles,next:T},n=n.next;var a=t.styles+";";return a}return Pr(e,r,t)}case"function":{if(e!==void 0){var i=T,s=t(e);return T=i,H(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function Pr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=H(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":he(s)&&(n+=ee(i)+":"+pe(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)he(s[o])&&(n+=ee(i)+":"+pe(i,s[o])+";");else{var m=H(e,r,s);switch(i){case"animation":case"animationName":{n+=ee(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var me=/label:\s*([^\s;\n{]+)\s*(;|$)/g,T,Er=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";T=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=H(n,t,s)):i+=s[0];for(var o=1;o<r.length;o++)i+=H(n,t,r[o]),a&&(i+=s[o]);me.lastIndex=0;for(var m="",x;(x=me.exec(i))!==null;)m+="-"+x[1];var l=wr(i)+m;return{name:l,styles:i,next:T}};const ge=await Y("react");await Y("react");var Or=function(r){return r()},Ar=ge["useInsertionEffect"]?ge["useInsertionEffect"]:!1,_r=Ar||Or;const{createContext:Re,useContext:Rr,forwardRef:Tr,createElement:qr,Fragment:Br}=await Y("react");var Te=Re(typeof HTMLElement<"u"?yr({key:"css"}):null);Te.Provider;var $r=function(r){return Tr(function(t,n){var a=Rr(Te);return r(t,a,n)})},Ir=Re({});const{useContext:Mr,createElement:re,Fragment:Nr}=await Y("react");var Fr=Ue,Lr=function(r){return r!=="theme"},ye=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Fr:Lr},be=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},jr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ae(t,n,a),_r(function(){return xr(t,n,a)}),null},zr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var o=be(r,t,n),m=o||ye(a),x=!m("as");return function(){var l=arguments,h=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)h.push.apply(h,l);else{h.push(l[0][0]);for(var _=l.length,P=1;P<_;P++)h.push(l[P],l[0][P])}var p=$r(function(c,g,y){var b=x&&c.as||a,k="",I=[],A=c;if(c.theme==null){A={};for(var E in c)A[E]=c[E];A.theme=Mr(Ir)}typeof c.className=="string"?k=vr(g.registered,I,c.className):c.className!=null&&(k=c.className+" ");var d=Er(h.concat(I),g.registered,A);k+=g.key+"-"+d.name,s!==void 0&&(k+=" "+s);var $e=x&&o===void 0?ye(b):m,W={};for(var U in c)x&&U==="as"||$e(U)&&(W[U]=c[U]);return W.className=k,W.ref=y,re(Nr,null,re(jr,{cache:g,serialized:d,isStringTag:typeof b=="string"}),re(b,W))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=h,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(c,g){return e(c,ne({},t,g,{shouldForwardProp:be(p,g,!0)})).apply(void 0,h)},p}},Hr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],se=zr.bind();Hr.forEach(function(e){se[e]=se(e)});const Dr=se.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;

  color: white;
  background: mediumpurple;

  font-family: sans-serif;
`,Gr=({title:e})=>De(Dr,{children:e});export{Gr as H,De as j};
