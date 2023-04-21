# Postgres

**🟢 Supported**

The `postgres` backend leverages schemas stored in a configurable registry table to back the onboard schema cache.

It is most useful when you want to store `schemas` and `events` within the same system to reduce infrastructure overhead.

It can be used with any combination of sink(s).


## Sample Postgres Schema Cache Backend Configuration

```
registry:
  backend:
    type: postgres
    registryTable: registry
    pgHost: localhost
    pgPort: 5432
    pgDbName: buz
    pgUser: buz
    pgPass: buz
```
