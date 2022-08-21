"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Schema Directory",c={unversionedId:"under-the-hood/tools/schema-directory",id:"under-the-hood/tools/schema-directory",title:"Schema Directory",description:'If the schemaDirectory is enabled, all "currently-cached" schemas are available at /schemas.',source:"@site/docs/under-the-hood/tools/schema-directory.md",sourceDirName:"under-the-hood/tools",slug:"/under-the-hood/tools/schema-directory",permalink:"/under-the-hood/tools/schema-directory",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Event-Level Metrics",permalink:"/under-the-hood/tools/metrics"},next:{title:"Squawkbox",permalink:"/under-the-hood/tools/squawkbox"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema-directory"},"Schema Directory"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaDirectory")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled"),', all "currently-cached" schemas are available at ',(0,o.kt)("inlineCode",{parentName:"p"},"/schemas"),"."),(0,o.kt)("p",null,"Individual schemas are also available at ",(0,o.kt)("inlineCode",{parentName:"p"},"/schemas/$NAME_OF_SCHEMA"),"."),(0,o.kt)("admonition",{title:"For Example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If a schema was named ",(0,o.kt)("inlineCode",{parentName:"p"},"io.silverton/buz/tele/beat/v1.0.json"),", the schema would be available at ",(0,o.kt)("inlineCode",{parentName:"p"},"$COLLECTOR_URL/schemas/io.silverton/buz/tele/beat/v1.0.json"),".")))}u.isMDXComponent=!0}}]);