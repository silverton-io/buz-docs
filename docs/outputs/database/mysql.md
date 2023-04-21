---
sidebar_position: 3
---


# MySQL

**🟢 Supported**

The MySQL sink writes events to the configured tables.

It is especially useful if you already have MySQL running and want to quickly get started with Buz-based event tracking.

Tables are ensured upon Buz startup, so manual creation is not required.

## Sample MySQL Sink Configuration

```
sinks:
   - name: msql1
     type: mysql
     deliveryRequired: true
     hosts:
       - 127.0.0.1
     port: 3306
     database: buz
     user: buz
     password: buz
     defaultOutput: buz_events
     deadletterOutput: buz_invalid_events
```
