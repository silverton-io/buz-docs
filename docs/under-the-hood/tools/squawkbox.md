---
sidebar_position: 3
---

# Squawkbox


Buz ships with a simple feedback mechanism called `squawkbox`. It is most helpful when building out a tracking implementation, doing local development, etc.

**Each request to the protocol-specific squawkbox results in the following:**

1. Incoming events are validated.
2. Events are enveloped and all metadata is associated.
2. The envelope is returned as the response body.


`Squawkbox` is configurable - it can be disabled altogether or shifted to a set of alternative paths:

```
squawkBox:
  enabled: true
  cloudeventsPath: /sqwk/ce
  snowplowPath: /sqwk/sp
  genericPath: /sqwk/gen
```
