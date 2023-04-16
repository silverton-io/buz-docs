---
sidebar_position: 6
---

# Clickhouse

**🟢 Supported**

The Clickhouse sink loads `valid` and `invalid` events into the configured tables.

Table existence is ensured each time Buz starts up so manual creation is not required.

## Sample Clickhouse Sink Configuration

```
sinks:
  - name: houseofclicks
    type: clickhouse
    deliveryRequired: true
    hosts:
      - 127.0.0.1
    port: 9000
    database: buz
    user: buz
    password: buz
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
