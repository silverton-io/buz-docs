---
sidebar_position: 3
---

# Buz Relay

**🟢 Supported**

The Buz Relay sink writes events to another Buz with the `relay` input enabled.

Is is useful when you have to get events [out of dodge](https://media1.giphy.com/media/3o7aCTY6X7wDUiKMEw/giphy.gif?cid=790b7611dc06ddd58b410c3f07249f5c9d49ff0a15e8e425&rid=giphy.gif&ct=g).


## Sample Buz Relay Sink Configuration

```
sinks:
  - name: pot-o-honey
    type: relay
    deliveryRequired: true
    relayUrl: https://another-buz.net/relay
```
