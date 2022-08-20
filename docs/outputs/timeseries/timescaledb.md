---
sidebar_position: 16
---

# Timescale

**🟢 Supported**

The Timescale sink writes `valid` and `invalid` events to the configured tables.

It is especially useful if you already have Timescale running and want to quickly get started with Buz-based event tracking.

Tables are ensured upon Buz startup, so manual creation is not required.

## Sample Timescale Sink Configuration

```
sinks:
  - name: ol-trusty
    type: timescale
    deliveryRequired: true
    timescaleHost: localhost
    timescalePort: 5432
    timescaleDbName: buz
    timescaleUser: buz
    timescalePass: buz
    validTable: buz_valid
    invalidTable: buz_invalid
```
