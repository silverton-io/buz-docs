"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:17},i="NATS",s={unversionedId:"outputs/messageBroker/nats",id:"outputs/messageBroker/nats",title:"NATS",description:"\ud83d\udfe2 Supported",source:"@site/docs/outputs/messageBroker/nats.md",sourceDirName:"outputs/messageBroker",slug:"/outputs/messageBroker/nats",permalink:"/outputs/messageBroker/nats",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"defaultSidebar",previous:{title:"Message Broker Sinks",permalink:"/category/message-broker-sinks"},next:{title:"RabbitMQ",permalink:"/outputs/messageBroker/rabbitmq"}},u={},p=[{value:"Sample NATS Sink Configuration",id:"sample-nats-sink-configuration",level:2}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nats"},"NATS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,a.kt)("p",null,"The NATS sink writes ",(0,a.kt)("inlineCode",{parentName:"p"},"valid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid")," events to the configured subjects."),(0,a.kt)("p",null,"It is especially useful if you already have NATS running and want to quickly get started with Buz-based event tracking."),(0,a.kt)("h2",{id:"sample-nats-sink-configuration"},"Sample NATS Sink Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sinks:\n  - name: streamjet\n    type: nats\n    deliveryRequired: true\n    natsHost: nats\n    natsUser: someuser\n    natsPass: somepass\n    validSubject: buz.valid\n    invalidSubject: buz.invalid\n")))}c.isMDXComponent=!0}}]);