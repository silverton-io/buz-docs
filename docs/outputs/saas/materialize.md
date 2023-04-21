---
sidebar_position: 1
---

# Materialize

**🟢 Supported**

The Materialize sink writes events to the configured tables.

This sink is especially useful when wanting to try out a streaming database without the overhead of another set of infrastructure.

Destination tables are ensured on Buz startup, so manual creation is not required.


## Sample Materialize Sink Configuration

```
sinks:
  - name: 🚀🚀🚀
    type: materialize
    deliveryRequired: true
    hosts:
      - 127.0.0.1
    port: 5432
    database: buz
    user: buz
    password: buz
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
