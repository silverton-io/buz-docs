---
sidebar_position: 1
---

# Overview

Buz's schema registry functionality consists of several parts:

1. An **[onboard cache](/schema-registry/overview#onboard-schema-registry-cache)** which stores schemas so incoming payloads can be validated and annotated in microseconds.
2. A **[configurable backend](/schema-registry/overview#schema-registry-backends)**, from which schemas are sourced before being stored in the onboard cache.
3. **[HTTP routes](/schema-registry/overview#schema-registry-http-routes)** used to interact with schemas directly or purge the onboard cache.


## Onboard Schema Registry Cache

The onboard schema registry cache stores schemas. If a schema is not available from the cache when needed, said schema is sourced from the configured backend.

The onboard schema registry **cache ttl** and the **max size are both configurable**.

If a schema is not used within the configured **`$registry.ttlSeconds`** it is purged and will be sourced from the backend when needed next. If the onboard schema cache exceeds **`$registry.maxSizeBytes`** it will purge schemas in LRU fashion.

For example configuration, please refer to the **`registry`** section of [the bootstrap configuration](https://github.com/silverton-io/buz/blob/main/examples/devel/buz/simple.conf.yml).


## Schema Registry Backends

Buz supports storing schemas in many different backends which are outlined along with their associated docs below:

| Backend | Type | Supported? | Maintainer | More Details |
| --- | --- | --- | --- | --- |
| File | Buz | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/buz/filesystem)** |
| HTTP/S | Buz | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/buz/http)** |
| Google Cloud Storage | Object Storage | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/object/gcs)** |
| AWS S3 | Object Storage | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/object/s3)** |
| Minio | Object Storage | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/object/minio)** |
| Postgres | Database | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/database/postgres)** |
| Mysql | Database | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/database/mysql)** |
| Mongodb | Database | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/database/mongodb)** |
| Clickhouse | Database | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/database/clickhouse)** |
| Materialize | Saas | Yes ✅ | 🐝 | **[Docs](/schema-registry/backends/saas/materialize)** |
| --- | --- | --- | --- | --- |
| Kafka Schema Registry | Registry | Not yet ⚠️ | This could be you. | - |
| Snowplow IGLU | Registry | Not yet ⚠️ | This could be you. | - |


## Schema Registry HTTP Routes

### Schemas

Any schema in the configured backend can be accessed under the `/s/` route using `/s/$PATH_TO_SCHEMA` or `/s/$SCHEMA_NAME`.

:::tip For example

 When running Buz using either the [quickstart](/examples/quickstart) or `make boostrap`, you can access the Buz config schema at **[http://localhost:8080/s/io.silverton/buz/internal/config/app/v1.0.json](http://localhost:8080/s/io.silverton/buz/internal/config/app/v1.0.json).**

:::

### Cache Purge

The onboard schema registry cache can be explicitly purged by sending either a `GET` or `POST` to `/c/purge`.

This is simply an operational lever to get the most-recent schema versions onto collectors while they are running.


:::tip For example
After running the [quickstart](/examples/quickstart) or `make boostrap` you can easily purge all locally-cached schemas by navigating to **[http://localhost:8080/c/purge](http://localhost:8080/c/purge)**
:::
