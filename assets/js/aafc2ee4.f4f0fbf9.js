"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,u=m["".concat(l,".").concat(c)]||m[c]||h[c]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={slug:"the-contract-powered-data-platform",title:"The Contract-Powered Data Platform",authors:["jake"],tags:["data platform","schemas","interfaces","data contracts or whatever"]},r=void 0,s={permalink:"/blog/the-contract-powered-data-platform",source:"@site/blog/contract-powered-platform/index.md",title:"The Contract-Powered Data Platform",description:"Between 6 River Systems and CarGurus, a very significant amount of my time over the past five years has been dedicated to data platform automation, reducing cross-team friction, and improving data quality.",date:"2022-10-06T22:00:27.000Z",formattedDate:"October 6, 2022",tags:[{label:"data platform",permalink:"/blog/tags/data-platform"},{label:"schemas",permalink:"/blog/tags/schemas"},{label:"interfaces",permalink:"/blog/tags/interfaces"},{label:"data contracts or whatever",permalink:"/blog/tags/data-contracts-or-whatever"}],readingTime:12.985,hasTruncateMarker:!0,authors:[{name:"Jake",url:"https://github.com/jakthom",imageURL:"https://github.com/jakthom.png",key:"jake"}],frontMatter:{slug:"the-contract-powered-data-platform",title:"The Contract-Powered Data Platform",authors:["jake"],tags:["data platform","schemas","interfaces","data contracts or whatever"]},nextItem:{title:"Make It Easy",permalink:"/blog/make-it-easy"}},l={authorsImageUrls:[void 0]},p=[{value:"Components of a Good Data Platform",id:"components-of-a-good-data-platform",level:2},{value:"Instrumentation and Integration",id:"instrumentation-and-integration",level:3},{value:"The pipeline",id:"the-pipeline",level:3},{value:"Storage and access",id:"storage-and-access",level:3},{value:"Data Discovery",id:"data-discovery",level:3},{value:"Observability, Monitoring, and Alerting",id:"observability-monitoring-and-alerting",level:3},{value:"Design Goals of a Good Data Platform",id:"design-goals-of-a-good-data-platform",level:2},{value:"Comply with rules",id:"comply-with-rules",level:3},{value:"Minimize bad data",id:"minimize-bad-data",level:3},{value:"Maximize knowledge of what the system is doing",id:"maximize-knowledge-of-what-the-system-is-doing",level:3},{value:"Minimize friction for all parties involved",id:"minimize-friction-for-all-parties-involved",level:3},{value:"The Contract-Powered Platform",id:"the-contract-powered-platform",level:2},{value:"Schemas empower the &quot;producer&quot; &lt;-&gt; &quot;consumer&quot; relationship",id:"schemas-empower-the-producer---consumer-relationship",level:3},{value:"Schemas are data discovery",id:"schemas-are-data-discovery",level:3},{value:"Schemas power data validation in transit",id:"schemas-power-data-validation-in-transit",level:3},{value:"Schemas help stop bad instrumentation from being implemented in the first place",id:"schemas-help-stop-bad-instrumentation-from-being-implemented-in-the-first-place",level:3},{value:"Schemas improve code quality",id:"schemas-improve-code-quality",level:3},{value:"Schemas power automation",id:"schemas-power-automation",level:3},{value:"Schemas as observability",id:"schemas-as-observability",level:3},{value:"Schemas power compliance-oriented requirements",id:"schemas-power-compliance-oriented-requirements",level:3},{value:"Schemas are the foundation of higher-order data models",id:"schemas-are-the-foundation-of-higher-order-data-models",level:3},{value:"Schemas are the foundation of data products",id:"schemas-are-the-foundation-of-data-products",level:3},{value:"The Contract-Powered Workflow",id:"the-contract-powered-workflow",level:2},{value:"Draft, iterate on, and deploy a schema.",id:"draft-iterate-on-and-deploy-a-schema",level:3},{value:"Bring tracking libraries and systems up to parity.",id:"bring-tracking-libraries-and-systems-up-to-parity",level:3},{value:"Implement tracking.",id:"implement-tracking",level:3},{value:"Deploy.",id:"deploy",level:3},{value:"The Schema-Powered Future",id:"the-schema-powered-future",level:2}],d={toc:p};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Between ",(0,o.kt)("a",{parentName:"p",href:"https://6river.com/?utm_source=buz.dev&utm_content=hiitsme"},"6 River Systems")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.cargurus.com/"},"CarGurus"),", a very significant amount of my time over the past five years has been dedicated to data platform automation, reducing cross-team friction, and improving data quality."),(0,o.kt)("p",null,"Schemas have played a critical role in the process; this post outlines ",(0,o.kt)("strong",{parentName:"p"},"the why and the how"),". But before diving straight"," into the role of schemas (er... contracts) let's talk data platforms."),(0,o.kt)("h2",{id:"components-of-a-good-data-platform"},"Components of a Good Data Platform"),(0,o.kt)("h3",{id:"instrumentation-and-integration"},"Instrumentation and Integration"),(0,o.kt)("p",null,"This one goes without saying. If data is not being emitted from source systems you won't have any data to play with."),(0,o.kt)("p",null,"If you don't have any data the rest of this post will not provide value. You also won't be able to complain about price of Snowflake and might feel left out. "),(0,o.kt)("p",null,"Instrumentation is pretty important. It's also a pretty huge PITA to wrangle, which is why ",(0,o.kt)("a",{parentName:"p",href:"https://segment.com/academy/collecting-data/how-to-create-a-tracking-plan/"},"tracking")," ",(0,o.kt)("a",{parentName:"p",href:"https://amplitude.com/blog/create-tracking-plan"},"plans")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.avo.app/blog/what-is-a-tracking-plan-and-why-do-you-need-one"},"became")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.indicative.com/resource/data-tracking-plan/"},"a")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.trackingplan.com/"},"thing"),"."),(0,o.kt)("h3",{id:"the-pipeline"},"The pipeline"),(0,o.kt)("p",null,"Pipelines are either ",(0,o.kt)("inlineCode",{parentName:"p"},"batch")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"streaming"),". There's a holy war between the two religions, but similar concepts apply to both."),(0,o.kt)("p",null,"Pipelines collect data and put it somewhere. Sometimes they mutate said data. That's really it."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"best")," pipelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Move data reliably."),(0,o.kt)("li",{parentName:"ul"},"Annotate payloads with metadata such as provenance, ",(0,o.kt)("inlineCode",{parentName:"li"},"collected_at")," timestamps, fingerprints, etc."),(0,o.kt)("li",{parentName:"ul"},"Generate stats to provide the operator with feedback."),(0,o.kt)("li",{parentName:"ul"},"Validate and bifurcate payloads, if you're lucky."),(0,o.kt)("li",{parentName:"ul"},"Know about and act on payload sensitivities - obfuscate, hash, tokenize, redact, redirect, etc."),(0,o.kt)("li",{parentName:"ul"},"Minimize moving pieces."),(0,o.kt)("li",{parentName:"ul"},"Don't spend all the CEO's \ud83d\udcb8\ud83d\udcb8\ud83d\udcb8 so they can afford that house in the Bahamas.")),(0,o.kt)("h3",{id:"storage-and-access"},"Storage and access"),(0,o.kt)("p",null,"Data has to be stored somewhere- preferably somewhere accessible."),(0,o.kt)("p",null,"Storage/access systems range from a wee little Postgres database, to Snowflake, to a data lake filled with Parquet fish and the ",(0,o.kt)("del",{parentName:"p"},"Loch Ness")," Trino monster."),(0,o.kt)("h3",{id:"data-discovery"},"Data Discovery"),(0,o.kt)("p",null,"As things scale, pipelines/databases/data models often turn into something the James Webb ",(0,o.kt)("em",{parentName:"p"},"and")," dbt can't stitch back together."),(0,o.kt)("p",null,"Data discoverability is super important when organizations are fragmented, or when you're new to the company, or when you forget stuff as I often do."),(0,o.kt)("h3",{id:"observability-monitoring-and-alerting"},"Observability, Monitoring, and Alerting"),(0,o.kt)("p",null,"Last, definitely not least, and unfortunately-rare... tools that tell the operator if things are broken."),(0,o.kt)("p",null,"These could be devops-y tools like Prometheus/Alertmanager/Grafana, pay-to-play tools like data quality/reliability platforms, or something dead-simple like load metadata tables and freshness checks."),(0,o.kt)("h2",{id:"design-goals-of-a-good-data-platform"},"Design Goals of a Good Data Platform"),(0,o.kt)("h3",{id:"comply-with-rules"},"Comply with rules"),(0,o.kt)("p",null,"While maybe not the case within the US (for us Non-Californians), data regulation and compliance is kind of a big deal. If you don't comply, ",(0,o.kt)("a",{parentName:"p",href:"https://www.wired.com/story/google-analytics-europe-austria-privacy-shield/"},"good")," ",(0,o.kt)("a",{parentName:"p",href:"https://edpb.europa.eu/news/national-news/2022/italian-sa-bans-use-google-analytics-no-adequate-safeguards-data-transfers_en"},"luck"),"."),(0,o.kt)("p",null,"Compliance is becoming less of a ",(0,o.kt)("inlineCode",{parentName:"p"},"goal")," and more of a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirement"),"."),(0,o.kt)("h3",{id:"minimize-bad-data"},"Minimize bad data"),(0,o.kt)("p",null,"Bad data is expensive. It's expensive to move, it's expensive to store, it's expensive to keep track of, and it's expensive to work around. Not knowing data is bad is even more expensive."),(0,o.kt)("h3",{id:"maximize-knowledge-of-what-the-system-is-doing"},"Maximize knowledge of what the system is doing"),(0,o.kt)("p",null,"Good things come from a knowledge of what a system is doing and when it is doing it."),(0,o.kt)("p",null,"Only after measurement can you optimize cost."),(0,o.kt)("p",null,"Only after timing can you make things faster."),(0,o.kt)("p",null,"And only after seeing a system end-to-end can you cut out unnecessary intermediaries."),(0,o.kt)("h3",{id:"minimize-friction-for-all-parties-involved"},"Minimize friction for all parties involved"),(0,o.kt)("p",null,"Data platforms should be a good experience for everyone. Which includes ",(0,o.kt)("strong",{parentName:"p"},"many")," more parties than just analytics engineers or analysts."),(0,o.kt)("p",null,"Parties who are critical to success include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The frontend engineers, who work with Javascript/Typescript and any number of frameworks "),(0,o.kt)("li",{parentName:"ul"},"The backend engineers, who work with Python, Node, Java, Go, C++"),(0,o.kt)("li",{parentName:"ul"},"The native/app engineers, who work with something like Swift, Flutter, React Native"),(0,o.kt)("li",{parentName:"ul"},"The devops people, who like when they can write less Terraform."),(0,o.kt)("li",{parentName:"ul"},"The SRE people, who like when they can see what's going on without asking you. Because you'll probably be asleep when they try."),(0,o.kt)("li",{parentName:"ul"},"The data engineers, who are usually on the hook when data goes bad."),(0,o.kt)("li",{parentName:"ul"},"The analytics engineers, who like when ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id")," means ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id"),"."),(0,o.kt)("li",{parentName:"ul"},"The analysts, who like when they can push value back to product engineers."),(0,o.kt)("li",{parentName:"ul"},"The financefolk, who will come after you when costs exponentially increase."),(0,o.kt)("li",{parentName:"ul"},"The businessfolk, who will also come after you when costs exponentially increase.")),(0,o.kt)("p",null,"While data mandates and a new breed of data-oriented law might sound lovely (or not), these mechanisms only benefit a couple of the above parties. Mandates don't work. Telling other people to have more responsibility, so you can have less, also doesn't work."),(0,o.kt)("p",null,"Want to get buy-in? Minimize friction. Want to increase adoption? Automate others' toil. Want sustainable systems? Reduce cognitive load."),(0,o.kt)("p",null,"Which brings us back to schematizing stuff."),(0,o.kt)("h2",{id:"the-contract-powered-platform"},"The Contract-Powered Platform"),(0,o.kt)("p",null,"I'm going to go out on a limb and just say it -> schemas are the nucleus of sustainable data platforms."),(0,o.kt)("p",null,"Schematizing data upfront is often initially discarded and seen as ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/Mike_Kaminsky/status/1573430588958445569"},"unnecessary overhead")," or a productivity drain. The idea is nixed in favor of the eventual chaos arbitrary json creates. But who cares about our hypothetical future selves - it's our current selves that matter. Let's dig in for the sake of science."),(0,o.kt)("h3",{id:"schemas-empower-the-producer---consumer-relationship"},'Schemas empower the "producer" <-> "consumer" relationship'),(0,o.kt)("p",null,"Let's think about the two ends of data systems for a second."),(0,o.kt)("p",null,'Engineers exist at the source, product analysts typically exist at the "destination", and a black box lies between:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mystery data thing",src:a(2343).Z,width:"2446",height:"1126"})),(0,o.kt)("p",null,"But when the mystery data thing is removed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"engineer")," <-> ",(0,o.kt)("inlineCode",{parentName:"p"},"analyst")," dynamic actually looks more like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"engineers and analysts",src:a(937).Z,width:"2500",height:"1218"})),(0,o.kt)("p",null,'This working dynamic is pretty terrible for productivity. The two parties communicate, sometimes. There\'s a ton of friction and neither party is to blame. Data engineers and managers are asked to join the conversation, and implicit "contracts" are established in a Google doc that everyone will lose track of.'),(0,o.kt)("p",null,"(Human-readable) schemas turn this dynamic into something that looks more like the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"declarative thing",src:a(5558).Z,width:"2550",height:"948"})),(0,o.kt)("p",null,"Both parties contribute to a schema with consistent verbiage, which is then leveraged to generate the equivalent data structure in their language of choice."),(0,o.kt)("p",null,"Today's data workflows look ",(0,o.kt)("strong",{parentName:"p"},"very similar")," to how software engineering looked prior to ",(0,o.kt)("a",{parentName:"p",href:"https://github.blog/2008-02-23-oh-yeah-there-s-pull-requests-now/"},"Github announcing Pull Requests in 2008"),". They work, but aren't ideal."),(0,o.kt)("h3",{id:"schemas-are-data-discovery"},"Schemas are data discovery"),(0,o.kt)("p",null,"In LinkedIn's ",(0,o.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"popular metadata architectures explained"),', pull-based metadata extraction is outlined as "an ok start". Push-based metadata is "ideal".'),(0,o.kt)("p",null,"Schematizing data upfront means data discovery and documentation writes itself. Data assets are discoverable as soon as schemas are deployed - before the data actually starts flowing."),(0,o.kt)("p",null,"Schematization mechanisms like JSON Schema also get ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/specification.html#meta-schemas"},"pretty meta"),", so it's easy to add annotation such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"These properties contain PII"'),(0,o.kt)("li",{parentName:"ul"},'"These properties should be tokenized"'),(0,o.kt)("li",{parentName:"ul"},'"X person on Y team owns this schema"'),(0,o.kt)("li",{parentName:"ul"},'"This is version ',(0,o.kt)("inlineCode",{parentName:"li"},"1.4"),". Here's how this data has evolved from ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0"),'."')),(0,o.kt)("p",null,"This class of metadata is a CISO's ",(0,o.kt)("em",{parentName:"p"},"dream"),"."),(0,o.kt)("h3",{id:"schemas-power-data-validation-in-transit"},"Schemas power data validation in transit"),(0,o.kt)("p",null,'Comparing a payload to "what it was supposed to be" and annotating it with a simple \ud83d\udc4d\ud83d\udc4e is extremely valuable. Schemas are the "what it was supposed to be".'),(0,o.kt)("h3",{id:"schemas-help-stop-bad-instrumentation-from-being-implemented-in-the-first-place"},"Schemas help stop bad instrumentation from being implemented in the first place"),(0,o.kt)("p",null,"Another +1 (for engineers) is the fact schemas help prevent bad tracking from getting deployed in the first place."),(0,o.kt)("p",null,"Language-specific data structures can be generated from schemas. Which means intellisense or the compiler complains during development if required props are missing, or if one is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," and should be a ",(0,o.kt)("inlineCode",{parentName:"p"},"bool"),". And then the code blows up again at compile time if the bug is still there."),(0,o.kt)("p",null,"Nobody likes being the person who causes the release train to halt. Or being the person who caused the rollback because a prop was missing. ",(0,o.kt)("strong",{parentName:"p"},'Especially when it\'s "just for analytics".')),(0,o.kt)("p",null,"Merging to ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," only after instrumentation is \ud83d\udc4d\ud83d\udc4d is the ideal workflow. It saves rollbacks. It avoids the human friction of going to the data team... ",(0,o.kt)("em",{parentName:"p"},"again"),', to have them explain their mandated "contract".'),(0,o.kt)("p",null,"And it's just good engineering."),(0,o.kt)("h3",{id:"schemas-improve-code-quality"},"Schemas improve code quality"),(0,o.kt)("p",null,"This might be a stretch. Or maybe not."),(0,o.kt)("p",null,"Have you tried forcing an engineer who loves Typescript to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Any"),", while simultaneously mandating payloads have ",(0,o.kt)("inlineCode",{parentName:"p"},"propA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"propB"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"propC"),". And ",(0,o.kt)("inlineCode",{parentName:"p"},"propC")," must be a ",(0,o.kt)("inlineCode",{parentName:"p"},"bool"),"?"),(0,o.kt)("p",null,"Or tried forcing a golang-oriented engineer to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),", but told them the payload must have specific keys?"),(0,o.kt)("p",null,"I have. And it was pretty silly. And a couple quick Google searches highlight ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@warkiringoda/typescript-best-practices-2021-a58aee199661"},"Don't Use Any"),". ",(0,o.kt)("a",{parentName:"p",href:"https://bitfieldconsulting.com/golang/commandments"},"Use ",(0,o.kt)("inlineCode",{parentName:"a"},"map[string]interface{}")," sparingly"),". Lint rules will not-so-nicely tell you to pound sand."),(0,o.kt)("p",null,"Schemas are centralized verbiage from which to generate language-specific data structures. Tools like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/quicktype/quicktype"},"Quicktype"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinclairzx81/typebox"},"Typebox"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/json-schema-to-typescript"},"jsonschema-to-typescript")," make this a reality. The same can be said about ",(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8927"},"JTD")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers"),"."),(0,o.kt)("h3",{id:"schemas-power-automation"},"Schemas power automation"),(0,o.kt)("p",null,"Schemas make data engineering quality of life significantly better. Destination tables can be automatically created and migrated as schemas evolve. Kafka topics and Pub/Sub streams can be automatically provisioned using the schema namespace. A single stream can be fanned out to a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html"},"dynamically-partitioned data lake"),". And a whole lot more."),(0,o.kt)("h3",{id:"schemas-as-observability"},"Schemas as observability"),(0,o.kt)("p",null,"Calculating namespace-level statistics and splicing them into observability tools is the natural next step."),(0,o.kt)("p",null,"Stakeholder FAQ's (long before actual analytics) commonly look like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"I just implemeneted tracking. Is the data flowing?"'),(0,o.kt)("li",{parentName:"ul"},'"When was some.event.v1 first deployed?"'),(0,o.kt)("li",{parentName:"ul"},'"Is some.event.v1 still flowing?"'),(0,o.kt)("li",{parentName:"ul"},'"Are we seeing any bad events after most recent deploy?"'),(0,o.kt)("li",{parentName:"ul"},'"How much data are we processing for schema x.y.z?"'),(0,o.kt)("li",{parentName:"ul"},'"I just changed some javascript. Am I still emitting one event or has it become ten?"'),(0,o.kt)("li",{parentName:"ul"},'"What team should I go ask about a.b.c?"'),(0,o.kt)("li",{parentName:"ul"},'"How does this event get generated again?"')),(0,o.kt)("p",null,"When the name/namespace of a schema is present with each payload, and payloads are shipped to tools like Datadog, ",(0,o.kt)("strong",{parentName:"p"},"people can self-service answers to these questions.")),(0,o.kt)("p",null,"When the name/namespace of a schema is present with each payload, and the payloads are loaded into Snowflake, ",(0,o.kt)("strong",{parentName:"p"},"people can self-service answers to these questions.")),(0,o.kt)("p",null,"Self-service, low-cognitive-load systems minimize friction for everyone."),(0,o.kt)("h3",{id:"schemas-power-compliance-oriented-requirements"},"Schemas power compliance-oriented requirements"),(0,o.kt)("p",null,"(Actually) adhering to data privacy-oriented regulation requires a rethink of pretty much all data processing systems. The place to tokenize, redact, or hash personal information is not at the end of the data pipeline. It is at the start. Otherwise you'll have sensitive data lying all over S3 in cleartext or flying through Kafka with no auth, and zero clue how to actually find or mitigate it."),(0,o.kt)("h3",{id:"schemas-are-the-foundation-of-higher-order-data-models"},"Schemas are the foundation of higher-order data models"),(0,o.kt)("p",null,"It is pretty easy to turn a schema into a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/using-sources"},"dbt source")," so analytics engineers can reliably build upon a well-defined, trustworthy foundation."),(0,o.kt)("p",null,'If the foundation is not strong the analytics engineering team will spend all their time building "layer 1 base models" to santize inputs. In non-professional settings this would be called ',(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VoP1E9J4jpg"},"Whack A Mole"),"."),(0,o.kt)("h3",{id:"schemas-are-the-foundation-of-data-products"},"Schemas are the foundation of data products"),(0,o.kt)("p",null,"Similar to data modeling benefits, schemas allow data products to be built on a solid foundation. But there's more that can be done on top of that foundation!"),(0,o.kt)("p",null,"Automatically-generated endpoints, GraphQL queries, and API docs? Can do. Tools like ",(0,o.kt)("a",{parentName:"p",href:"https://quicktype.io/"},"Quicktype"),", ",(0,o.kt)("a",{parentName:"p",href:"https://transform.tools/"},"Transform"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo")," immediately come to mind. As does a blog post from the folks at ",(0,o.kt)("a",{parentName:"p",href:"https://wundergraph.com/blog/build_json_apis_with_json_schema_by_writing_graphql_operations_against_any_datasource_like_graphql_rest_apollo_federation_postgresql_mysql"},"Wundergraph"),"."),(0,o.kt)("p",null,'"Schemas at the center" is a pattern engineers are already comfortable with. ',(0,o.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," is simply a declarative schema between API's<->frontends after all."),(0,o.kt)("h2",{id:"the-contract-powered-workflow"},"The Contract-Powered Workflow"),(0,o.kt)("p",null,"This is the workflow I've settled on after years of flipping levers and seeing what works (and what doesn't). Mandates don't work. Making analytics teams happy at the expense of poor application code going into production doesn't work. Knowing instrumentation is bad only after it is deployed works-ish, but just barely. Would not recommend."),(0,o.kt)("h3",{id:"draft-iterate-on-and-deploy-a-schema"},"Draft, iterate on, and deploy a schema."),(0,o.kt)("p",null,"The neat thing about schema-first workflows is ",(0,o.kt)("strong",{parentName:"p"},"non-engineer stakeholders can write the first draft"),". You don't have to be a Typescript guru to get the process going, though engineering counterparts will need to be involved eventually."),(0,o.kt)("p",null,'The more work that can be front-loaded to non-engineers the better. Everyone\'s time is valuable and schemas allow everyone to proactively contribute to the process. It sucks when useful contributions are discarded because they are "not in a usable format" (cough, Gdocs). Schemas are usable formats.'),(0,o.kt)("h3",{id:"bring-tracking-libraries-and-systems-up-to-parity"},"Bring tracking libraries and systems up to parity."),(0,o.kt)("p",null,"The second a new schema or updated version has been published, automation kicks in and (at minimum):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Builds and deploys new tracking SDK's for engineering teams"),(0,o.kt)("li",{parentName:"ul"},"Pushes schema metadata \u2206 to data discovery tools"),(0,o.kt)("li",{parentName:"ul"},"Ensures infrastructure dependencies (Kafka topics, database tables, etc)"),(0,o.kt)("li",{parentName:"ul"},"Pushes the schema to the appropriate place for pipeline-level validation"),(0,o.kt)("li",{parentName:"ul"},"Creates dbt sources for the analytics engineers")),(0,o.kt)("h3",{id:"implement-tracking"},"Implement tracking."),(0,o.kt)("p",null,"Once systems are ready to accept the new instrumentation, engineers implement it into a codebase. It doesn't matter if this is frontend code, backend code, cli's, infrastructure tooling, etc - the process is the same."),(0,o.kt)("p",null,"Getting dependencies squared away takes a matter of seconds. By the time engineers are ready to implement the new tracking, the entire system is ready to go."),(0,o.kt)("p",null,'A question I\'ve heard over and over from engineers is "how do I know these payloads are making it to where they need to be?" This question is best answered with "go check Datadog/Graylog/Whatever". And followed up with, "or you could also go check Snowflake for a table of the same name".'),(0,o.kt)("p",null,"The faster engineers have feedback the better."),(0,o.kt)("h3",{id:"deploy"},"Deploy."),(0,o.kt)("p",null,'And lastly - making tracking part of the codebase. A huge pain point of analytics-oriented instrumentation is the fact it\'s often identified as "bad" after being pushing to prod. This is not awesome, and it greatly contributes to the upstream "we\'ll just throw arbitrary json down the line" concensus. Everyone knows this is not ideal, but it\'s definitely better than rolling back every-other deploy due to analytics bugs.'),(0,o.kt)("p",null,"With contract-powered workflows the following prereqs are taken care of ",(0,o.kt)("em",{parentName:"p"},"before")," instrumentation rolls out, not after:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementers and stakeholders talk to each other using shared verbiage."),(0,o.kt)("li",{parentName:"ul"},"Versioned, language-specific data structures are generated like all other code dependencies."),(0,o.kt)("li",{parentName:"ul"},"Metadata is pushed to discovery tools."),(0,o.kt)("li",{parentName:"ul"},'The pipeline is primed to accept incoming payloads and mark them as "good" or "bad".'),(0,o.kt)("li",{parentName:"ul"},"Observability tools are ready to go for instantaneous feedback in development and production."),(0,o.kt)("li",{parentName:"ul"},"Downstream analytics/modeling entrypoints (like dbt sources) are in place and can be immediately used.")),(0,o.kt)("h2",{id:"the-schema-powered-future"},"The Schema-Powered Future"),(0,o.kt)("p",null,"If it's not obvious by now, schemas are ",(0,o.kt)("strong",{parentName:"p"},"awesome"),"."),(0,o.kt)("p",null,"These workflows have significantly improved my work life, I know they've improved my colleagues', and it's probably just a matter of time before they improve yours too."),(0,o.kt)("p",null,"The fun part is it feels like this ecosystem is just getting started, and there are ",(0,o.kt)("strong",{parentName:"p"},"so")," many additional implications for the better. It's not a new or original concept by any means. But as data management capabililities at Non-Google companies progress, it will be a consistent solution for consistent pain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Some other reading if you want to dive in:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slack.engineering/data-wrangling-at-slack/"},"Data Wrangling at Slack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.slideshare.net/alexismidon/jitney-kafka-at-airbnb"},"Jitney at AirBnb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://engineering.linkedin.com/blog/2020/pegasus-data-language"},"Pegasus at LinkedIn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Schema-Integration-at-Uber-Scale-US2TS-2020-1.pdf"},"Dragon at Uber")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://doordash.engineering/2022/08/02/building-scalable-real-time-event-processing-with-kafka-and-flink/"},"Building Scalable Real Time Event Processing with Kafka and Flink")," at Doordash"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/data-mesh-a-data-movement-and-processing-platform-netflix-1288bcab2873"},"Data Mesh at Netflix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://shopify.engineering/real-time-buyer-signal-data-pipeline-shopify-inbox"},"Building a Real-time Buyer Signal Data Pipeline for Shopify Inbox"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You could also:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tune in for ",(0,o.kt)("a",{parentName:"li",href:"https://coalesce.getdbt.com/agenda/getting-jiggy-with-jsonschema-the-power-of-contracts-for-building-data-systems"},"Getting jiggy with JSON Schema at dbt Coalesce")," or ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/emilyhawkins__"},"join the conversation")," on ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/aerialfly"},"Twitter"),"."),(0,o.kt)("li",{parentName:"ul"},"Say hi in ",(0,o.kt)("a",{parentName:"li",href:"https://locallyoptimistic.slack.com/archives/C043RDEFMBL"},"Locally Optimistic Slack"),".")),(0,o.kt)("p",null,"As closing context from a Shopify perspective, 9800+ schemas and 1800+ contributors (many of whom are not engineers) is a huge feat. As is deploying hundreds of schema-generated instrumentation blocks to thousands of robots around the world. The model works."),(0,o.kt)("p",null,"Here's to our schema-powered future \ud83e\udd42."))}h.isMDXComponent=!0},5558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/declarativeThing-bcb8716354dd657813ffbe9f0cf061e1.png"},937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/engs_and_analysts-c5f9ea148a629098798d55194dd478f9.png"},2343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mystery_data_thing-7cf9e8be611dbfd4fe512fe661919539.png"}}]);