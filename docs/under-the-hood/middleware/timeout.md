---
sidebar_position: 4
---

# Request Timeout

**🟢 Supported**

This request timeout middleware allows the Buz operator to explicitly declare a time threshold, in milliseconds, after which a request times out.

If a request is in flight longer than the configured threshold a [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) is returned.

## Sample Timeout Middleware Configuration

```
middleware:
  timeout:
    enabled: false
    ms: 2000
```
