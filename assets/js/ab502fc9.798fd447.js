"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,b=u["".concat(i,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Serverless Makes Streaming Accessible",authors:["jake"],slug:"/serverless-makes-streaming-accessible",tags:["Serverless Snowplow Analytics","Serverless Event Tracking","Google Cloud Run","Pub/Sub","BigQuery","Snowflake","Postgres"],date:"2023-02-22T00:00",hide_table_of_contents:!1},s=void 0,l={permalink:"/blog/serverless-makes-streaming-accessible",source:"@site/blog/serverless-makes-streaming-accessible/index.md",title:"Serverless Makes Streaming Accessible",description:"Snowplow Analytics is a highly-scalable system that powers structured data creation for millions of sites on the internet. Snowplow tracking is incorporated into dbt, dbt cloud, Trello, Gitlab, Citi bank, Backcountry.com, and the list goes on.",date:"2023-02-22T00:00:00.000Z",formattedDate:"February 22, 2023",tags:[{label:"Serverless Snowplow Analytics",permalink:"/blog/tags/serverless-snowplow-analytics"},{label:"Serverless Event Tracking",permalink:"/blog/tags/serverless-event-tracking"},{label:"Google Cloud Run",permalink:"/blog/tags/google-cloud-run"},{label:"Pub/Sub",permalink:"/blog/tags/pub-sub"},{label:"BigQuery",permalink:"/blog/tags/big-query"},{label:"Snowflake",permalink:"/blog/tags/snowflake"},{label:"Postgres",permalink:"/blog/tags/postgres"}],readingTime:11.56,hasTruncateMarker:!0,authors:[{name:"Jake",title:"\ud83d\udc1d",url:"https://github.com/jakthom",imageURL:"https://github.com/jakthom.png",key:"jake"}],frontMatter:{title:"Serverless Makes Streaming Accessible",authors:["jake"],slug:"/serverless-makes-streaming-accessible",tags:["Serverless Snowplow Analytics","Serverless Event Tracking","Google Cloud Run","Pub/Sub","BigQuery","Snowflake","Postgres"],date:"2023-02-22T00:00",hide_table_of_contents:!1},nextItem:{title:"The Contract-Powered Data Platform",permalink:"/blog/the-contract-powered-data-platform"}},i={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://snowplow.io/"},"Snowplow Analytics")," is a highly-scalable system that powers ",(0,a.kt)("a",{parentName:"p",href:"https://snowplow.io/blog/why-data-contracts-are-obviously-a-good-idea/"},"structured data creation")," for ",(0,a.kt)("a",{parentName:"p",href:"https://trends.builtwith.com/analytics/Snowplow"},"millions of sites")," on the internet. Snowplow tracking is incorporated into ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/dbt-core/blob/main/core/dbt/tracking.py#L33-L47"},"dbt"),", ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.getdbt.com/"},"dbt cloud"),", ",(0,a.kt)("a",{parentName:"p",href:"https://trello.com/"},"Trello"),", ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/"},"Gitlab"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.citi.com/"},"Citi bank"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.backcountry.com/"},"Backcountry.com"),", and the list goes on."),(0,a.kt)("p",null,"After setting up data infrastructure ",(0,a.kt)("a",{parentName:"p",href:"https://bostata.com/268-billion-events-with-snowplow-snowflake-at-cargurus"},"like Snowplow")," for ",(0,a.kt)("a",{parentName:"p",href:"https://bostata.com/client-side-instrumentation-for-under-one-dollar"},"years"),"  I've frequently found myself wishing for both ",(0,a.kt)("strong",{parentName:"p"},"less")," and ",(0,a.kt)("strong",{parentName:"p"},"more"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fewer streams"),", ",(0,a.kt)("strong",{parentName:"p"},"fewer machines or containers to manage"),", ",(0,a.kt)("strong",{parentName:"p"},"fewer moving pieces to help prevent event duplication or loss"),", ",(0,a.kt)("strong",{parentName:"p"},"less configuration"),", and ",(0,a.kt)("strong",{parentName:"p"},"less in-house documentation to keep things running")," would be a dream."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Deployment flexibility"),", ",(0,a.kt)("strong",{parentName:"p"},"flexible schema storage"),", ",(0,a.kt)("strong",{parentName:"p"},"cost efficiencies"),", ",(0,a.kt)("strong",{parentName:"p"},"seamless migration between transport systems"),", ",(0,a.kt)("strong",{parentName:"p"},"improved utility from the data in transit"),", and ",(0,a.kt)("strong",{parentName:"p"},"increased visibility")," would also be very helpful."),(0,a.kt)("p",null,"Meanwhile, serverless technologies have come into their own and point the way toward a very bright data-processing future. Which is how ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://buz.dev"},"buz.dev"))," was born."))}m.isMDXComponent=!0}}]);