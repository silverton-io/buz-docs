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
2. **Flexible.** Collect event data, webhooks, pixels, and more with Buz. Before validating and shipping it to a number of destinations.
3. **Schema-based data validation.** Buz helps you enforce a set of conventions around how your data is defined and evolved.
4. **Privacy first.** Buz helps you anonymize or redact sensitive data as it comes in the door. Not once it has proliferated throughout your cloud provider.
5. **Empowerment, not opinions.** Buz helps you send data to streaming databases like [Materialize](https://materialize.com/), message brokers like [NATS](https://nats.io/), streaming infra like [Redpanda](https://redpanda.com/), regular-old-databases like [Postgres](https://www.postgresql.org/), or interesting cloud things like [Kinesis Firehose](https://aws.amazon.com/kinesis/data-firehose/). **Because you know what systems you like and have already built upon, not us.**
***

# When To Use Buz
- **You want to collect data from multiple sources or protocols using a single, fully-OSS system.**
    - Event-tracking SDK's like Snowplow Analytics (Segment and others coming soon)
    - Self-describing payloads
    - Webhooks
    - Pixels
    - Cloudevents

- **You want to simultaneously shrink the footprint of your systems, move faster, and improve data quality.**
    - Less infrastructure = `less`. Less headaches, less outages, less to think about.
    - Less infrastructure = `more`. More time, more progress, more fun.

- **You want cost efficiencies and burstable scale.**
    - Buz is a fast and efficient static binary.
    - Buz is easily deployed using Google [Cloud Run](https://cloud.google.com/run) or [Knative](https://knative.dev/docs/). Which means it can effectively scale from `0` to `∞`. Perhaps beyond?
    - Buz ❤️'s cloud [provider](https://cloud.google.com/free/docs/gcp-free-tier/#cloud-run) [free](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) tiers.

- **You are sick of paying to re-process the same data using [INSERT MDS ELT TOOL HERE] when webhooks will do.**
    - No MAR or quotas or prepaid compute necessary.
    - No third-party DPA's and weekly outage emails.

- **You need a system that will gracefully evolve as your needs change.**
    - Want to collect data but don't want streaming overhead yet? Sink it to a database like Postgresql or MySQL to get started.
    - Migrating cloud providers? Simultaneously sink data to both AWS Kinesis and Google Pub/Sub with Buz.
    - Want development environments that look and feel like production, but with reduced infrastructure overhead? Buz.

- **You want to self-manage a data collection system with as few moving pieces as possible.**
    - Buz is a **single binary** written in Go.
    - Buz is deployable in minutes. **No engineers required.**

- **You want to incrementally implement structure and contracts within your data.**
    - Buz validates, annotates, and envelopes each payload before sinking it to the configured sink(s).
    - JSON Schema is default. JSON Typedef is on the way.
    - No, we do not hate protocol buffers and avro. So those might be incoming too.


# Quickstart

:::tip Quickstart
To rapidly bootstrap a streaming stack using Buz, [Redpanda](https://github.com/redpanda-data/) and the [Redpanda Console](https://github.com/redpanda-data/console) please see the [Quickstart](/examples/quickstart).
:::
