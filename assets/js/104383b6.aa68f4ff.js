"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:16},s="Timescale",o={unversionedId:"outputs/timeseries/timescaledb",id:"outputs/timeseries/timescaledb",title:"Timescale",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/timeseries/timescaledb.md",sourceDirName:"outputs/timeseries",slug:"/outputs/timeseries/timescaledb",permalink:"/outputs/timeseries/timescaledb",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"defaultSidebar",previous:{title:"Timeseries Sinks",permalink:"/category/timeseries-sinks"},next:{title:"Message Broker Sinks",permalink:"/category/message-broker-sinks"}},l={},c=[{value:"Sample Timescale Sink Configuration",id:"sample-timescale-sink-configuration",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"timescale"},"Timescale"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,i.kt)("p",null,"The Timescale sink writes ",(0,i.kt)("inlineCode",{parentName:"p"},"valid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," events to the configured tables."),(0,i.kt)("p",null,"It is especially useful if you already have Timescale running and want to quickly get started with Buz-based event tracking."),(0,i.kt)("p",null,"Tables are ensured upon Buz startup, so manual creation is not required."),(0,i.kt)("h2",{id:"sample-timescale-sink-configuration"},"Sample Timescale Sink Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sinks:\n  - name: ol-trusty\n    type: timescale\n    deliveryRequired: true\n    timescaleHost: localhost\n    timescalePort: 5432\n    timescaleDbName: buz\n    timescaleUser: buz\n    timescalePass: buz\n    validTable: buz_valid\n    invalidTable: buz_invalid\n")))}p.isMDXComponent=!0}}]);