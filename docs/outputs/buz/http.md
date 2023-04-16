---
sidebar_position: 2
---

# HTTP/S

**🟢 Supported**

The http/s sink writes events via batched `POST` requests to the configured `valid` and `invalid` urls. Without discretion.


## Sample HTTP/S Sink Configuration

```
sinks:
  # - name: web
  #   type: https
  #   deliveryRequired: true
  #   defaultOutput: https://somewheres.net/buz
  #   deadletterOutput: https://somewheres.net/buz
```
