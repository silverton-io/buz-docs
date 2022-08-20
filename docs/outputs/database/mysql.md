---
sidebar_position: 3
---


# MySQL

**🟢 Supported**

The MySQL sink writes `valid` and `invalid` events to the configured tables.

It is especially useful if you already have MySQL running and want to quickly get started with Buz-based event tracking.

Tables are ensured upon Buz startup, so manual creation is not required.

## Sample MySQL Sink Configuration

```
sinks:
  - name: whoa-nelly
    type: mysql
    deliveryRequired: true
    mysqlHost: localhost
    mysqlDbName: buz
    mysqlPort: 3306
    mysqlUser: buz
    mysqlPass: buz
    validTable: buz_valid
    invalidTable: buz_invalid
```

