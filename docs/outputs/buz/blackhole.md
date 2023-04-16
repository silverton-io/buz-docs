---
sidebar_position: 5
---

# Blackhole

**🟢 Supported**


The blackhole sink is the equivalent of sinking events to `/dev/null`.

It is primarily useful as a development tool or when collecting events in non-production environments if you don't want to sink them anywhere.


## Sample Blackhole Sink Configuration

```
  - name: supermassive
    type: blackhole
    deliveryRequired: true
    defaultOutput: nowheres
    deadletterOutput: nowheres
```
