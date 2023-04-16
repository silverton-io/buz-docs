---
sidebar_position: 1
---

# File

**🟢 Supported**

The file sink writes events to respective local files. It is useful, sometimes.

Destination files are ensured on startup, so manual creation is not required.

## Sample File Sink Configuration

```
sinks:
  - name: local
    type: file
    deliveryRequired: true
    defaultOutput: buz_events.json
    deadletterOutput: buz_invalid_events.json
```
