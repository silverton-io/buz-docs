"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const c={},o="S3",s={unversionedId:"schema-registry/backends/object/s3",id:"schema-registry/backends/object/s3",title:"S3",description:"\ud83d\udfe2 Supported",source:"@site/docs/schema-registry/backends/object/s3.md",sourceDirName:"schema-registry/backends/object",slug:"/schema-registry/backends/object/s3",permalink:"/schema-registry/backends/object/s3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MinIO",permalink:"/schema-registry/backends/object/minio"},next:{title:"Registry"}},i={},p=[{value:"Sample S3 Cache Backend Configuration",id:"sample-s3-cache-backend-configuration",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"s3"},"S3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"s3")," cache backend uses schemas stored in s3 to back the onboard schema registry."),(0,a.kt)("h2",{id:"sample-s3-cache-backend-configuration"},"Sample S3 Cache Backend Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registry:\n  backend:\n    type: s3                  # The backend type\n    bucket: buz-schemas  # The s3 bucket containing schemas\n    path: /                   # The path to consider as root\n")))}u.isMDXComponent=!0}}]);