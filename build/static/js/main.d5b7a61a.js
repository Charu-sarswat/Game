/*! For license information please see main.d5b7a61a.js.LICENSE.txt */
(()=>{var e={43:(e,t,r)=>{"use strict";e.exports=r(202)},153:(e,t,r)=>{"use strict";var n=r(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function v(){}function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var y=x.prototype=new v;y.constructor=x,h(y,b.prototype),y.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,a)&&!E.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:r,type:e,key:o,ref:l,props:i,_owner:S.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var z=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return o=o(s=e),e=""===i?"."+T(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(z,"$&/")+"/"),_(o,t,a,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(z,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+T(l=e[c],c);s+=_(l,t,a,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,a,u=i+T(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function A(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},N={transition:null},R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=x,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=O,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!E.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:r,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function r(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,a=e[n];if(!(0<i(a,t)))break e;e[n]=t,e[r]=a,r=n}}function n(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length,o=a>>>1;n<o;){var l=2*(n+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,r))c<a&&0>i(u,s)?(e[n]=u,e[c]=r,n=c):(e[n]=s,e[l]=r,n=l);else{if(!(c<a&&0>i(u,r)))break e;e[n]=u,e[c]=r,n=c}}}return t}function i(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=n(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,r(c,t)}t=n(u)}}function w(e){if(g=!1,y(e),!h)if(null!==n(c))h=!0,N(k);else{var t=n(u);null!==t&&R(w,t.startTime-e)}}function k(e,r){h=!1,g&&(g=!1,v(j),j=-1),m=!0;var i=f;try{for(y(r),p=n(c);null!==p&&(!(p.expirationTime>r)||e&&!_());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var l=o(p.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?p.callback=l:p===n(c)&&a(c),y(r)}else a(c);p=n(c)}if(null!==p)var s=!0;else{var d=n(u);null!==d&&R(w,d.startTime-r),s=!1}return s}finally{p=null,f=i,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,j=-1,z=5,T=-1;function _(){return!(t.unstable_now()-T<z)}function A(){if(null!==C){var e=t.unstable_now();T=e;var r=!0;try{r=C(!0,e)}finally{r?S():(E=!1,C=null)}}else E=!1}if("function"===typeof x)S=function(){x(A)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,P=$.port2;$.port1.onmessage=A,S=function(){P.postMessage(null)}}else S=function(){b(A,0)};function N(e){C=e,E||(E=!0,S())}function R(e,r){j=b((function(){e(t.unstable_now())}),r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var r=f;f=t;try{return e()}finally{f=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f;f=e;try{return t()}finally{f=r}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,r(u,e),null===n(c)&&e===n(u)&&(g?(v(j),j=-1):g=!0,R(w,i-o))):(e.sortIndex=l,r(c,e),h||m||(h=!0,N(k))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var r=f;f=t;try{return e.apply(this,arguments)}finally{f=r}}}},324:e=>{e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=r?r.call(n,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,r)=>{"use strict";var n=r(950);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},579:(e,t,r)=>{"use strict";e.exports=r(153)},730:(e,t,r)=>{"use strict";var n=r(43),a=r(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,r,n,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var b=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function x(e,t,r,n){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,a,n)&&(r=null),n||null===a?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=null===r?3!==a.type&&"":r:(t=a.attributeName,n=a.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(a=a.type)||4===a&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(b,v);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(b,v);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var y=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),z=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var L,I=Object.assign;function D(e){if(void 0===L)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var M=!1;function F(e,t){if(!e||M)return"";M=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),i=n.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{M=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?D(e):""}function U(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case E:return"StrictMode";case _:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case $:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return W(e(t))}catch(r){}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=V(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function G(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=H(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){q(e,t);var r=H(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,r):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function ee(e,t,r){"number"===t&&Q(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var te=Array.isArray;function re(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+H(r),t=null,a=0;a<e.length;a++){if(e[a].value===r)return e[a].selected=!0,void(n&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:H(r)}}function ie(e,t){var r=H(t.value),n=H(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),a=he(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var be=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(be[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ee=null;function Ce(e){if(e=xa(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function je(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function ze(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Te(e,t){return e(t)}function _e(){}var Ae=!1;function $e(e,t,r){if(Ae)return e(t,r);Ae=!0;try{return Te(e,t,r)}finally{Ae=!1,(null!==Se||null!==Ee)&&(_e(),ze())}}function Pe(e,t){var r=e.stateNode;if(null===r)return null;var n=wa(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Ne=!1;if(u)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ue){Ne=!1}function Oe(e,t,r,n,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Le=!1,Ie=null,De=!1,Me=null,Fe={onError:function(e){Le=!0,Ie=e}};function Ue(e,t,r,n,a,i,o,l,s){Le=!1,Ie=null,Oe.apply(Fe,arguments)}function We(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(We(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(n=a.return)){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return He(a),e;if(o===n)return He(a),t;o=o.sibling}throw Error(i(188))}if(r.return!==n.return)r=a,n=o;else{for(var l=!1,s=a.child;s;){if(s===r){l=!0,r=a,n=o;break}if(s===n){l=!0,n=a,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=a;break}if(s===n){l=!0,n=o,r=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,Xe=a.unstable_shouldYield,Ge=a.unstable_requestPaint,qe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,rt=a.unstable_LowPriority,nt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&r;if(0!==o){var l=o&~a;0!==l?n=dt(l):0!==(i&=o)&&(n=dt(i))}else 0!==(o=r&~a)?n=dt(o):0!==i&&(n=dt(i));if(0===n)return 0;if(0!==t&&t!==n&&0===(t&a)&&((a=n&-n)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)a=1<<(r=31-ot(t)),n|=e[r],t&=~a;return n}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function bt(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=r}function vt(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ot(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var xt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Et,Ct,jt=!1,zt=[],Tt=null,_t=null,At=null,$t=new Map,Pt=new Map,Nt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":$t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pt.delete(t.pointerId)}}function Lt(e,t,r,n,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=xa(t))&&kt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function It(e){var t=va(e.target);if(null!==t){var r=We(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Be(r)))return e.blockedOn=t,void Ct(e.priority,(function(){St(r)}))}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=xa(r))&&kt(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);ye=n,r.target.dispatchEvent(n),ye=null,t.shift()}return!0}function Mt(e,t,r){Dt(e)&&r.delete(t)}function Ft(){jt=!1,null!==Tt&&Dt(Tt)&&(Tt=null),null!==_t&&Dt(_t)&&(_t=null),null!==At&&Dt(At)&&(At=null),$t.forEach(Mt),Pt.forEach(Mt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ft)))}function Wt(e){function t(t){return Ut(t,e)}if(0<zt.length){Ut(zt[0],e);for(var r=1;r<zt.length;r++){var n=zt[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==_t&&Ut(_t,e),null!==At&&Ut(At,e),$t.forEach(t),Pt.forEach(t),r=0;r<Nt.length;r++)(n=Nt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&null===(r=Nt[0]).blockedOn;)It(r),null===r.blockedOn&&Nt.shift()}var Bt=y.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,r,n){var a=xt,i=Bt.transition;Bt.transition=null;try{xt=1,Kt(e,t,r,n)}finally{xt=a,Bt.transition=i}}function Yt(e,t,r,n){var a=xt,i=Bt.transition;Bt.transition=null;try{xt=4,Kt(e,t,r,n)}finally{xt=a,Bt.transition=i}}function Kt(e,t,r,n){if(Ht){var a=Xt(e,t,r,n);if(null===a)Hn(e,t,n,Qt,r),Ot(e,n);else if(function(e,t,r,n,a){switch(t){case"focusin":return Tt=Lt(Tt,e,t,r,n,a),!0;case"dragenter":return _t=Lt(_t,e,t,r,n,a),!0;case"mouseover":return At=Lt(At,e,t,r,n,a),!0;case"pointerover":var i=a.pointerId;return $t.set(i,Lt($t.get(i)||null,e,t,r,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Pt.set(i,Lt(Pt.get(i)||null,e,t,r,n,a)),!0}return!1}(a,e,t,r,n))n.stopPropagation();else if(Ot(e,n),4&t&&-1<Rt.indexOf(e)){for(;null!==a;){var i=xa(a);if(null!==i&&wt(i),null===(i=Xt(e,t,r,n))&&Hn(e,t,n,Qt,r),i===a)break;a=i}null!==a&&n.stopPropagation()}else Hn(e,t,n,null,r)}}var Qt=null;function Xt(e,t,r,n){if(Qt=null,null!==(e=va(e=we(n))))if(null===(t=We(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case rt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var qt=null,Zt=null,Jt=null;function er(){if(Jt)return Jt;var e,t,r=Zt,n=r.length,a="value"in qt?qt.value:qt.textContent,i=a.length;for(e=0;e<n&&r[e]===a[e];e++);var o=n-e;for(t=1;t<=o&&r[n-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function nr(){return!1}function ar(e){function t(t,r,n,a,i){for(var o in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?rr:nr,this.isPropagationStopped=nr,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ir,or,lr,sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=ar(sr),ur=I({},sr,{view:0,detail:0}),dr=ar(ur),pr=I({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Er,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ir=e.screenX-lr.screenX,or=e.screenY-lr.screenY):or=ir=0,lr=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:or}}),fr=ar(pr),mr=ar(I({},pr,{dataTransfer:0})),hr=ar(I({},ur,{relatedTarget:0})),gr=ar(I({},sr,{animationName:0,elapsedTime:0,pseudoElement:0})),br=I({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vr=ar(br),xr=ar(I({},sr,{data:0})),yr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function Er(){return Sr}var Cr=I({},ur,{key:function(e){if(e.key){var t=yr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Er,charCode:function(e){return"keypress"===e.type?tr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jr=ar(Cr),zr=ar(I({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tr=ar(I({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Er})),_r=ar(I({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ar=I({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$r=ar(Ar),Pr=[9,13,27,32],Nr=u&&"CompositionEvent"in window,Rr=null;u&&"documentMode"in document&&(Rr=document.documentMode);var Or=u&&"TextEvent"in window&&!Rr,Lr=u&&(!Nr||Rr&&8<Rr&&11>=Rr),Ir=String.fromCharCode(32),Dr=!1;function Mr(e,t){switch(e){case"keyup":return-1!==Pr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Ur=!1;var Wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wr[e.type]:"textarea"===t}function Hr(e,t,r,n){je(n),0<(t=Yn(t,"onChange")).length&&(r=new cr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Vr=null,Yr=null;function Kr(e){Dn(e,0)}function Qr(e){if(K(ya(e)))return e}function Xr(e,t){if("change"===e)return t}var Gr=!1;if(u){var qr;if(u){var Zr="oninput"in document;if(!Zr){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),Zr="function"===typeof Jr.oninput}qr=Zr}else qr=!1;Gr=qr&&(!document.documentMode||9<document.documentMode)}function en(){Vr&&(Vr.detachEvent("onpropertychange",tn),Yr=Vr=null)}function tn(e){if("value"===e.propertyName&&Qr(Yr)){var t=[];Hr(t,Yr,e,we(e)),$e(Kr,t)}}function rn(e,t,r){"focusin"===e?(en(),Yr=r,(Vr=t).attachEvent("onpropertychange",tn)):"focusout"===e&&en()}function nn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr(Yr)}function an(e,t){if("click"===e)return Qr(t)}function on(e,t){if("input"===e||"change"===e)return Qr(t)}var ln="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sn(e,t){if(ln(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!d.call(t,a)||!ln(e[a],t[a]))return!1}return!0}function cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function un(e,t){var r,n=cn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cn(n)}}function dn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pn(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(n){r=!1}if(!r)break;t=Q((e=t.contentWindow).document)}return t}function fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mn(e){var t=pn(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dn(r.ownerDocument.documentElement,r)){if(null!==n&&fn(r))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(n.start,a);n=void 0===n.end?i:Math.min(n.end,a),!e.extend&&i>n&&(a=n,n=i,i=a),a=un(r,i);var o=un(r,n);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hn=u&&"documentMode"in document&&11>=document.documentMode,gn=null,bn=null,vn=null,xn=!1;function yn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;xn||null==gn||gn!==Q(n)||("selectionStart"in(n=gn)&&fn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},vn&&sn(vn,n)||(vn=n,0<(n=Yn(bn,"onSelect")).length&&(t=new cr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gn)))}function wn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Sn={},En={};function Cn(e){if(Sn[e])return Sn[e];if(!kn[e])return e;var t,r=kn[e];for(t in r)if(r.hasOwnProperty(t)&&t in En)return Sn[e]=r[t];return e}u&&(En=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);var jn=Cn("animationend"),zn=Cn("animationiteration"),Tn=Cn("animationstart"),_n=Cn("transitionend"),An=new Map,$n="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){An.set(e,t),s(t,[e])}for(var Nn=0;Nn<$n.length;Nn++){var Rn=$n[Nn];Pn(Rn.toLowerCase(),"on"+(Rn[0].toUpperCase()+Rn.slice(1)))}Pn(jn,"onAnimationEnd"),Pn(zn,"onAnimationIteration"),Pn(Tn,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(_n,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ln=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function In(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,a,o,l,s,c){if(Ue.apply(this,arguments),Le){if(!Le)throw Error(i(198));var u=Ie;Le=!1,Ie=null,De||(De=!0,Me=u)}}(n,t,void 0,e),e.currentTarget=null}function Dn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;In(a,l,c),i=s}else for(o=0;o<n.length;o++){if(s=(l=n[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;In(a,l,c),i=s}}}if(De)throw e=Me,De=!1,Me=null,e}function Mn(e,t){var r=t[ha];void 0===r&&(r=t[ha]=new Set);var n=e+"__bubble";r.has(n)||(Bn(t,e,2,!1),r.add(n))}function Fn(e,t,r){var n=0;t&&(n|=4),Bn(r,e,n,t)}var Un="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[Un]){e[Un]=!0,o.forEach((function(t){"selectionchange"!==t&&(Ln.has(t)||Fn(t,!1,e),Fn(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Un]||(t[Un]=!0,Fn("selectionchange",!1,t))}}function Bn(e,t,r,n){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=Yt;break;default:a=Kt}r=a.bind(null,t,r,e),a=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Hn(e,t,r,n,a){var i=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var o=n.tag;if(3===o||4===o){var l=n.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=n.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=va(l)))return;if(5===(s=o.tag)||6===s){n=i=o;continue e}l=l.parentNode}}n=n.return}$e((function(){var n=i,a=we(r),o=[];e:{var l=An.get(e);if(void 0!==l){var s=cr,c=e;switch(e){case"keypress":if(0===tr(r))break e;case"keydown":case"keyup":s=jr;break;case"focusin":c="focus",s=hr;break;case"focusout":c="blur",s=hr;break;case"beforeblur":case"afterblur":s=hr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tr;break;case jn:case zn:case Tn:s=gr;break;case _n:s=_r;break;case"scroll":s=dr;break;case"wheel":s=$r;break;case"copy":case"cut":case"paste":s=vr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=zr}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,m=n;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Pe(m,p))&&u.push(Vn(m,h,f)))),d)break;m=m.return}0<u.length&&(l=new s(l,c,null,r,a),o.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||r===ye||!(c=r.relatedTarget||r.fromElement)||!va(c)&&!c[ma])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=n,null!==(c=(c=r.relatedTarget||r.toElement)?va(c):null)&&(c!==(d=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=n),s!==c)){if(u=fr,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(u=zr,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==s?l:ya(s),f=null==c?l:ya(c),(l=new u(h,m+"leave",s,r,a)).target=d,l.relatedTarget=f,h=null,va(a)===n&&((u=new u(p,m+"enter",c,r,a)).target=f,u.relatedTarget=d,h=u),d=h,s&&c)e:{for(p=c,m=0,f=u=s;f;f=Kn(f))m++;for(f=0,h=p;h;h=Kn(h))f++;for(;0<m-f;)u=Kn(u),m--;for(;0<f-m;)p=Kn(p),f--;for(;m--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kn(u),p=Kn(p)}u=null}else u=null;null!==s&&Qn(o,l,s,u,!1),null!==c&&null!==d&&Qn(o,d,c,u,!0)}if("select"===(s=(l=n?ya(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Xr;else if(Br(l))if(Gr)g=on;else{g=nn;var b=rn}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=an);switch(g&&(g=g(e,n))?Hr(o,g,r,a):(b&&b(e,l,n),"focusout"===e&&(b=l._wrapperState)&&b.controlled&&"number"===l.type&&ee(l,"number",l.value)),b=n?ya(n):window,e){case"focusin":(Br(b)||"true"===b.contentEditable)&&(gn=b,bn=n,vn=null);break;case"focusout":vn=bn=gn=null;break;case"mousedown":xn=!0;break;case"contextmenu":case"mouseup":case"dragend":xn=!1,yn(o,r,a);break;case"selectionchange":if(hn)break;case"keydown":case"keyup":yn(o,r,a)}var v;if(Nr)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ur?Mr(e,r)&&(x="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(x="onCompositionStart");x&&(Lr&&"ko"!==r.locale&&(Ur||"onCompositionStart"!==x?"onCompositionEnd"===x&&Ur&&(v=er()):(Zt="value"in(qt=a)?qt.value:qt.textContent,Ur=!0)),0<(b=Yn(n,x)).length&&(x=new xr(x,e,null,r,a),o.push({event:x,listeners:b}),v?x.data=v:null!==(v=Fr(r))&&(x.data=v))),(v=Or?function(e,t){switch(e){case"compositionend":return Fr(t);case"keypress":return 32!==t.which?null:(Dr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Dr?null:e;default:return null}}(e,r):function(e,t){if(Ur)return"compositionend"===e||!Nr&&Mr(e,t)?(e=er(),Jt=Zt=qt=null,Ur=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=Yn(n,"onBeforeInput")).length&&(a=new xr("onBeforeInput","beforeinput",null,r,a),o.push({event:a,listeners:n}),a.data=v))}Dn(o,t)}))}function Vn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Yn(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Pe(e,r))&&n.unshift(Vn(e,i,a)),null!=(i=Pe(e,t))&&n.push(Vn(e,i,a))),e=e.return}return n}function Kn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qn(e,t,r,n,a){for(var i=t._reactName,o=[];null!==r&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(null!==s&&s===n)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Pe(r,i))&&o.unshift(Vn(r,s,l)):a||null!=(s=Pe(r,i))&&o.push(Vn(r,s,l))),r=r.return}0!==o.length&&e.push({event:t,listeners:o})}var Xn=/\r\n?/g,Gn=/\u0000|\uFFFD/g;function qn(e){return("string"===typeof e?e:""+e).replace(Xn,"\n").replace(Gn,"")}function Zn(e,t,r){if(t=qn(t),qn(e)!==t&&r)throw Error(i(425))}function Jn(){}var ea=null,ta=null;function ra(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var na="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:na;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&8===a.nodeType)if("/$"===(r=a.data)){if(0===n)return e.removeChild(a),void Wt(t);n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++;r=a}while(r);Wt(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ma="__reactContainer$"+da,ha="__reactEvents$"+da,ga="__reactListeners$"+da,ba="__reactHandles$"+da;function va(e){var t=e[pa];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ma]||r[pa]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=ua(e);null!==e;){if(r=e[pa])return r;e=ua(e)}return t}r=(e=r).parentNode}return null}function xa(e){return!(e=e[pa]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ya(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[fa]||null}var ka=[],Sa=-1;function Ea(e){return{current:e}}function Ca(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function ja(e,t){Sa++,ka[Sa]=e.current,e.current=t}var za={},Ta=Ea(za),_a=Ea(!1),Aa=za;function $a(e,t){var r=e.type.contextTypes;if(!r)return za;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in r)i[a]=t[a];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Na(){Ca(_a),Ca(Ta)}function Ra(e,t,r){if(Ta.current!==za)throw Error(i(168));ja(Ta,t),ja(_a,r)}function Oa(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in t))throw Error(i(108,B(e)||"Unknown",a));return I({},r,n)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||za,Aa=Ta.current,ja(Ta,e),ja(_a,_a.current),!0}function Ia(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=Oa(e,t,Aa),n.__reactInternalMemoizedMergedChildContext=e,Ca(_a),Ca(Ta),ja(Ta,e)):Ca(_a),ja(_a,r)}var Da=null,Ma=!1,Fa=!1;function Ua(e){null===Da?Da=[e]:Da.push(e)}function Wa(){if(!Fa&&null!==Da){Fa=!0;var e=0,t=xt;try{var r=Da;for(xt=1;e<r.length;e++){var n=r[e];do{n=n(!0)}while(null!==n)}Da=null,Ma=!1}catch(a){throw null!==Da&&(Da=Da.slice(e+1)),Ke(Je,Wa),a}finally{xt=t,Fa=!1}}return null}var Ba=[],Ha=0,Va=null,Ya=0,Ka=[],Qa=0,Xa=null,Ga=1,qa="";function Za(e,t){Ba[Ha++]=Ya,Ba[Ha++]=Va,Va=e,Ya=t}function Ja(e,t,r){Ka[Qa++]=Ga,Ka[Qa++]=qa,Ka[Qa++]=Xa,Xa=e;var n=Ga;e=qa;var a=32-ot(n)-1;n&=~(1<<a),r+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Ga=1<<32-ot(t)+a|r<<a|n,qa=i+e}else Ga=1<<i|r<<a|n,qa=e}function ei(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function ti(e){for(;e===Va;)Va=Ba[--Ha],Ba[Ha]=null,Ya=Ba[--Ha],Ba[Ha]=null;for(;e===Xa;)Xa=Ka[--Qa],Ka[Qa]=null,qa=Ka[--Qa],Ka[Qa]=null,Ga=Ka[--Qa],Ka[Qa]=null}var ri=null,ni=null,ai=!1,ii=null;function oi(e,t){var r=$c(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function li(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,ni=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,ni=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==Xa?{id:Ga,overflow:qa}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=$c(18,null,null,0)).stateNode=t,r.return=e,e.child=r,ri=e,ni=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ai){var t=ni;if(t){var r=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ca(r.nextSibling);var n=ri;t&&li(e,t)?oi(n,r):(e.flags=-4097&e.flags|2,ai=!1,ri=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ri=e}}}function ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function di(e){if(e!==ri)return!1;if(!ai)return ui(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ra(e.type,e.memoizedProps)),t&&(t=ni)){if(si(e))throw pi(),Error(i(418));for(;t;)oi(e,t),t=ca(t.nextSibling)}if(ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){ni=ca(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}ni=null}}else ni=ri?ca(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=ni;e;)e=ca(e.nextSibling)}function fi(){ni=ri=null,ai=!1}function mi(e){null===ii?ii=[e]:ii.push(e)}var hi=y.ReactCurrentBatchConfig;function gi(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var a=n,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Nc(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,r,n){return null===t||6!==t.tag?((t=Ic(r,e.mode,n)).return=e,t):((t=a(t,r)).return=e,t)}function c(e,t,r,n){var i=r.type;return i===S?d(e,t,r.props.children,n,r.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===P&&vi(i)===t.type)?((n=a(t,r.props)).ref=gi(e,t,r),n.return=e,n):((n=Rc(r.type,r.key,r.props,null,e.mode,n)).ref=gi(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Dc(r,e.mode,n)).return=e,t):((t=a(t,r.children||[])).return=e,t)}function d(e,t,r,n,i){return null===t||7!==t.tag?((t=Oc(r,e.mode,n,i)).return=e,t):((t=a(t,r)).return=e,t)}function p(e,t,r){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(r=Rc(t.type,t.key,t.props,null,e.mode,r)).ref=gi(e,null,t),r.return=e,r;case k:return(t=Dc(t,e.mode,r)).return=e,t;case P:return p(e,(0,t._init)(t._payload),r)}if(te(t)||O(t))return(t=Oc(t,e.mode,r,null)).return=e,t;bi(e,t)}return null}function f(e,t,r,n){var a=null!==t?t.key:null;if("string"===typeof r&&""!==r||"number"===typeof r)return null!==a?null:s(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return r.key===a?c(e,t,r,n):null;case k:return r.key===a?u(e,t,r,n):null;case P:return f(e,t,(a=r._init)(r._payload),n)}if(te(r)||O(r))return null!==a?null:d(e,t,r,n,null);bi(e,r)}return null}function m(e,t,r,n,a){if("string"===typeof n&&""!==n||"number"===typeof n)return s(t,e=e.get(r)||null,""+n,a);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return c(t,e=e.get(null===n.key?r:n.key)||null,n,a);case k:return u(t,e=e.get(null===n.key?r:n.key)||null,n,a);case P:return m(e,t,r,(0,n._init)(n._payload),a)}if(te(n)||O(n))return d(t,e=e.get(r)||null,n,a,null);bi(t,n)}return null}function h(a,i,l,s){for(var c=null,u=null,d=i,h=i=0,g=null;null!==d&&h<l.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var b=f(a,d,l[h],s);if(null===b){null===d&&(d=g);break}e&&d&&null===b.alternate&&t(a,d),i=o(b,i,h),null===u?c=b:u.sibling=b,u=b,d=g}if(h===l.length)return r(a,d),ai&&Za(a,h),c;if(null===d){for(;h<l.length;h++)null!==(d=p(a,l[h],s))&&(i=o(d,i,h),null===u?c=d:u.sibling=d,u=d);return ai&&Za(a,h),c}for(d=n(a,d);h<l.length;h++)null!==(g=m(d,a,h,l[h],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),i=o(g,i,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),ai&&Za(a,h),c}function g(a,l,s,c){var u=O(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,h=l,g=l=0,b=null,v=s.next();null!==h&&!v.done;g++,v=s.next()){h.index>g?(b=h,h=null):b=h.sibling;var x=f(a,h,v.value,c);if(null===x){null===h&&(h=b);break}e&&h&&null===x.alternate&&t(a,h),l=o(x,l,g),null===d?u=x:d.sibling=x,d=x,h=b}if(v.done)return r(a,h),ai&&Za(a,g),u;if(null===h){for(;!v.done;g++,v=s.next())null!==(v=p(a,v.value,c))&&(l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return ai&&Za(a,g),u}for(h=n(a,h);!v.done;g++,v=s.next())null!==(v=m(h,a,g,v.value,c))&&(e&&null!==v.alternate&&h.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&h.forEach((function(e){return t(a,e)})),ai&&Za(a,g),u}return function e(n,i,o,s){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=i;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){r(n,u.sibling),(i=a(u,o.props.children)).return=n,n=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===P&&vi(c)===u.type){r(n,u.sibling),(i=a(u,o.props)).ref=gi(n,u,o),i.return=n,n=i;break e}r(n,u);break}t(n,u),u=u.sibling}o.type===S?((i=Oc(o.props.children,n.mode,s,o.key)).return=n,n=i):((s=Rc(o.type,o.key,o.props,null,n.mode,s)).ref=gi(n,i,o),s.return=n,n=s)}return l(n);case k:e:{for(u=o.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){r(n,i.sibling),(i=a(i,o.children||[])).return=n,n=i;break e}r(n,i);break}t(n,i),i=i.sibling}(i=Dc(o,n.mode,s)).return=n,n=i}return l(n);case P:return e(n,i,(u=o._init)(o._payload),s)}if(te(o))return h(n,i,o,s);if(O(o))return g(n,i,o,s);bi(n,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(r(n,i.sibling),(i=a(i,o)).return=n,n=i):(r(n,i),(i=Ic(o,n.mode,s)).return=n,n=i),l(n)):r(n,i)}}var yi=xi(!0),wi=xi(!1),ki=Ea(null),Si=null,Ei=null,Ci=null;function ji(){Ci=Ei=Si=null}function zi(e){var t=ki.current;Ca(ki),e._currentValue=t}function Ti(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function _i(e,t){Si=e,Ci=Ei=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function Ai(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===Ei){if(null===Si)throw Error(i(308));Ei=e,Si.dependencies={lanes:0,firstContext:e}}else Ei=Ei.next=e;return t}var $i=null;function Pi(e){null===$i?$i=[e]:$i.push(e)}function Ni(e,t,r,n){var a=t.interleaved;return null===a?(r.next=r,Pi(t)):(r.next=a.next,a.next=r),t.interleaved=r,Ri(e,n)}function Ri(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var Oi=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mi(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!==(2&Ts)){var a=n.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Ri(e,r)}return null===(a=n.interleaved)?(t.next=t,Pi(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ri(e,r)}function Fi(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&r))){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,vt(e,r)}}function Ui(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var a=null,i=null;if(null!==(r=r.firstBaseUpdate)){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===i?a=i=o:i=i.next=o,r=r.next}while(null!==r);null===i?a=i=t:i=i.next=t}else a=i=t;return r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wi(e,t,r,n){var a=e.updateQueue;Oi=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,u=c=s=null,l=i;;){var p=l.lane,f=l.eventTime;if((n&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(p=t,f=r,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,d,p):m)||void 0===p)break e;d=I({},d,p);break e;case 2:Oi=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,o|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Ls|=o,e.lanes=o,e.memoizedState=d}}function Bi(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(null!==a){if(n.callback=null,n=r,"function"!==typeof a)throw Error(i(191,a));a.call(n)}}}var Hi={},Vi=Ea(Hi),Yi=Ea(Hi),Ki=Ea(Hi);function Qi(e){if(e===Hi)throw Error(i(174));return e}function Xi(e,t){switch(ja(Ki,t),ja(Yi,e),ja(Vi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Vi),ja(Vi,t)}function Gi(){Ca(Vi),Ca(Yi),Ca(Ki)}function qi(e){Qi(Ki.current);var t=Qi(Vi.current),r=se(t,e.type);t!==r&&(ja(Yi,e),ja(Vi,r))}function Zi(e){Yi.current===e&&(Ca(Vi),Ca(Yi))}var Ji=Ea(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function ro(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var no=y.ReactCurrentDispatcher,ao=y.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,co=!1,uo=!1,po=0,fo=0;function mo(){throw Error(i(321))}function ho(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ln(e[r],t[r]))return!1;return!0}function go(e,t,r,n,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=null===e||null===e.memoizedState?Jo:el,e=r(n,a),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,no.current=tl,e=r(n,a)}while(uo)}if(no.current=Zo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,co=!1,t)throw Error(i(300));return e}function bo(){var e=0!==po;return po=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function xo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function yo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=xo(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=lo,a=n.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}n.baseQueue=a=o,r.pending=null}if(null!==a){o=a.next,n=n.baseState;var s=l=null,c=null,u=o;do{var d=u.lane;if((io&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=n):c=c.next=p,oo.lanes|=d,Ls|=d}u=u.next}while(null!==u&&u!==o);null===c?l=n:c.next=s,ln(n,t.memoizedState)||(xl=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(null!==(e=r.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Ls|=o,a=a.next}while(a!==e)}else null===a&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ko(e){var t=xo(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);ln(o,t.memoizedState)||(xl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function So(){}function Eo(e,t){var r=oo,n=xo(),a=t(),o=!ln(n.memoizedState,a);if(o&&(n.memoizedState=a,xl=!0),n=n.queue,Lo(zo.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(r.flags|=2048,$o(9,jo.bind(null,r,n,a,t),void 0,null),null===_s)throw Error(i(349));0!==(30&io)||Co(r,t,a)}return a}function Co(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function jo(e,t,r,n){t.value=r,t.getSnapshot=n,To(t)&&_o(e)}function zo(e,t,r){return r((function(){To(t)&&_o(e)}))}function To(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ln(e,r)}catch(n){return!0}}function _o(e){var t=Ri(e,1);null!==t&&rc(t,e,1,-1)}function Ao(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[t.memoizedState,e]}function $o(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function Po(){return xo().memoizedState}function No(e,t,r,n){var a=vo();oo.flags|=e,a.memoizedState=$o(1|t,r,void 0,void 0===n?null:n)}function Ro(e,t,r,n){var a=xo();n=void 0===n?null:n;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==n&&ho(n,o.deps))return void(a.memoizedState=$o(t,r,i,n))}oo.flags|=e,a.memoizedState=$o(1|t,r,i,n)}function Oo(e,t){return No(8390656,8,e,t)}function Lo(e,t){return Ro(2048,8,e,t)}function Io(e,t){return Ro(4,2,e,t)}function Do(e,t){return Ro(4,4,e,t)}function Mo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fo(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,Ro(4,4,Mo.bind(null,t,e),r)}function Uo(){}function Wo(e,t){var r=xo();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ho(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Bo(e,t){var r=xo();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ho(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ho(e,t,r){return 0===(21&io)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=r):(ln(r,t)||(r=ht(),oo.lanes|=r,Ls|=r,e.baseState=!0),t)}function Vo(e,t){var r=xt;xt=0!==r&&4>r?r:4,e(!0);var n=ao.transition;ao.transition={};try{e(!1),t()}finally{xt=r,ao.transition=n}}function Yo(){return xo().memoizedState}function Ko(e,t,r){var n=tc(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Xo(e))Go(t,r);else if(null!==(r=Ni(e,t,r,n))){rc(r,e,n,ec()),qo(r,t,n)}}function Qo(e,t,r){var n=tc(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xo(e))Go(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,ln(l,o)){var s=t.interleaved;return null===s?(a.next=a,Pi(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(c){}null!==(r=Ni(e,t,a,n))&&(rc(r,e,n,a=ec()),qo(r,t,n))}}function Xo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Go(e,t){uo=co=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function qo(e,t,r){if(0!==(4194240&r)){var n=t.lanes;r|=n&=e.pendingLanes,t.lanes=r,vt(e,r)}}var Zo={readContext:Ai,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},Jo={readContext:Ai,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Ai,useEffect:Oo,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,No(4194308,4,Mo.bind(null,t,e),r)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var r=vo();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=vo();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:Ao,useDebugValue:Uo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Vo.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oo,a=vo();if(ai){if(void 0===r)throw Error(i(407));r=r()}else{if(r=t(),null===_s)throw Error(i(349));0!==(30&io)||Co(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Oo(zo.bind(null,n,o,e),[e]),n.flags|=2048,$o(9,jo.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=vo(),t=_s.identifierPrefix;if(ai){var r=qa;t=":"+t+"R"+(r=(Ga&~(1<<32-ot(Ga)-1)).toString(32)+r),0<(r=po++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ai,useCallback:Wo,useContext:Ai,useEffect:Lo,useImperativeHandle:Fo,useInsertionEffect:Io,useLayoutEffect:Do,useMemo:Bo,useReducer:wo,useRef:Po,useState:function(){return wo(yo)},useDebugValue:Uo,useDeferredValue:function(e){return Ho(xo(),lo.memoizedState,e)},useTransition:function(){return[wo(yo)[0],xo().memoizedState]},useMutableSource:So,useSyncExternalStore:Eo,useId:Yo,unstable_isNewReconciler:!1},tl={readContext:Ai,useCallback:Wo,useContext:Ai,useEffect:Lo,useImperativeHandle:Fo,useInsertionEffect:Io,useLayoutEffect:Do,useMemo:Bo,useReducer:ko,useRef:Po,useState:function(){return ko(yo)},useDebugValue:Uo,useDeferredValue:function(e){var t=xo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[ko(yo)[0],xo().memoizedState]},useMutableSource:So,useSyncExternalStore:Eo,useId:Yo,unstable_isNewReconciler:!1};function rl(e,t){if(e&&e.defaultProps){for(var r in t=I({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}function nl(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:I({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ec(),a=tc(e),i=Di(n,a);i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=Mi(e,i,a))&&(rc(t,e,a,n),Fi(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ec(),a=tc(e),i=Di(n,a);i.tag=1,i.payload=t,void 0!==r&&null!==r&&(i.callback=r),null!==(t=Mi(e,i,a))&&(rc(t,e,a,n),Fi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ec(),n=tc(e),a=Di(r,n);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Mi(e,a,n))&&(rc(t,e,n,r),Fi(t,e,n))}};function il(e,t,r,n,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sn(r,n)||!sn(a,i))}function ol(e,t,r){var n=!1,a=za,i=t.contextType;return"object"===typeof i&&null!==i?i=Ai(i):(a=Pa(t)?Aa:Ta.current,i=(n=null!==(n=t.contextTypes)&&void 0!==n)?$a(e,a):za),t=new t(r,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Li(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ai(i):(i=Pa(t)?Aa:Ta.current,a.context=$a(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(nl(e,t,i,r),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Wi(e,r,a,n),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var r="",n=t;do{r+=U(n),n=n.return}while(n);var a=r}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(r){setTimeout((function(){throw r}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,r){(r=Di(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Hs||(Hs=!0,Vs=n),dl(0,t)},r}function ml(e,t,r){(r=Di(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(r.callback=function(){dl(0,t),"function"!==typeof n&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}function hl(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new pl;var a=new Set;n.set(t,a)}else void 0===(a=n.get(t))&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Cc.bind(null,e,t,r),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function bl(e,t,r,n,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=Di(-1,1)).tag=2,Mi(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=y.ReactCurrentOwner,xl=!1;function yl(e,t,r,n){t.child=null===e?wi(t,null,r,n):yi(t,e.child,r,n)}function wl(e,t,r,n,a){r=r.render;var i=t.ref;return _i(t,a),n=go(e,t,r,n,i,a),r=bo(),null===e||xl?(ai&&r&&ei(t),t.flags|=1,yl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function kl(e,t,r,n,a){if(null===e){var i=r.type;return"function"!==typeof i||Pc(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=Rc(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,n,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((r=null!==(r=r.compare)?r:sn)(o,n)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=Nc(i,n)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,r,n,a){if(null!==e){var i=e.memoizedProps;if(sn(i,n)&&e.ref===t.ref){if(xl=!1,t.pendingProps=n=i,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(xl=!0)}}return jl(e,t,r,n,a)}function El(e,t,r){var n=t.pendingProps,a=n.children,i=null!==e?e.memoizedState:null;if("hidden"===n.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ja(Ns,Ps),Ps|=r;else{if(0===(1073741824&r))return e=null!==i?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ja(Ns,Ps),Ps|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==i?i.baseLanes:r,ja(Ns,Ps),Ps|=n}else null!==i?(n=i.baseLanes|r,t.memoizedState=null):n=r,ja(Ns,Ps),Ps|=n;return yl(e,t,a,r),t.child}function Cl(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,r,n,a){var i=Pa(r)?Aa:Ta.current;return i=$a(t,i),_i(t,a),r=go(e,t,r,n,i,a),n=bo(),null===e||xl?(ai&&n&&ei(t),t.flags|=1,yl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function zl(e,t,r,n,a){if(Pa(r)){var i=!0;La(t)}else i=!1;if(_i(t,a),null===t.stateNode)Bl(e,t),ol(t,r,n),sl(t,r,n,a),n=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=r.contextType;"object"===typeof c&&null!==c?c=Ai(c):c=$a(t,c=Pa(r)?Aa:Ta.current);var u=r.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==n||s!==c)&&ll(t,o,n,c),Oi=!1;var p=t.memoizedState;o.state=p,Wi(t,n,o,a),s=t.memoizedState,l!==n||p!==s||_a.current||Oi?("function"===typeof u&&(nl(t,r,u,n),s=t.memoizedState),(l=Oi||il(t,r,l,n,p,s,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),o.props=n,o.state=s,o.context=c,n=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Ii(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:rl(t.type,l),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(s=r.contextType)&&null!==s?s=Ai(s):s=$a(t,s=Pa(r)?Aa:Ta.current);var f=r.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,o,n,s),Oi=!1,p=t.memoizedState,o.state=p,Wi(t,n,o,a);var m=t.memoizedState;l!==d||p!==m||_a.current||Oi?("function"===typeof f&&(nl(t,r,f,n),m=t.memoizedState),(c=Oi||il(t,r,c,n,p,m,s)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(n,m,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,m,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),o.props=n,o.state=m,o.context=s,n=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Tl(e,t,r,n,i,a)}function Tl(e,t,r,n,a,i){Cl(e,t);var o=0!==(128&t.flags);if(!n&&!o)return a&&Ia(t,r,!1),Hl(e,t,i);n=t.stateNode,vl.current=t;var l=o&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&o?(t.child=yi(t,e.child,null,i),t.child=yi(t,null,l,i)):yl(e,t,l,i),t.memoizedState=n.state,a&&Ia(t,r,!0),t.child}function _l(e){var t=e.stateNode;t.pendingContext?Ra(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(0,t.context,!1),Xi(e,t.containerInfo)}function Al(e,t,r,n,a){return fi(),mi(a),t.flags|=256,yl(e,t,r,n),t.child}var $l,Pl,Nl,Rl,Ol={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Il(e,t,r){var n,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!==(2&o)),n?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),ja(Ji,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Lc(s,a,0,null),e=Oc(e,a,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ll(r),t.memoizedState=Ol,e):Dl(t,s));if(null!==(o=e.memoizedState)&&null!==(n=o.dehydrated))return function(e,t,r,n,a,o,l){if(r)return 256&t.flags?(t.flags&=-257,Ml(e,t,l,n=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=Lc({mode:"visible",children:n.children},a,0,null),(o=Oc(o,a,l,null)).flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,0!==(1&t.mode)&&yi(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=Ol,o);if(0===(1&t.mode))return Ml(e,t,l,null);if("$!"===a.data){if(n=a.nextSibling&&a.nextSibling.dataset)var s=n.dgst;return n=s,Ml(e,t,l,n=ul(o=Error(i(419)),n,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(n=_s)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(n.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Ri(e,a),rc(n,e,a,-1))}return hc(),Ml(e,t,l,n=ul(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=zc.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ni=ca(a.nextSibling),ri=t,ai=!0,ii=null,null!==e&&(Ka[Qa++]=Ga,Ka[Qa++]=qa,Ka[Qa++]=Xa,Ga=e.id,qa=e.overflow,Xa=t),t=Dl(t,n.children),t.flags|=4096,t)}(e,t,s,a,n,o,r);if(l){l=a.fallback,s=t.mode,n=(o=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Nc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==n?l=Nc(n,l):(l=Oc(l,s,r,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Ll(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,t.memoizedState=Ol,a}return e=(l=e.child).sibling,a=Nc(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=r),a.return=t,a.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Dl(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ml(e,t,r,n){return null!==n&&mi(n),yi(t,e.child,null,r),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fl(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Ti(e.return,t,r)}function Ul(e,t,r,n,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=a)}function Wl(e,t,r){var n=t.pendingProps,a=n.revealOrder,i=n.tail;if(yl(e,t,n.children,r),0!==(2&(n=Ji.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fl(e,r,t);else if(19===e.tag)Fl(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ja(Ji,n),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;null!==r;)null!==(e=r.alternate)&&null===eo(e)&&(a=r),r=r.sibling;null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ul(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ul(t,!0,r,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ls|=t.lanes,0===(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Nc(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Nc(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Vl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=14680064&a.subtreeFlags,n|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kl(e,t,r){var n=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Pa(t.type)&&Na(),Yl(t),null;case 3:return n=t.stateNode,Gi(),Ca(_a),Ca(Ta),ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(oc(ii),ii=null))),Pl(e,t),Yl(t),null;case 5:Zi(t);var a=Qi(Ki.current);if(r=t.type,null!==e&&null!=t.stateNode)Nl(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(null===t.stateNode)throw Error(i(166));return Yl(t),null}if(e=Qi(Vi.current),di(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[pa]=t,n[fa]=o,e=0!==(1&t.mode),r){case"dialog":Mn("cancel",n),Mn("close",n);break;case"iframe":case"object":case"embed":Mn("load",n);break;case"video":case"audio":for(a=0;a<On.length;a++)Mn(On[a],n);break;case"source":Mn("error",n);break;case"img":case"image":case"link":Mn("error",n),Mn("load",n);break;case"details":Mn("toggle",n);break;case"input":G(n,o),Mn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Mn("invalid",n);break;case"textarea":ae(n,o),Mn("invalid",n)}for(var s in ve(r,o),a=null,o)if(o.hasOwnProperty(s)){var c=o[s];"children"===s?"string"===typeof c?n.textContent!==c&&(!0!==o.suppressHydrationWarning&&Zn(n.textContent,c,e),a=["children",c]):"number"===typeof c&&n.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Zn(n.textContent,c,e),a=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Mn("scroll",n)}switch(r){case"input":Y(n),J(n,o,!0);break;case"textarea":Y(n),oe(n);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(n.onclick=Jn)}n=a,t.updateQueue=n,null!==n&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),"select"===r&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[pa]=t,e[fa]=n,$l(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(r,n),r){case"dialog":Mn("cancel",e),Mn("close",e),a=n;break;case"iframe":case"object":case"embed":Mn("load",e),a=n;break;case"video":case"audio":for(a=0;a<On.length;a++)Mn(On[a],e);a=n;break;case"source":Mn("error",e),a=n;break;case"img":case"image":case"link":Mn("error",e),Mn("load",e),a=n;break;case"details":Mn("toggle",e),a=n;break;case"input":G(e,n),a=X(e,n),Mn("invalid",e);break;case"option":default:a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=I({},n,{value:void 0}),Mn("invalid",e);break;case"textarea":ae(e,n),a=ne(e,n),Mn("invalid",e)}for(o in ve(r,a),c=a)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==r||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Mn("scroll",e):null!=u&&x(e,o,u,s))}switch(r){case"input":Y(e),J(e,n,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=n.value&&e.setAttribute("value",""+H(n.value));break;case"select":e.multiple=!!n.multiple,null!=(o=n.value)?re(e,!!n.multiple,o,!1):null!=n.defaultValue&&re(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Rl(e,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));if(r=Qi(Ki.current),Qi(Vi.current),di(t)){if(n=t.stateNode,r=t.memoizedProps,n[pa]=t,(o=n.nodeValue!==r)&&null!==(e=ri))switch(e.tag){case 3:Zn(n.nodeValue,r,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zn(n.nodeValue,r,0!==(1&e.mode))}o&&(t.flags|=4)}else(n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[pa]=t,t.stateNode=n}return Yl(t),null;case 13:if(Ca(Ji),n=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ni&&0!==(1&t.mode)&&0===(128&t.flags))pi(),fi(),t.flags|=98560,o=!1;else if(o=di(t),null!==n&&null!==n.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[pa]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),o=!1}else null!==ii&&(oc(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=r,t):((n=null!==n)!==(null!==e&&null!==e.memoizedState)&&n&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===Rs&&(Rs=3):hc())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Gi(),Pl(e,t),null===e&&Wn(t.stateNode.containerInfo),Yl(t),null;case 10:return zi(t.type._context),Yl(t),null;case 19:if(Ca(Ji),null===(o=t.memoizedState))return Yl(t),null;if(n=0!==(128&t.flags),null===(s=o.rendering))if(n)Vl(o,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(n=s.updateQueue)&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;null!==r;)e=n,(o=r).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ja(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&qe()>Ws&&(t.flags|=128,n=!0,Vl(o,!1),t.lanes=4194304)}else{if(!n)if(null!==(e=eo(s))){if(t.flags|=128,n=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Yl(t),null}else 2*qe()-o.renderingStartTime>Ws&&1073741824!==r&&(t.flags|=128,n=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=o.last)?r.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=qe(),t.sibling=null,r=Ji.current,ja(Ji,n?1&r|2:1&r),t):(Yl(t),null);case 22:case 23:return dc(),n=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==n&&(t.flags|=8192),n&&0!==(1&t.mode)?0!==(1073741824&Ps)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Ql(e,t){switch(ti(t),t.tag){case 1:return Pa(t.type)&&Na(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Gi(),Ca(_a),Ca(Ta),ro(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ca(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(Ji),null;case 4:return Gi(),null;case 10:return zi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}$l=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Pl=function(){},Nl=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Qi(Vi.current);var i,o=null;switch(r){case"input":a=X(e,a),n=X(e,n),o=[];break;case"select":a=I({},a,{value:void 0}),n=I({},n,{value:void 0}),o=[];break;case"textarea":a=ne(e,a),n=ne(e,n),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof n.onClick&&(e.onclick=Jn)}for(u in ve(r,n),r=null,a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(s=null!=a?a[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Mn("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Rl=function(e,t,r,n){r!==n&&(t.flags|=4)};var Xl=!1,Gl=!1,ql="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var r=e.ref;if(null!==r)if("function"===typeof r)try{r(null)}catch(n){Ec(e,t,n)}else r.current=null}function es(e,t,r){try{r()}catch(n){Ec(e,t,n)}}var ts=!1;function rs(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var a=n=n.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,r,i)}a=a.next}while(a!==n)}}function ns(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function as(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ha],delete t[ga],delete t[ba])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=Jn));else if(4!==n&&null!==(e=e.child))for(ss(e,t,r),e=e.sibling;null!==e;)ss(e,t,r),e=e.sibling}function cs(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(cs(e,t,r),e=e.sibling;null!==e;)cs(e,t,r),e=e.sibling}var us=null,ds=!1;function ps(e,t,r){for(r=r.child;null!==r;)fs(e,t,r),r=r.sibling}function fs(e,t,r){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,r)}catch(l){}switch(r.tag){case 5:Gl||Jl(r,t);case 6:var n=us,a=ds;us=null,ps(e,t,r),ds=a,null!==(us=n)&&(ds?(e=us,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):us.removeChild(r.stateNode));break;case 18:null!==us&&(ds?(e=us,r=r.stateNode,8===e.nodeType?sa(e.parentNode,r):1===e.nodeType&&sa(e,r),Wt(e)):sa(us,r.stateNode));break;case 4:n=us,a=ds,us=r.stateNode.containerInfo,ds=!0,ps(e,t,r),us=n,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(n=r.updateQueue)&&null!==(n=n.lastEffect))){a=n=n.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(r,t,o),a=a.next}while(a!==n)}ps(e,t,r);break;case 1:if(!Gl&&(Jl(r,t),"function"===typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ec(r,t,l)}ps(e,t,r);break;case 21:ps(e,t,r);break;case 22:1&r.mode?(Gl=(n=Gl)||null!==r.memoizedState,ps(e,t,r),Gl=n):ps(e,t,r);break;default:ps(e,t,r)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new ql),t.forEach((function(t){var n=Tc.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function hs(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));fs(o,l,a),us=null,ds=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){Ec(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),bs(e),4&n){try{rs(3,e,e.return),ns(3,e)}catch(g){Ec(e,e.return,g)}try{rs(5,e,e.return)}catch(g){Ec(e,e.return,g)}}break;case 1:hs(t,e),bs(e),512&n&&null!==r&&Jl(r,r.return);break;case 5:if(hs(t,e),bs(e),512&n&&null!==r&&Jl(r,r.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){Ec(e,e.return,g)}}if(4&n&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==r?r.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===o.type&&null!=o.name&&q(a,o),xe(s,l);var u=xe(s,o);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):x(a,d,p,u)}switch(s){case"input":Z(a,o);break;case"textarea":ie(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?re(a,!!o.multiple,m,!1):f!==!!o.multiple&&(null!=o.defaultValue?re(a,!!o.multiple,o.defaultValue,!0):re(a,!!o.multiple,o.multiple?[]:"",!1))}a[fa]=o}catch(g){Ec(e,e.return,g)}}break;case 6:if(hs(t,e),bs(e),4&n){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Ec(e,e.return,g)}}break;case 3:if(hs(t,e),bs(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){Ec(e,e.return,g)}break;case 4:default:hs(t,e),bs(e);break;case 13:hs(t,e),bs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=qe())),4&n&&ms(e);break;case 22:if(d=null!==r&&null!==r.memoizedState,1&e.mode?(Gl=(u=Gl)||d,hs(t,e),Gl=u):hs(t,e),bs(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(p=Zl=d;null!==Zl;){switch(m=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:rs(4,f,f.return);break;case 1:Jl(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){n=f,r=f.return;try{t=n,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Ec(n,r,g)}}break;case 5:Jl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==m?(m.return=f,Zl=m):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,u?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=he("display",l))}catch(g){Ec(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Ec(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hs(t,e),bs(e),4&n&&ms(e);case 21:}}function bs(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(os(r)){var n=r;break e}r=r.return}throw Error(i(160))}switch(n.tag){case 5:var a=n.stateNode;32&n.flags&&(pe(a,""),n.flags&=-33),cs(e,ls(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){Ec(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,r){Zl=e,xs(e,t,r)}function xs(e,t,r){for(var n=0!==(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&n){var o=null!==a.memoizedState||Xl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=Xl;var c=Gl;if(Xl=o,(Gl=s)&&!c)for(Zl=a;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?ks(a):null!==s?(s.return=o,Zl=s):ks(a);for(;null!==i;)Zl=i,xs(i,t,r),i=i.sibling;Zl=a,Xl=l,Gl=c}ys(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Zl=i):ys(e)}}function ys(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var r=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||ns(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!Gl)if(null===r)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:rl(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Bi(t,o,n);break;case 3:var l=t.updateQueue;if(null!==l){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}Bi(t,l,r)}break;case 5:var s=t.stateNode;if(null===r&&4&t.flags){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Wt(p)}}}break;default:throw Error(i(163))}Gl||512&t.flags&&as(t)}catch(f){Ec(t,t.return,f)}}if(t===e){Zl=null;break}if(null!==(r=t.sibling)){r.return=t.return,Zl=r;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var r=t.sibling;if(null!==r){r.return=t.return,Zl=r;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ns(4,t)}catch(s){Ec(t,r,s)}break;case 1:var n=t.stateNode;if("function"===typeof n.componentDidMount){var a=t.return;try{n.componentDidMount()}catch(s){Ec(t,a,s)}}var i=t.return;try{as(t)}catch(s){Ec(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Ec(t,o,s)}}}catch(s){Ec(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Ss,Es=Math.ceil,Cs=y.ReactCurrentDispatcher,js=y.ReactCurrentOwner,zs=y.ReactCurrentBatchConfig,Ts=0,_s=null,As=null,$s=0,Ps=0,Ns=Ea(0),Rs=0,Os=null,Ls=0,Is=0,Ds=0,Ms=null,Fs=null,Us=0,Ws=1/0,Bs=null,Hs=!1,Vs=null,Ys=null,Ks=!1,Qs=null,Xs=0,Gs=0,qs=null,Zs=-1,Js=0;function ec(){return 0!==(6&Ts)?qe():-1!==Zs?Zs:Zs=qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ts)&&0!==$s?$s&-$s:null!==hi.transition?(0===Js&&(Js=ht()),Js):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function rc(e,t,r,n){if(50<Gs)throw Gs=0,qs=null,Error(i(185));bt(e,r,n),0!==(2&Ts)&&e===_s||(e===_s&&(0===(2&Ts)&&(Is|=r),4===Rs&&lc(e,$s)),nc(e,n),1===r&&0===Ts&&0===(1&t.mode)&&(Ws=qe()+500,Ma&&Wa()))}function nc(e,t){var r=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&r)&&0===(l&n)||(a[o]=ft(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var n=pt(e,e===_s?$s:0);if(0===n)null!==r&&Qe(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(null!=r&&Qe(r),1===t)0===e.tag?function(e){Ma=!0,Ua(e)}(sc.bind(null,e)):Ua(sc.bind(null,e)),oa((function(){0===(6&Ts)&&Wa()})),r=null;else{switch(yt(n)){case 1:r=Je;break;case 4:r=et;break;case 16:default:r=tt;break;case 536870912:r=nt}r=_c(r,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ac(e,t){if(Zs=-1,Js=0,0!==(6&Ts))throw Error(i(327));var r=e.callbackNode;if(kc()&&e.callbackNode!==r)return null;var n=pt(e,e===_s?$s:0);if(0===n)return null;if(0!==(30&n)||0!==(n&e.expiredLanes)||t)t=gc(e,n);else{t=n;var a=Ts;Ts|=2;var o=mc();for(_s===e&&$s===t||(Bs=null,Ws=qe()+500,pc(e,t));;)try{vc();break}catch(s){fc(e,s)}ji(),Cs.current=o,Ts=a,null!==As?t=0:(_s=null,$s=0,t=Rs)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(n=a,t=ic(e,a))),1===t)throw r=Os,pc(e,0),lc(e,n),nc(e,qe()),r;if(6===t)lc(e,n);else{if(a=e.current.alternate,0===(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var a=r[n],i=a.getSnapshot;a=a.value;try{if(!ln(i(),a))return!1}catch(l){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gc(e,n))&&(0!==(o=mt(e))&&(n=o,t=ic(e,o))),1===t))throw r=Os,pc(e,0),lc(e,n),nc(e,qe()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Fs,Bs);break;case 3:if(lc(e,n),(130023424&n)===n&&10<(t=Us+500-qe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&n)!==n){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=na(wc.bind(null,e,Fs,Bs),t);break}wc(e,Fs,Bs);break;case 4:if(lc(e,n),(4194240&n)===n)break;for(t=e.eventTimes,a=-1;0<n;){var l=31-ot(n);o=1<<l,(l=t[l])>a&&(a=l),n&=~o}if(n=a,10<(n=(120>(n=qe()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Es(n/1960))-n)){e.timeoutHandle=na(wc.bind(null,e,Fs,Bs),n);break}wc(e,Fs,Bs);break;default:throw Error(i(329))}}}return nc(e,qe()),e.callbackNode===r?ac.bind(null,e):null}function ic(e,t){var r=Ms;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fs,Fs=r,null!==t&&oc(t)),e}function oc(e){null===Fs?Fs=e:Fs.push.apply(Fs,e)}function lc(e,t){for(t&=~Ds,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ot(t),n=1<<r;e[r]=-1,t&=~n}}function sc(e){if(0!==(6&Ts))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return nc(e,qe()),null;var r=gc(e,t);if(0!==e.tag&&2===r){var n=mt(e);0!==n&&(t=n,r=ic(e,n))}if(1===r)throw r=Os,pc(e,0),lc(e,t),nc(e,qe()),r;if(6===r)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fs,Bs),nc(e,qe()),null}function cc(e,t){var r=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=r)&&(Ws=qe()+500,Ma&&Wa())}}function uc(e){null!==Qs&&0===Qs.tag&&0===(6&Ts)&&kc();var t=Ts;Ts|=1;var r=zs.transition,n=xt;try{if(zs.transition=null,xt=1,e)return e()}finally{xt=n,zs.transition=r,0===(6&(Ts=t))&&Wa()}}function dc(){Ps=Ns.current,Ca(Ns)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,aa(r)),null!==As)for(r=As.return;null!==r;){var n=r;switch(ti(n),n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&Na();break;case 3:Gi(),Ca(_a),Ca(Ta),ro();break;case 5:Zi(n);break;case 4:Gi();break;case 13:case 19:Ca(Ji);break;case 10:zi(n.type._context);break;case 22:case 23:dc()}r=r.return}if(_s=e,As=e=Nc(e.current,null),$s=Ps=t,Rs=0,Os=null,Ds=Is=Ls=0,Fs=Ms=null,null!==$i){for(t=0;t<$i.length;t++)if(null!==(n=(r=$i[t]).interleaved)){r.interleaved=null;var a=n.next,i=r.pending;if(null!==i){var o=i.next;i.next=a,n.next=o}r.pending=n}$i=null}return e}function fc(e,t){for(;;){var r=As;try{if(ji(),no.current=Zo,co){for(var n=oo.memoizedState;null!==n;){var a=n.queue;null!==a&&(a.pending=null),n=n.next}co=!1}if(io=0,so=lo=oo=null,uo=!1,po=0,js.current=null,null===r||null===r.return){Rs=1,Os=t,As=null;break}e:{var o=e,l=r.return,s=r,c=t;if(t=$s,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gl(l);if(null!==m){m.flags&=-257,bl(m,l,s,0,t),1&m.mode&&hl(o,u,t),c=u;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(c),t.updateQueue=g}else h.add(c);break e}if(0===(1&t)){hl(o,u,t),hc();break e}c=Error(i(426))}else if(ai&&1&s.mode){var b=gl(l);if(null!==b){0===(65536&b.flags)&&(b.flags|=256),bl(b,l,s,0,t),mi(cl(c,s));break e}}o=c=cl(c,s),4!==Rs&&(Rs=2),null===Ms?Ms=[o]:Ms.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,fl(0,c,t));break e;case 1:s=c;var v=o.type,x=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ys||!Ys.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,ml(o,s,t));break e}}o=o.return}while(null!==o)}yc(r)}catch(y){t=y,As===r&&null!==r&&(As=r=r.return);continue}break}}function mc(){var e=Cs.current;return Cs.current=Zo,null===e?Zo:e}function hc(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===_s||0===(268435455&Ls)&&0===(268435455&Is)||lc(_s,$s)}function gc(e,t){var r=Ts;Ts|=2;var n=mc();for(_s===e&&$s===t||(Bs=null,pc(e,t));;)try{bc();break}catch(a){fc(e,a)}if(ji(),Ts=r,Cs.current=n,null!==As)throw Error(i(261));return _s=null,$s=0,Rs}function bc(){for(;null!==As;)xc(As)}function vc(){for(;null!==As&&!Xe();)xc(As)}function xc(e){var t=Ss(e.alternate,e,Ps);e.memoizedProps=e.pendingProps,null===t?yc(e):As=t,js.current=null}function yc(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(r=Kl(r,t,Ps)))return void(As=r)}else{if(null!==(r=Ql(r,t)))return r.flags&=32767,void(As=r);if(null===e)return Rs=6,void(As=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(As=t);As=t=e}while(null!==t);0===Rs&&(Rs=5)}function wc(e,t,r){var n=xt,a=zs.transition;try{zs.transition=null,xt=1,function(e,t,r,n){do{kc()}while(null!==Qs);if(0!==(6&Ts))throw Error(i(327));r=e.finishedWork;var a=e.finishedLanes;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ot(r),i=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~i}}(e,o),e===_s&&(As=_s=null,$s=0),0===(2064&r.subtreeFlags)&&0===(2064&r.flags)||Ks||(Ks=!0,_c(tt,(function(){return kc(),null}))),o=0!==(15990&r.flags),0!==(15990&r.subtreeFlags)||o){o=zs.transition,zs.transition=null;var l=xt;xt=1;var s=Ts;Ts|=4,js.current=null,function(e,t){if(ea=Ht,fn(e=pn())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch(w){r=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==r||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==n&&3!==p.nodeType||(c=l+n),3===p.nodeType&&(l+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===r&&++u===a&&(s=l),f===o&&++d===n&&(c=l),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}r=-1===s||-1===c?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ta={focusedElem:e,selectionRange:r},Ht=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,b=h.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:rl(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(i(163))}}catch(w){Ec(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}h=ts,ts=!1}(e,r),gs(r,e),mn(ta),Ht=!!ea,ta=ea=null,e.current=r,vs(r,e,a),Ge(),Ts=s,xt=l,zs.transition=o}else e.current=r;if(Ks&&(Ks=!1,Qs=e,Xs=a),o=e.pendingLanes,0===o&&(Ys=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(r.stateNode),nc(e,qe()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Xs)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===qs?Gs++:(Gs=0,qs=e):Gs=0,Wa()}(e,t,r,n)}finally{zs.transition=a,xt=n}return null}function kc(){if(null!==Qs){var e=yt(Xs),t=zs.transition,r=xt;try{if(zs.transition=null,xt=16>e?16:e,null===Qs)var n=!1;else{if(e=Qs,Qs=null,Xs=0,0!==(6&Ts))throw Error(i(331));var a=Ts;for(Ts|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Zl=u;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:rs(8,d,o)}var p=d.child;if(null!==p)p.return=d,Zl=p;else for(;null!==Zl;){var f=(d=Zl).sibling,m=d.return;if(is(d),d===u){Zl=null;break}if(null!==f){f.return=m,Zl=f;break}Zl=m}}}var h=o.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(null!==g)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Zl=v;break e}Zl=o.return}}var x=e.current;for(Zl=x;null!==Zl;){var y=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==y)y.return=l,Zl=y;else e:for(l=x;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:ns(9,s)}}catch(k){Ec(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Ts=a,Wa(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(k){}n=!0}return n}finally{xt=r,zs.transition=t}}return!1}function Sc(e,t,r){e=Mi(e,t=fl(0,t=cl(r,t),1),1),t=ec(),null!==e&&(bt(e,1,t),nc(e,t))}function Ec(e,t,r){if(3===e.tag)Sc(e,e,r);else for(;null!==t;){if(3===t.tag){Sc(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Ys||!Ys.has(n))){t=Mi(t,e=ml(t,e=cl(r,e),1),1),e=ec(),null!==t&&(bt(t,1,e),nc(t,e));break}}t=t.return}}function Cc(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&r,_s===e&&($s&r)===r&&(4===Rs||3===Rs&&(130023424&$s)===$s&&500>qe()-Us?pc(e,0):Ds|=r),nc(e,t)}function jc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var r=ec();null!==(e=Ri(e,t))&&(bt(e,t,r),nc(e,r))}function zc(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),jc(e,r)}function Tc(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}null!==n&&n.delete(t),jc(e,r)}function _c(e,t){return Ke(e,t)}function Ac(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $c(e,t,r,n){return new Ac(e,t,r,n)}function Pc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nc(e,t){var r=e.alternate;return null===r?((r=$c(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Rc(e,t,r,n,a,o){var l=2;if(n=e,"function"===typeof e)Pc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Oc(r.children,a,o,t);case E:l=8,a|=8;break;case C:return(e=$c(12,r,t,2|a)).elementType=C,e.lanes=o,e;case _:return(e=$c(13,r,t,a)).elementType=_,e.lanes=o,e;case A:return(e=$c(19,r,t,a)).elementType=A,e.lanes=o,e;case N:return Lc(r,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case z:l=9;break e;case T:l=11;break e;case $:l=14;break e;case P:l=16,n=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=$c(l,r,t,a)).elementType=e,t.type=n,t.lanes=o,t}function Oc(e,t,r,n){return(e=$c(7,e,n,t)).lanes=r,e}function Lc(e,t,r,n){return(e=$c(22,e,n,t)).elementType=N,e.lanes=r,e.stateNode={isHidden:!1},e}function Ic(e,t,r){return(e=$c(6,e,null,t)).lanes=r,e}function Dc(e,t,r){return(t=$c(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mc(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fc(e,t,r,n,a,i,o,l,s){return e=new Mc(e,t,r,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=$c(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(i),e}function Uc(e){if(!e)return za;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var r=e.type;if(Pa(r))return Oa(e,r,t)}return t}function Wc(e,t,r,n,a,i,o,l,s){return(e=Fc(r,n,!0,e,0,i,0,l,s)).context=Uc(null),r=e.current,(i=Di(n=ec(),a=tc(r))).callback=void 0!==t&&null!==t?t:null,Mi(r,i,a),e.current.lanes=a,bt(e,a,n),nc(e,n),e}function Bc(e,t,r,n){var a=t.current,i=ec(),o=tc(a);return r=Uc(r),null===t.context?t.context=r:t.pendingContext=r,(t=Di(i,o)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=Mi(a,t,o))&&(rc(e,a,o,i),Fi(e,a,o)),o}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function Yc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Ss=function(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps||_a.current)xl=!0;else{if(0===(e.lanes&r)&&0===(128&t.flags))return xl=!1,function(e,t,r){switch(t.tag){case 3:_l(t),fi();break;case 5:qi(t);break;case 1:Pa(t.type)&&La(t);break;case 4:Xi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;ja(ki,n._currentValue),n._currentValue=a;break;case 13:if(null!==(n=t.memoizedState))return null!==n.dehydrated?(ja(Ji,1&Ji.current),t.flags|=128,null):0!==(r&t.child.childLanes)?Il(e,t,r):(ja(Ji,1&Ji.current),null!==(e=Hl(e,t,r))?e.sibling:null);ja(Ji,1&Ji.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(128&e.flags)){if(n)return Wl(e,t,r);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ja(Ji,Ji.current),n)break;return null;case 22:case 23:return t.lanes=0,El(e,t,r)}return Hl(e,t,r)}(e,t,r);xl=0!==(131072&e.flags)}else xl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Bl(e,t),e=t.pendingProps;var a=$a(t,Ta.current);_i(t,r),a=go(null,t,n,e,a,r);var o=bo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pa(n)?(o=!0,La(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Li(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,n,e,r),t=Tl(null,t,n,!0,o,r)):(t.tag=0,ai&&o&&ei(t),yl(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,n=(a=n._init)(n._payload),t.type=n,a=t.tag=function(e){if("function"===typeof e)return Pc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===$)return 14}return 2}(n),e=rl(n,e),a){case 0:t=jl(null,t,n,e,r);break e;case 1:t=zl(null,t,n,e,r);break e;case 11:t=wl(null,t,n,e,r);break e;case 14:t=kl(null,t,n,rl(n.type,e),r);break e}throw Error(i(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,jl(e,t,n,a=t.elementType===n?a:rl(n,a),r);case 1:return n=t.type,a=t.pendingProps,zl(e,t,n,a=t.elementType===n?a:rl(n,a),r);case 3:e:{if(_l(t),null===e)throw Error(i(387));n=t.pendingProps,a=(o=t.memoizedState).element,Ii(e,t),Wi(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Al(e,t,n,r,a=cl(Error(i(423)),t));break e}if(n!==a){t=Al(e,t,n,r,a=cl(Error(i(424)),t));break e}for(ni=ca(t.stateNode.containerInfo.firstChild),ri=t,ai=!0,ii=null,r=wi(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(fi(),n===a){t=Hl(e,t,r);break e}yl(e,t,n,r)}t=t.child}return t;case 5:return qi(t),null===e&&ci(t),n=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,ra(n,a)?l=null:null!==o&&ra(n,o)&&(t.flags|=32),Cl(e,t),yl(e,t,l,r),t.child;case 6:return null===e&&ci(t),null;case 13:return Il(e,t,r);case 4:return Xi(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=yi(t,null,n,r):yl(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,wl(e,t,n,a=t.elementType===n?a:rl(n,a),r);case 7:return yl(e,t,t.pendingProps,r),t.child;case 8:case 12:return yl(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,ja(ki,n._currentValue),n._currentValue=l,null!==o)if(ln(o.value,l)){if(o.children===a.children&&!_a.current){t=Hl(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var c=s.firstContext;null!==c;){if(c.context===n){if(1===o.tag){(c=Di(-1,r&-r)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=r,null!==(c=o.alternate)&&(c.lanes|=r),Ti(o.return,r,t),s.lanes|=r;break}c=c.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=r,null!==(s=l.alternate)&&(s.lanes|=r),Ti(l,r,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}yl(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,_i(t,r),n=n(a=Ai(a)),t.flags|=1,yl(e,t,n,r),t.child;case 14:return a=rl(n=t.type,t.pendingProps),kl(e,t,n,a=rl(n.type,a),r);case 15:return Sl(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:rl(n,a),Bl(e,t),t.tag=1,Pa(n)?(e=!0,La(t)):e=!1,_i(t,r),ol(t,n,a),sl(t,n,a,r),Tl(null,t,n,!0,e,r);case 19:return Wl(e,t,r);case 22:return El(e,t,r)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function Xc(e){this._internalRoot=e}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,r,n,a){var i=r._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Hc(o);l.call(e)}}Bc(t,o,e,a)}else o=function(e,t,r,n,a){if(a){if("function"===typeof n){var i=n;n=function(){var e=Hc(o);i.call(e)}}var o=Wc(t,n,e,0,null,!1,0,"",Zc);return e._reactRootContainer=o,e[ma]=o.current,Wn(8===e.nodeType?e.parentNode:e),uc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof n){var l=n;n=function(){var e=Hc(s);l.call(e)}}var s=Fc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=s,e[ma]=s.current,Wn(8===e.nodeType?e.parentNode:e),uc((function(){Bc(t,s,r,n)})),s}(r,t,e,a,n);return Hc(o)}Xc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Bc(e,t,null,null)},Xc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Bc(null,e,null,null)})),t[ma]=null}},Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&0!==t&&t<Nt[r].priority;r++);Nt.splice(r,0,e),0===r&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=dt(t.pendingLanes);0!==r&&(vt(t,1|r),nc(t,qe()),0===(6&Ts)&&(Ws=qe()+500,Wa()))}break;case 13:uc((function(){var t=Ri(e,1);if(null!==t){var r=ec();rc(t,e,1,r)}})),Yc(e,1)}},kt=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)rc(t,e,134217728,ec());Yc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),r=Ri(e,t);if(null!==r)rc(r,e,t,ec());Yc(e,t)}},Et=function(){return xt},Ct=function(e,t){var r=xt;try{return xt=e,t()}finally{xt=r}},ke=function(e,t,r){switch(t){case"input":if(Z(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=wa(n);if(!a)throw Error(i(90));K(n),Z(n,a)}}}break;case"textarea":ie(e,r);break;case"select":null!=(t=r.value)&&re(e,!!r.multiple,t,!1)}},Te=cc,_e=uc;var eu={usingClientEntryPoint:!1,Events:[xa,ya,wa,je,ze,cc]},tu={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ru={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{at=nu.inject(ru),it=nu}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gc(t))throw Error(i(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.createRoot=function(e,t){if(!Gc(e))throw Error(i(299));var r=!1,n="",a=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Fc(e,1,!1,null,0,r,0,n,a),e[ma]=t.current,Wn(8===e.nodeType?e.parentNode:e),new Qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,r){if(!qc(t))throw Error(i(200));return Jc(null,e,t,!0,r)},t.hydrateRoot=function(e,t,r){if(!Gc(e))throw Error(i(405));var n=null!=r&&r.hydratedSources||null,a=!1,o="",l=Kc;if(null!==r&&void 0!==r&&(!0===r.unstable_strictMode&&(a=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(l=r.onRecoverableError)),t=Wc(t,null,e,1,null!=r?r:null,a,0,o,l),e[ma]=t.current,Wn(e),n)for(e=0;e<n.length;e++)a=(a=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Xc(t)},t.render=function(e,t,r){if(!qc(t))throw Error(i(200));return Jc(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!qc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!qc(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Jc(e,t,r,!1,n)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,r)=>{"use strict";e.exports=r(234)},950:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(730)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(43),t=r(391);var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};Object.create;function a(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=r(324),o=r.n(i),l="-ms-",s="-moz-",c="-webkit-",u="comm",d="rule",p="decl",f="@keyframes",m=Math.abs,h=String.fromCharCode,g=Object.assign;function b(e){return e.trim()}function v(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,r){return e.replace(t,r)}function y(e,t,r){return e.indexOf(t,r)}function w(e,t){return 0|e.charCodeAt(t)}function k(e,t,r){return e.slice(t,r)}function S(e){return e.length}function E(e){return e.length}function C(e,t){return t.push(e),e}function j(e,t){return e.filter((function(e){return!v(e,t)}))}var z=1,T=1,_=0,A=0,$=0,P="";function N(e,t,r,n,a,i,o,l){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:z,column:T,length:o,return:"",siblings:l}}function R(e,t){return g(N("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function O(e){for(;e.root;)e=R(e.root,{children:[e]});C(e,e.siblings)}function L(){return $=A>0?w(P,--A):0,T--,10===$&&(T=1,z--),$}function I(){return $=A<_?w(P,A++):0,T++,10===$&&(T=1,z++),$}function D(){return w(P,A)}function M(){return A}function F(e,t){return k(P,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return z=T=1,_=S(P=e),A=0,[]}function B(e){return P="",e}function H(e){return b(F(A-1,K(91===e?e+2:40===e?e+1:e)))}function V(e){for(;($=D())&&$<33;)I();return U(e)>2||U($)>3?"":" "}function Y(e,t){for(;--t&&I()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return F(e,M()+(t<6&&32==D()&&32==I()))}function K(e){for(;I();)switch($){case e:return A;case 34:case 39:34!==e&&39!==e&&K($);break;case 40:41===e&&K(e);break;case 92:I()}return A}function Q(e,t){for(;I()&&e+$!==57&&(e+$!==84||47!==D()););return"/*"+F(t,A-1)+"*"+h(47===e?e:I())}function X(e){for(;!U(D());)I();return F(e,A)}function G(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function q(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case u:return"";case f:return e.return=e.value+"{"+G(e.children,n)+"}";case d:if(!S(e.value=e.props.join(",")))return""}return S(r=G(e.children,n))?e.return=e.value+"{"+r+"}":""}function Z(e,t,r){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return c+e+l+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+l+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+l+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+l+e+e;case 6165:return c+e+l+"flex-"+e+e;case 5187:return c+e+x(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return c+e+l+"flex-item-"+x(e,/flex-|-self/g,"")+(v(e,/flex-|baseline/)?"":l+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return c+e+l+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+l+x(e,"shrink","negative")+e;case 5292:return c+e+l+x(e,"basis","preferred-size")+e;case 6060:return c+"box-"+x(e,"-grow","")+c+e+l+x(e,"grow","positive")+e;case 4554:return c+x(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!v(e,/flex-|baseline/))return l+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return l+x(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,v(e.props,/grid-\w+-end/)}))?~y(e+(r=r[t].value),"span",0)?e:l+x(e,"-start","")+e+l+"grid-row-span:"+(~y(r,"span",0)?v(r,/\d+/):+v(r,/\d+/)-+v(e,/\d+/))+";":l+x(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return v(e.props,/grid-\w+-start/)}))?e:l+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~y(e,"stretch",0)?Z(x(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,a,i,o,s){return l+r+":"+n+s+(a?l+r+"-span:"+(i?o:+o-+n)+s:"")+e}));case 4949:if(121===w(e,t+6))return x(e,":",":"+c)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===w(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+l+"$2box$3")+e;case 100:return x(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function J(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=Z(e.value,e.length,r));case f:return G([R(e,{value:x(e.value,"@","@"+c)})],n);case d:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(v(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":O(R(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),O(R(e,{props:[t]})),g(e,{props:j(r,n)});break;case"::placeholder":O(R(e,{props:[x(t,/:(plac\w+)/,":"+c+"input-$1")]})),O(R(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),O(R(e,{props:[x(t,/:(plac\w+)/,l+"input-$1")]})),O(R(e,{props:[t]})),g(e,{props:j(r,n)})}return""}))}}function ee(e){return B(te("",null,null,null,[""],e=W(e),0,[0],e))}function te(e,t,r,n,a,i,o,l,s){for(var c=0,u=0,d=o,p=0,f=0,g=0,b=1,v=1,k=1,E=0,j="",z=a,T=i,_=n,A=j;v;)switch(g=E,E=I()){case 40:if(108!=g&&58==w(A,d-1)){-1!=y(A+=x(H(E),"&","&\f"),"&\f",m(c?l[c-1]:0))&&(k=-1);break}case 34:case 39:case 91:A+=H(E);break;case 9:case 10:case 13:case 32:A+=V(g);break;case 92:A+=Y(M()-1,7);continue;case 47:switch(D()){case 42:case 47:C(ne(Q(I(),M()),t,r,s),s);break;default:A+="/"}break;case 123*b:l[c++]=S(A)*k;case 125*b:case 59:case 0:switch(E){case 0:case 125:v=0;case 59+u:-1==k&&(A=x(A,/\f/g,"")),f>0&&S(A)-d&&C(f>32?ae(A+";",n,r,d-1,s):ae(x(A," ","")+";",n,r,d-2,s),s);break;case 59:A+=";";default:if(C(_=re(A,t,r,c,u,a,l,j,z=[],T=[],d,i),i),123===E)if(0===u)te(A,t,_,_,z,i,d,l,T);else switch(99===p&&110===w(A,3)?100:p){case 100:case 108:case 109:case 115:te(e,_,_,n&&C(re(e,_,_,0,0,a,l,j,a,z=[],d,T),T),a,T,d,l,n?z:T);break;default:te(A,_,_,_,[""],T,0,l,T)}}c=u=f=0,b=k=1,j=A="",d=o;break;case 58:d=1+S(A),f=g;default:if(b<1)if(123==E)--b;else if(125==E&&0==b++&&125==L())continue;switch(A+=h(E),E*b){case 38:k=u>0?1:(A+="\f",-1);break;case 44:l[c++]=(S(A)-1)*k,k=1;break;case 64:45===D()&&(A+=H(I())),p=D(),u=d=S(j=A+=X(M())),E++;break;case 45:45===g&&2==S(A)&&(b=0)}}return i}function re(e,t,r,n,a,i,o,l,s,c,u,p){for(var f=a-1,h=0===a?i:[""],g=E(h),v=0,y=0,w=0;v<n;++v)for(var S=0,C=k(e,f+1,f=m(y=o[v])),j=e;S<g;++S)(j=b(y>0?h[S]+" "+C:x(C,/&\f/g,h[S])))&&(s[w++]=j);return N(e,t,r,0===a?d:l,s,c,u,p)}function ne(e,t,r,n){return N(e,t,r,u,h($),k(e,2,-2),0,n)}function ae(e,t,r,n,a){return N(e,t,r,p,k(e,0,n),k(e,n+1,-1),n,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.1.17",ue="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),fe=(new Set,Object.freeze([])),me=Object.freeze({});function he(e,t,r){return void 0===r&&(r=me),e.theme!==r.theme&&e.theme||t||r.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ve=/(^-|-$)/g;function xe(e){return e.replace(be,"-").replace(ve,"")}var ye=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=we(t%52)+r;return(we(t%52)+r).replace(ye,"$1-$2")}var Se,Ee=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ce=function(e){return Ee(5381,e)};function je(e){return ke(Ce(e)>>>0)}function ze(e){return e.displayName||e.name||"Component"}function Te(e){return"string"==typeof e&&!0}var _e="function"==typeof Symbol&&Symbol.for,Ae=_e?Symbol.for("react.memo"):60115,$e=_e?Symbol.for("react.forward_ref"):60112,Pe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ne={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Re={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=((Se={})[$e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Se[Ae]=Re,Se);function Le(e){return("type"in(t=e)&&t.type.$$typeof)===Ae?Re:"$$typeof"in e?Oe[e.$$typeof]:Pe;var t}var Ie=Object.defineProperty,De=Object.getOwnPropertyNames,Me=Object.getOwnPropertySymbols,Fe=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,We=Object.prototype;function Be(e,t,r){if("string"!=typeof t){if(We){var n=Ue(t);n&&n!==We&&Be(e,n,r)}var a=De(t);Me&&(a=a.concat(Me(t)));for(var i=Le(e),o=Le(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Ne||r&&r[s]||o&&s in o||i&&s in i)){var c=Fe(t,s);try{Ie(e,s,c)}catch(e){}}}}return e}function He(e){return"function"==typeof e}function Ve(e){return"object"==typeof e&&"styledComponentId"in e}function Ye(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ke(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xe(e,t,r){if(void 0===r&&(r=!1),!r&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Xe(e[n],t[n]);else if(Qe(t))for(var n in t)e[n]=Xe(e[n],t[n]);return e}function Ge(e,t){Object.defineProperty(e,"toString",{value:t})}function qe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)if((a<<=1)<0)throw qe(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var i=n;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,i=n;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(ue);return t},e}(),Je=new Map,et=new Map,tt=1,rt=function(e){if(Je.has(e))return Je.get(e);for(;et.has(tt);)tt++;var t=tt++;return Je.set(e,t),et.set(t,e),t},nt=function(e,t){tt=t+1,Je.set(e,t),et.set(t,e)},at="style[".concat(oe,"][").concat(se,'="').concat(ce,'"]'),it=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ot=function(e,t,r){for(var n,a=r.split(","),i=0,o=a.length;i<o;i++)(n=a[i])&&e.registerName(t,n)},lt=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ue),a=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var s=l.match(it);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(nt(u,c),ot(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},st=function(e){for(var t=document.querySelectorAll(at),r=0,n=t.length;r<n;r++){var a=t[r];a&&a.getAttribute(oe)!==le&&(lt(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ct(){return r.nc}var ut=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(r),i=void 0!==a?a.nextSibling:null;n.setAttribute(oe,le),n.setAttribute(se,ce);var o=ct();return o&&n.setAttribute("nonce",o),r.insertBefore(n,i),n},dt=function(){function e(e){this.element=ut(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}throw qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=ut(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ft=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=de,ht={isServer:!de,useCSSOMInjection:!pe},gt=function(){function e(e,t,r){void 0===e&&(e=me),void 0===t&&(t={});var a=this;this.options=n(n({},ht),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&de&&mt&&(mt=!1,st(this)),Ge(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=function(r){var a=function(e){return et.get(e)}(r);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(r);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(oe,".g").concat(r,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),n+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(ue)},i=0;i<r;i++)a(i);return n}(a)}))}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&de&&st(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new ft(r):t?new dt(r):new pt(r)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(rt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,vt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}function yt(e){var t,r,n,a=void 0===e?me:e,i=a.options,o=void 0===i?me:i,l=a.plugins,s=void 0===l?fe:l,c=function(e,n,a){return a.startsWith(r)&&a.endsWith(r)&&a.replaceAll(r,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,r).replace(n,c))})),o.prefix&&u.push(J),u.push(q);var p=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,r=a,n=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(vt,""),c=ee(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(c=xt(c,o.namespace));var d,p=[];return G(c,function(e){var t=E(e);return function(r,n,a,i){for(var o="",l=0;l<t;l++)o+=e[l](r,n,a,i)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return p.hash=s.length?s.reduce((function(e,t){return t.name||qe(15),Ee(e,t.name)}),5381).toString():"",p}var wt=new gt,kt=yt(),St=e.createContext({shouldForwardProp:void 0,styleSheet:wt,stylis:kt}),Et=(St.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(St)}function jt(t){var r=(0,e.useState)(t.stylisPlugins),n=r[0],a=r[1],i=Ct().styleSheet,l=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return yt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})}),[t.enableVendorPrefixes,t.namespace,n]);(0,e.useEffect)((function(){o()(n,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}}),[t.shouldForwardProp,l,s]);return e.createElement(St.Provider,{value:c},e.createElement(Et.Provider,{value:s},t.children))}var zt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=kt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ge(this,(function(){throw qe(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),Tt=function(e){return e>="A"&&e<="Z"};function _t(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Tt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var At=function(e){return null==e||!1===e||""===e},$t=function(e){var t,r,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!At(o)&&(Array.isArray(o)&&o.isCss||He(o)?n.push("".concat(_t(i),":"),o,";"):Qe(o)?n.push.apply(n,a(a(["".concat(i," {")],$t(o),!1),["}"],!1)):n.push("".concat(_t(i),": ").concat((t=i,null==(r=o)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ie||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Pt(e,t,r,n){return At(e)?[]:Ve(e)?[".".concat(e.styledComponentId)]:He(e)?!He(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Pt(e(t),t,r,n):e instanceof zt?r?(e.inject(r,n),[e.getName(n)]):[e]:Qe(e)?$t(e):Array.isArray(e)?Array.prototype.concat.apply(fe,e.map((function(e){return Pt(e,t,r,n)}))):[e.toString()];var a}function Nt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(He(r)&&!Ve(r))return!1}return!0}var Rt=Ce(ce),Ot=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Nt(e),this.componentId=t,this.baseHash=Ee(Rt,t),this.baseStyle=r,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ye(n,this.staticRulesId);else{var a=Ke(Pt(this.rules,e,t,r)),i=ke(Ee(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=r(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}n=Ye(n,i),this.staticRulesId=i}else{for(var l=Ee(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ke(Pt(u,e,t,r));l=Ee(l,d+c),s+=d}}if(s){var p=ke(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(s,".".concat(p),void 0,this.componentId)),n=Ye(n,p)}}return n},e}(),Lt=e.createContext(void 0);Lt.Consumer;var It={};new Set;function Dt(t,r,a){var i=Ve(t),o=t,l=!Te(t),s=r.attrs,c=void 0===s?fe:s,u=r.componentId,d=void 0===u?function(e,t){var r="string"!=typeof e?"sc":xe(e);It[r]=(It[r]||0)+1;var n="".concat(r,"-").concat(je(ce+r+It[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,p=r.displayName,f=void 0===p?function(e){return Te(e)?"styled.".concat(e):"Styled(".concat(ze(e),")")}(t):p,m=r.displayName&&r.componentId?"".concat(xe(r.displayName),"-").concat(r.componentId):r.componentId||d,h=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,g=r.shouldForwardProp;if(i&&o.shouldForwardProp){var b=o.shouldForwardProp;if(r.shouldForwardProp){var v=r.shouldForwardProp;g=function(e,t){return b(e,t)&&v(e,t)}}else g=b}var x=new Ot(a,m,i?o.componentStyle:void 0);function y(t,r){return function(t,r,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(Lt),p=Ct(),f=t.shouldForwardProp||p.shouldForwardProp,m=he(r,d,l)||me,h=function(e,t,r){for(var a,i=n(n({},t),{className:void 0,theme:r}),o=0;o<e.length;o+=1){var l=He(a=e[o])?a(i):a;for(var s in l)i[s]="className"===s?Ye(i[s],l[s]):"style"===s?n(n({},i[s]),l[s]):l[s]}return t.className&&(i.className=Ye(i.className,t.className)),i}(i,r,m),g=h.as||u,b={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===m||("forwardedAs"===v?b.as=h.forwardedAs:f&&!f(v,g)||(b[v]=h[v]));var x=function(e,t){var r=Ct();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(o,h),y=Ye(s,c);return x&&(y+=" "+x),h.className&&(y+=" "+h.className),b[Te(g)&&!ge.has(g)?"class":"className"]=y,a&&(b.ref=a),(0,e.createElement)(g,b)}(w,t,r)}y.displayName=f;var w=e.forwardRef(y);return w.attrs=h,w.componentStyle=x,w.displayName=f,w.shouldForwardProp=g,w.foldedComponentIds=i?Ye(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=m,w.target=i?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,a=t;n<a.length;n++)Xe(e,a[n],!0);return e}({},o.defaultProps,e):e}}),Ge(w,(function(){return".".concat(w.styledComponentId)})),l&&Be(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Mt(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var Ft=function(e){return Object.assign(e,{isCss:!0})};function Ut(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(He(e)||Qe(e))return Ft(Pt(Mt(fe,a([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Pt(n):Ft(Pt(Mt(n,t)))}function Wt(e,t,r){if(void 0===r&&(r=me),!t)throw qe(1,t);var i=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,r,Ut.apply(void 0,a([n],i,!1)))};return i.attrs=function(a){return Wt(e,t,n(n({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Wt(e,t,n(n({},r),a))},i}var Bt=function(e){return Wt(Dt,e)},Ht=Bt;ge.forEach((function(e){Ht[e]=Bt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nt(e),gt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var a=n(Ke(Pt(this.rules,t,r,n)),""),i=this.componentId+e;r.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();function Vt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ke(Ut.apply(void 0,a([e],t,!1))),i=je(n);return new zt(i,n)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var r=ct(),n=Ke([r&&'nonce="'.concat(r,'"'),"".concat(oe,'="true"'),"".concat(se,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw qe(2);return t._emitSheetCSS()},this.getStyleElement=function(){var r;if(t.sealed)throw qe(2);var a=t.instance.toString();if(!a)return[];var i=((r={})[oe]="",r[se]=ce,r.dangerouslySetInnerHTML={__html:a},r),o=ct();return o&&(i.nonce=o),[e.createElement("style",n({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw qe(2);return e.createElement(jt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw qe(3)}})(),"__sc-".concat(oe,"__");var Yt=r(579);const Kt=[{id:1,rank:1,name:"cyrus",steps:0,avatar:"\ud83e\udd8a"},{id:2,rank:2,name:"internal_dev_00005",steps:1,avatar:"\ud83e\udd16"},{id:3,rank:3,name:"internal_dev_00005_2",steps:2,avatar:"\ud83d\udc7e"},{id:4,rank:4,name:"player_x89",steps:5,avatar:"\ud83e\udde0"},{id:5,rank:5,name:"neo_killer",steps:8,avatar:"\ud83d\udc7b"}],Qt=Vt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`,Xt=Vt`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`,Gt=Vt`
  0% { box-shadow: 0 0 10px rgba(110, 72, 170, 0.3); }
  50% { box-shadow: 0 0 20px rgba(110, 72, 170, 0.5); }
  100% { box-shadow: 0 0 10px rgba(110, 72, 170, 0.3); }
`,qt=Vt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,Zt=Vt`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Jt=Ht.div`
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.2), transparent 70%);
    z-index: 0;
    pointer-events: none;
    animation: ${Ut`${Xt}`} 8s infinite ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at center, rgba(0, 200, 255, 0.15), transparent 70%);
    z-index: 0;
    pointer-events: none;
    animation: ${Ut`${Xt}`} 12s infinite ease-in-out;
  }
`,er=Ht.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%);
  filter: blur(20px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
`,tr=Ht.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #6e48aa, #9d50bb, #6e48aa);
    background-size: 200% 200%;
    animation: ${Ut`${Zt}`} 3s infinite linear;
    border-radius: 3px;
  }
`,rr=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(110, 72, 170, 0.15);
  border-radius: 16px;
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid rgba(110, 72, 170, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    box-shadow: 0 8px 32px rgba(110, 72, 170, 0.3);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  }
`,nr=Ht.button`
  background: none;
  border: none;
  color: var(--text-primary);
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.3), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }
`,ar=Ht.div`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0;
  flex-grow: 1;
  text-align: center;
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(110, 72, 170, 0.2), 
      rgba(157, 80, 187, 0.2)
    );
    z-index: -1;
  }
`,ir=Ht.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
  background-color: rgba(30, 30, 40, 0.6);
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
  perspective: 1000px;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(110, 72, 170, 0.1), transparent);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  }
`,or=Ht.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background: rgba(20, 20, 30, 0.8);
  padding: 1.5rem 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(110, 72, 170, 0.5), transparent);
  }
`,lr=Ht.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(110, 72, 170, 0.05), transparent);
    pointer-events: none;
  }
`,sr=Ht.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);
  
  ${e=>e.isCurrentUser&&Ut`
    background-color: rgba(110, 72, 170, 0.15);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 5px;
      background: linear-gradient(to bottom, #6e48aa, #9d50bb);
      animation: ${Ut`${Xt}`} 2s infinite ease-in-out;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(110, 72, 170, 0.1), transparent);
      pointer-events: none;
    }
  `}
  
  &:nth-child(odd) {
    background-color: ${e=>e.isCurrentUser?"rgba(110, 72, 170, 0.15)":"rgba(20, 20, 30, 0.4)"};
  }
  
  &:hover {
    background-color: rgba(110, 72, 170, 0.2);
    transform: translateX(8px) scale(1.02);
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
  
  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`,cr=Ht.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 1.5rem;
  position: relative;
  
  ${e=>1===e.rank?Ut`
      color: var(--gold);
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      
      &::before {
        content: '👑';
        position: absolute;
        top: -15px;
        left: 0;
        font-size: 1.2rem;
        animation: ${Ut`${qt}`} 3s infinite ease-in-out;
      }
    `:2===e.rank?Ut`
      color: var(--silver);
      text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
      
      &::before {
        content: '🥈';
        position: absolute;
        top: -12px;
        left: 0;
        font-size: 1.2rem;
        animation: ${Ut`${qt}`} 3s infinite ease-in-out;
        animation-delay: 0.2s;
      }
    `:3===e.rank?Ut`
      color: var(--bronze);
      text-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
      
      &::before {
        content: '🥉';
        position: absolute;
        top: -12px;
        left: 0;
        font-size: 1.2rem;
        animation: ${Ut`${qt}`} 3s infinite ease-in-out;
        animation-delay: 0.4s;
      }
    `:""}
`,ur=Ht.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  
  ${e=>1===e.rank?Ut`
      background: linear-gradient(135deg, #ffd700, #ffb700);
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
      animation: ${Ut`${Gt}`} 2s infinite ease-in-out;
    `:2===e.rank?Ut`
      background: linear-gradient(135deg, #c0c0c0, #e0e0e0);
      box-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
      animation: ${Ut`${Gt}`} 2s infinite ease-in-out;
      animation-delay: 0.3s;
    `:3===e.rank?Ut`
      background: linear-gradient(135deg, #cd7f32, #e0a872);
      box-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
      animation: ${Ut`${Gt}`} 2s infinite ease-in-out;
      animation-delay: 0.6s;
    `:Ut`
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    `}
`,dr=Ht.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 1.1rem;
  gap: 1rem;
`,pr=Ht.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(110, 72, 170, 0.2), rgba(157, 80, 187, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${sr}:hover & {
    transform: scale(1.2) rotate(5deg);
    box-shadow: 0 6px 15px rgba(110, 72, 170, 0.3);
    border-color: rgba(110, 72, 170, 0.5);
  }
`,fr=Ht.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  
  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background: linear-gradient(135deg, rgba(110, 72, 170, 0.2), rgba(157, 80, 187, 0.2));
    color: var(--primary);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      animation: ${Ut`${Qt}`} 2s infinite;
    }
    
    &:hover {
      background: linear-gradient(135deg, rgba(110, 72, 170, 0.4), rgba(157, 80, 187, 0.4));
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(110, 72, 170, 0.3);
    }
  }
`,mr=Ht.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  position: relative;
  z-index: 2;
`,hr=Ht.div`
  background: rgba(30, 30, 40, 0.6);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(110, 72, 170, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(110, 72, 170, 0.15);
    border-color: rgba(110, 72, 170, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(110, 72, 170, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.2), transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
  
  &:nth-child(1)::after {
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
  
  &:nth-child(2)::after {
    background: linear-gradient(90deg, transparent, var(--accent-secondary), transparent);
  }
  
  &:nth-child(3)::after {
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
`,gr=Ht.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,br=Ht.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`,vr=Ht.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(110, 72, 170, 0.3);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: var(--gradient-primary);
    border-radius: 2px;
  }
`,xr=Ht.div`
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  margin-top: 1rem;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    animation: ${Ut`${Qt}`} 2s infinite;
    z-index: 2;
  }
`,yr=Ht.div`
  height: 100%;
  width: ${e=>e.width};
  background: linear-gradient(90deg, #6e48aa, #9d50bb);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(110, 72, 170, 0.5);
  transition: width 1s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${Ut`${Qt}`} 1.5s infinite;
    animation-delay: 0.5s;
  }
`,wr=()=>{const[t,r]=(0,e.useState)(1),[n,a]=(0,e.useState)([]);(0,e.useEffect)((()=>{const e=[];for(let t=0;t<5;t++)e.push({x:100*Math.random(),y:100*Math.random(),size:100+200*Math.random()});a(e)}),[]);return(0,Yt.jsxs)(Jt,{children:[n.map(((e,t)=>(0,Yt.jsx)(er,{style:{left:`${e.x}%`,top:`${e.y}%`,width:`${e.size}px`,height:`${e.size}px`,animationDelay:.5*t+"s"}},t))),(0,Yt.jsx)(tr,{children:"Leaderboard"}),(0,Yt.jsxs)(rr,{children:[(0,Yt.jsx)(nr,{onClick:()=>{t>1&&r(t-1)},children:(0,Yt.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Yt.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),(0,Yt.jsxs)(ar,{children:["Level ",t]}),(0,Yt.jsx)(nr,{onClick:()=>{r(t+1)},children:(0,Yt.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Yt.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]}),(0,Yt.jsxs)(ir,{children:[(0,Yt.jsxs)(or,{children:[(0,Yt.jsx)("div",{children:"Rank"}),(0,Yt.jsx)("div",{children:"Player"}),(0,Yt.jsx)("div",{style:{textAlign:"right"},children:"Steps"})]}),(0,Yt.jsx)(lr,{children:Kt.map((e=>(0,Yt.jsxs)(sr,{isCurrentUser:1===e.id,children:[(0,Yt.jsx)(cr,{rank:e.rank,children:(0,Yt.jsx)(ur,{rank:e.rank,children:e.rank})}),(0,Yt.jsxs)(dr,{children:[(0,Yt.jsx)(pr,{children:e.avatar}),e.name]}),(0,Yt.jsx)(fr,{children:(0,Yt.jsx)("span",{children:e.steps})})]},e.id)))})]}),(0,Yt.jsxs)(mr,{children:[(0,Yt.jsxs)(hr,{children:[(0,Yt.jsx)(gr,{children:"\ud83c\udfc6"}),(0,Yt.jsx)(br,{children:"Global Rank"}),(0,Yt.jsx)(vr,{children:"1 / 3"})]}),(0,Yt.jsxs)(hr,{children:[(0,Yt.jsx)(gr,{children:"\ud83d\udc63"}),(0,Yt.jsx)(br,{children:"Steps Taken"}),(0,Yt.jsx)(vr,{children:"0"})]}),(0,Yt.jsxs)(hr,{children:[(0,Yt.jsx)(gr,{children:"\u2b50"}),(0,Yt.jsx)(br,{children:"Top"}),(0,Yt.jsx)(vr,{children:"33.34%"}),(0,Yt.jsx)(xr,{children:(0,Yt.jsx)(yr,{width:"33.34%"})})]})]})]})},kr=[{id:1,rank:1,name:"cyrus",steps:0,avatar:"\ud83e\udd8a"},{id:2,rank:2,name:"internal_dev_00005",steps:1,avatar:"\ud83e\udd16"},{id:3,rank:3,name:"internal_dev_00005_2",steps:2,avatar:"\ud83d\udc7e"},{id:4,rank:4,name:"player_x89",steps:5,avatar:"\ud83e\udde0"},{id:5,rank:5,name:"neo_killer",steps:8,avatar:"\ud83d\udc7b"}],Sr=Vt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`,Er=Vt`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`,Cr=Vt`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,jr=Vt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,zr=Vt`
  0% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 200, 255, 0.5); }
  100% { box-shadow: 0 0 20px rgba(0, 200, 255, 0.3); }
`,Tr=Vt`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(10); opacity: 0; }
`,_r=Vt`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`,Ar=Vt`
  0% { transform: translate(0, 0); opacity: 1; }
  100% { transform: translate(var(--x), var(--y)); opacity: 0; }
`,$r=(Vt`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(180deg); }
`,Vt`
  0% { transform: rotateY(180deg); }
  100% { transform: rotateY(0deg); }
`,Ht.div`
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(to bottom, transparent, rgba(0, 200, 255, 0.05));
    pointer-events: none;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -100px;
    top: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle at center, rgba(146, 254, 157, 0.1), transparent 70%);
    filter: blur(30px);
    opacity: 0.7;
    animation: ${Ut`${Er}`} 15s infinite ease-in-out;
    z-index: -2;
  }
`),Pr=Ht.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
  pointer-events: none;
`,Nr=Ht.div`
  position: absolute;
  background: ${e=>e.color};
  border-radius: 50%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  opacity: 0.6;
  pointer-events: none;
  filter: blur(${e=>e.size/4}px);
  animation: ${Ut`${Cr}`} ${e=>e.duration}s infinite ease-in-out;
  animation-delay: ${e=>e.delay}s;
`,Rr=Ht.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(0, 200, 255, 0.15), transparent);
  filter: blur(40px);
  opacity: 0.4;
  z-index: -1;
  animation: ${Ut`${jr}`} 20s linear infinite;
`,Or=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.3), transparent);
  }
`,Lr=Ht.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  position: relative;
  letter-spacing: 3px;
  font-weight: 800;
  background: linear-gradient(90deg, #00c8ff, #92fe9d, #00c8ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${Ut`${_r}`} 10s linear infinite;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #00c8ff, #92fe9d);
    margin-top: 0.5rem;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
      animation: ${Ut`${Sr}`} 3s infinite;
    }
  }
  
  &::before {
    content: 'TOP PLAYERS';
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 0.8rem;
    letter-spacing: 5px;
    color: var(--accent-secondary);
    opacity: 0.5;
    font-weight: 600;
  }
`,Ir=Ht.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`,Dr=Ht.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--accent-secondary);
    transform: scaleX(0.7);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`,Mr=Ht.div`
  display: flex;
  background-color: rgba(0, 200, 255, 0.1);
  border-radius: 30px;
  padding: 0.25rem;
  border: 1px solid rgba(0, 200, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 200, 255, 0.2), 0 0 0 1px rgba(0, 200, 255, 0.1);
  animation: ${Ut`${zr}`} 5s infinite ease-in-out;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  perspective: 800px;
  
  &:hover {
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.3), 0 0 0 1px rgba(0, 200, 255, 0.2);
  }
`,Fr=Ut`
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(0, 200, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  }
  
  &:hover::after {
    opacity: 1;
    animation: ${Ut`${Tr}`} 1s linear;
  }
`,Ur=Ht.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  ${Fr}
  
  &:hover {
    color: var(--text-primary);
    background-color: rgba(255, 255, 255, 0.15);
    transform: scale(1.2);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 0 2px rgba(0, 200, 255, 0.5));
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    filter: drop-shadow(0 0 5px rgba(0, 200, 255, 0.8));
    transform: scale(1.1);
  }
`,Wr=Ht.div`
  background-color: var(--background-lighter);
  color: var(--text-primary);
  font-weight: 800;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  min-width: 80px;
  text-align: center;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.3), rgba(146, 254, 157, 0.2));
    opacity: 0.2;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(0, 200, 255, 0.3),
      transparent,
      rgba(146, 254, 157, 0.3),
      transparent
    );
    animation: ${Ut`${jr}`} 10s linear infinite;
    z-index: -2;
  }
`,Br=Ut`
  background: linear-gradient(90deg, #00c8ff, #92fe9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`,Hr=Ht.span`
  ${Br}
`,Vr=Ht.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, rgba(0, 200, 255, 0.08), rgba(146, 254, 157, 0.08));
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 200, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 200, 255, 0.1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  z-index: 1;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 200, 255, 0.2);
    transform: translateY(-5px) translateZ(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: conic-gradient(
      transparent,
      rgba(0, 200, 255, 0.1),
      transparent,
      rgba(146, 254, 157, 0.1),
      transparent
    );
    animation: ${Ut`${jr}`} 20s linear infinite;
    opacity: 0.5;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.5), transparent);
  }
`,Yr=Ht.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    background: radial-gradient(circle at center, rgba(0, 200, 255, 0.15), transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,Kr=Ht.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  position: relative;
  ${Br}
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00c8ff, #92fe9d);
    border-radius: 2px;
  }
`,Qr=Ht.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
`,Xr=Ht.div`
  position: absolute;
  top: -25px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 200, 255, 0.7);
  font-size: 1.5rem;
  animation: ${Ut`${Cr}`} 4s infinite ease-in-out;
  filter: drop-shadow(0 5px 15px rgba(0, 200, 255, 0.5));
`,Gr=Ht.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  perspective: 1000px;
  padding-bottom: 1rem;
`,qr=Ht.div`
  perspective: 1000px;
  width: 100%;
  position: relative;
  height: 110px;
  margin-bottom: 0.5rem;
`,Zr=Ht.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${e=>e.isFlipped?"rotateY(180deg)":"rotateY(0deg)"};
`,Jr=Ht.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
`,en=Ht(Jr)`
  transform: rotateY(0deg);
`,tn=Ht(Jr)`
  transform: rotateY(180deg);
  background: rgba(20, 20, 30, 0.8);
  border-radius: 20px;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`,rn=Ht.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`,nn=Ht.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 200, 255, 0.1);
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 200, 255, 0.2);
`,an=Ht.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
  letter-spacing: 1px;
`,on=Ht.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #00c8ff;
`,ln=Ht.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: rgba(30, 30, 40, 0.6);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  
  ${e=>1===e.rank?Ut`
      box-shadow: 0 0 25px rgba(255, 215, 0, 0.15);
      border-color: rgba(255, 215, 0, 0.3);
    `:2===e.rank?Ut`
      box-shadow: 0 0 20px rgba(192, 192, 192, 0.15);
      border-color: rgba(192, 192, 192, 0.3);
    `:3===e.rank?Ut`
      box-shadow: 0 0 20px rgba(205, 127, 50, 0.15);
      border-color: rgba(205, 127, 50, 0.3);
    `:""}
  
  ${e=>e.isCurrentUser&&Ut`
    background-color: rgba(0, 200, 255, 0.1);
    border-color: rgba(0, 200, 255, 0.3);
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 5px;
      background: linear-gradient(to bottom, #00c8ff, #92fe9d);
      border-radius: 0 20px 20px 0;
      animation: ${Ut`${Er}`} 2s infinite ease-in-out;
    }
  `}
  
  &:hover {
    transform: translateY(-5px) translateX(10px) rotateX(2deg) rotateY(-2deg) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    background-color: ${e=>e.isCurrentUser?"rgba(0, 200, 255, 0.15)":"rgba(40, 40, 50, 0.8)"};
    border-color: ${e=>e.isCurrentUser?"rgba(0, 200, 255, 0.4)":"rgba(255, 255, 255, 0.15)"};
    z-index: 10;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      ${e=>1===e.rank?"rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0)":2===e.rank?"rgba(192, 192, 192, 0.1), rgba(192, 192, 192, 0)":3===e.rank?"rgba(205, 127, 50, 0.1), rgba(205, 127, 50, 0)":"transparent, transparent"}
    );
    pointer-events: none;
  }
  
  &:nth-child(odd), &:nth-child(even) {
    transform: none;
  }
  
  &:nth-child(odd):hover, &:nth-child(even):hover {
    transform: translateY(-5px) rotateX(2deg) rotateY(-2deg) scale(1.02);
  }
`,sn=Ht.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.4rem;
  margin-right: 1.2rem;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  
  ${e=>1===e.rank?Ut`
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.1));
      color: var(--gold);
      border: 2px solid var(--gold);
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      
      &::before {
        content: '👑';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        animation: ${Ut`${Cr}`} 3s infinite ease-in-out;
      }
    `:2===e.rank?Ut`
      background: linear-gradient(135deg, rgba(192, 192, 192, 0.2), rgba(192, 192, 192, 0.1));
      color: var(--silver);
      border: 2px solid var(--silver);
      box-shadow: 0 0 15px rgba(192, 192, 192, 0.3);
      text-shadow: 0 0 10px rgba(192, 192, 192, 0.5);
      
      &::before {
        content: '🥈';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        animation: ${Ut`${Cr}`} 3s infinite ease-in-out;
        animation-delay: 0.2s;
      }
    `:3===e.rank?Ut`
      background: linear-gradient(135deg, rgba(205, 127, 50, 0.2), rgba(205, 127, 50, 0.1));
      color: var(--bronze);
      border: 2px solid var(--bronze);
      box-shadow: 0 0 15px rgba(205, 127, 50, 0.3);
      text-shadow: 0 0 10px rgba(205, 127, 50, 0.5);
      
      &::before {
        content: '🥉';
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.2rem;
        animation: ${Ut`${Cr}`} 3s infinite ease-in-out;
        animation-delay: 0.4s;
      }
    `:Ut`
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      color: var(--text-secondary);
      border: 1px solid rgba(255, 255, 255, 0.1);
    `}
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    z-index: 1;
    pointer-events: none;
  }
  
  ${ln}:hover & {
    transform: scale(1.1) translateZ(20px);
    box-shadow: ${e=>1===e.rank?"0 0 30px rgba(255, 215, 0, 0.4)":2===e.rank?"0 0 25px rgba(192, 192, 192, 0.4)":3===e.rank?"0 0 25px rgba(205, 127, 50, 0.4)":"0 0 15px rgba(255, 255, 255, 0.2)"};
  }
`,cn=Ht.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(0, 200, 255, 0.2), rgba(146, 254, 157, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-right: 1.2rem;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    z-index: 1;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    top: -25%;
    left: -25%;
    background: conic-gradient(
      transparent,
      rgba(0, 200, 255, 0.2),
      transparent,
      rgba(146, 254, 157, 0.2),
      transparent
    );
    animation: ${Ut`${jr}`} 10s linear infinite;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  ${ln}:hover & {
    transform: scale(1.2) rotate(5deg) translateZ(30px);
    border-color: rgba(0, 200, 255, 0.4);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 200, 255, 0.3);
    
    &::after {
      opacity: 1;
    }
  }
`,un=Ht.div`
  flex-grow: 1;
  overflow: hidden;
  transform-style: preserve-3d;
`,dn=Ht.div`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  ${ln}:hover & {
    transform: translateZ(15px);
    color: #fff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #00c8ff, #92fe9d);
    border-radius: 2px;
    transform: scaleX(0.7);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  ${ln}:hover &::after {
    transform: scaleX(1);
  }
`,pn=Ht.div`
  color: var(--text-secondary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  ${ln}:hover & {
    transform: translateZ(10px);
  }
`,fn=Ht.span`
  color: #00c8ff;
  font-weight: 700;
  background: rgba(0, 200, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${Ut`${Sr}`} 2s infinite;
    z-index: 1;
  }
  
  ${ln}:hover & {
    background: linear-gradient(90deg, rgba(0, 200, 255, 0.2), rgba(146, 254, 157, 0.2));
    color: #fff;
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
    transform: scale(1.1);
  }
`,mn=Ht.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.2), transparent);
  }
`,hn=Ht.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`,gn=Ht.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-size: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
`,bn=Ht.input`
  background-color: rgba(30, 30, 40, 0.6);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 30px;
  padding: 1rem 1.25rem 1rem 2.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  outline: none;
  width: 100%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    border-color: rgba(0, 200, 255, 0.4);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(0, 200, 255, 0.1);
    
    & + ${gn} {
      color: #00c8ff;
    }
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
`,vn=Ht.button`
  background-color: rgba(30, 30, 40, 0.6);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 30px;
  padding: 1rem 1.5rem;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  ${Fr}
  
  &:hover {
    background-color: rgba(0, 200, 255, 0.1);
    color: #00c8ff;
    border-color: rgba(0, 200, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(90deg);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.1), transparent);
    pointer-events: none;
  }
`,xn=Ht.div`
  position: absolute;
  border-radius: 50%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: ${e=>e.color};
  opacity: 0;
  pointer-events: none;
  --x: ${e=>e.x}px;
  --y: ${e=>e.y}px;
`,yn=t=>{const[r]=(0,e.useState)(new Audio(t));return{play:()=>{r.currentTime=0,r.play().catch((e=>console.error("Audio play failed:",e)))}}},wn=()=>{const[t,r]=(0,e.useState)(1),[n,a]=(0,e.useState)(""),[i,o]=(0,e.useState)([]),[l,s]=(0,e.useState)([]),[c,u]=(0,e.useState)(null),d=(0,e.useRef)({}),p=yn("/sounds/hover.mp3"),f=yn("/sounds/click.mp3"),m=yn("/sounds/achievement.mp3");(0,e.useEffect)((()=>{const t=[];for(let e=0;e<15;e++)t.push({id:e,x:100*Math.random(),y:100*Math.random(),size:2+6*Math.random(),color:e%2===0?"rgba(0, 200, 255, 0.5)":"rgba(146, 254, 157, 0.5)",delay:5*Math.random(),duration:5+10*Math.random()});o(t);const r=[];for(let e=0;e<3;e++)r.push({x:100*Math.random(),y:100*Math.random(),size:150+300*Math.random(),delay:5*e});s(r),kr.forEach((t=>{d.current[t.id]=Array(15).fill(0).map((()=>({ref:e.createRef(),isActive:!1})))}))}),[]);const h=e=>{f.play(),u(c===e?null:e);const t=kr.find((t=>t.id===e));t&&t.rank<=3&&(e=>{const t=d.current[e];t&&(m.play(),t.forEach(((e,t)=>{e.ref.current&&(e.ref.current.style.top="50%",e.ref.current.style.left="50%",e.ref.current.style.opacity="0",setTimeout((()=>{e.ref.current&&(e.ref.current.style.opacity="1",e.ref.current.style.animation=`${Ut`${Ar}`} 0.8s forwards`)}),50*t))})))})(e)},g=kr.filter((e=>e.name.toLowerCase().includes(n.toLowerCase())));return(0,Yt.jsxs)($r,{children:[(0,Yt.jsx)(Pr,{children:i.map((e=>(0,Yt.jsx)(Nr,{style:{left:`${e.x}%`,top:`${e.y}%`},size:e.size,delay:e.delay,duration:e.duration,color:e.color},e.id)))}),l.map(((e,t)=>(0,Yt.jsx)(Rr,{style:{left:`${e.x}%`,top:`${e.y}%`,width:`${e.size}px`,height:`${e.size}px`,animationDelay:`${e.delay}s`}},t))),(0,Yt.jsxs)(Or,{children:[(0,Yt.jsx)(Lr,{children:"Leaderboard"}),(0,Yt.jsxs)(Ir,{children:[(0,Yt.jsx)(Dr,{children:"Level"}),(0,Yt.jsxs)(Mr,{children:[(0,Yt.jsx)(Ur,{onClick:()=>{t>1&&(r(t-1),f.play())},onMouseEnter:()=>p.play(),children:(0,Yt.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Yt.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),(0,Yt.jsx)(Wr,{children:(0,Yt.jsx)(Hr,{children:t})}),(0,Yt.jsx)(Ur,{onClick:()=>{r(t+1),f.play()},onMouseEnter:()=>p.play(),children:(0,Yt.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Yt.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})})]})]})]}),(0,Yt.jsxs)(Vr,{children:[(0,Yt.jsxs)(Yr,{children:[(0,Yt.jsx)(Xr,{children:"\ud83c\udfc6"}),(0,Yt.jsx)(Kr,{children:"1/3"}),(0,Yt.jsx)(Qr,{children:"Global Rank"})]}),(0,Yt.jsxs)(Yr,{children:[(0,Yt.jsx)(Xr,{children:"\ud83d\udc63"}),(0,Yt.jsx)(Kr,{children:"0"}),(0,Yt.jsx)(Qr,{children:"Steps Taken"})]}),(0,Yt.jsxs)(Yr,{children:[(0,Yt.jsx)(Xr,{children:"\u2b50"}),(0,Yt.jsx)(Kr,{children:"33.3%"}),(0,Yt.jsx)(Qr,{children:"Top Players"})]})]}),(0,Yt.jsxs)(mn,{children:[(0,Yt.jsxs)(hn,{children:[(0,Yt.jsx)(bn,{type:"text",placeholder:"Search player...",value:n,onChange:e=>a(e.target.value),onFocus:()=>p.play()}),(0,Yt.jsx)(gn,{children:"\ud83d\udd0d"})]}),(0,Yt.jsxs)(vn,{onMouseEnter:()=>p.play(),children:[(0,Yt.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Yt.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"})}),"Sort"]})]}),(0,Yt.jsx)(Gr,{children:g.map((e=>{var t;return(0,Yt.jsx)(qr,{children:(0,Yt.jsxs)(Zr,{isFlipped:c===e.id,onClick:()=>h(e.id),onMouseEnter:()=>p.play(),children:[(0,Yt.jsx)(en,{children:(0,Yt.jsxs)(ln,{isCurrentUser:1===e.id,rank:e.rank,children:[(0,Yt.jsx)(sn,{rank:e.rank,children:e.rank}),(0,Yt.jsx)(cn,{children:e.avatar}),(0,Yt.jsxs)(un,{children:[(0,Yt.jsx)(dn,{children:e.name}),(0,Yt.jsxs)(pn,{children:[(0,Yt.jsx)(fn,{children:e.steps})," steps"]})]}),null===(t=d.current[e.id])||void 0===t?void 0:t.map(((t,r)=>(0,Yt.jsx)(xn,{ref:t.ref,size:4+8*Math.random(),color:1===e.rank?"rgba(255, 215, 0, 0.8)":2===e.rank?"rgba(192, 192, 192, 0.8)":3===e.rank?"rgba(205, 127, 50, 0.8)":"rgba(0, 200, 255, 0.8)",delay:.1*r,x:200*(Math.random()-.5),y:200*(Math.random()-.5)},r)))]})}),(0,Yt.jsxs)(tn,{children:[(0,Yt.jsx)(cn,{style:{width:"80px",height:"80px",fontSize:"3rem",marginBottom:"1rem"},children:e.avatar}),(0,Yt.jsx)(dn,{style:{fontSize:"1.5rem",margin:"0.5rem 0 1.5rem"},children:e.name}),(0,Yt.jsxs)(rn,{children:[(0,Yt.jsxs)(nn,{children:[(0,Yt.jsx)(an,{children:"Rank"}),(0,Yt.jsx)(on,{children:e.rank})]}),(0,Yt.jsxs)(nn,{children:[(0,Yt.jsx)(an,{children:"Steps"}),(0,Yt.jsx)(on,{children:e.steps})]}),(0,Yt.jsxs)(nn,{children:[(0,Yt.jsx)(an,{children:"Win Rate"}),(0,Yt.jsxs)(on,{children:[Math.floor(80-10*e.rank),"%"]})]}),(0,Yt.jsxs)(nn,{children:[(0,Yt.jsx)(an,{children:"Games"}),(0,Yt.jsx)(on,{children:20+2*e.id})]})]})]})]})},e.id)}))})]})},kn=Ht.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`,Sn=Ht.div`
  flex-grow: 1;
  position: relative;
`,En=Ht.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`,Cn=Ht.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`,jn=Ht.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,zn=Ht.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${e=>e.color};
`,Tn=t=>{let{data:r,type:n,colors:a}=t;const i=(0,e.useRef)(null);(0,e.useEffect)((()=>{if(!i.current)return;const e=i.current,t=e.getContext("2d");if(!t)return;const u=e.parentElement;switch(u&&(e.width=u.clientWidth,e.height=u.clientHeight),t.clearRect(0,0,e.width,e.height),n){case"bar":o(t,e.width,e.height,r,a);break;case"line":l(t,e.width,e.height,r,a);break;case"pie":s(t,e.width,e.height,r,a);break;case"radar":c(t,e.width,e.height,r,a)}}),[r,n,a]);const o=(e,t,r,n,a)=>{const i=40,o=t-80,l=r-80,s=n.length,c=o/s*.6,u=o/s*.4/(s-1||1),d=Math.max(...n.map((e=>e.value)));e.strokeStyle="rgba(255, 255, 255, 0.1)",e.lineWidth=1,e.beginPath(),e.moveTo(i,r-i),e.lineTo(t-i,r-i),e.stroke(),e.beginPath(),e.moveTo(i,i),e.lineTo(i,r-i),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.05)",e.lineWidth=1;for(let p=0;p<=5;p++){const n=r-i-p/5*l;e.beginPath(),e.moveTo(i,n),e.lineTo(t-i,n),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.5)",e.font="10px Arial",e.textAlign="right",e.fillText((d*p/5).toFixed(0),35,n+3)}n.forEach(((t,n)=>{const o=t.value/d*l,s=i+n*(c+u),p=r-i-o,f=e.createLinearGradient(s,p,s,r-i);f.addColorStop(0,a[n%a.length]),f.addColorStop(1,"rgba(0, 0, 0, 0.1)"),e.fillStyle=f,e.beginPath(),e.roundRect(s,p,c,o,[5,5,0,0]),e.fill(),e.shadowColor=a[n%a.length],e.shadowBlur=10,e.globalCompositeOperation="source-over",e.globalAlpha=.3,e.globalAlpha=1,e.shadowBlur=0,e.globalCompositeOperation="source-over",e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="10px Arial",e.textAlign="center",e.fillText(t.label,s+c/2,r-i+15),e.fillStyle="rgba(255, 255, 255, 0.9)",e.font="10px Arial",e.textAlign="center",e.fillText(t.value.toString(),s+c/2,p-5)}))},l=(e,t,r,n,a)=>{const i=40,o=t-80,l=r-80,s=1.2*Math.max(...n.map((e=>e.value)));e.strokeStyle="rgba(255, 255, 255, 0.1)",e.lineWidth=1,e.beginPath(),e.moveTo(i,r-i),e.lineTo(t-i,r-i),e.stroke(),e.beginPath(),e.moveTo(i,i),e.lineTo(i,r-i),e.stroke(),e.strokeStyle="rgba(255, 255, 255, 0.05)",e.lineWidth=1;for(let u=0;u<=5;u++){const n=r-i-u/5*l;e.beginPath(),e.moveTo(i,n),e.lineTo(t-i,n),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.5)",e.font="10px Arial",e.textAlign="right",e.fillText((s*u/5).toFixed(0),35,n+3)}e.beginPath(),e.strokeStyle=a[0],e.lineWidth=2,e.lineJoin="round";const c=e.createLinearGradient(0,i,0,r-i);c.addColorStop(0,`${a[0]}33`),c.addColorStop(1,"rgba(0, 0, 0, 0)"),n.forEach(((t,a)=>{const c=i+a/(n.length-1)*o,u=r-i-t.value/s*l;0===a?e.moveTo(c,u):e.lineTo(c,u),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="10px Arial",e.textAlign="center",e.fillText(t.label,c,r-i+15)})),e.stroke(),e.lineTo(i+o,r-i),e.lineTo(i,r-i),e.closePath(),e.fillStyle=c,e.fill(),n.forEach(((t,c)=>{const u=i+c/(n.length-1)*o,d=r-i-t.value/s*l;e.beginPath(),e.arc(u,d,5,0,2*Math.PI),e.fillStyle=a[0],e.fill(),e.beginPath(),e.arc(u,d,3,0,2*Math.PI),e.fillStyle="#fff",e.fill(),e.fillStyle="rgba(255, 255, 255, 0.9)",e.font="10px Arial",e.textAlign="center",e.fillText(t.value.toString(),u,d-10)}))},s=(e,t,r,n,a)=>{const i=t/2,o=r/2,l=Math.min(t,r)/2-40,s=n.reduce(((e,t)=>e+t.value),0);let c=-Math.PI/2;n.forEach(((t,r)=>{const n=t.value/s*(2*Math.PI),u=c+n;e.beginPath(),e.moveTo(i,o),e.arc(i,o,l,c,u),e.closePath();const d=e.createRadialGradient(i,o,0,i,o,l);d.addColorStop(0,"#fff"),d.addColorStop(.7,a[r%a.length]),d.addColorStop(1,a[r%a.length]),e.fillStyle=d,e.fill(),e.strokeStyle="rgba(0, 0, 0, 0.3)",e.lineWidth=1,e.stroke();const p=c+n/2,f=i+Math.cos(p)*(.7*l),m=o+Math.sin(p)*(.7*l),h=(t.value/s*100).toFixed(0)+"%";e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(h,f,m),c=u})),e.beginPath(),e.arc(i,o,.5*l,0,2*Math.PI),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.fillStyle="#fff",e.font="bold 14px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("Total",i,o-10),e.fillText(s.toString(),i,o+10)},c=(e,t,r,n,a)=>{const i=t/2,o=r/2,l=Math.min(t,r)/2-40,s=n.length;for(let u=0;u<s;u++){const t=u/s*Math.PI*2-Math.PI/2,r=i+Math.cos(t)*l,a=o+Math.sin(t)*l;e.beginPath(),e.moveTo(i,o),e.lineTo(r,a),e.strokeStyle="rgba(255, 255, 255, 0.1)",e.stroke();const c=i+Math.cos(t)*(l+15),d=o+Math.sin(t)*(l+15);e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="10px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(n[u].label,c,d)}for(let u=1;u<=5;u++){const t=l*(u/5);e.beginPath(),e.arc(i,o,t,0,2*Math.PI),e.strokeStyle="rgba(255, 255, 255, 0.05)",e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.5)",e.font="10px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(20*u+"%",i,o-t)}e.beginPath(),n.forEach(((t,r)=>{const n=Math.min(t.value,100),a=l*(n/100),c=r/s*Math.PI*2-Math.PI/2,u=i+Math.cos(c)*a,d=o+Math.sin(c)*a;0===r?e.moveTo(u,d):e.lineTo(u,d)})),e.closePath();const c=e.createRadialGradient(i,o,0,i,o,l);c.addColorStop(0,`${a[0]}99`),c.addColorStop(1,`${a[0]}33`),e.fillStyle=c,e.fill(),e.lineWidth=2,e.strokeStyle=a[0],e.stroke(),n.forEach(((t,r)=>{const n=Math.min(t.value,100),c=l*(n/100),u=r/s*Math.PI*2-Math.PI/2,d=i+Math.cos(u)*c,p=o+Math.sin(u)*c;e.beginPath(),e.arc(d,p,4,0,2*Math.PI),e.fillStyle="#fff",e.fill(),e.strokeStyle=a[0],e.lineWidth=2,e.stroke();const f=i+Math.cos(u)*(c+15),m=o+Math.sin(u)*(c+15);e.fillStyle=a[0],e.font="bold 10px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(n.toString()+"%",f,m)}))};return(0,Yt.jsxs)(kn,{children:[(0,Yt.jsx)(Sn,{children:(0,Yt.jsx)(En,{ref:i})}),"bar"===n&&(0,Yt.jsx)(Cn,{children:r.map(((e,t)=>(0,Yt.jsxs)(jn,{children:[(0,Yt.jsx)(zn,{color:a[t%a.length]}),e.label]},t)))})]})},_n=[{day:"Mon",steps:12,kills:5,deaths:2,accuracy:68},{day:"Tue",steps:8,kills:7,deaths:3,accuracy:72},{day:"Wed",steps:15,kills:10,deaths:1,accuracy:75},{day:"Thu",steps:9,kills:8,deaths:4,accuracy:70},{day:"Fri",steps:18,kills:12,deaths:3,accuracy:82},{day:"Sat",steps:25,kills:15,deaths:2,accuracy:85},{day:"Sun",steps:20,kills:13,deaths:0,accuracy:88}],An=[{id:1,name:"First Blood",description:"Get your first kill",completed:!0,icon:"\ud83e\ude78"},{id:2,name:"Sharpshooter",description:"Achieve 80% accuracy in a match",completed:!0,icon:"\ud83c\udfaf"},{id:3,name:"Survivor",description:"Win a match without dying",completed:!0,icon:"\ud83d\udee1\ufe0f"},{id:4,name:"Unstoppable",description:"Get a 10-kill streak",completed:!1,icon:"\u26a1"},{id:5,name:"Collector",description:"Collect all weapon types",completed:!1,icon:"\ud83d\udd2b"},{id:6,name:"Legend",description:"Reach the top of the leaderboard",completed:!1,icon:"\ud83d\udc51"}],$n=28,Pn=18,Nn=10,Rn=64.3,On=342,Ln=198,In=1.73,Dn=76.4,Mn=42,Fn="32h 15m",Un=24,Wn=2450,Bn=1580,Hn=3e3,Vn=Ht.div`
  padding: 2rem;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, rgba(110, 72, 170, 0.1), transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, rgba(0, 200, 255, 0.1), transparent 70%);
    z-index: 0;
    pointer-events: none;
  }
`,Yn=Ht.div`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 3px;
  }
`,Kn=Ht.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`,Qn=Ht.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
`,Xn=Ht.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Gn=Ht.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  background: linear-gradient(135deg, rgba(110, 72, 170, 0.1), rgba(157, 80, 187, 0.05));
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(110, 72, 170, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(110, 72, 170, 0.2), transparent 70%);
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
`,qn=Ht.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 20px rgba(110, 72, 170, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
`,Zn=Ht.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
`,Jn=Ht.div`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  background: rgba(110, 72, 170, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
`,ea=Ht.div`
  width: 100%;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,ta=Ht.div`
  height: 100%;
  width: ${e=>e.progress}%;
  background: var(--gradient-primary);
  border-radius: 4px;
`,ra=Ht.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`,na=Ht.div`
  font-size: 1rem;
  font-weight: 700;
`,aa=Ht.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`,ia=Ht.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
`,oa=Ht.div`
  width: 100%;
  position: relative;
  z-index: 1;
`,la=Ht.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`,sa=Ht.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,ca=Ht.div`
  font-weight: 600;
  font-size: 0.9rem;
`,ua=Ht.div`
  background: var(--background-light);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(110, 72, 170, 0.05), transparent);
    z-index: 0;
  }
`,da=Ht.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    background: var(--gradient-primary);
    margin-top: 0.5rem;
    border-radius: 3px;
    position: absolute;
    bottom: -0.5rem;
    left: 0;
  }
`,pa=Ht.span`
  font-size: 1.2rem;
`,fa=Ht.div`
  position: relative;
  z-index: 1;
  height: 200px;
  margin-top: 1rem;
`,ma=Ht.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
  position: relative;
  z-index: 1;
`,ha=Ht.button`
  background: ${e=>e.active?"rgba(110, 72, 170, 0.2)":"transparent"};
  border: 1px solid ${e=>e.active?"rgba(110, 72, 170, 0.3)":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.active?"var(--text-primary)":"var(--text-secondary)"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: ${e=>e.active?"600":"400"};
  
  &:hover {
    background: rgba(110, 72, 170, 0.1);
    border-color: rgba(110, 72, 170, 0.2);
    color: var(--text-primary);
  }
`,ga=Ht.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  position: relative;
  z-index: 1;
`,ba=Ht.div`
  background: ${e=>e.completed?"rgba(110, 72, 170, 0.1)":"rgba(0, 0, 0, 0.2)"};
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid ${e=>e.completed?"rgba(110, 72, 170, 0.3)":"rgba(255, 255, 255, 0.05)"};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  ${e=>e.completed&&"\n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 30px;\n      height: 30px;\n      background: var(--gradient-primary);\n      border-radius: 0 0 0 12px;\n      clip-path: polygon(0 0, 100% 0, 100% 100%);\n    }\n    \n    &::after {\n      content: '\u2713';\n      position: absolute;\n      top: 0;\n      right: 5px;\n      font-size: 0.8rem;\n      color: white;\n      font-weight: bold;\n    }\n  "}
`,va=Ht.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`,xa=Ht.div`
  flex-grow: 1;
`,ya=Ht.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`,wa=Ht.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,ka=()=>{const[t,r]=(0,e.useState)("achievements"),n=Bn/Hn*100;return(0,Yt.jsxs)(Vn,{children:[(0,Yt.jsxs)(Yn,{children:[(0,Yt.jsx)(Kn,{children:"Player Statistics"}),(0,Yt.jsx)(Qn,{children:"Detailed performance metrics and achievements"})]}),(0,Yt.jsxs)(Xn,{children:[(0,Yt.jsxs)(Gn,{children:[(0,Yt.jsx)(qn,{children:"\ud83e\udd8a"}),(0,Yt.jsx)(Zn,{children:"Cyrus"}),(0,Yt.jsx)(Jn,{children:"Rank #1 | Legend"}),(0,Yt.jsxs)(ra,{children:[(0,Yt.jsxs)(na,{children:["Level ",Un]}),(0,Yt.jsxs)(aa,{children:[Bn,"/",Hn," XP"]})]}),(0,Yt.jsx)(ea,{children:(0,Yt.jsx)(ta,{progress:n})}),(0,Yt.jsxs)(aa,{children:[Wn," XP to next level"]}),(0,Yt.jsx)(ia,{}),(0,Yt.jsxs)(oa,{children:[(0,Yt.jsxs)(la,{children:[(0,Yt.jsx)(sa,{children:"Total Matches"}),(0,Yt.jsx)(ca,{children:$n})]}),(0,Yt.jsxs)(la,{children:[(0,Yt.jsx)(sa,{children:"Win Rate"}),(0,Yt.jsxs)(ca,{children:[Rn,"%"]})]}),(0,Yt.jsxs)(la,{children:[(0,Yt.jsx)(sa,{children:"K/D Ratio"}),(0,Yt.jsx)(ca,{children:In})]}),(0,Yt.jsxs)(la,{children:[(0,Yt.jsx)(sa,{children:"Accuracy"}),(0,Yt.jsxs)(ca,{children:[Dn,"%"]})]}),(0,Yt.jsxs)(la,{children:[(0,Yt.jsx)(sa,{children:"Playtime"}),(0,Yt.jsx)(ca,{children:Fn})]})]})]}),(0,Yt.jsxs)(ua,{children:[(0,Yt.jsxs)(da,{children:[(0,Yt.jsx)(pa,{children:"\u2694\ufe0f"}),"Combat Performance"]}),(0,Yt.jsx)(fa,{children:(0,Yt.jsx)(Tn,{data:[{label:"Kills",value:On},{label:"Deaths",value:Ln},{label:"Headshots",value:Math.round(On*Mn/100)},{label:"Assists",value:104}],type:"bar",colors:["#6e48aa","#ff4757","#ffbd39","#00c8ff"]})})]}),(0,Yt.jsxs)(ua,{children:[(0,Yt.jsxs)(da,{children:[(0,Yt.jsx)(pa,{children:"\ud83d\udcc8"}),"Weekly Activity"]}),(0,Yt.jsx)(fa,{children:(0,Yt.jsx)(Tn,{data:_n.map((e=>({label:e.day,value:e.steps}))),type:"line",colors:["#00c8ff"]})})]}),(0,Yt.jsxs)(ua,{children:[(0,Yt.jsxs)(da,{children:[(0,Yt.jsx)(pa,{children:"\ud83c\udfaf"}),"Accuracy Trend"]}),(0,Yt.jsx)(fa,{children:(0,Yt.jsx)(Tn,{data:_n.map((e=>({label:e.day,value:e.accuracy}))),type:"line",colors:["#1ed760"]})})]}),(0,Yt.jsxs)(ua,{children:[(0,Yt.jsxs)(da,{children:[(0,Yt.jsx)(pa,{children:"\ud83c\udfc6"}),"Match History"]}),(0,Yt.jsx)(fa,{children:(0,Yt.jsx)(Tn,{data:[{label:"Wins",value:Pn},{label:"Losses",value:Nn}],type:"pie",colors:["#1ed760","#ff4757"]})})]})]}),(0,Yt.jsxs)(ua,{style:{marginBottom:"2rem"},children:[(0,Yt.jsxs)(ma,{children:[(0,Yt.jsx)(ha,{active:"achievements"===t,onClick:()=>r("achievements"),children:"Achievements"}),(0,Yt.jsx)(ha,{active:"progress"===t,onClick:()=>r("progress"),children:"Progress"})]}),"achievements"===t&&(0,Yt.jsx)(ga,{children:An.map((e=>(0,Yt.jsxs)(ba,{completed:e.completed,children:[(0,Yt.jsx)(va,{children:e.icon}),(0,Yt.jsxs)(xa,{children:[(0,Yt.jsx)(ya,{children:e.name}),(0,Yt.jsx)(wa,{children:e.description})]})]},e.id)))}),"progress"===t&&(0,Yt.jsx)(fa,{style:{height:"300px"},children:(0,Yt.jsx)(Tn,{data:[{label:"Kills",value:65},{label:"Wins",value:45},{label:"Achievements",value:50},{label:"Weapons",value:70},{label:"Maps",value:80}],type:"radar",colors:["#6e48aa","#00c8ff"]})})]})]})},Sa=Ht.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      var(--background), 
      rgba(110, 72, 170, 0.3), 
      rgba(0, 200, 255, 0.3), 
      var(--background)
    );
    z-index: -1;
  }
`,Ea=Ht.button`
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: ${e=>e.active?"600":"400"};
  color: ${e=>e.active?"var(--text-primary)":"var(--text-secondary)"};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  overflow: hidden;
  
  &:hover {
    color: ${e=>(e.active,"var(--text-primary)")};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${e=>e.active?"var(--gradient-primary)":"transparent"};
    transform: scaleX(${e=>e.active?1:0});
    transition: transform 0.3s ease;
    border-radius: 3px 3px 0 0;
  }
  
  &:hover::after {
    transform: scaleX(${e=>e.active?1:.3});
    background: ${e=>e.active?"var(--gradient-primary)":"rgba(110, 72, 170, 0.3)"};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>e.active?"radial-gradient(circle at center, rgba(110, 72, 170, 0.1), transparent 70%)":"transparent"};
    opacity: ${e=>e.active?1:0};
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,Ca=e=>{let{tabs:t,activeTab:r,onChange:n}=e;return(0,Yt.jsx)(Sa,{children:t.map((e=>(0,Yt.jsx)(Ea,{active:e.id===r,onClick:()=>n(e.id),children:e.label},e.id)))})},ja={default:{primary:"#00c8ff",secondary:"#92fe9d",background:"#1e1e28",text:"#ffffff",accent:"#6e48aa",gradientStart:"#00c8ff",gradientEnd:"#92fe9d"},dark:{primary:"#7928ca",secondary:"#ff0080",background:"#111111",text:"#f0f0f0",accent:"#ff0080",gradientStart:"#7928ca",gradientEnd:"#ff0080"},neon:{primary:"#00ff00",secondary:"#ffff00",background:"#0f0f2d",text:"#ffffff",accent:"#ff00ff",gradientStart:"#00ff66",gradientEnd:"#ff00ff"},retro:{primary:"#ff7700",secondary:"#ffcc00",background:"#1a2e3b",text:"#f0f0f0",accent:"#ff3300",gradientStart:"#ff3300",gradientEnd:"#ffcc00"},fantasy:{primary:"#a786df",secondary:"#ffc0cb",background:"#2d2b55",text:"#ffffff",accent:"#ff9d00",gradientStart:"#a786df",gradientEnd:"#ffc0cb"}},za=(0,e.createContext)(void 0),Ta=t=>{let{children:r}=t;const[n,a]=(0,e.useState)("default"),[i,o]=(0,e.useState)(["default"]);(0,e.useEffect)((()=>{const e=localStorage.getItem("gameTheme"),t=localStorage.getItem("unlockedThemes");if(e&&Object.keys(ja).includes(e)&&a(e),t)try{const e=JSON.parse(t);o(e)}catch(n){console.error("Failed to parse unlocked themes:",n)}const r=e&&Object.keys(ja).includes(e)?e:"default";l(r)}),[]);const l=e=>{const t=Object.keys(ja).includes(e)?e:"default",r=ja[t];if(!r)return void console.error(`Theme data for "${t}" not found`);const n=document.documentElement;n.style.setProperty("--primary",r.primary),n.style.setProperty("--secondary",r.secondary),n.style.setProperty("--background",r.background),n.style.setProperty("--text-primary",r.text),n.style.setProperty("--accent",r.accent),n.style.setProperty("--gradient-start",r.gradientStart),n.style.setProperty("--gradient-end",r.gradientEnd),n.style.setProperty("--gradient-primary",`linear-gradient(90deg, ${r.gradientStart}, ${r.gradientEnd})`)};return(0,Yt.jsx)(za.Provider,{value:{currentTheme:n,themeColors:ja[n],changeTheme:e=>{i.includes(e)?(a(e),localStorage.setItem("gameTheme",e),l(e)):console.log("Theme is locked:",e)},unlockTheme:e=>{if(!i.includes(e)){const t=[...i,e];o(t),localStorage.setItem("unlockedThemes",JSON.stringify(t))}},unlockedThemes:i},children:r})};const _a={hover:"/sounds/hover.mp3",click:"/sounds/click.mp3",achievement:"/sounds/achievement.mp3",cardFlip:"/sounds/card-flip.mp3",levelUp:"/sounds/level-up.mp3",success:"/sounds/success.mp3",themeChange:"/sounds/theme-change.mp3",activate:"/sounds/activate.mp3",deactivate:"/sounds/deactivate.mp3"};class Aa{constructor(){this.audioMap=new Map,this._volume=.5,this._muted=!1,this._soundsLoaded=!1,this.preloadSounds()}static getInstance(){return Aa.instance||(Aa.instance=new Aa),Aa.instance}preloadSounds(){if("undefined"===typeof window)return;Object.entries(_a).forEach((e=>{let[t,r]=e;const n=new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwMD09PT09PUlJSUlJSVZWVlZWVmJiYmJiYm9vb29vb3t7e3t7e4iIiIiIiJSUlJSUlKCgoKCgoKysrKysrLi4uLi4uMTExMTExNDQ0NDQ0NfX19fX19jY2NjY2N/f39/f3+bm5ubm5vLy8vLy8v7+/v7+/v////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYBF//6EAAAAAAAAAAAAAAAAAAA");n.volume=this._volume,n.preload="auto",n.load(),this.audioMap.set(t,n)})),this._soundsLoaded=!0}play(e){if(this._muted||!this._soundsLoaded)return!1;const t=this.audioMap.get(e);if(!t)return!1;t.currentTime=0;const r=t.play();return void 0!==r&&r.catch((e=>{console.error(`Audio playback failed: ${e}`)})),!0}setVolume(e){this._volume=Math.max(0,Math.min(1,e)),this.audioMap.forEach((e=>{e.volume=this._volume}))}get volume(){return this._volume}setMuted(e){this._muted=e}get muted(){return this._muted}}Aa.instance=void 0;const $a=Aa.getInstance(),Pa=Vt`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`,Na=Vt`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`,Ra=Vt`
  0% { box-shadow: 0 0 10px var(--primary); }
  50% { box-shadow: 0 0 20px var(--primary), 0 0 30px var(--secondary); }
  100% { box-shadow: 0 0 10px var(--primary); }
`,Oa=Vt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,La=Ht.div`
  position: fixed;
  top: 80px;
  right: 0;
  width: 300px;
  background: rgba(10, 10, 20, 0.9);
  backdrop-filter: blur(10px);
  border-left: 2px solid var(--primary);
  height: calc(100vh - 80px);
  z-index: 1000;
  padding: 2rem;
  animation: ${e=>e.isOpen?Ut`${Pa}`:Ut`${Na}`} 0.5s forwards;
  display: ${e=>e.isOpen||void 0===e.isOpen?"block":"none"};
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`,Ia=Ht.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    animation: ${Ut`${Ra}`} 2s infinite;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Da=Ht.h2`
  color: var(--text-primary);
  margin-bottom: 2rem;
  position: relative;
  font-size: 1.8rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 3px;
  }
`,Ma=Ht.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`,Fa=Ht.div`
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid ${e=>e.isActive?"var(--primary)":e.isLocked?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.2)"};
  background: ${e=>e.isLocked?"rgba(20, 20, 30, 0.6)":"rgba(30, 30, 40, 0.6)"};
  cursor: ${e=>e.isLocked?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: ${e=>e.isLocked?.5:1};
  
  ${e=>!e.isLocked&&"\n    &:hover {\n      transform: translateY(-5px);\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n      background: rgba(40, 40, 50, 0.8);\n    }\n  "}
  
  ${e=>e.isActive&&!e.isLocked&&"\n    box-shadow: 0 0 20px var(--primary);\n    transform: scale(1.05);\n  "}
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    opacity: ${e=>e.isActive?.5:0};
    animation: ${Ut`${Oa}`} 4s linear infinite;
    pointer-events: none;
  }
  
  ${e=>e.isLocked&&"\n    &::after {\n      content: '\ud83d\udd12';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      font-size: 2rem;\n      z-index: 1;\n    }\n  "}
`,Ua=Ht.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-align: center;
`,Wa=Ht.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`,Ba=Ht.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  margin: 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`,Ha=Ht.div`
  margin-top: 3rem;
`,Va=Ht.input`
  width: 100%;
  margin: 1rem 0;
  appearance: none;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    box-shadow: 0 0 0 2px var(--primary);
  }
`,Ya=Ht.button`
  background: ${e=>e.isMuted?"rgba(255, 100, 100, 0.2)":"rgba(100, 255, 100, 0.2)"};
  border: 1px solid ${e=>e.isMuted?"rgba(255, 100, 100, 0.5)":"rgba(100, 255, 100, 0.5)"};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.isMuted?"rgba(255, 100, 100, 0.3)":"rgba(100, 255, 100, 0.3)"};
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Ka=Ht.div`
  margin-bottom: 2rem;
  
  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,Qa=Ht.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`,Xa=e=>{let{theme:t,isActive:r,isLocked:n,onClick:a}=e;const i={default:["#00c8ff","#92fe9d","#6e48aa"],dark:["#7928ca","#ff0080","#111111"],neon:["#00ff00","#ff00ff","#ffff00"],retro:["#ff7700","#ffcc00","#ff3300"],fantasy:["#a786df","#ffc0cb","#ff9d00"]};return(0,Yt.jsxs)(Fa,{theme:t,isActive:r,isLocked:n,onClick:n?void 0:a,children:[(0,Yt.jsx)(Ua,{children:(o=t,o.charAt(0).toUpperCase()+o.slice(1))}),(0,Yt.jsx)(Wa,{colors:i[t],children:i[t].map(((e,t)=>(0,Yt.jsx)(Ba,{color:e},t)))})]});var o},Ga=()=>{const[t,r]=(0,e.useState)(!1),{currentTheme:n,changeTheme:a,unlockedThemes:i}=(()=>{const t=(0,e.useContext)(za);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t})(),[o,l]=(0,e.useState)(.5),[s,c]=(0,e.useState)(!1);return(0,Yt.jsxs)(Yt.Fragment,{children:[(0,Yt.jsx)(Ia,{onClick:()=>{r(!t),$a.play("click")},children:"\ud83c\udfa8"}),(0,Yt.jsxs)(La,{isOpen:t,children:[(0,Yt.jsx)(Da,{children:"Customize"}),(0,Yt.jsxs)(Ka,{children:[(0,Yt.jsx)(Qa,{children:"Themes"}),(0,Yt.jsx)(Ma,{children:["default","dark","neon","retro","fantasy"].map((e=>(0,Yt.jsx)(Xa,{theme:e,isActive:n===e,isLocked:!i.includes(e),onClick:()=>(e=>{i.includes(e)&&e!==n&&(a(e),$a.play("themeChange"))})(e)},e)))})]}),(0,Yt.jsxs)(Ka,{children:[(0,Yt.jsx)(Qa,{children:"Sound"}),(0,Yt.jsxs)(Ha,{children:[(0,Yt.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[(0,Yt.jsxs)("span",{children:["Volume: ",Math.round(100*o),"%"]}),(0,Yt.jsx)("span",{children:s?"\ud83d\udd07":o<.3?"\ud83d\udd08":o<.7?"\ud83d\udd09":"\ud83d\udd0a"})]}),(0,Yt.jsx)(Va,{type:"range",min:"0",max:"1",step:"0.01",value:o,onChange:e=>{const t=parseFloat(e.target.value);l(t),$a.setVolume(t)}}),(0,Yt.jsx)(Ya,{isMuted:s,onClick:()=>{const e=!s;c(e),$a.setMuted(e),$a.play("click")},children:s?"\ud83d\udd07 Unmute":"\ud83d\udd0a Mute"})]})]})]})]})},qa=[{id:1,rank:1,name:"CYRUS",steps:0,avatar:"\ud83e\udd8a",level:42,wins:58,achievements:12},{id:2,rank:2,name:"DEV-00005",steps:1,avatar:"\ud83e\udd16",level:38,wins:51,achievements:10},{id:3,rank:3,name:"GHOST-X",steps:2,avatar:"\ud83d\udc7e",level:35,wins:47,achievements:9},{id:4,rank:4,name:"NEURAL-89",steps:5,avatar:"\ud83e\udde0",level:29,wins:30,achievements:7},{id:5,rank:5,name:"VOID-KILLER",steps:8,avatar:"\ud83d\udc7b",level:26,wins:25,achievements:5}],Za=Vt`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`,Ja=Vt`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,ei=Vt`
  0% { opacity: 1; }
  5% { opacity: 0.8; }
  10% { opacity: 1; }
  15% { opacity: 0.3; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  85% { opacity: 0.2; }
  90% { opacity: 1; }
  100% { opacity: 1; }
`,ti=Vt`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`,ri=Vt`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`,ni=Vt`
  0% { border-color: var(--primary); box-shadow: 0 0 5px var(--primary); }
  50% { border-color: var(--secondary); box-shadow: 0 0 15px var(--secondary); }
  100% { border-color: var(--primary); box-shadow: 0 0 5px var(--primary); }
`,ai=(Vt`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`,Ht.div`
  padding: 1.5rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--text-primary);
  box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 4px
      );
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${Ut`${Ja}`} 4s linear infinite;
    pointer-events: none;
    z-index: 1;
  }
`),ii=Ht.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary),
      transparent
    );
  }
`,oi=Ht.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
  color: var(--primary);
  font-weight: 800;
  text-shadow: 0 0 10px var(--primary);
  position: relative;
  display: inline-block;
  
  span {
    position: relative;
    display: inline-block;
    
    &:hover {
      animation: ${Ut`${Za}`} 0.3s forwards;
      color: var(--secondary);
    }
  }
  
  &::before {
    content: 'SYS-ACCESS: GRANTED';
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--primary);
    opacity: 0.7;
    font-weight: 400;
    animation: ${Ut`${ei}`} 4s infinite;
  }
  
  &::after {
    content: 'UPLINK: ACTIVE';
    position: absolute;
    bottom: -20px;
    right: 0;
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--secondary);
    opacity: 0.7;
    font-weight: 400;
    animation: ${Ut`${ei}`} 3s infinite;
    animation-delay: 1s;
  }
`,li=Ht.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  position: relative;
  border: 1px solid var(--primary);
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid var(--primary);
    border-radius: 7px;
    opacity: 0.5;
    pointer-events: none;
    animation: ${Ut`${ti}`} 2s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(var(--primary-rgb), 0.1),
      transparent,
      rgba(var(--primary-rgb), 0.1)
    );
    pointer-events: none;
  }
`,si=Ht.button`
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--secondary);
    transform: scale(1.2);
  }
  
  &:active {
    transform: scale(0.9);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--primary-rgb), 0.2);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`,ci=Ht.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 5px var(--primary);
  
  span {
    font-size: 1.8rem;
    margin: 0 0.5rem;
    display: inline-block;
    animation: ${Ut`${ti}`} 2s infinite;
  }
`,ui=Ht.div`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--primary),
      transparent
    );
  }
`,di=Ht.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--primary);
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  outline: none;
  
  &:focus {
    border-color: var(--secondary);
    box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3);
  }
  
  &::placeholder {
    color: rgba(var(--primary-rgb), 0.6);
  }
`,pi=Ht.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1.2rem;
  pointer-events: none;
  animation: ${Ut`${ti}`} 2s infinite;
`,fi=Ht.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`,mi=Ht.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 3px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--primary-rgb), 0.2),
      transparent
    );
    transition: left 0.3s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`,hi=Ht.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  /* Add spacing to ensure rows don't overlap */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* Improved positioning */
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(var(--primary-rgb), 0.05),
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  }
`,gi=Ht.div`
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  align-items: center;
  padding: 1.25rem 1rem;
  background-color: ${e=>e.isCurrentUser?"rgba(var(--primary-rgb), 0.15)":"rgba(0, 0, 0, 0.5)"};
  margin-bottom: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  border-left: 3px solid ${e=>1===e.rank?"var(--gold, #FFD700)":2===e.rank?"var(--silver, #C0C0C0)":3===e.rank?"var(--bronze, #CD7F32)":"var(--primary)"};
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
  
  ${e=>e.isCurrentUser&&Ut`
    animation: ${Ut`${ni}`} 2s infinite;
  `}
  
  &:hover {
    transform: translateY(-3px) translateX(5px);
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
    z-index: 10;
    background-color: rgba(var(--primary-rgb), 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${e=>1===e.rank?"var(--gold, #FFD700)":2===e.rank?"var(--silver, #C0C0C0)":3===e.rank?"var(--bronze, #CD7F32)":"var(--primary)"};
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: ${e=>100-15*e.rank}%;
    background: var(--primary);
    animation: ${Ut`${ri}`} ${e=>2+e.rank}s infinite ease-in-out;
    opacity: 0.5;
  }
`,bi=Ht.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .rank {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.25rem;
    position: relative;
    color: ${e=>1===e.rank?"var(--gold, #FFD700)":2===e.rank?"var(--silver, #C0C0C0)":3===e.rank?"var(--bronze, #CD7F32)":"var(--primary)"};
    text-shadow: ${e=>1===e.rank?"0 0 10px var(--gold, #FFD700)":2===e.rank?"0 0 10px var(--silver, #C0C0C0)":3===e.rank?"0 0 10px var(--bronze, #CD7F32)":"0 0 10px var(--primary)"};
    
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 1px solid ${e=>1===e.rank?"var(--gold, #FFD700)":2===e.rank?"var(--silver, #C0C0C0)":3===e.rank?"var(--bronze, #CD7F32)":"var(--primary)"};
      border-radius: 50%;
      opacity: 0.5;
      animation: ${Ut`${ti}`} 2s infinite;
    }
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background-color: rgba(var(--primary-rgb), 0.1);
    border-radius: 5px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), transparent);
      border-radius: 5px;
    }
  }
`,vi=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(var(--primary-rgb), 0.2);
  
  .name {
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 1px;
    font-size: 1.1rem;
    text-transform: uppercase;
  }
  
  .stats {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    font-size: 0.875rem;
    color: var(--text-primary);
    opacity: 0.8;
    
    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      
      .label {
        opacity: 0.6;
        font-size: 0.75rem;
        text-transform: uppercase;
      }
      
      .value {
        color: var(--primary);
        font-weight: 600;
      }
    }
  }
`,xi=Ht.div`
  text-align: right;
  position: relative;
  
  .value {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
    text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.7);
    letter-spacing: 1px;
    animation: ${Ut`${ti}`} 3s infinite;
  }
  
  .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--text-primary);
    opacity: 0.6;
    letter-spacing: 2px;
    margin-top: 0.25rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    border-top: 1px solid var(--primary);
    border-right: 1px solid var(--primary);
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    border-bottom: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
    opacity: 0.5;
  }
`,yi=Ht.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,wi=Ht.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--primary);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${Ut`${Ja}`} 4s linear infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--primary),
      transparent
    );
  }
`,ki=Ht.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background: var(--primary);
  }
`,Si=Ht.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-primary);
  opacity: 0.6;
  margin-bottom: 0.5rem;
`,Ei=Ht.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 0 0 10px rgba(var(--primary-rgb), 0.5);
  letter-spacing: 1px;
  position: relative;
  animation: ${Ut`${ti}`} 3s infinite;
`,Ci=()=>{const[t,r]=(0,e.useState)(1),[n,a]=(0,e.useState)(""),[i,o]=(0,e.useState)("rank"),l="LEADERBOARD".split("");return(0,Yt.jsxs)(ai,{children:[(0,Yt.jsx)(ii,{children:(0,Yt.jsx)(oi,{children:l.map(((e,t)=>(0,Yt.jsx)("span",{children:e},t)))})}),(0,Yt.jsxs)(li,{children:[(0,Yt.jsx)(si,{onClick:()=>{t>1&&r(t-1)},children:"\u25c0"}),(0,Yt.jsxs)(ci,{children:["LEVEL ",(0,Yt.jsx)("span",{children:t})]}),(0,Yt.jsx)(si,{onClick:()=>{r(t+1)},children:"\u25b6"})]}),(0,Yt.jsxs)(ui,{children:[(0,Yt.jsx)(pi,{children:"\ud83d\udd0d"}),(0,Yt.jsx)(di,{type:"text",placeholder:"Search player...",value:n,onChange:e=>a(e.target.value)})]}),(0,Yt.jsx)(fi,{children:(0,Yt.jsx)(mi,{children:"Sort"})}),(0,Yt.jsx)(hi,{children:qa.map((e=>(0,Yt.jsxs)(gi,{isCurrentUser:1===e.id,rank:e.rank,children:[(0,Yt.jsxs)(bi,{rank:e.rank,children:[(0,Yt.jsx)("div",{className:"rank",children:e.rank}),(0,Yt.jsx)("div",{className:"avatar",children:e.avatar})]}),(0,Yt.jsxs)(vi,{children:[(0,Yt.jsx)("div",{className:"name",children:e.name}),(0,Yt.jsxs)("div",{className:"stats",children:[(0,Yt.jsxs)("span",{children:[(0,Yt.jsx)("div",{className:"label",children:"Rank"}),(0,Yt.jsx)("div",{className:"value",children:e.rank})]}),(0,Yt.jsxs)("span",{children:[(0,Yt.jsx)("div",{className:"label",children:"Steps"}),(0,Yt.jsx)("div",{className:"value",children:e.steps})]}),(0,Yt.jsxs)("span",{children:[(0,Yt.jsx)("div",{className:"label",children:"Win Rate"}),(0,Yt.jsxs)("div",{className:"value",children:[e.wins,"%"]})]}),(0,Yt.jsxs)("span",{children:[(0,Yt.jsx)("div",{className:"label",children:"Games"}),(0,Yt.jsx)("div",{className:"value",children:e.level-10})]})]})]}),(0,Yt.jsxs)(xi,{children:[(0,Yt.jsx)("div",{className:"value",children:e.steps}),(0,Yt.jsx)("div",{className:"label",children:"STEPS"})]})]},e.id)))}),(0,Yt.jsxs)(yi,{children:[(0,Yt.jsxs)(wi,{children:[(0,Yt.jsx)(ki,{children:"\ud83c\udfc6"}),(0,Yt.jsx)(Si,{children:"Global Rank"}),(0,Yt.jsx)(Ei,{children:"1/3"})]}),(0,Yt.jsxs)(wi,{children:[(0,Yt.jsx)(ki,{children:"\ud83d\udc63"}),(0,Yt.jsx)(Si,{children:"Steps Taken"}),(0,Yt.jsx)(Ei,{children:"0"})]}),(0,Yt.jsxs)(wi,{children:[(0,Yt.jsx)(ki,{children:"\u2b50"}),(0,Yt.jsx)(Si,{children:"Top Players"}),(0,Yt.jsx)(Ei,{children:"33.3%"})]})]})]})},ji={id:"USR-42X9",name:"NEURAL-89",level:29,rank:4,joinDate:"2077-05-12",avatar:"\ud83e\udde0",status:"ONLINE",achievements:[{id:1,name:"CIRCUIT BREAKER",description:"Complete level 10 without errors",completed:!0,date:"2077-06-01"},{id:2,name:"GHOST PROTOCOL",description:"Finish a game undetected",completed:!0,date:"2077-07-15"},{id:3,name:"NEURAL HACK",description:"Solve 5 puzzles in under 60 seconds",completed:!1,date:null},{id:4,name:"VOID WALKER",description:"Complete the void sequence",completed:!0,date:"2077-09-03"},{id:5,name:"QUANTUM SHIFT",description:"Reach level 50",completed:!1,date:null}],stats:{gamesPlayed:142,wins:87,winRate:"61.3%",bestScore:9870,totalTime:"127h 42m",favoriteLevel:"Neon District"}},zi=Vt`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,Ti=Vt`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,_i=Vt`
  0% { opacity: 0.8; box-shadow: 0 0 5px var(--primary); }
  50% { opacity: 1; box-shadow: 0 0 15px var(--primary); }
  100% { opacity: 0.8; box-shadow: 0 0 5px var(--primary); }
`,Ai=Vt`
  0% { opacity: 1; }
  5% { opacity: 0.8; }
  10% { opacity: 1; }
  15% { opacity: 0.3; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  85% { opacity: 0.2; }
  90% { opacity: 1; }
  100% { opacity: 1; }
`,$i=Vt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Pi=Vt`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`,Ni=Vt`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`,Ri=Ht.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--primary);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        90deg,
        rgba(var(--primary-rgb), 0.05) 1px, 
        transparent 2px, 
        transparent 10px
      ),
      repeating-linear-gradient(
        0deg,
        rgba(var(--primary-rgb), 0.05) 1px, 
        transparent 2px, 
        transparent 10px
      );
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.1),
      transparent
    );
    animation: ${Ut`${Ti}`} 4s linear infinite;
    pointer-events: none;
    z-index: 1;
  }
`,Oi=Ht.div`
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--primary),
      transparent,
      var(--primary)
    );
  }
`,Li=Ht.div`
  position: absolute;
  top: -15px;
  left: 0;
  font-size: 0.8rem;
  color: var(--primary);
  letter-spacing: 2px;
  opacity: 0.8;
  text-transform: uppercase;
  font-family: monospace;
  animation: ${Ut`${Ai}`} 5s infinite;
`,Ii=Ht.div`
  position: absolute;
  top: -15px;
  right: 0;
  font-size: 0.8rem;
  color: ${e=>"ONLINE"===e.status?"var(--secondary)":"var(--error)"};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: monospace;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: ${e=>"ONLINE"===e.status?"var(--secondary)":"var(--error)"};
    animation: ${Ut`${_i}`} 2s infinite;
  }
`,Di=Ht.div`
  flex: 0 0 120px;
  position: relative;
`,Mi=Ht.div`
  width: 120px;
  height: 120px;
  border: 2px solid var(--primary);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${Ut`${_i}`} 3s infinite;
  background-color: rgba(var(--primary-rgb), 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: conic-gradient(
      transparent 0deg,
      transparent 30deg,
      rgba(var(--primary-rgb), 0.3) 50deg,
      transparent 70deg,
      transparent 360deg
    );
    animation: ${Ut`${$i}`} 4s linear infinite;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 1px dashed rgba(var(--primary-rgb), 0.5);
    border-radius: 3px;
    pointer-events: none;
  }
`,Fi=Ht.div`
  font-size: 4rem;
  position: relative;
  z-index: 2;
  animation: ${Ut`${Pi}`} 3s ease-in-out infinite;
`,Ui=Ht.div`
  position: absolute;
  top: 0;
  right: 10px;
  width: 2px;
  height: 50%;
  background-color: var(--primary);
  opacity: 0.6;
  animation: ${Ut`${Ni}`} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -5px;
    width: 2px;
    height: 70%;
    background-color: var(--secondary);
    opacity: 0.4;
    animation: ${Ut`${Ni}`} 2s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -5px;
    width: 2px;
    height: 40%;
    background-color: var(--primary);
    opacity: 0.3;
    animation: ${Ut`${Ni}`} 2s ease-in-out infinite;
    animation-delay: 1s;
  }
`,Wi=Ht.div`
  flex: 1;
  padding-left: 2rem;
  position: relative;
`,Bi=Ht.h2`
  font-size: 2.2rem;
  color: var(--primary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  font-weight: 800;
  text-shadow: 0 0 10px var(--primary);
  
  &:hover {
    animation: ${Ut`${zi}`} 0.3s forwards;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary);
  }
`,Hi=Ht.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  color: var(--text-primary);
`,Vi=Ht.div`
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '■';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary);
    font-size: 0.8rem;
  }
  
  label {
    display: block;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-secondary);
    margin-bottom: 0.2rem;
  }
  
  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`,Yi=Ht.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ki=Ht.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: 'NEURAL METRICS';
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: black;
    padding: 0 10px;
    font-size: 0.7rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`,Qi=Ht.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,Xi=Ht.div`
  padding: 0.8rem;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-radius: 3px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
    transform: translateY(-3px);
  }
  
  label {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-secondary);
    margin-bottom: 0.2rem;
  }
  
  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
  }
`,Gi=Ht.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1.5rem;
  position: relative;
  
  &::before {
    content: 'SYSTEM ACHIEVEMENTS';
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: black;
    padding: 0 10px;
    font-size: 0.7rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`,qi=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Zi=Ht.div`
  padding: 1rem;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-left: 3px solid ${e=>e.completed?"var(--secondary)":"var(--text-secondary)"};
  border-radius: 3px;
  position: relative;
  opacity: ${e=>e.completed?1:.6};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
    transform: translateX(5px);
  }
  
  &::before {
    content: '${e=>e.completed?"\u2713":"\u29d6"}';
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${e=>e.completed?"var(--secondary)":"var(--text-secondary)"};
    font-size: ${e=>e.completed?"1.2rem":"1rem"};
  }
`,Ji=Ht.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
`,eo=Ht.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,to=Ht.div`
  font-size: 0.8rem;
  color: var(--primary);
  margin-top: 0.5rem;
  font-family: monospace;
  letter-spacing: 1px;
`,ro=Ht.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,no=Ht.button`
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.3);
    box-shadow: 0 0 10px var(--primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(var(--primary-rgb), 0.4) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`,ao=t=>{let{userId:r}=t;const[n,a]=(0,e.useState)(ji),[i,o]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{r&&(o(!0),setTimeout((()=>{o(!1)}),1500))}),[r]),(0,Yt.jsxs)(Ri,{children:[(0,Yt.jsxs)(Oi,{children:[(0,Yt.jsxs)(Li,{children:["ID: ",n.id]}),(0,Yt.jsx)(Ii,{status:n.status,children:n.status}),(0,Yt.jsx)(Di,{children:(0,Yt.jsxs)(Mi,{children:[(0,Yt.jsx)(Fi,{children:n.avatar}),(0,Yt.jsx)(Ui,{})]})}),(0,Yt.jsxs)(Wi,{children:[(0,Yt.jsx)(Bi,{children:n.name}),(0,Yt.jsxs)(Hi,{children:[(0,Yt.jsxs)(Vi,{children:[(0,Yt.jsx)("label",{children:"LEVEL"}),(0,Yt.jsx)("span",{children:n.level})]}),(0,Yt.jsxs)(Vi,{children:[(0,Yt.jsx)("label",{children:"RANK"}),(0,Yt.jsxs)("span",{children:["#",n.rank]})]}),(0,Yt.jsxs)(Vi,{children:[(0,Yt.jsx)("label",{children:"JOINED"}),(0,Yt.jsx)("span",{children:n.joinDate})]})]})]})]}),(0,Yt.jsxs)(Yi,{children:[(0,Yt.jsx)(Ki,{children:(0,Yt.jsxs)(Qi,{children:[(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)("label",{children:"GAMES PLAYED"}),(0,Yt.jsx)("span",{children:n.stats.gamesPlayed})]}),(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)("label",{children:"VICTORIES"}),(0,Yt.jsx)("span",{children:n.stats.wins})]}),(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)("label",{children:"WIN RATE"}),(0,Yt.jsx)("span",{children:n.stats.winRate})]}),(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)("label",{children:"BEST SCORE"}),(0,Yt.jsx)("span",{children:n.stats.bestScore})]}),(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)("label",{children:"TOTAL TIME"}),(0,Yt.jsx)("span",{children:n.stats.totalTime})]}),(0,Yt.jsxs)(Xi,{children:[(0,Yt.jsx)("label",{children:"FAVORITE LEVEL"}),(0,Yt.jsx)("span",{children:n.stats.favoriteLevel})]})]})}),(0,Yt.jsx)(Gi,{children:(0,Yt.jsx)(qi,{children:n.achievements.map((e=>(0,Yt.jsxs)(Zi,{completed:e.completed,children:[(0,Yt.jsx)(Ji,{children:e.name}),(0,Yt.jsx)(eo,{children:e.description}),e.completed&&(0,Yt.jsxs)(to,{children:["UNLOCKED: ",e.date]})]},e.id)))})})]}),(0,Yt.jsxs)(ro,{children:[(0,Yt.jsx)(no,{children:"EDIT PROFILE"}),(0,Yt.jsx)(no,{children:"VIEW MATCH HISTORY"})]})]})},io=[{id:"NT-001",type:"system",message:"SYSTEM UPDATE v2.4.1 COMPLETED. NEURAL INTERFACE OPTIMIZED.",timestamp:"18:42:01",read:!1,isPriority:!0},{id:"NT-002",type:"info",message:'NEW MISSION AVAILABLE: "NEON DISTRICT INFILTRATION".',timestamp:"17:15:22",read:!1,isPriority:!1},{id:"NT-003",type:"success",message:'ACHIEVEMENT UNLOCKED: "CIRCUIT BREAKER".',timestamp:"14:33:07",read:!0,isPriority:!1},{id:"NT-004",type:"warning",message:"NETWORK STABILITY AT 67%. FIREWALL DEGRADATION DETECTED.",timestamp:"12:05:49",read:!0,isPriority:!0},{id:"NT-005",type:"error",message:"CONNECTION TO MAINFRAME LOST. ATTEMPTING RECONNECTION...",timestamp:"09:28:33",read:!0,isPriority:!0}],oo=Vt`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`,lo=Vt`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,so=Vt`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,co=Vt`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`,uo=Vt`
  0% { opacity: 1; }
  5% { opacity: 0.8; }
  10% { opacity: 1; }
  15% { opacity: 0.3; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  85% { opacity: 0.2; }
  90% { opacity: 1; }
  100% { opacity: 1; }
`,po=Vt`
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
`,fo=Ht.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        90deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 10px
      );
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${Ut`${so}`} 4s linear infinite;
    pointer-events: none;
    z-index: 1;
  }
`,mo=Ht.div`
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      var(--primary),
      transparent,
      var(--primary)
    );
  }
`,ho=Ht.h2`
  font-size: 1.8rem;
  color: var(--primary);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  text-shadow: 0 0 10px var(--primary);
  position: relative;
  display: inline-block;
  
  &::before {
    content: 'LIVE FEED';
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 0.7rem;
    color: var(--secondary);
    letter-spacing: 2px;
    font-weight: 400;
    opacity: 0.7;
  }
`,go=Ht.div`
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: monospace;
  
  span {
    color: var(--primary);
    font-weight: 600;
  }
`,bo=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,vo=e=>{switch(e){case"info":return"var(--info, #36a3f7)";case"success":return"var(--success, #0cce6b)";case"warning":return"var(--warning, #ffc107)";case"error":return"var(--error, #ff3e5e)";case"system":return"var(--primary)";default:return"var(--text-primary)"}},xo=Ht.div`
  position: relative;
  padding: 1rem 1rem 1rem 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: all 0.3s ease;
  animation: ${Ut`${oo}`} 0.3s ease-out;
  border-left: 3px solid ${e=>vo(e.type)};
  opacity: ${e=>e.read?.7:1};
  
  ${e=>e.isPriority&&Ut`
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${`linear-gradient(90deg, \n        transparent, \n        rgba(${"error"===e.type?"var(--error-rgb, 255,62,94)":"warning"===e.type?"var(--warning-rgb, 255,193,7)":"var(--primary-rgb)"}, 0.1), \n        transparent)`};
      animation: ${Ut`${po}`} 2s linear infinite;
      z-index: 0;
    }
    
    &::after {
      content: 'PRIORITY';
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 0.6rem;
      color: ${vo(e.type)};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 400;
      animation: ${Ut`${uo}`} 3s infinite;
    }
  `}

  &:hover {
    transform: translateX(5px);
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  &:hover::before {
    animation: ${Ut`${lo}`} 0.2s forwards;
  }
`,yo=Ht.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(${e=>{switch(e.type){case"info":return"var(--info-rgb, 54,163,247)";case"success":return"var(--success-rgb, 12,206,107)";case"warning":return"var(--warning-rgb, 255,193,7)";case"error":return"var(--error-rgb, 255,62,94)";default:return"var(--primary-rgb)"}}}, 0.2);
  color: ${e=>vo(e.type)};
  font-size: 0.9rem;
  
  animation: ${Ut`${co}`} 2s infinite;
`,wo=Ht.div`
  font-size: 0.9rem;
  color: var(--text-primary);
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 0.3rem;
  position: relative;
  z-index: 2;
`,ko=Ht.div`
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-family: monospace;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
`,So=Ht.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--primary-rgb), 0.3);
`,Eo=Ht.button`
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.3);
    box-shadow: 0 0 10px var(--primary);
  }
`,Co=Ht.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--error);
  color: white;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Ut`${co}`} 2s infinite;
`,jo=e=>{switch(e){case"info":return"\u2139";case"success":return"\u2713";case"warning":return"\u26a0";case"error":return"\u2717";case"system":return"\u2699";default:return"\u2022"}},zo=t=>{let{onlyShowUnread:r=!1,maxNotifications:n=5}=t;const[a,i]=(0,e.useState)(io),[o,l]=(0,e.useState)(r),s=a.filter((e=>!e.read)).length,c=o?a.filter((e=>!e.read)).slice(0,n):a.slice(0,n);return(0,Yt.jsxs)(fo,{children:[(0,Yt.jsxs)(mo,{children:[(0,Yt.jsx)(ho,{children:"NOTIFICATIONS"}),(0,Yt.jsxs)(go,{children:[(0,Yt.jsx)("span",{children:s})," UNREAD / ",a.length," TOTAL"]})]}),(0,Yt.jsx)(bo,{children:c.length>0?c.map((e=>(0,Yt.jsxs)(xo,{type:e.type,read:e.read,isPriority:e.isPriority,children:[(0,Yt.jsx)(yo,{type:e.type,children:jo(e.type)}),(0,Yt.jsx)(wo,{children:e.message}),(0,Yt.jsx)(ko,{children:e.timestamp}),!e.read&&(0,Yt.jsx)(Co,{})]},e.id))):(0,Yt.jsxs)(xo,{type:"info",read:!1,isPriority:!1,children:[(0,Yt.jsx)(yo,{type:"info",children:"\u2139"}),(0,Yt.jsx)(wo,{children:"NO ACTIVE NOTIFICATIONS FOUND"}),(0,Yt.jsx)(ko,{children:"SYSTEM CLEAR"})]})}),(0,Yt.jsxs)(So,{children:[(0,Yt.jsx)(Eo,{onClick:()=>{l(!o)},children:o?"SHOW ALL":"SHOW UNREAD"}),(0,Yt.jsx)(Eo,{onClick:()=>{i(a.map((e=>({...e,read:!0}))))},children:"MARK ALL READ"})]})]})},To={help:"Available commands: help, clear, status, scan, connect, list, info, exit",clear:"Terminal cleared.",status:"SYSTEM STATUS: ONLINE\nNETWORK: CONNECTED\nFIREWALL: ACTIVE\nENCRYPTION: ENABLED\nTHREAT LEVEL: LOW",scan:"Scanning network...\nFound 5 nodes\nScan complete: No threats detected",connect:"Establishing secure connection...\nConnection established. Welcome to the MAINFRAME.",list:"Available nodes:\n- CENTRAL_NODE [SECURED]\n- DATA_VAULT [RESTRICTED]\n- NEON_DISTRICT [UNLOCKED]\n- BLACK_MARKET [HAZARDOUS]\n- NEURAL_NET [ENCRYPTED]",info:"CYBERNET v4.2.1\nBuild date: 2077-05-12\nEncryption: AES-4096\nProtocol: QUANTUM-TCP",exit:"Disconnecting from terminal...\nConnection terminated."},_o=Vt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,Ao=Vt`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,$o=Vt`
  0% { opacity: 1; }
  5% { opacity: 0.8; }
  10% { opacity: 1; }
  15% { opacity: 0.3; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  85% { opacity: 0.2; }
  90% { opacity: 1; }
  100% { opacity: 1; }
`,Po=Vt`
  from { width: 0 }
  to { width: 100% }
`,No=Vt`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,Ro=Vt`
  0% { box-shadow: 0 0 5px var(--primary); }
  50% { box-shadow: 0 0 15px var(--primary); }
  100% { box-shadow: 0 0 5px var(--primary); }
`,Oo=Ht.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.85);
  border: 1px solid var(--primary);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  font-family: monospace;
  color: var(--primary);
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  animation: ${Ut`${Ro}`} 4s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        0deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 4px
      );
    pointer-events: none;
    z-index: 1;
    opacity: 0.2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${Ut`${Ao}`} 8s linear infinite;
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }
`,Lo=Ht.div`
  background-color: rgba(var(--primary-rgb), 0.2);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary);
  user-select: none;
`,Io=Ht.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);
  
  span {
    color: var(--secondary);
    animation: ${Ut`${$o}`} 3s infinite;
  }
`,Do=Ht.div`
  display: flex;
  gap: 0.5rem;
`,Mo=Ht.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(var(--primary-rgb), 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
  }
`,Fo=Ht.div`
  height: calc(100% - 70px);
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
  }
`,Uo=(Ht.div`
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
`,Ht.div`
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-size: 0.9rem;
  color: ${e=>e.isError?"var(--error)":e.isInput?"var(--primary)":e.isOutput?"var(--text-primary)":"var(--primary)"};
  position: relative;
  
  ${e=>e.typing&&Ut`
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid var(--primary);
    animation: 
      ${Ut`${Po}`} 2s steps(40, end),
      ${Ut`${_o}`} 0.75s step-end infinite;
  `}
  
  &:hover {
    animation: ${Ut`${No}`} 0.2s forwards;
  }
`),Wo=Ht.span`
  color: var(--secondary);
  margin-right: 0.5rem;
  user-select: none;
`,Bo=Ht.div`
  display: flex;
  align-items: center;
  position: relative;
`,Ho=Ht.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: var(--primary);
  font-family: monospace;
  font-size: 0.9rem;
  outline: none;
  padding: 0.5rem 0;
  caret-color: var(--primary);
`,Vo=(Ht.div`
  width: 8px;
  height: 1.2rem;
  background-color: var(--primary);
  margin-left: 0.3rem;
  animation: ${Ut`${_o}`} 1s infinite;
`,Ht.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--secondary);
  animation: ${Ut`${Ro}`} 2s infinite;
  
  &::after {
    content: 'ONLINE';
    position: absolute;
    top: -2px;
    right: 12px;
    font-size: 0.7rem;
    color: var(--secondary);
    text-transform: uppercase;
    white-space: nowrap;
  }
`),Yo=Ht.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--primary);
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
`,Ko=Ht.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  ${e=>e.isSelected&&Ut`
    background-color: rgba(var(--primary-rgb), 0.2);
  `}
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.2);
  }
`,Qo=t=>{let{isMinimized:r=!1,onMinimize:n,onMaximize:a,onClose:i}=t;const[o,l]=(0,e.useState)(""),[s,c]=(0,e.useState)([]),[u,d]=(0,e.useState)(-1),[p,f]=(0,e.useState)([{id:0,content:'CYBERNET TERMINAL v4.2.1\nEstablishing secure connection...\nConnection established.\nType "help" for available commands.',type:"system"}]),[m,h]=(0,e.useState)(1),[g,b]=(0,e.useState)([]),[v,x]=(0,e.useState)(0),y=(0,e.useRef)(null),w=(0,e.useRef)(null);(0,e.useEffect)((()=>{w.current&&w.current.focus()}),[]),(0,e.useEffect)((()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)}),[p]),(0,e.useEffect)((()=>{if(o.trim()){const e=Object.keys(To).filter((e=>e.startsWith(o.toLowerCase())));b(e),x(0)}else b([])}),[o]);const k=(e,t)=>{f((r=>[...r,{id:m,content:e,type:t}])),h((e=>e+1))};return(0,Yt.jsxs)(Oo,{children:[(0,Yt.jsxs)(Lo,{children:[(0,Yt.jsxs)(Io,{children:["CYBERNET ",(0,Yt.jsx)("span",{children:"TERMINAL"})]}),(0,Yt.jsxs)(Do,{children:[(0,Yt.jsx)(Mo,{onClick:n}),(0,Yt.jsx)(Mo,{onClick:a}),(0,Yt.jsx)(Mo,{onClick:i})]})]}),(0,Yt.jsxs)(Fo,{ref:y,children:[p.map((e=>(0,Yt.jsx)(Uo,{isInput:"input"===e.type,isOutput:"output"===e.type,isError:"error"===e.type,children:"input"===e.type?e.content:e.content.split("\n").map(((e,t)=>(0,Yt.jsx)("div",{children:e},t)))},e.id))),(0,Yt.jsxs)(Bo,{children:[(0,Yt.jsx)(Wo,{children:">"}),(0,Yt.jsx)(Ho,{ref:w,value:o,onChange:e=>{l(e.target.value)},onKeyDown:e=>{if("ArrowUp"===e.key){if(e.preventDefault(),g.length>0)x((e=>e>0?e-1:e));else if(s.length>0&&u<s.length-1){const e=u+1;d(e),l(s[e])}}else if("ArrowDown"===e.key)if(e.preventDefault(),g.length>0)x((e=>e<g.length-1?e+1:e));else if(u>0){const e=u-1;d(e),l(s[e])}else 0===u&&(d(-1),l(""));else if("Tab"===e.key)e.preventDefault(),g.length>0&&l(g[v]);else if("Enter"===e.key){const e=o.trim();e&&(k(`> ${e}`,"input"),(e=>{const t=e.trim().toLowerCase();if(c((e=>[t,...e].slice(0,20))),d(-1),t in To){const e=((e,t)=>t)(0,To[t]);if("clear"===t)return f([{id:m,content:e,type:"system"}]),void h((e=>e+1));k(e,"output")}else t&&k(`Command not found: ${t}`,"error")})(e),l(""),b([]))}else"Escape"===e.key&&b([])},placeholder:"Enter command..."}),g.length>0&&(0,Yt.jsx)(Yo,{children:g.map(((e,t)=>(0,Yt.jsx)(Ko,{isSelected:t===v,onClick:()=>(e=>{l(e),b([]),w.current&&w.current.focus()})(e),children:e},e)))})]})]}),(0,Yt.jsx)(Vo,{})]})},Xo=Vt`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`,Go=Vt`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,qo=Vt`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`,Zo=Vt`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Jo=Vt`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`,el=Ht.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.97);
    z-index: -2;
  }
  
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(
        circle at 50% 50%,
        rgba(var(--primary-rgb), 0.1) 0%,
        transparent 80%
      ),
      repeating-linear-gradient(
        0deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 5px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(var(--primary-rgb), 0.03) 1px, 
        transparent 2px, 
        transparent 5px
      );
    z-index: -1;
    pointer-events: none;
  }
`,tl=Ht.header`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
  
  &::before {
    content: 'SYSTEM v2.4.1';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: var(--primary);
    letter-spacing: 3px;
    opacity: 0.7;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    box-shadow: 0 0 15px var(--primary);
    
    @media (min-width: 768px) {
      width: 150px;
    }
  }
`,rl=Ht.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 15px var(--primary);
  
  @media (min-width: 480px) {
    font-size: 2.5rem;
    letter-spacing: 3px;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  
  span {
    display: inline-block;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      animation: ${Ut`${Xo}`} 0.3s ease;
      color: var(--secondary);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 5px;
    height: 100%;
    background-color: var(--primary);
    animation: ${Ut`${qo}`} 2s infinite;
    
    @media (max-width: 480px) {
      left: -5px;
      width: 3px;
    }
  }
`,nl=Ht.p`
  color: var(--text-primary);
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  position: relative;
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    letter-spacing: 1.5px;
    margin-top: 0.8rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-top: 1rem;
  }
`,al=Ht.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`,il=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`,ol=Ht.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`,ll=Ht.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`,sl=Ht.h2`
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--primary);
  padding-bottom: 0.3rem;
  display: inline-block;
  position: relative;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 50%;
    height: 3px;
    background-color: var(--primary);
    box-shadow: 0 0 10px var(--primary);
  }
`,cl=Ht.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--primary);
  border-radius: 5px;
  
  @media (min-width: 480px) {
    padding: 1rem;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`,ul=Ht.div`
  text-align: center;
  
  h3 {
    font-size: 0.6rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.3rem;
    
    @media (min-width: 480px) {
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
  }
  
  div {
    font-size: 1rem;
    color: var(--primary);
    font-weight: 700;
    animation: ${Ut`${qo}`} 2s infinite;
    
    @media (min-width: 480px) {
      font-size: 1.2rem;
    }
  }
`,dl=Ht.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`,pl=Ht.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 10%;
    right: 5%;
    width: 80px;
    height: 150px;
    opacity: 0.5;
    z-index: -1;
    animation: ${Ut`${Zo}`} 8s ease-in-out infinite;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: var(--primary);
      animation: ${Ut`${Jo}`} 3s ease-in-out infinite;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 2px;
      height: 100%;
      background-color: var(--primary);
      animation: ${Ut`${Jo}`} 3s ease-in-out infinite;
    }
  }
`,fl=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(var(--primary-rgb), 0.03),
    transparent
  );
  pointer-events: none;
  z-index: 10;
  animation: ${Ut`${Go}`} 10s linear infinite;
  opacity: 0.5;
  
  @media (min-width: 768px) {
    opacity: 0.7;
  }
`,ml=()=>{const[t,r]=(0,e.useState)("USR-42X9"),[n,a]=(0,e.useState)("20:42:17"),[i,o]=(0,e.useState)("24ms"),[l,s]=(0,e.useState)("SECURE");return e.useEffect((()=>{const e=setInterval((()=>{const e=new Date,t=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),n=String(e.getSeconds()).padStart(2,"0");a(`${t}:${r}:${n}`)}),1e3);return()=>clearInterval(e)}),[]),(0,Yt.jsx)(Ta,{children:(0,Yt.jsxs)(el,{children:[(0,Yt.jsx)(fl,{}),(0,Yt.jsx)(pl,{}),(0,Yt.jsxs)(tl,{children:[(0,Yt.jsxs)(rl,{children:[(0,Yt.jsx)("span",{children:"C"}),(0,Yt.jsx)("span",{children:"Y"}),(0,Yt.jsx)("span",{children:"B"}),(0,Yt.jsx)("span",{children:"E"}),(0,Yt.jsx)("span",{children:"R"}),(0,Yt.jsx)("span",{children:"N"}),(0,Yt.jsx)("span",{children:"E"}),(0,Yt.jsx)("span",{children:"T"})]}),(0,Yt.jsx)(nl,{children:"COMMAND AND CONTROL INTERFACE"})]}),(0,Yt.jsx)(dl,{children:(0,Yt.jsx)(Ga,{})}),(0,Yt.jsxs)(cl,{children:[(0,Yt.jsxs)(ul,{children:[(0,Yt.jsx)("h3",{children:"USER"}),(0,Yt.jsx)("div",{children:t})]}),(0,Yt.jsxs)(ul,{children:[(0,Yt.jsx)("h3",{children:"TIME"}),(0,Yt.jsx)("div",{children:n})]}),(0,Yt.jsxs)(ul,{children:[(0,Yt.jsx)("h3",{children:"PING"}),(0,Yt.jsx)("div",{children:i})]}),(0,Yt.jsxs)(ul,{children:[(0,Yt.jsx)("h3",{children:"SECURITY"}),(0,Yt.jsx)("div",{children:l})]})]}),(0,Yt.jsxs)(al,{children:[(0,Yt.jsxs)(il,{children:[(0,Yt.jsxs)(ll,{children:[(0,Yt.jsx)(sl,{children:"USER PROFILE"}),(0,Yt.jsx)(ao,{userId:t})]}),(0,Yt.jsxs)(ll,{children:[(0,Yt.jsx)(sl,{children:"NOTIFICATIONS"}),(0,Yt.jsx)(zo,{maxNotifications:3})]})]}),(0,Yt.jsxs)(ol,{children:[(0,Yt.jsxs)(ll,{children:[(0,Yt.jsx)(sl,{children:"TERMINAL"}),(0,Yt.jsx)(Qo,{})]}),(0,Yt.jsxs)(ll,{children:[(0,Yt.jsx)(sl,{children:"LEADERBOARD"}),(0,Yt.jsx)(Ci,{})]})]})]})]})})},hl=Vt`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`,gl=Vt`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,bl=Vt`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`,vl=Vt`
  0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  50% { transform: translateY(-20px) translateX(10px) rotate(3deg); }
  100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
`,xl=Vt`
  0% { height: 10%; opacity: 0.5; }
  50% { height: 80%; opacity: 1; }
  100% { height: 10%; opacity: 0.5; }
`,yl=Vt`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  99% { opacity: 0; }
  100% { opacity: 1; }
`,wl=Ht.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`,kl=Ht.header`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
  
  &::before {
    content: 'SYSTEM v2.4.1';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: var(--primary);
    letter-spacing: 3px;
    opacity: 0.7;
    
    @media (max-width: 480px) {
      font-size: 0.6rem;
      top: -12px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: var(--gradient-primary);
    box-shadow: 0 0 15px var(--primary);
    
    @media (min-width: 768px) {
      width: 150px;
      bottom: -1.5rem;
    }
  }
`,Sl=Ht.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 15px var(--primary);
  
  @media (min-width: 480px) {
    font-size: 2.5rem;
  }
  
  @media (min-width: 768px) {
    font-size: 3rem;
    letter-spacing: 3px;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  
  span {
    display: inline-block;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      animation: ${Ut`${hl}`} 0.3s ease;
      color: var(--secondary);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    width: 5px;
    height: 100%;
    background-color: var(--primary);
    animation: ${Ut`${bl}`} 2s infinite;
    
    @media (max-width: 480px) {
      left: -5px;
      width: 3px;
    }
  }
`,El=Ht.p`
  color: var(--text-primary);
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  position: relative;
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-top: 1rem;
  }
  
  &::after {
    content: 'NETWORK STATUS: ONLINE';
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.6rem;
    color: var(--secondary);
    letter-spacing: 1px;
    opacity: 0.7;
    animation: ${Ut`${yl}`} 3s infinite;
    
    @media (min-width: 480px) {
      font-size: 0.7rem;
      top: -30px;
    }
    
    @media (max-width: 480px) {
      display: none;
    }
  }
`,Cl=Ht.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
    margin-top: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
  }
`,jl=Ht.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  height: auto;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    height: 100%;
    min-height: 65vh;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.5);
    
    @media (max-width: 768px) {
      transform: translateY(-3px) scale(1.01);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--primary), 
      transparent
    );
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1px;
    background-color: var(--primary);
    opacity: 0.5;
  }
`,zl=Ht.div`
  background-color: rgba(10, 10, 20, 0.9);
  padding: 1rem;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  h2 {
    font-size: 1rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    
    @media (min-width: 480px) {
      font-size: 1.1rem;
      letter-spacing: 1.5px;
    }
    
    @media (min-width: 768px) {
      font-size: 1.25rem;
      letter-spacing: 2px;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${Ut`${gl}`} 4s linear infinite;
    pointer-events: none;
    z-index: 0;
  }
`,Tl=Ht.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  @media (min-width: 480px) {
    gap: 1rem;
  }
`,_l=(Ht.div`
  background-color: rgba(10, 10, 20, 0.9);
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(var(--primary-rgb), 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.05),
      transparent
    );
    animation: ${Ut`${gl}`} 4s linear infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: var(--primary);
    animation: ${Ut`${xl}`} 3s infinite ease-in-out;
    opacity: 0.5;
  }
`,Ht.h2`
  font-size: 1.25rem;
  color: var(--primary);
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  font-weight: 600;
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--primary);
    margin-right: 10px;
    animation: ${Ut`${bl}`} 2s infinite;
  }
`,Ht.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3);
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.5);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--primary), 
      transparent
    );
    opacity: 0.5;
  }
`,Ht.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.6);
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.8);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    opacity: 0.5;
    animation: ${Ut`${bl}`} 2s infinite;
  }
`),Al=Ht.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`,$l=Ht.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 50px 50px;
  background-image: 
    linear-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px);
  opacity: 0.5;
`,Pl=Ht.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(var(--primary-rgb), ${e=>e.opacity}), transparent 70%);
  animation: ${Ut`${vl}`} ${e=>e.duration}s infinite ease-in-out;
  animation-delay: ${e=>e.delay}s;
  filter: blur(${e=>e.size/3}px);
`,Nl=Ht.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(transparent 50%, rgba(var(--primary-rgb), 0.03) 50%),
    linear-gradient(90deg, transparent 50%, rgba(var(--primary-rgb), 0.03) 50%);
  background-size: 100px 100px;
`,Rl=Ht.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--primary);
  border-radius: 30px;
  color: var(--primary);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.3);
  letter-spacing: 1px;
  text-transform: uppercase;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`,Ol=Ht.div`
  position: fixed;
  bottom: 80px;
  left: 20px;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  border: 1px solid var(--primary);
  transform: translateY(${e=>e.isVisible?"0":"20px"});
  opacity: ${e=>e.isVisible?"1":"0"};
  transition: all 0.3s ease;
  pointer-events: ${e=>e.isVisible?"auto":"none"};
  z-index: 998;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.4);
`,Ll=Ht.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), rgba(var(--secondary-rgb), 0.1));
  border: 1px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-weight: 700;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--primary-rgb), 0.1),
      transparent
    );
    animation: ${Ut`${gl}`} 3s linear infinite;
    pointer-events: none;
  }
`,Il=Ht.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--primary);
  text-align: center;
  letter-spacing: 1px;
`,Dl=Ht.footer`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--primary-rgb), 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, var(--primary), transparent);
  }
`,Ml=Ht.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  letter-spacing: 1px;
  opacity: 0.7;
`,Fl=e=>{let{isListening:t,onToggle:r}=e;return(0,Yt.jsx)(_l,{onClick:r,children:t?"\ud83c\udfa4":"\ud83c\udf99\ufe0f"})},Ul=()=>{const[t,r]=(0,e.useState)(!1);return(0,Yt.jsxs)(Yt.Fragment,{children:[(0,Yt.jsxs)(Rl,{onClick:()=>r(!t),children:[(0,Yt.jsx)("span",{children:"AR View"})," \ud83d\udcf1"]}),(0,Yt.jsxs)(Ol,{isVisible:t,children:[(0,Yt.jsx)(Ll,{children:"QR Code"}),(0,Yt.jsx)(Il,{children:"SCAN FOR AR EXPERIENCE"})]})]})},Wl=()=>{const[t,r]=(0,e.useState)("home"),[n,a]=(0,e.useState)(!1),[i,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)([]),c="CyberPulse Arena".split("");(0,e.useEffect)((()=>{$a.setVolume(.5);const e=[];for(let t=0;t<15;t++)e.push({id:t,x:100*Math.random(),y:100*Math.random(),size:100+300*Math.random(),opacity:.05+.1*Math.random(),delay:5*Math.random(),duration:15+20*Math.random()});s(e)}),[]),(0,e.useEffect)((()=>(document.body.classList.add("cyber-theme"),()=>{document.body.classList.remove("cyber-theme")})),[]);return"cyber"===t?(0,Yt.jsx)(ml,{}):(0,Yt.jsx)(Ta,{children:(0,Yt.jsxs)(wl,{children:[(0,Yt.jsxs)(Al,{children:[(0,Yt.jsx)($l,{}),(0,Yt.jsx)(Nl,{}),l.map((e=>(0,Yt.jsx)(Pl,{style:{left:`${e.x}%`,top:`${e.y}%`},size:e.size,opacity:e.opacity,delay:e.delay,duration:e.duration},e.id)))]}),(0,Yt.jsxs)(kl,{children:[(0,Yt.jsx)(Sl,{children:c.map(((e,t)=>(0,Yt.jsx)("span",{children:" "===e?"\xa0":e},t)))}),(0,Yt.jsx)(El,{children:"NEURAL NETWORK COMBAT RANKINGS 2.4.1"})]}),(0,Yt.jsx)(Ca,{tabs:[{id:"home",label:"HOME"},{id:"cyber",label:"CYBER DASHBOARD"},{id:"stats",label:"STATS"}],activeTab:t,onChange:e=>{r(e),$a.play("click")}}),(0,Yt.jsxs)(Cl,{children:["home"===t&&(0,Yt.jsxs)(Yt.Fragment,{children:[(0,Yt.jsxs)(jl,{children:[(0,Yt.jsxs)(zl,{children:[(0,Yt.jsx)("h2",{children:"TRADITIONAL LEADERBOARD"}),(0,Yt.jsxs)(Tl,{children:[(0,Yt.jsx)(Fl,{isListening:n,onToggle:()=>{a(!n),n?$a.play("deactivate"):$a.play("activate")}}),(0,Yt.jsx)(Ul,{})]})]}),(0,Yt.jsx)(wr,{})]}),(0,Yt.jsxs)(jl,{children:[(0,Yt.jsx)(zl,{children:(0,Yt.jsx)("h2",{children:"ENHANCED LEADERBOARD"})}),(0,Yt.jsx)(wn,{})]})]}),"stats"===t&&(0,Yt.jsx)(ka,{})]}),(0,Yt.jsxs)(Dl,{children:[(0,Yt.jsx)(Ga,{}),(0,Yt.jsx)(Ml,{children:"\xa9 2077 NEURAL BRIDGE SYSTEMS. ALL RIGHTS RESERVED."})]})]})})};t.createRoot(document.getElementById("root")).render((0,Yt.jsx)(e.StrictMode,{children:(0,Yt.jsx)(Wl,{})}))})()})();
//# sourceMappingURL=main.d5b7a61a.js.map