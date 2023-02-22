"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8649],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(o),k=n,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return o?a.createElement(m,i(i({ref:t},c),{},{components:o})):a.createElement(m,i({ref:t},c))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4715:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={title:"Send webhook data to Clickhouse",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Clickhouse.",keywords:["webhook","Clickhouse","webhook to Clickhouse","event tracking","free","open-source","Buz"]},i="Send webhook data to Clickhouse for free with Buz.",u={type:"mdx",permalink:"/sources/webhook/integrations/clickhouse",source:"@site/src/pages/sources/webhook/integrations/clickhouse.md",title:"Send webhook data to Clickhouse",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Clickhouse.",frontMatter:{title:"Send webhook data to Clickhouse",description:"Buz is a free and open-source project that makes it easy to collect, validate, and load webhook data to Clickhouse.",keywords:["webhook","Clickhouse","webhook to Clickhouse","event tracking","free","open-source","Buz"]}},s=[{value:"Buz makes it easy to collect webhook data and send it to Clickhouse using your <strong>own infrastructure</strong>.",id:"buz-makes-it-easy-to-collect-webhook-data-and-send-it-to-clickhouse-using-your-own-infrastructure",level:2}],l={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"send-webhook-data-to-clickhouse-for-free-with-buz"},"Send webhook data to Clickhouse for free with Buz."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"buzflow",src:o(2307).Z,width:"3660",height:"1472"})),(0,n.kt)("h2",{id:"buz-makes-it-easy-to-collect-webhook-data-and-send-it-to-clickhouse-using-your-own-infrastructure"},"Buz makes it easy to collect webhook data and send it to Clickhouse using your ",(0,n.kt)("strong",{parentName:"h2"},"own infrastructure"),"."),(0,n.kt)("h1",{id:"why-buz"},"Why Buz?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It's Free and entirely ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Open-Source"),"."),(0,n.kt)("li",{parentName:"ul"},"No SaaS, DPA, MDS products, or dealing with legal necessary. ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Buz runs on your infrastructure")),"."),(0,n.kt)("li",{parentName:"ul"},"Buz is a ",(0,n.kt)("strong",{parentName:"li"},"lightweight")," and ",(0,n.kt)("strong",{parentName:"li"},"cost-efficient")," way of collecting data."),(0,n.kt)("li",{parentName:"ul"},"Buz ",(0,n.kt)("strong",{parentName:"li"},"empowers teams to run their own data collection systems"),"."),(0,n.kt)("li",{parentName:"ul"},"Buz is ",(0,n.kt)("strong",{parentName:"li"},"quick to set up")," and ",(0,n.kt)("strong",{parentName:"li"},"easy to maintain long term")," thanks to ",(0,n.kt)("strong",{parentName:"li"},"minimal moving pieces"),"."),(0,n.kt)("li",{parentName:"ul"},"Buz is serverless-native, and ",(0,n.kt)("strong",{parentName:"li"},"automatically scales as data volumes do (including to ",(0,n.kt)("inlineCode",{parentName:"strong"},"0"),")"),".")),(0,n.kt)("h1",{id:"quickstart-a-local-buz-stack"},"Quickstart a local Buz stack"),(0,n.kt)("p",null,"Want to get started quickly? The ",(0,n.kt)("a",{parentName:"p",href:"/examples/quickstart"},"Buz Quickstart")," bootstraps an end-to-end streaming analytics stack using Buz, ",(0,n.kt)("a",{parentName:"p",href:"https://redpanda.com/?utm_medium=hipanda&utm_source=buz"},"Redpanda"),", the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.redpanda.com/docs/console/?utm_medium=hipanda&utm_source=buz"},"Redpanda Console"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://materialize.com/?utm_medium=himaterialize&utm_source=buz"},"Materialize"),"."),(0,n.kt)("h1",{id:"deploy-buz-on-google-cloud-in-under-5-minutes"},"Deploy Buz on Google Cloud in under 5 minutes"),(0,n.kt)("p",null,"The production-ready GCP stack includes Buz, Google Pub/Sub, Pub/Sub subscriptions, and BigQuery. It can be set up in minutes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/deploying/gcp/cloud_run"},"Using Terraform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/deploying/gcp/cloud_run"},"Using the Google Cloud Console"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"buzz",src:o(976).Z,width:"4000",height:"1389"})))}c.isMDXComponent=!0},2307:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/buzflow-727542cdbec371ef9b3ad72de7359f54.png"},976:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);