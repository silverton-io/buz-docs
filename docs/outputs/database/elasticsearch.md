---
sidebar_position: 5
---

# Elasticsearch

**🟢 Supported**

The Elasticsearch sink writes events into the configured indices.

Indices are ensured via the nature of elasticsearch, so manual creation is not required.

## Sample Elasticsearch Sink Configuration

```
sinks:
  - name: elastic
    type: elasticsearch
    deliveryRequired: true
    hosts:
      - "http://127.0.0.1:9200"
    user: elastic
    password: elastic
    defaultOutput: buz_events
    deadletterOutput: buz_invalid_events
```
