---
sidebar_position: 6
---

# Clickhouse

**🟢 Supported**

The Clickhouse sink loads `valid` and `invalid` events into the configured tables.

Table existence is ensured each time Buz starts up so manual creation is not required.

## Sample Clickhouse Sink Configuration

```
sinks:
  - name: houseofclicks
    type: clickhouse
    deliveryRequired: true
    clickhouseHost: 127.0.0.1
    clickhousePort: 9000
    clickhouseDbName: buz
    clickhouseUser: buz
    clickhousePass: buz
    validTable: buz_valid
    invalidTable: buz_invalid
```
