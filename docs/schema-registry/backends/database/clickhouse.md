# Clickhouse

**🟢 Supported**

The `clickhouse` backend leverages schemas stored in a configurable registry table to back the onboard schema cache.

It is most useful when you want to store `schemas` and `events` within the same system to reduce infrastructure overhead.

It can be used with any combination of sink(s).

## Sample Clickhouse Schema Cache Backend Configuration

```
registry:
  backend:
    type: clickhouse
    registryTable: registry
    clickhouseHost: 127.0.0.1
    clickhousePort: 9000
    clickhouseDbName: buz
    clickhouseUser: buz
    clickhousePass: buz
```
