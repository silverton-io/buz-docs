---
sidebar_position: 6
---


# AWS Eventbridge

**🟢 Supported**

The Eventbridge sink writes events to the configured bus.

## Sample AWS Eventbridge Sink Configuration

```
sinks:
  - name: bridge
    type: eventbridge
    deliveryRequired: true
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
