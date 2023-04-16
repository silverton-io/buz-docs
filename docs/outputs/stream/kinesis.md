---
sidebar_position: 3
---


# AWS Kinesis

**🟢 Supported**

The Kinesis sink writes `valid` and `invalid` events to the configured streams.

## Sample AWS Kinesis Sink Configuration

```
sinks:
  - name: kinesis
    type: kinesis
    deliveryRequired: true
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
