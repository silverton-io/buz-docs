"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4361:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Cloudevent to Elasticsearch with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Cloudevent data to Elasticsearch.",keywords:["Cloudevent","Elasticsearch","Buz"]},l="Send Cloudevent data to Elasticsearch using Buz.",i={type:"mdx",permalink:"/connections/cloudevent_to_elasticsearch",source:"@site/src/pages/connections/cloudevent_to_elasticsearch.md",title:"Cloudevent to Elasticsearch with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Cloudevent data to Elasticsearch.",frontMatter:{title:"Cloudevent to Elasticsearch with Buz",description:"Buz is an open source project that makes it easy to collect, validate, and load Cloudevent data to Elasticsearch.",keywords:["Cloudevent","Elasticsearch","Buz"]}},c=[{value:"Buz makes it easy to collect, validate, and load your Cloudevent data to Elasticsearch.",id:"buz-makes-it-easy-to-collect-validate-and-load-your-cloudevent-data-to-elasticsearch",level:2},{value:"What Buz Is:",id:"what-buz-is",level:3},{value:"What Buz Is Not:",id:"what-buz-is-not",level:3},{value:"More:",id:"more",level:3}],u={toc:c};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-cloudevent-data-to-elasticsearch-using-buz"},"Send Cloudevent data to Elasticsearch using Buz."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"buzz",src:a(976).Z,width:"4000",height:"1389"})),(0,r.kt)("h2",{id:"buz-makes-it-easy-to-collect-validate-and-load-your-cloudevent-data-to-elasticsearch"},"Buz makes it easy to collect, validate, and load your Cloudevent data to Elasticsearch."),(0,r.kt)("h3",{id:"what-buz-is"},"What Buz Is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"open source project")," aimed at making data collection and integration easy."),(0,r.kt)("li",{parentName:"ul"},"A lightweight, standalone binary built with Go."),(0,r.kt)("li",{parentName:"ul"},"A system that collects data from multiple sources (webhooks, pixels, Cloudevents, Snowplow Analytics SDK's, and more)."),(0,r.kt)("li",{parentName:"ul"},"A validator for enforcing data quality on its way in the door."),(0,r.kt)("li",{parentName:"ul"},'An obsolete form of "',(0,r.kt)("a",{parentName:"li",href:"https://www.merriam-webster.com/dictionary/buzz"},"buzz"),'."')),(0,r.kt)("h3",{id:"what-buz-is-not"},"What Buz Is Not:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAD (yet-another database)."),(0,r.kt)("li",{parentName:"ul"},"A meme."),(0,r.kt)("li",{parentName:"ul"},"Difficult to set up."),(0,r.kt)("li",{parentName:"ul"},"Difficult to keep running.")),(0,r.kt)("h3",{id:"more"},"More:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b50 Buz on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz"},"Github")),(0,r.kt)("li",{parentName:"ul"},"Browse Buz ",(0,r.kt)("a",{parentName:"li",href:"/"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples/quickstart"},"Quickstart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/category/deploying-buz"},"Deploy")," Buz")))}s.isMDXComponent=!0},976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/buzz-5b8a41395298716325cb3c6ea4becb6d.png"}}]);