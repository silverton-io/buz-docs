---
title: An Exploration with Serverless Snowplow Analytics
authors: [jake]
tags: [Snowplow Analytics, Serverless, Google Cloud Run, Pub/Sub, BigQuery]
---

[Snowplow Analytics](https://snowplow.io/) is a fantastic, highly-scalable system that powers data creation for [millions of sites](https://trends.builtwith.com/analytics/Snowplow) on the internet. But after setting up, advancing, and maintaining Snowplow stacks of [various scale](https://bostata.com/268-billion-events-with-snowplow-snowflake-at-cargurus) and [scope](https://bostata.com/client-side-instrumentation-for-under-one-dollar) for half a decade I've found myself desperately wanting something...

## Less

- Fewer streams
- Fewer machines/containers
- Less in-house documentation
- Fewer serialization protocols in transit
- Less config


**I've also found myself wanting something else.**


## More

- More destinations
- More deployment flexibility
- More migration mechanisms
- More options for storing schemas
- More infrastructure cost efficiencies
- More event protocols


**Which is how Buz was born.**

## Buz is an exploration of what Less and More could look like.

## Early iterations

