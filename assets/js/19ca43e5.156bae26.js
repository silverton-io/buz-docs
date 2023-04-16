"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Roadmap 2023 \ud83c\udfaf",s={unversionedId:"introduction/roadmap",id:"introduction/roadmap",title:"Roadmap 2023 \ud83c\udfaf",description:"We have five goals for 2023.",source:"@site/docs/introduction/roadmap.md",sourceDirName:"introduction",slug:"/introduction/roadmap",permalink:"/introduction/roadmap",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Quickstart",permalink:"/examples/quickstart"},next:{title:"Philosophy",permalink:"/introduction/philosophy"}},l={},p=[{value:"We have five goals for 2023.",id:"we-have-five-goals-for-2023",level:2},{value:"2022 Year in Review",id:"2022-year-in-review",level:2},{value:"Buz has grown to support:",id:"buz-has-grown-to-support",level:3},{value:"Buz 2022 misc:",id:"buz-2022-misc",level:3},{value:"Want to stay in the know?",id:"want-to-stay-in-the-know",level:3}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"roadmap-2023-"},"Roadmap 2023 \ud83c\udfaf"),(0,a.kt)("h2",{id:"we-have-five-goals-for-2023"},"We have five goals for 2023."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Stability and transparency")," - robust tests, unchanging internals, and proactive comms."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Increase diversity of production use cases")," - SIEM, infra migration, data lake management, and more."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Improved developer tooling")," - config management, schema management, etc."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Deeper integrations")," with the next generation of data tooling."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Save more companies a significant amount of money and time."))),(0,a.kt)("h2",{id:"2022-year-in-review"},"2022 Year in Review"),(0,a.kt)("p",null,"Buz was born on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/commit/b7d9178a5987f880a87699d16428bc1ae08e5722"},"January 18, 2022"))," as a serverless collector for Snowplow events. It has become much more."),(0,a.kt)("p",null,"We quickly recognized the value in a lightweight event collector doesn't only lie in its ",(0,a.kt)("strong",{parentName:"p"},"minimal infrastructure")," and ",(0,a.kt)("strong",{parentName:"p"},"cost efficiencies"),", but also in its ",(0,a.kt)("strong",{parentName:"p"},"flexibility"),", its ",(0,a.kt)("strong",{parentName:"p"},"openness"),", and its ",(0,a.kt)("strong",{parentName:"p"},"first-class support of pre-existing infrastructure preferences"),"."),(0,a.kt)("h3",{id:"buz-has-grown-to-support"},"Buz has grown to support:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/inputs/overview"},"Five event protocols")),", all of which have ",(0,a.kt)("strong",{parentName:"li"},"payload validation and annotation capabilities"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/outputs/overview"},"Twenty event sinks"))," ranging from Postgres, to streaming tech like Redpanda, to message brokers like NATS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ten schema registry backends")," ranging from cloud object storage, to RDBMS's, to document stores."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A lightweight onboard schema registry"),". (Yet-another piece of consolidated infrastructure\u2122)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Serverless, hybrid-cloud deployments"),". Which are ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz/tree/main/deploy/terraform/aws/lambda"},"terraformed")," for anyone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/silverton-io/buz/tree/main/deploy/terraform/gcp"},"to use"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Piles of operator-friendly mechanisms")," including middleware, onboard statistics, dedicated sinks, ",(0,a.kt)("strong",{parentName:"li"},"incremental schematization")," and more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A friendly envelope that gets out of the way but is key to downstream utility.")," The first one sucked - we fixed it.")),(0,a.kt)("p",null,"(with more on the way)"),(0,a.kt)("h3",{id:"buz-2022-misc"},"Buz 2022 misc:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},">100k LOC written (or removed)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},">250 issues closed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},">90 releases")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Double-digit microsecond payload validation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"0 to >30k rps in the AWS Lambda free tier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Powers numerous (diverse) production systems."))),(0,a.kt)("h3",{id:"want-to-stay-in-the-know"},"Want to stay in the know?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign up for ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/insiders-only"},"Insiders-Only Updates"))),(0,a.kt)("li",{parentName:"ul"},"Connect on ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://discord.gg/JFKVnVdF2m"},"Discord"))," or ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://twitter.com/aerialfly"},"Twitter"))),(0,a.kt)("li",{parentName:"ul"},"Watch ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/silverton-io/buz/pulls"},"Buz PR's")))))}u.isMDXComponent=!0}}]);