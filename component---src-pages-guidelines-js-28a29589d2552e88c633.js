(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+83V":function(n,e,l){n.exports={Title:"titleStyles-module--Title--1HJw4",PrimaryTitle:"titleStyles-module--PrimaryTitle--27g6J",SecondaryTitle:"titleStyles-module--SecondaryTitle--OK3C9",TertiaryTitle:"titleStyles-module--TertiaryTitle--A14Hm"}},"+Gsb":function(n,e,l){"use strict";n.exports=o;var t=o.prototype;function o(n,e){this.property=n,this.attribute=e}t.space=null,t.attribute=null,t.property=null,t.boolean=!1,t.booleanish=!1,t.overloadedBoolean=!1,t.number=!1,t.commaSeparated=!1,t.spaceSeparated=!1,t.commaOrSpaceSeparated=!1,t.mustUseProperty=!1,t.defined=!1},"2Dja":function(n,e,l){"use strict";var t=l("fLZw"),o=l("oxnk"),r=l("WhXs"),a=l("LecZ"),i=l("TTG4"),u=l("vfP8"),s=l("CC3I"),c=l("qrWY"),p=l("Zasy"),d=p("root"),h=p("element"),g=p("text");function f(n,e,l,t,o){var c,p=r(t.schema,e);null==l||l!=l||!1===l&&(t.vue||t.vdom||t.hyperscript)||!l&&p.boolean&&(t.vue||t.vdom||t.hyperscript)||(l&&"object"==typeof l&&"length"in l&&(l=(p.commaSeparated?u:i).stringify(l)),p.boolean&&t.hyperscript&&(l=""),"style"===p.property&&"string"==typeof l&&(t.react||t.vue||t.vdom)&&(l=function(n,e){var l={};try{s(n,(function(n,e){"-ms-"===n.slice(0,4)&&(n="ms-"+n.slice(4));l[n.replace(/-([a-z])/g,v)]=e}))}catch(t){throw t.message=e+"[style]"+t.message.slice("undefined".length),t}return l}(l,o)),t.vue?"style"!==p.property&&(c="attrs"):p.mustUseProperty||(t.vdom?"style"!==p.property&&(c="attributes"):t.hyperscript&&(c="attrs")),c?(n[c]||(n[c]={}),n[c][p.attribute]=l):p.space&&t.react?n[a[p.property]||p.property]=l:n[p.attribute]=l)}function m(n){return Boolean(n&&n.context&&n.cleanup)}function v(n,e){return e.toUpperCase()}n.exports=function(n,e,l){var r,a=l||{},i=function(n){var e=n&&n("div");return Boolean(e&&("_owner"in e||"_store"in e)&&null==e.key)}(n),u=function(n){var e=n&&n("div");return Boolean(e&&e.context&&e.context._isVue)}(n),s=function(n){return n&&"VirtualNode"===n("div").type}(n);if("function"!=typeof n)throw new Error("h is not a function");"string"==typeof a||"boolean"==typeof a?(r=a,a={}):r=a.prefix;if(d(e))e=1===e.children.length&&h(e.children[0])?e.children[0]:{type:"element",tagName:"div",properties:{},children:e.children};else if(!h(e))throw new Error("Expected root or element, not `"+(e&&e.type||e)+"`");return function n(e,l,t){var r,a,i=t.schema,u=i,s=l.tagName,p={},d=[],m=-1;"html"===i.space&&"svg"===s.toLowerCase()&&(u=o,t.schema=u);for(r in l.properties)f(p,r,l.properties[r],t,s);t.vdom&&("html"===u.space?s=s.toUpperCase():p.namespace=c[u.space]);t.prefix&&(t.key++,p.key=t.prefix+t.key);if(l.children)for(;++m<l.children.length;)a=l.children[m],h(a)?d.push(n(e,a,t)):g(a)&&d.push(a.value);return t.schema=i,d.length?e.call(l,s,p,d):e.call(l,s,p)}(n,e,{schema:"svg"===a.space?o:t,prefix:null==r?i||u||s?"h-":null:r,key:0,react:i,vue:u,vdom:s,hyperscript:m(n)})}},"2dtT":function(n,e,l){"use strict";var t=l("2Dja"),o=l("RdQs");n.exports=function(n){var e=n||{},l=e.createElement,a=e.Fragment,i=e.components||{},u=e.passNode;function s(n,e,t){var o=n;return r.call(i,n)&&(o=i[n],u&&(e.node=this)),l(o,e,t)}this.Compiler=function(n){var r=t(s,o(n),e.prefix);return"root"===n.type?(r="div"!==r.type||1===n.children.length&&"element"===n.children[0].type?[r]:r.props.children,l(a||"div",{},r)):r}};var r={}.hasOwnProperty},"7u6j":function(n,e,l){n.exports={Button:"styles-module--Button--2uSNj",size_2:"styles-module--size_2--2Wg4X",size_1:"styles-module--size_1--3hYIb",color_transparent:"styles-module--color_transparent--vCCa3",mod_download:"styles-module--mod_download--mqdT0",Button__icon:"styles-module--Button__icon--23uSL",Button__version:"styles-module--Button__version--2FXvE"}},APaQ:function(n,e,l){"use strict";l.r(e);var t=l("q1tI"),o=l.n(t),r=l("vrFN"),a=l("a7gn"),i=l("2dtT"),u=l.n(i),s=l("nn5T"),c=l("+83V"),p=l.n(c),d=l("TSYQ"),h=l.n(d),g=function(n){var e=n.children;return o.a.createElement("h1",{className:h()(p.a.Title,p.a.PrimaryTitle)},e)},f=function(n){var e=n.children;return o.a.createElement("h2",{className:h()(p.a.Title,p.a.SecondaryTitle)},e)},m=function(n){var e=n.children;return o.a.createElement("h3",{className:h()(p.a.TertiaryTitle)},e)},v=l("zLVn"),y=l("GV+Y"),k=l.n(y),x=function(n){var e=n.children,l=Object(v.a)(n,["children"]);return o.a.createElement("table",Object.assign({className:h()(k.a.ColorTable)},l),e)},b=function(n){var e,l=n.children,t=Object(v.a)(n,["children"]);if(l&&2===l.length&&"string"==typeof l[1]){var r=l[1].trim();if(0===r.indexOf("#")){var a=(e=(e=r).replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"black":"white");return o.a.createElement("td",{className:h()(k.a.ColorCell),style:{backgroundColor:r,color:a}},l[0],o.a.createElement("span",null,r))}}return o.a.createElement("td",Object.assign({className:h()(k.a.ColorCell)},t),l)},w=l("K3la"),S=l.n(w),C=function(n){var e=n.type,l=n.children;return o.a.createElement("div",{className:h()(S.a.GuidelinesList,e?S.a["type_"+e]:null)},l)},P=function(n){var e=n.background,l=n.children;return o.a.createElement("div",{className:h()(S.a.GuidelinesListItem,e?S.a["background_"+e]:null)},l)},L=l("ww3E"),O=l("dntC"),E=function(n){var e=n.children,l=n.type,t=Object(v.a)(n,["children","type"]);return"button"===l?o.a.createElement(L.a,Object.assign({size:"2"},t),e):o.a.createElement(O.a,t,e)},M=function(n){var e=n.children,l=Object(v.a)(n,["children"]);return o.a.createElement("div",l,e)},T=l("hPyl"),D=l("Qs7Y"),A=new u.a({createElement:o.a.createElement,components:{h1:g,h2:f,h3:m,table:x,td:b,a:E,p:M,list:C,listitem:P,tile:T.a,button:L.a,text:D.a}}).Compiler;e.default=function(n){var e=n.data.markdownRemark;return o.a.createElement(a.a,null,o.a.createElement(r.a,{title:"UI5 Logo Guidelines"}),o.a.createElement(s.a,null,A(e.htmlAst)))}},CC3I:function(n,e,l){var t=l("Lc7W");n.exports=function(n,e){var l,o=null;if(!n||"string"!=typeof n)return o;for(var r,a,i=t(n),u="function"==typeof e,s=0,c=i.length;s<c;s++)r=(l=i[s]).property,a=l.value,u?e(r,a,l):a&&(o||(o={}),o[r]=a);return o}},Ex3r:function(n,e,l){"use strict";var t=l("U6jy"),o=l("GGo3");n.exports=function(n){var e,l,r=n.length,a=[],i=[],u=-1;for(;++u<r;)e=n[u],a.push(e.property),i.push(e.normal),l=e.space;return new o(t.apply(null,a),t.apply(null,i),l)}},GGo3:function(n,e,l){"use strict";n.exports=o;var t=o.prototype;function o(n,e,l){this.property=n,this.normal=e,l&&(this.space=l)}t.space=null,t.normal={},t.property={}},"GV+Y":function(n,e,l){n.exports={ColorTable:"tableStyles-module--ColorTable--1senZ",ColorCell:"tableStyles-module--ColorCell--e0JSm"}},JMON:function(n,e,l){"use strict";n.exports=o;var t=l("SAtU");function o(n,e,l,o){var a;function i(n,t,u){var s,c=[];return(e&&!a(n,t,u[u.length-1]||null)||!1!==(c=r(l(n,u)))[0])&&n.children&&"skip"!==c[0]&&!1===(s=r(function(n,e){var l,t=o?-1:1,r=(o?n.length:-1)+t;for(;r>-1&&r<n.length;){if(!1===(l=i(n[r],r,e))[0])return l;r="number"==typeof l[1]?l[1]:r+t}}(n.children,u.concat(n))))[0]?s:c}"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),a=t(e),i(n,null,[])}function r(n){return null!==n&&"object"==typeof n&&"length"in n?n:"number"==typeof n?[!0,n]:[n]}o.CONTINUE=!0,o.SKIP="skip",o.EXIT=!1},K3la:function(n,e,l){n.exports={GuidelinesList:"listStyles-module--GuidelinesList---yxl2",GuidelinesListItem:"listStyles-module--GuidelinesListItem--2V2hL",background_black:"listStyles-module--background_black--14E1V",type_flavors:"listStyles-module--type_flavors--1N9Z6",type_layout:"listStyles-module--type_layout--dQoPl",type_assert:"listStyles-module--type_assert--2K0oa"}},Lc7W:function(n,e){var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,o=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,i=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,s=/^\s+|\s+$/g;function c(n){return n?n.replace(s,""):""}n.exports=function(n,e){if("string"!=typeof n)throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var s=1,p=1;function d(n){var e=n.match(t);e&&(s+=e.length);var l=n.lastIndexOf("\n");p=~l?n.length-l:p+n.length}function h(){var n={line:s,column:p};return function(e){return e.position=new g(n),y(),e}}function g(n){this.start=n,this.end={line:s,column:p},this.source=e.source}g.prototype.content=n;var f=[];function m(l){var t=new Error(e.source+":"+s+":"+p+": "+l);if(t.reason=l,t.filename=e.source,t.line=s,t.column=p,t.source=n,!e.silent)throw t;f.push(t)}function v(e){var l=e.exec(n);if(l){var t=l[0];return d(t),n=n.slice(t.length),l}}function y(){v(o)}function k(n){var e;for(n=n||[];e=x();)!1!==e&&n.push(e);return n}function x(){var e=h();if("/"==n.charAt(0)&&"*"==n.charAt(1)){for(var l=2;""!=n.charAt(l)&&("*"!=n.charAt(l)||"/"!=n.charAt(l+1));)++l;if(l+=2,""===n.charAt(l-1))return m("End of comment missing");var t=n.slice(2,l-2);return p+=2,d(t),n=n.slice(l),p+=2,e({type:"comment",comment:t})}}function b(){var n=h(),e=v(r);if(e){if(x(),!v(a))return m("property missing ':'");var t=v(i),o=n({type:"declaration",property:c(e[0].replace(l,"")),value:t?c(t[0].replace(l,"")):""});return v(u),o}}return y(),function(){var n,e=[];for(k(e);n=b();)!1!==n&&(e.push(n),k(e));return e}()}},LecZ:function(n){n.exports=JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')},MDy1:function(n,e,l){"use strict";var t=l("hcgW"),o=l("NhCq"),r=t.booleanish,a=t.number,i=t.spaceSeparated;n.exports=o({transform:function(n,e){return"role"===e?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:r,ariaAutoComplete:null,ariaBusy:r,ariaChecked:r,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:r,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:r,ariaFlowTo:i,ariaGrabbed:r,ariaHasPopup:null,ariaHidden:r,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:a,ariaLive:null,ariaModal:r,ariaMultiLine:r,ariaMultiSelectable:r,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:r,ariaReadOnly:r,ariaRelevant:null,ariaRequired:r,ariaRoleDescription:i,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:r,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},MZ32:function(n,e,l){"use strict";var t=l("tPCP");n.exports=function(n,e){return t(n,e.toLowerCase())}},MwcK:function(n,e,l){"use strict";var t=l("NhCq"),o=l("MZ32");n.exports=t({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:o,properties:{xmlns:null,xmlnsXLink:null}})},N9qd:function(n,e,l){"use strict";var t=l("NhCq");n.exports=t({space:"xlink",transform:function(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},NhCq:function(n,e,l){"use strict";var t=l("w9a4"),o=l("GGo3"),r=l("dIZg");n.exports=function(n){var e,l,a=n.space,i=n.mustUseProperty||[],u=n.attributes||{},s=n.properties,c=n.transform,p={},d={};for(e in s)l=new r(e,c(u,e),s[e],a),-1!==i.indexOf(e)&&(l.mustUseProperty=!0),p[e]=l,d[t(e)]=e,d[t(l.attribute)]=e;return new o(p,d,a)}},RdQs:function(n,e,l){"use strict";var t=l("ptzP"),o=Object.prototype.hasOwnProperty,r={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(n){var e;if("tr"===n.tagName||"td"===n.tagName||"th"===n.tagName)for(e in r)o.call(r,e)&&void 0!==n.properties[e]&&(i(n,r[e],n.properties[e]),delete n.properties[e])}function i(n,e,l){var t=(n.properties.style||"").trim();t&&!/;\s*/.test(t)&&(t+=";"),t&&(t+=" ");var o=t+e+": "+l+";";n.properties.style=o}n.exports=function(n){return t(n,"element",a),n}},SAtU:function(n,e,l){"use strict";function t(n){if("string"==typeof n)return function(n){return function(e){return Boolean(e&&e.type===n)}}(n);if(null==n)return a;if("object"==typeof n)return("length"in n?r:o)(n);if("function"==typeof n)return n;throw new Error("Expected function, string, or object as test")}function o(n){return function(e){var l;for(l in n)if(e[l]!==n[l])return!1;return!0}}function r(n){var e=function(n){for(var e=[],l=n.length,o=-1;++o<l;)e[o]=t(n[o]);return e}(n),l=e.length;return function(){var n=-1;for(;++n<l;)if(e[n].apply(this,arguments))return!0;return!1}}function a(){return!0}n.exports=t},TTG4:function(n,e,l){"use strict";e.parse=function(n){var e=String(n||"").trim();return""===e?[]:e.split(t)},e.stringify=function(n){return n.join(" ").trim()};var t=/[ \t\n\r\f]+/g},WhXs:function(n,e,l){"use strict";var t=l("w9a4"),o=l("dIZg"),r=l("+Gsb");n.exports=function(n,e){var l=t(e),p=e,d=r;if(l in n.normal)return n.property[n.normal[l]];l.length>4&&"data"===l.slice(0,4)&&a.test(e)&&("-"===e.charAt(4)?p=function(n){var e=n.slice(5).replace(i,c);return"data"+e.charAt(0).toUpperCase()+e.slice(1)}(e):e=function(n){var e=n.slice(4);if(i.test(e))return n;"-"!==(e=e.replace(u,s)).charAt(0)&&(e="-"+e);return"data"+e}(e),d=o);return new d(p,e)};var a=/^data[-\w.:]+$/i,i=/-[a-z]/g,u=/[A-Z]/g;function s(n){return"-"+n.toLowerCase()}function c(n){return n.charAt(1).toUpperCase()}},dIZg:function(n,e,l){"use strict";var t=l("+Gsb"),o=l("hcgW");n.exports=i,i.prototype=new t,i.prototype.defined=!0;var r=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],a=r.length;function i(n,e,l,i){var s,c=-1;for(u(this,"space",i),t.call(this,n,e);++c<a;)u(this,s=r[c],(l&o[s])===o[s])}function u(n,e,l){l&&(n[e]=l)}},fLZw:function(n,e,l){"use strict";var t=l("Ex3r"),o=l("N9qd"),r=l("rhP3"),a=l("MwcK"),i=l("MDy1"),u=l("wGdx");n.exports=t([r,o,a,i,u])},hcgW:function(n,e,l){"use strict";var t=0;function o(){return Math.pow(2,++t)}e.boolean=o(),e.booleanish=o(),e.overloadedBoolean=o(),e.number=o(),e.spaceSeparated=o(),e.commaSeparated=o(),e.commaOrSpaceSeparated=o()},oxnk:function(n,e,l){"use strict";var t=l("Ex3r"),o=l("N9qd"),r=l("rhP3"),a=l("MwcK"),i=l("MDy1"),u=l("rv6P");n.exports=t([r,o,a,i,u])},ptzP:function(n,e,l){"use strict";n.exports=i;var t=l("JMON"),o=t.CONTINUE,r=t.SKIP,a=t.EXIT;function i(n,e,l,o){"function"==typeof e&&"function"!=typeof l&&(o=l,l=e,e=null),t(n,e,(function(n,e){var t=e[e.length-1],o=t?t.children.indexOf(n):null;return l(n,o,t)}),o)}i.CONTINUE=o,i.SKIP=r,i.EXIT=a},qrWY:function(n){n.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},rhP3:function(n,e,l){"use strict";var t=l("NhCq");n.exports=t({space:"xml",transform:function(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},rv6P:function(n,e,l){"use strict";var t=l("hcgW"),o=l("NhCq"),r=l("tPCP"),a=t.boolean,i=t.number,u=t.spaceSeparated,s=t.commaSeparated,c=t.commaOrSpaceSeparated;n.exports=o({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:r,properties:{about:c,accentHeight:i,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:i,amplitude:i,arabicForm:null,ascent:i,attributeName:null,attributeType:null,azimuth:i,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:i,by:null,calcMode:null,capHeight:i,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:i,diffuseConstant:i,direction:null,display:null,dur:null,divisor:i,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:i,enableBackground:null,end:null,event:null,exponent:i,externalResourcesRequired:null,fill:null,fillOpacity:i,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:i,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:i,horizOriginX:i,horizOriginY:i,id:null,ideographic:i,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:i,k:i,k1:i,k2:i,k3:i,k4:i,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:i,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:i,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:i,overlineThickness:i,paintOrder:null,panose1:null,path:null,pathLength:i,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:u,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:i,pointsAtY:i,pointsAtZ:i,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:i,specularExponent:i,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:i,strikethroughThickness:i,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:i,strokeOpacity:i,strokeWidth:null,style:null,surfaceScale:i,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:i,tableValues:null,target:null,targetX:i,targetY:i,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:i,underlineThickness:i,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:i,values:null,vAlphabetic:i,vMathematical:i,vectorEffect:null,vHanging:i,vIdeographic:i,version:null,vertAdvY:i,vertOriginX:i,vertOriginY:i,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:i,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},tPCP:function(n,e,l){"use strict";n.exports=function(n,e){return e in n?n[e]:e}},vfP8:function(n,e,l){"use strict";e.parse=function(n){var e,l=[],t=String(n||""),o=t.indexOf(","),r=0,a=!1;for(;!a;)-1===o&&(o=t.length,a=!0),!(e=t.slice(r,o).trim())&&a||l.push(e),r=o+1,o=t.indexOf(",",r);return l},e.stringify=function(n,e){var l=e||{},t=!1===l.padLeft?"":" ",o=l.padRight?" ":"";""===n[n.length-1]&&(n=n.concat(""));return n.join(o+","+t).trim()}},w9a4:function(n,e,l){"use strict";n.exports=function(n){return n.toLowerCase()}},wGdx:function(n,e,l){"use strict";var t=l("hcgW"),o=l("NhCq"),r=l("MZ32"),a=t.boolean,i=t.overloadedBoolean,u=t.booleanish,s=t.number,c=t.spaceSeparated,p=t.commaSeparated;n.exports=o({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:i,draggable:u,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:null,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:a,disableRemotePlayback:a,prefix:null,property:null,results:s,security:null,unselectable:null}})},ww3E:function(n,e,l){"use strict";var t=l("zLVn"),o=l("q1tI"),r=l.n(o),a=l("TSYQ"),i=l.n(a),u=l("7u6j"),s=l.n(u),c=(l("SGh4"),function(n){var e=n.children,l=n.size,o=n.href,a=(n.target,Object(t.a)(n,["children","size","href","target"]));return r.a.createElement("a",Object.assign({className:i()(s.a.Button,l?s.a["size_"+l]:null),href:o},a),e)});c.defaultProps={size:"1",target:null,rel:"noopener noreferrer"},e.a=c}}]);
//# sourceMappingURL=component---src-pages-guidelines-js-28a29589d2552e88c633.js.map