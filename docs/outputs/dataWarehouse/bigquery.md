---
sidebar_position: 1
---

# BigQuery

**🟢 Supported**

The BigQuery sink writes events to tables in your data warehouse.

## Sample BigQuery Sink Configuration

```
sinks:
    - name: bigquery
      type: bigquery
      deliveryRequired: true
      project: $YOUR_PROJECT
      dataset: $YOUR_DATASET
      defaultOutput: events
      deadletterOutput: invalid_events
```
