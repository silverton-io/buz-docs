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

1. **Low infrastructure.** Buz is designed to be **easily-configured**, **easily-deployed**, and **easily-maintained**.
2. **Flexible.** Collect and send event, webhook, and pixel payloads to number of destinations.
3. **Schema-based data validation and annotation** to help enforce convention around how data is defined and evolved.
4. **Lightweight schema registry** with support for ten different schema backends. Schemas are cached for consistently-high performance.
5. **Privacy first.** Anonymize or redact sensitive data at point of collection, not after it has proliferated throughout your cloud infrastructure.
6. **Empowerment, not opinions.** Send data to streaming databases like [Materialize](https://materialize.com/), message brokers like [NATS](https://nats.io/), streaming infra like [Redpanda](https://redpanda.com/), regular-old-databases like [Postgres](https://www.postgresql.org/), or interesting cloud things like [Kinesis Firehose](https://aws.amazon.com/kinesis/data-firehose/).


**Because you know what systems you prefer or have already built upon, not us.**
***

# When To Use Buz
- **You want to collect data from multiple sources and protocols using a single, fully-OSS system.**
    - Event-tracking SDK's like Snowplow Analytics (Segment and others coming soon)
    - Self-describing payloads
    - Webhooks
    - Pixels
    - Cloudevents

- **You want to send data to one or more destinations.** Migrating infrastructure? Need to support multiple destinations?
    - Databases like Postgres, Mysql, or Clickhouse
    - Streaming tech like Pub/Sub, Kinesis, or Redpanda
    - Hybrids like Kinesis Firehose
    - Message brokers like NATS or RabbitMQ
    - Indexes like Elasticsearch or Splunk

- **You want to simultaneously shrink the footprint of your systems, move faster, and improve data quality.**
    - Less infrastructure = `less`. Less headaches, less outages, less to think about.
    - Less infrastructure = `more`. More time, more progress, more fun.
    - Buz is deployable in minutes on your own infrastructure. **No sales calls necessary.**

- **You want cost efficiencies and burstable scale.**
    - Fast and efficient static binary.
    - Easily deployed using Google [Cloud Run](https://cloud.google.com/run), AWS [Lambda](https://aws.amazon.com/lambda/), or K8s.
    - Buz ❤️'s cloud [provider](https://cloud.google.com/free/docs/gcp-free-tier/#cloud-run) [free](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) tiers.


- **You want a tool to power graceful evolution as your systems and needs change.**
    - Want to collect data but don't want streaming overhead yet? Sink it to a database like Postgresql or MySQL to get started.
    - Migrating cloud providers? Simultaneously sink data to both AWS Kinesis and Google Pub/Sub.
    - Want development environments that look and feel like production, but with reduced infrastructure overhead? Buz.

- **You want to incrementally implement structure and contracts within your data.**
    - Validate, annotate, and envelope each payload before sinking it to the configured sink(s).


# Quickstart

:::tip Quickstart
To rapidly bootstrap a streaming stack using Buz, [Redpanda](https://github.com/redpanda-data/) and the [Redpanda Console](https://github.com/redpanda-data/console) please see the [Quickstart](/examples/quickstart).
:::
