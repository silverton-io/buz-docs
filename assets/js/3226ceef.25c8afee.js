"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9549],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,hide_table_of_contents:!0},s="Philosophy",p={unversionedId:"introduction/philosophy",id:"introduction/philosophy",title:"Philosophy",description:"Build new systems on proven API's and mental models",source:"@site/docs/introduction/philosophy.md",sourceDirName:"introduction",slug:"/introduction/philosophy",permalink:"/introduction/philosophy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"What is Buz?",permalink:"/"},next:{title:"Quickstart",permalink:"/examples/quickstart"}},c={},u=[{value:"Build new systems on proven API&#39;s and mental models",id:"build-new-systems-on-proven-apis-and-mental-models",level:2},{value:"Stand on the shoulders of giants",id:"stand-on-the-shoulders-of-giants",level:2},{value:"Scale to zero, but also &quot;infinity&quot;",id:"scale-to-zero-but-also-infinity",level:2},{value:"Validate and redirect on the edge",id:"validate-and-redirect-on-the-edge",level:2},{value:"Keep operational complexity low",id:"keep-operational-complexity-low",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"philosophy"},"Philosophy"),(0,a.kt)("h2",{id:"build-new-systems-on-proven-apis-and-mental-models"},"Build new systems on proven API's and mental models"),(0,a.kt)("p",null,"There are some very good API's out there. Oftentimes these API's were originally built using best-in-class tech, but said tech has since been supplanted. Why recreate the world when advancing an existing API or mental model will do the trick?"),(0,a.kt)("p",null,"Examples of building new technology on top of pre-existing API's include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda"),",  which is built on ",(0,a.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/"},"Kafka"),"'s API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://materialize.com/"},"Materialize"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.timescale.com/"},"Timescale"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.cockroachlabs.com/product/"},"CockroachDB"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/pipelinedb-team-joins-confluent/"},"PipelineDB")," which are all built on the Postgres wire protocol.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://airbyte.com/"},"Airbyte"),", which builds upon the conceptual model of Fivetran or Stitch (and the technical model of ",(0,a.kt)("a",{parentName:"p",href:"https://www.singer.io/"},"Singer"),")."))),(0,a.kt)("h2",{id:"stand-on-the-shoulders-of-giants"},"Stand on the shoulders of giants"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data systems and infrastructure are getting very very cool"),"."),(0,a.kt)("p",null,"When popular event tracking systems like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow"},"Snowplow Analytics"),' were first created, deployment systems like K8S and Knative didn\'t exist. Nor did the "serverless" mindset.'),(0,a.kt)("p",null,"Kafka was an infant. And had not yet created the things that Redpanda solves."),(0,a.kt)("p",null,"Streaming databases built on the Postgres API were years into the future."),(0,a.kt)("p",null,"And a data warehouse that would eat the world with its developer-focus yet massively-scalable architecture was yet to be named."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"These are all present-day realities and we want to build upon them with an eye to the future."))),(0,a.kt)("h2",{id:"scale-to-zero-but-also-infinity"},'Scale to zero, but also "infinity"'),(0,a.kt)("p",null,"Why pay for what you don't use? Or completely rearchitect systems as volume grows or demands change?"),(0,a.kt)("p",null,"Serverless scales to zero, and then back up again..."),(0,a.kt)("p",null,"Snowflake scales to zero, and then back up again..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Event collection systems should too."))),(0,a.kt)("h2",{id:"validate-and-redirect-on-the-edge"},"Validate and redirect on the edge"),(0,a.kt)("p",null,'Data should be validated and redirected as soon as it enters collection infrastructure, not near the end of the process (or in the data warehouse). The faster data is declared "valid" or "invalid", the faster it can be used and acted upon.'),(0,a.kt)("h2",{id:"keep-operational-complexity-low"},"Keep operational complexity low"),(0,a.kt)("p",null,"And last but certainly not least, engineers should be able to maintain and advance event collection efforts without complexity or cost explosion."),(0,a.kt)("h1",{id:"would-you-like-to-know-more"},"Would you like to know more?"),(0,a.kt)("p",null,"If you would like to know more or follow the project, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/introduction/roadmap"},"check out the roadmap"))," or sign up for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/insiders-only"},"Insiders-Only Updates")),"."))}h.isMDXComponent=!0}}]);