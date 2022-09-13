"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3188],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},c="Postgres",s={unversionedId:"under-the-hood/cache-backends/database/postgres",id:"under-the-hood/cache-backends/database/postgres",title:"Postgres",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/cache-backends/database/postgres.md",sourceDirName:"under-the-hood/cache-backends/database",slug:"/under-the-hood/cache-backends/database/postgres",permalink:"/under-the-hood/cache-backends/database/postgres",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MySQL",permalink:"/under-the-hood/cache-backends/database/mysql"},next:{title:"Object",permalink:"/category/object"}},i={},p=[{value:"Sample Postgres Schema Cache Backend Configuration",id:"sample-postgres-schema-cache-backend-configuration",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgres"},"Postgres"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres")," schema cache backend leverages schemas stored in a configurable registry table."),(0,a.kt)("p",null,"It is most useful when you want to store ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"valid events"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid events")," within the same system to reduce infrastructure overhead."),(0,a.kt)("p",null,"It can be used with any combination of sink(s)."),(0,a.kt)("h2",{id:"sample-postgres-schema-cache-backend-configuration"},"Sample Postgres Schema Cache Backend Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"schemaCache:\n  backend:\n    type: postgres\n    registryTable: registry\n    pgHost: localhost\n    pgPort: 5432\n    pgDbName: buz\n    pgUser: buz\n    pgPass: buz\n")))}u.isMDXComponent=!0}}]);