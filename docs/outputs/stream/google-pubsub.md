---
sidebar_position: 2
---

# Google Pub/Sub

**🟢 Supported**


The Google Pub/Sub sink writes events to the configured topics.


## Sample Google Pub/Sub Sink Configuration

```
sinks:
  - name: pubsub
    type: pubsub
    deliveryRequired: true
    project: YOURPROJECT
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
