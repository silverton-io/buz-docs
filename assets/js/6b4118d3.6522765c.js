"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="Indicative",p={unversionedId:"outputs/saas/indicative",id:"outputs/saas/indicative",title:"Indicative",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/saas/indicative.md",sourceDirName:"outputs/saas",slug:"/outputs/saas/indicative",permalink:"/outputs/saas/indicative",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Amplitude",permalink:"/outputs/saas/amplitude"},next:{title:"Datadog",permalink:"/outputs/saas/datadog"}},s={},c=[{value:"Sample Indicative Sink Configuration",id:"sample-indicative-sink-configuration",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"indicative"},"Indicative"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"This sink writes formatted envelopes to Indicative for easy visualization and analysis."),(0,a.kt)("admonition",{title:"Note!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All nested payload properties are flatted and dot-separated, so this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'{\n    "users": {\n        "jane": {\n            "age": 40\n        }\n    }\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"Will show up in Indicative as a property of ",(0,a.kt)("inlineCode",{parentName:"p"},"users.jane.age")," having the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"40"),".")),(0,a.kt)("p",null,"All associated envelope properties are passed along to Indicative."),(0,a.kt)("h2",{id:"sample-indicative-sink-configuration"},"Sample Indicative Sink Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sinks:\n  - name: sweetCharts\n    type: indicative\n    deliveryRequired: true\n    indicativeApiKey: YOUR-API-KEY-HERE\n")))}u.isMDXComponent=!0}}]);