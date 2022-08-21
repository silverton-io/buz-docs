"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Redpanda/Kafka",p={unversionedId:"outputs/stream/kafka",id:"outputs/stream/kafka",title:"Redpanda/Kafka",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/stream/kafka.md",sourceDirName:"outputs/stream",slug:"/outputs/stream/kafka",permalink:"/outputs/stream/kafka",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Streaming Sinks",permalink:"/category/streaming-sinks"},next:{title:"Google Pub/Sub",permalink:"/outputs/stream/pubsub"}},u={},s=[{value:"Sample Redpanda/Kafka Sink Configuration",id:"sample-redpandakafka-sink-configuration",level:2}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redpandakafka"},"Redpanda/Kafka"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The Redpanda/Kafka sink writes ",(0,a.kt)("inlineCode",{parentName:"p"},"valid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid")," events to the respective topics."),(0,a.kt)("h2",{id:"sample-redpandakafka-sink-configuration"},"Sample Redpanda/Kafka Sink Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sinks:\n  - name: \u5927\u718a\u732b\n    type: redpanda\n    deliveryRequired: true\n    kafkaBrokers:\n      - 127.0.0.1:9092\n    validTopic: buz-valid\n    invalidTopic: buz-invalid\n")))}c.isMDXComponent=!0}}]);