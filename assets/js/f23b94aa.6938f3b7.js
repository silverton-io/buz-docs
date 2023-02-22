"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="JSON Schema",i={unversionedId:"under-the-hood/validation-protocols/jsonschema",id:"under-the-hood/validation-protocols/jsonschema",title:"JSON Schema",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/validation-protocols/jsonschema.md",sourceDirName:"under-the-hood/validation-protocols",slug:"/under-the-hood/validation-protocols/jsonschema",permalink:"/under-the-hood/validation-protocols/jsonschema",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Validation Protocols",permalink:"/category/validation-protocols"},next:{title:"JSON Typedef",permalink:"/under-the-hood/validation-protocols/jsontypedef"}},l={},c=[{value:"Jsonschema-based Event Validation",id:"jsonschema-based-event-validation",level:3},{value:"Supported Drafts",id:"supported-drafts",level:3},{value:"Sample Jsonschemas",id:"sample-jsonschemas",level:3},{value:"Learning",id:"learning",level:3},{value:"The Spec",id:"the-spec",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"json-schema"},"JSON Schema"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,o.kt)("h3",{id:"jsonschema-based-event-validation"},"Jsonschema-based Event Validation"),(0,o.kt)("p",null,"Incoming events (across the various event protocols) are validated using a jsonschema associated with the event."),(0,o.kt)("h3",{id:"supported-drafts"},"Supported Drafts"),(0,o.kt)("p",null,"Buz event validation supports ",(0,o.kt)("strong",{parentName:"p"},"Draft 7")," and ",(0,o.kt)("strong",{parentName:"p"},"Draft 2019-09"),"."),(0,o.kt)("h3",{id:"sample-jsonschemas"},"Sample Jsonschemas"),(0,o.kt)("p",null,"For samples, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/silverton-io/buz/tree/main/schemas/"},"schemas directory")," in the Buz repo."),(0,o.kt)("h3",{id:"learning"},"Learning"),(0,o.kt)("p",null,"Good getting-started material for jsonschemas ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/learn/"},"can be found here"),"."),(0,o.kt)("h3",{id:"the-spec"},"The Spec"),(0,o.kt)("p",null,"The full jsonschema spec ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/specification.html"},"can be found here"),"."))}d.isMDXComponent=!0}}]);