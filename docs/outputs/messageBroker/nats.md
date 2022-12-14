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
  - name: streamjet
    type: nats
    deliveryRequired: true
    natsHost: nats
    natsUser: someuser
    natsPass: somepass
    validSubject: buz.valid
    invalidSubject: buz.invalid
```
