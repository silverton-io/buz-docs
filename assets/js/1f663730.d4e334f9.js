"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7921:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={description:"Buz is an open-source project that makes it easy to send data to Minio",keywords:["Minio","event tracking","free","open-source","Buz"]},i="Send data to Minio for free with Buz.",s={type:"mdx",permalink:"/integrations/minio",source:"@site/src/pages/integrations/minio.md",title:"Send data to Minio for free with Buz.",description:"Buz is an open-source project that makes it easy to send data to Minio",frontMatter:{description:"Buz is an open-source project that makes it easy to send data to Minio",keywords:["Minio","event tracking","free","open-source","Buz"]}},l=[],u={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-data-to-minio-for-free-with-buz"},"Send data to Minio for free with Buz."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:n(2307).Z,width:"3660",height:"1472"})),(0,a.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Free and entirely ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,a.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lightweight")," and ",(0,a.kt)("strong",{parentName:"li"},"cost-efficient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Empowers teams to run their own data collection systems"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Quick to set up")," and ",(0,a.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,a.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,a.kt)("li",{parentName:"ul"},"Serverless-native, and ",(0,a.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,a.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,a.kt)("h1",{id:"supported-sources"},"Supported Sources"),(0,a.kt)("p",null,"Buz sends data to Minio from a number of different sources including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/snowplow-analytics"},"Snowplow Analytics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/cloudevents"},"Cloudevents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/webhook"},"webhook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/pixel"},"pixel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/sources/self-describing-json"},"self describing JSON"))),(0,a.kt)("h1",{id:"want-to-get-started"},"Want to get started?"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/"},"Docs")," to quickly get up and running."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buzz",src:n(976).Z,width:"4000",height:"1389"})))}c.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);