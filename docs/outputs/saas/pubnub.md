---
sidebar_position: 1
---

# PubNub

**🟢 Supported**

The PubNub sink writes events to... [PubNub](https://www.pubnub.com/)!


## Sample PubNub Sink Configuration
```
sinks:
  - name: someapp
    type: pubnub
    deliveryRequired: true
    pubnubPubKey: YOUR-PUB-KEY
    pubnubSubKey: YOUR-SUB-KEY
    defaultOutput: buz-valid
    deadletterOutput: buz-invalid
```
