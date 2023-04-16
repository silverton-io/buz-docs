---
sidebar_position: 17
---

# NATS

**🟢 Supported**

The NATS sink writes `valid` and `invalid` events to the configured subjects.

It is especially useful if you already have NATS running and want to quickly get started with Buz-based event tracking.


## Sample NATS Sink Configuration

```
sinks:
  - name: broker
    type: nats
    deliveryRequired: true
    hosts:
      - 127.0.0.1
    user: buz
    password: buz
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
