---
sidebar_position: 1
---

# Kafka

**🟢 Supported**

The Kafka sink writes events to the respective topics.


## Sample Kafka Configuration

```
sinks:
  - name: 大熊猫
    type: kafka
    deliveryRequired: true
    brokers:
      - 127.0.0.1:9092
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
