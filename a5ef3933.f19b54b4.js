(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{245:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(1),r=t(11),a=(t(0),t(288)),o={id:"release-notes",title:"What is new in Offix",sidebar_label:"Release notes"},c={id:"version-0.8.2/release-notes",title:"What is new in Offix",description:"# 0.8.0 ",source:"@site/versioned_docs/version-0.8.2/ref-release-notes.md",permalink:"/docs/0.8.2/release-notes",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.8.2/ref-release-notes.md",version:"0.8.2",sidebar_label:"Release notes",sidebar:"version-0.8.2/docs",previous:{title:"Server Side Conflict Resolution",permalink:"/docs/0.8.2/conflict-server"}},l=[{value:"Features",id:"features",children:[{value:"Offix React Hooks Alpha released",id:"offix-react-hooks-alpha-released",children:[]},{value:"Ability to customize Apollo Link chain",id:"ability-to-customize-apollo-link-chain",children:[]},{value:"New way to access Apollo Client",id:"new-way-to-access-apollo-client",children:[]}]},{value:"Breaking changes",id:"breaking-changes",children:[{value:"Changes for Subscriptions and File Uploads",id:"changes-for-subscriptions-and-file-uploads",children:[]},{value:"0.7.1",id:"071",children:[]},{value:"0.7.0",id:"070",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"080"},"0.8.0"),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("h3",{id:"offix-react-hooks-alpha-released"},"Offix React Hooks Alpha released"),Object(a.b)("p",null,"Offix React Hooks provides helpers for using offix within React and React Native.\nPlease refer to package README for more information"),Object(a.b)("h3",{id:"ability-to-customize-apollo-link-chain"},"Ability to customize Apollo Link chain"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"OffixClientConfig.terminatingLink")," allows to customize client by adding additional links\nfor handling authentication, network requests etc."),Object(a.b)("h3",{id:"new-way-to-access-apollo-client"},"New way to access Apollo Client"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"OfflineClient.apolloClient")," is now public. This means ",Object(a.b)("inlineCode",{parentName:"p"},"apolloClient")," is directly accessible after ",Object(a.b)("inlineCode",{parentName:"p"},"OfflineClient.init()"),"."),Object(a.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(a.b)("h3",{id:"changes-for-subscriptions-and-file-uploads"},"Changes for Subscriptions and File Uploads"),Object(a.b)("p",null,"Subscriptions and file uploads were removed from the main library.\nDevelopers can still configure Subscription access directly int their application by\ncreating Apollo link acording to documentation and passing ",Object(a.b)("inlineCode",{parentName:"p"},"OffixClientConfig.terminatingLink")),Object(a.b)("h3",{id:"071"},"0.7.1"),Object(a.b)("h4",{id:"offline-operations-persist-optimistic-response"},"Offline operations persist optimistic response"),Object(a.b)("p",null,"Offline operations will now cache update functional and automatically apply optimistic response\n",Object(a.b)("inlineCode",{parentName:"p"},"OffixClientConfig.mutationCacheUpdates")," is still required to see optimistic responses after application restart."),Object(a.b)("h4",{id:"watchofflinechange-returns-mutation-result"},"watchOfflineChange returns mutation result"),Object(a.b)("p",null,"We have discovered bug where ",Object(a.b)("inlineCode",{parentName:"p"},"watchOfflineChange")," method from ",Object(a.b)("inlineCode",{parentName:"p"},"OfflineError")," was missing mutation results.\nThis is now fixed so your UI can instantly watch for offline chances and render when succeeded."),Object(a.b)("h3",{id:"070"},"0.7.0"),Object(a.b)("h4",{id:"support-apollo-26x"},"Support Apollo 2.6.x"),Object(a.b)("p",null,"Apollo Client 2.6.x with new typings is now supported."),Object(a.b)("h4",{id:"extended-conflict-support"},"Extended conflict support"),Object(a.b)("p",null,"New conflict implementation requires changes on both client and server.\nOn server we have changed conflict detection mechanism to single method.\nServer side conflict resolution was removed due to the fact that we could not provide\nreliable diff source without separate store. "),Object(a.b)("h5",{id:"server-side-implementation"},"Server side implementation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"})," const conflictError = conflictHandler.checkForConflict(greeting, args);\n      if (conflictError) {\n        throw conflictError;\n      }\n}\n")),Object(a.b)("h5",{id:"client-side-implementation"},"Client side implementation:"),Object(a.b)("p",null,"Client side implementation now requires users to apply ",Object(a.b)("inlineCode",{parentName:"p"},"returnType")," to context when performing a mutation.\nConflict interface now has an additional method ",Object(a.b)("inlineCode",{parentName:"p"},"mergeOccured")," that will be triggered when a conflict was  resolved without data loss."),Object(a.b)("p",null,"Please refer to documentation for more details."),Object(a.b)("h4",{id:"breaking-changes-1"},"Breaking changes"),Object(a.b)("h5",{id:"datasync-config-renamed"},"DataSync Config renamed"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DataSyncConfig")," interface was renamed to ",Object(a.b)("inlineCode",{parentName:"p"},"OffixClientConfig"),".\nPlease review if your configuration still conforms to the new interface."),Object(a.b)("h5",{id:"cache-helper-interface"},"Cache Helper Interface"),Object(a.b)("p",null,"Cache Helper interface now will now accept object instead of individual parameters:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"})," const updateFunction = getUpdateFunction({\n            mutationName,\n            idField,\n            operationType,\n            updateQuery\n });\n")))}p.isMDXComponent=!0},288:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=Object(i.forwardRef)((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,u=d["".concat(o,".").concat(f)]||d[f]||b[f]||a;return t?r.a.createElement(u,c({ref:n},s,{components:t})):r.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);