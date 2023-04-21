---
sidebar_position: 16
---

# Timescale

**🟢 Supported**

The Timescale sink writes events to the configured tables.

It is especially useful if you already have Timescale running and want to quickly get started with Buz-based event tracking.

Tables are ensured upon Buz startup, so manual creation is not required.

## Sample Timescale Sink Configuration

```
sinks:
  - name: ts1
    type: timescale
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
