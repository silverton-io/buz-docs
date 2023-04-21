---
sidebar_position: 2
---

# Postgres

**🟢 Supported**

The Postgres sink writes events to the configured Postgres tables.

It is especially useful if you already have Postgres running and want to quickly get started with Buz-based event tracking.

Tables are ensured upon Buz startup, so manual creation is not required.

## Sample Postgres Sink Configuration

```
sinks:
  - name: pg1
    type: postgres
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
