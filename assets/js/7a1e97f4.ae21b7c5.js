"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},c="MongoDb",i={unversionedId:"schema-registry/backends/database/mongodb",id:"schema-registry/backends/database/mongodb",title:"MongoDb",description:"\ud83d\udfe2 Supported",source:"@site/docs/schema-registry/backends/database/mongodb.md",sourceDirName:"schema-registry/backends/database",slug:"/schema-registry/backends/database/mongodb",permalink:"/schema-registry/backends/database/mongodb",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Materialize",permalink:"/schema-registry/backends/database/materialize"},next:{title:"MySQL",permalink:"/schema-registry/backends/database/mysql"}},s={},l=[{value:"Sample Mongodb Schema Cache Backend Configuration",id:"sample-mongodb-schema-cache-backend-configuration",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb")," schema cache backend leverages schemas stored in a configurable registry collection."),(0,a.kt)("p",null,"It is most useful when you want to store ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"valid events"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid events")," within the same system to reduce infrastructure overhead."),(0,a.kt)("p",null,"It can be used with any combination of sink(s)."),(0,a.kt)("h2",{id:"sample-mongodb-schema-cache-backend-configuration"},"Sample Mongodb Schema Cache Backend Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registry:\n  backend:\n    type: mongodb\n    registryCollection: registry\n    mongoHosts:\n      - 127.0.0.1\n    mongoPort: 27017\n    mongoDbName: buz\n    mongoUser: buz\n    mongoPass: buz\n")))}m.isMDXComponent=!0}}]);