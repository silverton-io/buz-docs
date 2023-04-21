---
sidebar_position: 1
---

# Redpanda

**🟢 Supported**

The Redpanda sink writes events to the respective topics.


## Sample Redpanda Configuration

```
sinks:
  - name: 大熊猫
    type: redpanda
    deliveryRequired: true
    brokers:
      - 127.0.0.1:9092
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
