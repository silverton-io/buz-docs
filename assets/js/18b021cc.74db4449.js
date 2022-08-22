"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3,slug:"/examples/quickstart"},i="Quickstart",l={unversionedId:"introduction/quickstart",id:"introduction/quickstart",title:"Quickstart",description:"This quickstart will get you started with Buz, a multi-node Redpanda cluster, Kowl, and Materialize for rapidly bootstrapping streaming analytics. It is an end-to-end real-time event collection, pipelining, and aggregation system.",source:"@site/docs/introduction/quickstart.md",sourceDirName:"introduction",slug:"/examples/quickstart",permalink:"/examples/quickstart",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/examples/quickstart"},sidebar:"defaultSidebar",previous:{title:"Philosophy",permalink:"/introduction/philosophy"},next:{title:"Roadmap 2022 \ud83c\udfaf",permalink:"/introduction/roadmap"}},s={},p=[{value:"1. Clone the Buz repo",id:"1-clone-the-buz-repo",level:2},{value:"2. Bootstrap Buz, Redpanda, Kowl, and Materialize",id:"2-bootstrap-buz-redpanda-kowl-and-materialize",level:2},{value:"3. Send Events to Buz",id:"3-send-events-to-buz",level:2},{value:"4. View Events in the Kowl UI",id:"4-view-events-in-the-kowl-ui",level:2},{value:"5. Query Real-Time Events using a Streaming Materialized View",id:"5-query-real-time-events-using-a-streaming-materialized-view",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"This quickstart will get you started with Buz, a multi-node Redpanda cluster, Kowl, and Materialize for rapidly bootstrapping streaming analytics. It is an end-to-end real-time event collection, pipelining, and aggregation system."),(0,r.kt)("admonition",{title:"Note",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," you will need to install those first.")),(0,r.kt)("h2",{id:"1-clone-the-buz-repo"},"1. Clone the Buz repo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"git clone git@github.com:silverton-io/buz.git && cd buz"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/code \u276f\u276f\u276f git clone git@github.com:silverton-io/buz.git\nCloning into 'buz'...\nremote: Enumerating objects: 1324, done.\nremote: Counting objects: 100% (1324/1324), done.\nremote: Compressing objects: 100% (615/615), done.\nremote: Total 1324 (delta 611), reused 1163 (delta 495), pack-reused 0\nReceiving objects: 100% (1324/1324), 25.89 MiB | 4.35 MiB/s, done.\nResolving deltas: 100% (611/611), done.\n~/code \u276f\u276f\u276f cd buz\n")),(0,r.kt)("h2",{id:"2-bootstrap-buz-redpanda-kowl-and-materialize"},"2. Bootstrap Buz, Redpanda, Kowl, and Materialize"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"docker-compose -f examples/quickstart/docker-compose.yml up -d"))),(0,r.kt)("admonition",{title:"Note",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This step requires ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~/c/buz \u276f\u276f\u276f docker-compose -f examples/quickstart/docker-compose.yml up -d\n...\n...\n...\n \u283f Container mzcli          Started                                                                                                        4.3s\n \u283f Container redpanda-1     Started                                                                                                        4.6s\n \u283f Container materialized   Started                                                                                                        4.6s\n \u283f Container redpanda-3     Started                                                                                                        4.4s\n \u283f Container redpanda-2     Started                                                                                                        4.5s\n \u283f Container redpanda-init  Started                                                                                                        6.3s\n \u283f Container kowl           Started                                                                                                        6.4s\n \u283f Container buz       Started                                                                                                        7.1s\n~/c/buz \u276f\u276f\u276f\n")),(0,r.kt)("h2",{id:"3-send-events-to-buz"},"3. Send Events to Buz"),(0,r.kt)("p",null,"The Buz quickstart serves a page that you can use to quickly start firing Snowplow events using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowplowanalytics.com/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/"},"Snowplow Browser Tracker")," here: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8081/"},"localhost:8081")),(0,r.kt)("p",null,"The following events are tracked on this page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Page views"),(0,r.kt)("li",{parentName:"ul"},"Page ping (time on page)"),(0,r.kt)("li",{parentName:"ul"},"Forms"),(0,r.kt)("li",{parentName:"ul"},"Redirects"),(0,r.kt)("li",{parentName:"ul"},"Transactions and transaction items"),(0,r.kt)("li",{parentName:"ul"},"Struct events"),(0,r.kt)("li",{parentName:"ul"},"Snowplow self-describing events")),(0,r.kt)("p",null,"using both the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," and batch ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," capabilities of the Snowplow tracker."),(0,r.kt)("h2",{id:"4-view-events-in-the-kowl-ui"},"4. View Events in the Kowl UI"),(0,r.kt)("p",null,"The Quickstart runs Kowl at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8082"},"localhost:8082"),"."),(0,r.kt)("p",null,"Incoming events can be viewed in Kowl using the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8082/topics/hpt-invalid?o=-1&p=-1&q&s=50#messages"},"Topic Viewer"),"."),(0,r.kt)("h2",{id:"5-query-real-time-events-using-a-streaming-materialized-view"},"5. Query Real-Time Events using a Streaming Materialized View"),(0,r.kt)("p",null,"Connect to Materialize using ",(0,r.kt)("inlineCode",{parentName:"p"},"psql"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"psql -h 127.0.0.1 -p 6875 -U materialize"))),(0,r.kt)("p",null,"And select real-time data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"valid_events")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"invalid_events")," materialized views:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'~/c/buz \u276f\u276f\u276f psql -h 127.0.0.1 -p 6875 -U materialize\n\npsql (14.1, server 9.5.0)\nType "help" for help.\n\nmaterialize=> \\x\nExpanded display is on.\nmaterialize=> select event -> \'payload\' as payload, event -> \'contexts\' as contexts, event -> \'eventMeta\' as meta from valid_events limit 1;\n-[ RECORD 1 ]--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\npayload  | {"data":{},"schema":"io.silverton/snowplow/page_view/v1.0.json"}\ncontexts | {"iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0":{"id":"56aaa54a-bd7a-4898-a056-f1e4a5cc8874"},"iglu:org.w3/PerformanceTiming/jsonschema/1-0-0":{"connectEnd":1653319584968,"connectStart":1653319584967,"domComplete":1653319585324,"domContentLoadedEventEnd":1653319585302,"domContentLoadedEventStart":1653319585301,"domInteractive":1653319585293,"domLoading":1653319585038,"domainLookupEnd":1653319584967,"domainLookupStart":1653319584967,"fetchStart":1653319584967,"loadEventEnd":1653319585325,"loadEventStart":1653319585324,"navigationStart":1653319584980,"redirectEnd":0,"redirectStart":0,"requestStart":1653319584994,"responseEnd":1653319585029,"responseStart":1653319585028,"secureConnectionStart":0,"unloadEventEnd":0,"unloadEventStart":0}}\nmeta     | {"namespace":"snowplow.pageView","path":"io.silverton/snowplow/page_view/v1.0.json","protocol":"snowplow","uuid":"23edc1db-0ef0-4ee6-88ab-abc3c022eef9","vendor":"io.silverton","version":"1.0"}\n')),(0,r.kt)("h1",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"We have a lot planned. Want to be a part of it?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign up for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/insiders-only"},"Insiders-Only Updates"))),(0,r.kt)("li",{parentName:"ul"},"Check out the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/introduction/roadmap"},"Buz Roadmap")))))}c.isMDXComponent=!0}}]);