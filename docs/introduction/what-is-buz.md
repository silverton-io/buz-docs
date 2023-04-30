---
sidebar_position: 1
slug: /
title: What is Buz?
description: Buz collects, validates, and delivers schematized data to wherever it needs to bee.
hide_table_of_contents: true
---


![flow](../../static/img/buzflow.png)

### Buz collects, validates, and delivers schematized data to where it needs to bee.

***

## Features

1. **Low infrastructure** means the system is **easily configured, deployed, and maintained**.
2. **Flexibility** to collect and send event, webhook, and pixel payloads to number of destinations.
3. **Schema-based data validation and annotation** helps enforce convention around how data is defined and evolved.
4. **Lightweight schema registry** supports ten different schema backends. Schemas are cached for consistently-high performance.
5. **Privacy handlers** anonymize or redact sensitive data at point of collection, not after it has proliferated throughout your cloud infrastructure.
6. **Empowerment not opinion.** Send data to streaming infra like [Redpanda](https://redpanda.com/), regular-old-databases like [Postgres](https://www.postgresql.org/), message brokers like [NATS](https://nats.io/),  or interesting cloud things like [Kinesis Firehose](https://aws.amazon.com/kinesis/data-firehose/). **Because you know what systems you prefer or have already built upon, not us.**


***


# When To Use Buz
### You want to collect data [from multiple sources and protocols](inputs/overview) using a single, fully-OSS system.

**Buz collects data from:**

- Event-tracking SDK's like Snowplow Analytics (Segment and others in development)
- Self-describing payloads
- Webhooks
- Pixels
- Cloudevents

### You want to send data to [one or more of many destinations](outputs/overview).

Migrating infrastructure? Need to support multiple destinations? Want to write events to Splunk _and_ Snowflake?

**Buz natively supports:**

- Databases like Postgres, Mysql, or Clickhouse
- Streaming tech like Pub/Sub, Kinesis, or Redpanda
- Hybrids like Kinesis Firehose
- Message brokers like NATS or RabbitMQ
- Indexes like Elasticsearch or Splunk

### You want to implement structure and guarantees within your data.


- Payloads are **validated, annotated, and enveloped** before being sent down the line.
- Validate data in ***microseconds*** not hours after data has been collected.
- **Incremental schematization** mechanisms support preexisting and future use cases.

### You want to simultaneously shrink the footprint of your systems, move faster, and improve data quality.
- Less infrastructure = `less`. Less headaches, less outages, less to think about.
- Less infrastructure = `more`. More time, more progress, more fun.
- Deployable in minutes on your own infrastructure. **No sales calls necessary.**

### You want cost efficiencies and burstable scale.
- Fast and efficient static binary.
- Easily deployed using Google [Cloud Run](https://cloud.google.com/run), AWS [Lambda](https://aws.amazon.com/lambda/), or K8s.
- Buz ❤️'s cloud [provider](https://cloud.google.com/free/docs/gcp-free-tier/#cloud-run) [free](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) tiers.


### You want a tool to power graceful evolution as your systems and needs change.
- Want to collect data but don't want the overhead of streaming? Sink it to a database like Postgresql or MySQL at first.
- Migrating cloud providers? Simultaneously sink data to both AWS Kinesis and Google Pub/Sub.
- Want development environments that look and feel like production, but with reduced infrastructure overhead? Buz.


***


# Next Steps

### Dig into the docs to see how Buz plays with others

Check out currently-supported **[input protocols](/inputs/overview)** and **[output sinks](/outputs/overview)**, or **[add one to the backlog](https://github.com/silverton-io/buz/issues)**.

Or peek under the hood with **[Buz middleware](/category/middleware)**.

### Bootstrap Buz locally

`make bootstrap` is all it takes to **[get started with Buz code](http://localhost:3000/contributing/contributing-code-to-buz#bootstrap)**.

### Check out the Quickstart

To rapidly bootstrap a streaming stack using Buz and **[Redpanda](https://github.com/redpanda-data/)** see the **[Quickstart](/examples/quickstart)**.

