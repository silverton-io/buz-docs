---
sidebar_position: 2
---

# Postgres

**🟢 Supported**

The Postgres sink writes `valid` and `invalid` events to the configured Postgres tables.

It is especially useful if you already have Postgres running and want to quickly get started with Buz-based event tracking.

Tables are ensured upon Buz startup, so manual creation is not required.

## Sample Postgres Sink Configuration

```
sinks:
  - name: ol-trusty
    type: postgres
    deliveryRequired: true
    pgHost: localhost
    pgPort: 5432
    pgDbName: buz
    pgUser: buz
    pgPass: buz
    validTable: buz_valid
    invalidTable: buz_invalid
```
