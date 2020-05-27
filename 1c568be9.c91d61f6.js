/*! For license information please see 1c568be9.c91d61f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(11),a=(n(226),n(225)),i={id:"react-native",title:"React Native",sidebar_label:"React Native"},c={id:"react-native",title:"React Native",description:"To integrate offix in React Native, developers need to provide custom storage and network layers,",source:"@site/../docs/react-native.md",permalink:"/docs/next/react-native",editUrl:"https://github.com/aerogear/offix/edit/master/website/../docs/react-native.md",version:"next",sidebar_label:"React Native",sidebar:"docs",previous:{title:"React - using Offix Hooks",permalink:"/docs/next/react"},next:{title:"Angular",permalink:"/docs/next/angular"}},u=[{value:"Integration",id:"integration",children:[]}],l={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To integrate offix in React Native, developers need to provide custom storage and network layers,\na working example can be found in the offix ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/tree/master/examples/react-native"}),"React Native example app"),"."),Object(a.b)("p",null,"We recomend developers use following React Native plugins:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@react-native-community/async-storage")," - for storage"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@react-native-community/netinfo")," - for network information")),Object(a.b)("p",null,"Note: if you are using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://expo.io/"}),"Expo"),", you must use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/asyncstorage"}),"AsyncStorage included in ",Object(a.b)("inlineCode",{parentName:"a"},"react-native"))," instead."),Object(a.b)("h2",{id:"integration"},"Integration"),Object(a.b)("p",null,"To integrate with offix we need to create wrappers for storage and network."),Object(a.b)("p",null,"Note: if using expo, you will need to ",Object(a.b)("inlineCode",{parentName:"p"},"import { AsyncStorage } from 'react-native';")," instead of using the ",Object(a.b)("inlineCode",{parentName:"p"},"@react-native-community/async-storage")," package."),Object(a.b)("p",null,"For the network listener, create a new class ",Object(a.b)("inlineCode",{parentName:"p"},"ReactNativeNetworkStatus.js"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import NetInfo from "@react-native-community/netinfo";\n\nexport class ReactNativeNetworkStatus {\n\n  listeners = [];\n\n  constructor() {\n    NetInfo.addEventListener(this.handleNetworkStatusChange.bind(this));\n  }\n\n  addListener(listener) {\n    this.listeners.push(listener);\n  }\n\n  removeListener(listener) {\n    const index = this.listeners.indexOf(listener);\n    if (index >= 0) {\n      this.listeners.splice(index, 1);\n    }\n  }\n\n  isOffline() {\n    return new Promise((resolve) => {\n      NetInfo.fetch().then(state => {\n        resolve(!state.isInternetReachable);\n      });\n    });\n  }\n\n  handleNetworkStatusChange(state) {\n    const online = state.isInternetReachable;\n    this.listeners.forEach((listener) => {\n      listener({ online });\n    });\n  }\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { ApolloOfflineClient } from 'offix-client'\nimport { InMemoryCache } from 'apollo-cache-inmemory';\nimport { HttpLink } from 'apollo-link-http';\nimport AsyncStorage from '@react-native-community/async-storage'\nimport NetInfo from '@react-native-community/netinfo'\nimport ReactNativeNetworkStatus from './ReactNativeNetworkStatus'\n\n// Create cache wrapper\nconst cacheStorage = {\n  getItem: async (key) => {\n    const data = await AsyncStorage.getItem(key);\n    if (typeof data === 'string') {\n      return JSON.parse(data);\n    }\n    return data;\n  },\n  setItem: async (key, value) => {\n    let valueStr = value;\n    if (typeof valueStr === 'object') {\n      valueStr = JSON.stringify(value);\n    }\n    return AsyncStorage.setItem(key, valueStr);\n  },\n  removeItem: async (key) => {\n    return AsyncStorage.removeItem(key);\n  }\n};\n\n// Init network interface\nconst networkStatus = new ReactNativeNetworkStatus();\n\n// Create client\nconst offlineClient = new ApolloOfflineClient({\n  cache: new InMemoryCache(),\n  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),\n  offlineStorage: cacheStorage,\n  cacheStorage,\n  networkStatus\n});\n")),Object(a.b)("p",null,"For a fully functional example please check react native example app:\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/offix-react-native-example"}),"https://github.com/aerogear/offix-react-native-example")))}f.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=f(n),y=r,m=s["".concat(i,".").concat(y)]||s[y]||p[y]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},226:function(e,t,n){"use strict";e.exports=n(227)},227:function(e,t,n){"use strict";var r=n(228),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,r(k,O.prototype),k.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:S.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,P=[];function _(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function $(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return r(o,t,""===n?"."+A(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+A(c=t[l],l);u+=e(c,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=d&&t[d]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,f=n+A(c,l++),r,o);else if("object"===c)throw r=""+t,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),$(e,D,t=_(t,a,r,o)),I(t)}var M={current:null};function q(){var e=M.current;if(null===e)throw Error(v(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,T,t=_(null,null,t,n)),I(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(v(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var o=r({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)x.call(t,f)&&!N.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},228:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=i(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(u[f]=n[f]);if(r){c=r(n);for(var s=0;s<c.length;s++)a.call(n,c[s])&&(u[c[s]]=n[c[s]])}}return u}}}]);