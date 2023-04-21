---
sidebar_position: 4
---

# Mongodb

**🟢 Supported**

The Mongodb sink writes events to the configured collections.

Collections are ensured via the nature of Mongodb, so manual creation is not required.

## Sample Mongodb Sink Configuration

```
sinks:
  - name: mongo
    type: mongodb
    deliveryRequired: true
    hosts:
      - 127.0.0.1
    port: 27017
    database: buz
    user: buz
    password: buz
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
