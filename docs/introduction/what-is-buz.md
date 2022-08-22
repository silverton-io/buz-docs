---
sidebar_position: 1
slug: /
title: What is Buz?
---

![buzz](../../static/img/buzz.png)

A system for collecting, validating, and delivering data to where it needs to bee.

Buz is designed to be **easily-configured**, **easily-deployed**, and **easily-maintained**. Yet uncompromising with its speed, guarantees, and operational flexibility.


# When To Use Buz
- **You want to collect data from a variety of places using a single, fully-OSS system.**
    - Event-tracking SDK's like Snowplow Analytics or Segment (coming soon)
    - Self-describing payloads
    - Webhooks
    - Pixels
    - Cloudevents

- **You want to simultaneously shrink the footprint of your systems, move faster, and improve data quality.**
    - Less infrastructure = `less`. Less headaches, less outages, less to think about.
    - Less infrastructure = `more`. More time, more progress, more fun.

- **You want cost efficiencies and burstable scale.**
    - Buz is a fast and efficient static binary.
    - Buz is easily deployed using GCP [Cloud Run](https://cloud.google.com/run) or [Knative](https://knative.dev/docs/). Which means it can effectively scale from `0` to `∞`. Perhaps beyond?
    - Want 2M records free every month? Deploy Buz on your own, in minutes, with [Cloud Run](https://cloud.google.com/free/docs/gcp-free-tier/#cloud-run) or AWS.

- **You are sick of paying to re-process the same data using [INSERT MDS ELT TOOL HERE] when webhooks will do.**
    - No MAR or quotas or prepaid compute necessary.
    - No third-party DPA's and weekly outage emails.

- **You need a system that will gracefully evolve as your needs change.**
    - Want to collect data but don't want streaming overhead yet? Sink it to a database like Postgresql or MySQL to get started.
    - Migrating cloud providers? Simultaneously sink data to both AWS Kinesis and GCP Pub/Sub with Buz.
    - Want development environments that have parity with production, but with reduced infrastructure overhead? Buz.

- **You want to self-manage a data collection system, but with as few moving pieces as possible.**
    - Buz is a **single binary** written in Go.
    - Buz is deployable in minutes. **No engineers required.**

- **You want to incrementally improve structure and contracts within your data.**
    - Buz validates, annotates, and envelopes each payload before sinking it to the configured sink(s).
    - JSON Schema is default. JSON Typedef is on the way.


# Quickstart

:::tip Quickstart
To rapidly bootstrap a streaming stack using Buz, [Redpanda](https://github.com/redpanda-data/), [Kowl](https://github.com/cloudhut/kowl/), and [Materialize](https://github.com/MaterializeInc/materialize) please see the [Quickstart](/examples/quickstart).
:::
