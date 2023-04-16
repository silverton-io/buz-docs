---
slug: contract-powered-data-workflows-at-shopify-logistics
title: Contract-Powered Data Workflows at Shopify Logistics
description: TODO
authors: [jake, ]
tags: []
date: 2023-03-02T00:00
---


**Schema-powered platforms power the sustained efficiency of data teams and *all their stakeholders.***


But what do schema-powered workflows _actually_ look like?

How does an organization align to schema-powered data workflows?

*Should* they embrace these workflows at all? If so, when should that investment happen?

**The short answer is a resounding _yes_. It is best to start thinking about them sooner rather than later.**

**Even more importantly - _free and open-source tools are getting very good, it is not impossible roll them out yourself, and schema-powered guardrails can be incrementally introduced to pretty much any data stack._**

**So let's dig in.**<!--truncate--> 


# Why

1. Data quality challenges surfacing.
2. Data and derived assets increasingly important in customer conversations
3. Growth -> customer growth, headcount growth
4. Newly-hired engineers brought experience and new tools with them.
5. Limited resources and time.
6. Lifecycle management was hard and messy.


## Contraints

### Single-tenant deployments
1. Single-tenant deployments
2. 

### Efficiency at many points of scale

* Hardware and hardware-oriented r&d is very expensive
* Margins do not always play in software's favor
* One tenant's traffic looked vastly different than another's -> flash sale? Mom and pop? Large US retailer?

### Low numbers of large, complex deployments

* Rolling software into robots is non-trivial
* Several large releases per year, large #'s of moving pieces
* If we screwed up instrumentation we wouldn't be able to fix it for months. And would be stuck with junk data in the meantime.

### Risk

1. Customer business processes
2. Employee and picker safety
3. 

# How

### Identified and talked to all stakeholders.
Gained empathy and (legitimate) perspective by talking to them. Not just data engineers. Not just analytics team. Not just data science but -> backend, robotics, devops/platform, techops, simulation, etc.

### Gain deep understanding of pain points and incentives

### Incrementally built and rolled out new systems
1. Structured, lang-specific instrumentation
2. Validated/annotated collection processes
3. Data infrastructure automation
4. Tools to decrease workflow cycle times

## Schema-powered workflows in practice

### Components of the "contract"

### Drafting the "contract"

### Deploying the "contract"

1. Instrumentation SDK creation
2. Ensure collection infrastructure
3. Destination table creation
4. `dbt` source creation
5. Data discovery tools

### Data sensitivity and lifecycle management


## Other implementations of similar concepts?

1. Shopify (Zeeshan et al)
2. Snap (Imran)
3. Twitter (Angad)
4. Avo
5. Snowplow
6. Indicative/Amplitude
7. 
