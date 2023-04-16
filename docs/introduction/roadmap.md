---
sidebar_position: 4
---

# Roadmap 2023 🎯

## We have five goals for 2023.

  1. **Stability and transparency** - robust tests, unchanging internals, and proactive comms.
  2. **Increase diversity of production use cases** - SIEM, infra migration, data lake management, and more.
  3. **Improved developer tooling** - config management, schema management, etc.
  4. **Deeper integrations** with the next generation of data tooling.
  5. **Save more companies a significant amount of money and time.**


## 2022 Year in Review

Buz was born on **[January 18, 2022](https://github.com/silverton-io/buz/commit/b7d9178a5987f880a87699d16428bc1ae08e5722)** as a serverless collector for Snowplow events. It has become much more.

We quickly recognized the value in a lightweight event collector doesn't only lie in its **minimal infrastructure** and **cost efficiencies**, but also in its **flexibility**, its **openness**, and its **first-class support of pre-existing infrastructure preferences**.

### Buz has grown to support:

* **[Five event protocols](/inputs/overview)**, all of which have **payload validation and annotation capabilities**.
* **[Twenty event sinks](/outputs/overview)** ranging from Postgres, to streaming tech like Redpanda, to message brokers like NATS.
* **Ten schema registry backends** ranging from cloud object storage, to RDBMS's, to document stores.
* **A lightweight onboard schema registry**. (Yet-another piece of consolidated infrastructure™)
* **Serverless, hybrid-cloud deployments**. Which are [terraformed](https://github.com/silverton-io/buz/tree/main/deploy/terraform/aws/lambda) for anyone [to use](https://github.com/silverton-io/buz/tree/main/deploy/terraform/gcp).
* **Piles of operator-friendly mechanisms** including middleware, onboard statistics, dedicated sinks, **incremental schematization** and more.
* **A friendly envelope that gets out of the way but is key to downstream utility.** The first one sucked - we fixed it.

(with more on the way)

### Buz 2022 misc:

- **>100k LOC written (or removed)**
- **>250 issues closed**
- **>90 releases**
- **Double-digit microsecond payload validation**
- **0 to >30k rps in the AWS Lambda free tier**
- **Powers numerous (diverse) production systems.**

### Want to stay in the know?

- Sign up for **[Insiders-Only Updates](/insiders-only)**
- Connect on **[Discord](https://discord.gg/JFKVnVdF2m)** or **[Twitter](https://twitter.com/aerialfly)**
- Watch **[Buz PR's](https://github.com/silverton-io/buz/pulls)**
