"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[801],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:5},i="Config",l={unversionedId:"under-the-hood/tools/config",id:"under-the-hood/tools/config",title:"Config",description:"Buz ships with a /config endpoint that responds with what you might expect: a json representation of how the system is currently configured",source:"@site/docs/under-the-hood/tools/config.md",sourceDirName:"under-the-hood/tools",slug:"/under-the-hood/tools/config",permalink:"/under-the-hood/tools/config",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Healthcheck",permalink:"/under-the-hood/tools/healthcheck"},next:{title:"Route Overview",permalink:"/under-the-hood/tools/route-overview"}},s={},p=[],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"config"},"Config"),(0,o.kt)("p",null,"Buz ships with a ",(0,o.kt)("inlineCode",{parentName:"p"},"/config")," endpoint that responds with what you might expect: ",(0,o.kt)("inlineCode",{parentName:"p"},"a json representation of how the system is currently configured")),(0,o.kt)("admonition",{title:"It can (and should) be disabled in production",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"To disable via the config file:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"app:\n  enableConfigRoute: false <----------- me me me look at me\n"))),(0,o.kt)("admonition",{title:"Heads up",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Config responses look like the following. ",(0,o.kt)("strong",{parentName:"p"},"Again, this should be disabled in production!!!")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'{\n  "app": {\n    "version": "x.x.dev",\n    "name": "buz",\n    "env": "development",\n    "mode": "debug",\n    "port": "8080",\n    "trackerDomain": "localhost",\n    "enableConfigRoute": true\n  },\n  "middleware": {\n    "timeout": { "enabled": false, "ms": 2000 },\n    "rateLimiter": { "enabled": false, "period": "S", "limit": 10 },\n    "identity": {\n      "cookie": {\n        "enabled": true,\n        "name": "nuid",\n        "secure": true,\n        "ttlDays": 365,\n        "domain": "devel.silverton.io",\n        "path": "/",\n        "sameSite": "Lax"\n      },\n      "fallback": "00000000-0000-4000-A000-000000000000"\n    },\n    "cors": {\n      "enabled": true,\n      "allowOrigin": ["*"],\n      "allowCredentials": false,\n      "allowMethods": ["POST", "OPTIONS", "GET"],\n      "maxAge": 86400\n    },\n    "requestLogger": { "enabled": false },\n    "yeet": { "enabled": false }\n  },\n  "inputs": {\n    "snowplow": {\n      "enabled": true,\n      "standardRoutesEnabled": true,\n      "openRedirectsEnabled": true,\n      "getPath": "/plw/g",\n      "postPath": "/plw/p",\n      "redirectPath": "/plw/r"\n    },\n    "cloudevents": { "enabled": true, "path": "/cloudevent" },\n    "generic": {\n      "enabled": true,\n      "path": "/generic",\n      "contexts": { "rootKey": "contexts" },\n      "payload": {\n        "rootKey": "payload",\n        "schemaKey": "schema",\n        "dataKey": "data"\n      }\n    },\n    "webhook": { "enabled": true, "path": "/hook" },\n    "pixel": { "enabled": true, "path": "/pxl" }\n  },\n  "schemaCache": {\n    "backend": { "type": "fs", "path": "schemas/", "registryTable": "" },\n    "ttlSeconds": 300,\n    "maxSizeBytes": 104857600,\n    "purge": { "enabled": true, "path": "/c/purge" },\n    "schemaDirectory": { "enabled": true }\n  },\n  "manifold": {},\n  "sinks": [\n    { "name": "console", "type": "stdout", "deliveryRequired": true },\n    {\n      "name": "file",\n      "type": "file",\n      "deliveryRequired": true,\n      "validFile": "buz-valid.json",\n      "invalidFile": "buz-invalid.json"\n    }\n  ],\n  "squawkBox": {\n    "enabled": true,\n    "cloudeventsPath": "/sqwk/ce",\n    "snowplowPath": "/sqwk/sp",\n    "genericPath": "/sqwk/gen"\n  },\n  "privacy": {\n    "anonymize": {\n      "device": { "ip": false, "useragent": false },\n      "user": { "id": false }\n    }\n  },\n  "tele": { "enabled": true }\n}\n\n'))))}c.isMDXComponent=!0}}]);