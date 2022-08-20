---
sidebar_position: 2
---

# Google Pub/Sub

**🟢 Supported**


The Google Pub/Sub sink writes `valid` and `invalid` events to the configured topics.


## Sample Google Pub/Sub Sink Configuration

```
sinks:
  - name: googd
    type: pubsub
    deliveryRequired: true
    project: silverton
    validTopic: buz-valid
    invalidTopic: buz-invalid
```
