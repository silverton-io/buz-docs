---
title: Birds, Bees, and well-structured piles of JSON
description: Building a well-structured data lake is hard. But it doesn't have to be! Using Bees to build and Birds to query means low-cost, low-footprint, high-quality data.
authors: [jake]
slug: /birds-bees-and-organizing-your-data-with-duckdb-and-buz
tags: [duckdb, buz, birds and bees]
date: 2023-04-28T00:00
hide_table_of_contents: true
---

It is not uncommon for instrumentation, webhooks, and events to end up in large piles of (messy, terrifying, unusable) JSON.

But [Buz](https://buz.dev/) makes it easy to create well-structured piles of JSON. 🐝

And [DuckDB](https://duckdb.org/) makes it easy to query said piles of JSON. 🦆

The combination of 🦆's and 🐝's is pretty cool.

<!--truncate-->

# Schematizing Data

A lot can be said about using schemas to describe data.

Schemas can be used to **[auto-generate](https://app.quicktype.io/) tracking [SDK's](https://www.npmjs.com/package/json-schema-to-typescript)**, seed **data dictionaries and discovery mechanisms**, **version payloads** and more.

But schemas also provide significant value far downstream of **`data generation`**, **`data collection`**, and "organizational contracts".

# Payload validation and annotation

Buz uses metadata attributes defined within schemas to validate and annotate payloads.

#### For example, this schema:

```
{
    "$schema": "https://registry.buz.dev/s/io.silverton/buz/internal/meta/v1.0.json",
    "$id": "io.silverton/buz/example/birdsBees/v1.0.json",
    "title": "io.silverton/buz/example/birdsBees/v1.0.json",
    "description": "Schema for birds and bees",
    "owner": {
        "org": "silverton",
        "team": "buz",
        "individual": "jakthom"
    },
    "self": {
        "vendor": "io.silverton",
        "namespace": "buz.example.birdsBees",
        "version": "1.0"
    },
    "type": "object",
    "properties": {
        "uuid": {
            "description": "The event uuid",
            "type": "string",
            "format": "uuid"
        },
        "event_name": {
            "description": "The name of the event",
            "type": "string"
        },
        "organization": {
            "type": "object",
            "properties": {
                "name": {
                    "description": "The organization name",
                    "type": "string"
                },
                "id": {
                    "description": "The organization id",
                    "type": "number"
                }
            }
        }
    },
    "required": [
        "uuid",
        "event_name",
        "organization"
    ],
    "additionalProperties": false
}
```

#### and this payload:

```
{
	"uuid": "b06834d6-aea1-4ef2-9c00-8cd5aa76c8e2",
    "event_name": "viewed",
    "organization": {
      "name": "bee corp",
      "id": 10,
    }
}
```

#### will result in this envelope:

```
[
    {
        "uuid": "28b0b531-285f-46f7-88e5-92b34d403fcd",
        "timestamp": "2023-04-28T21:09:16.960953Z",
        "buzTimestamp": "2023-04-28T21:09:16.960953Z",
        "buzVersion": "x.x.dev",
        "buzName": "buz-bootstrap",
        "buzEnv": "development",
        "protocol": "webhook",
        "schema": "io.silverton/buz/example/birdsBees/v1.0.json",
        "vendor": "io.silverton",
        "namespace": "buz.example.birdsBees",
        "version": "1.0",
        "isValid": true,
        "contexts": {
            "io.silverton/buz/internal/contexts/httpHeaders/v1.0.json": {
                "Accept": "*/*",
                "Content-Length": "153",
                "Content-Type": "application/json",
                "User-Agent": "curl/7.86.0"
            }
        },
        "payload": {
            "event_name": "viewed",
            "organization": {
                "id": 10,
                "name": "bee corp"
            },
            "uuid": "b06834d6-aea1-4ef2-9c00-8cd5aa76c8e2"
        }
    }
]
```

Schema attributes get appended to the envelope, which can be used to consistently, reliably answer questions like:

* Where was payload sourced from?
* What does this payload represent?
* What version of the `buz.example.birdsBees` schema does this event conform to?
* Is the payload valid?

These attributes are appended to sink-specific mechanisms like [Kafka headers](https://kafka.apache.org/20/javadoc/index.html?org/apache/kafka/connect/header/Header.html) or [Pub/Sub attributes](https://cloud.google.com/pubsub/docs/samples/pubsub-publish-custom-attributes).

And power automation far downstream of the point of `collection`.


# Payload annotation-based partitioning

The [example AWS deployment of Buz](https://github.com/silverton-io/buz/tree/main/deploy/terraform/aws/lambda) writes events directly to Kinesis Firehose, which then leverages [dynamic partitioning](https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html) to write incoming payloads to well-structured S3 paths.

The above `buz.example.birdsBees` payload will be written to an s3 path of:

`isValid=true/vendor=io.silverton/namespace=buz.example.birdsBees/version=1.0/year=2023/month=4/day=28/$FILE.gz`

Payload validation, vendors, namespaces, versions, etc are all written to different paths. Which also means every s3 path is comprised of **identically-structured payloads**.

This is key.

# Querying JSON directly from S3

DuckDB makes it easy to query your S3 pile (bucket? lake? lakehouse? idk).

**To start querying this well-structured pile, first load and configure DuckDB's [httpfs extension](https://duckdb.org/docs/extensions/httpfs.html):**

```
D install httpfs;
D load httpfs;
D set s3_region = 'us-east-1'; # or wherever
D set s3_access_key_id = '$YOUR_ID';
D set s3_secret_access_key = '$YOUR_KEY';
```

Since the pile of JSON in S3 is consistently-structured, DuckDB schema discovery is effectively free.

**You get real tables with real types. And `struct`s all the way down:**

```
D create table local_pile as
select
    *
from
    read_json_auto('s3://bz-dev-events/isValid=true/vendor=io.silverton/namespace=buz.example.birdsBees/version=1.0/year=2023/month=4/day=28/*.json.gz', timestampformat='%Y-%m-%dT%H:%M:%S.%fZ');

D describe local_pile;
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬─────────┬─────────┬─────────┬───────┐
│ column_name  │                                                                            column_type                                                                             │  null   │   key   │ default │ extra │
│   varchar    │                                                                              varchar                                                                               │ varchar │ varchar │ varchar │ int32 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼─────────┼─────────┼─────────┼───────┤
│ uuid         │ UUID                                                                                                                                                               │ YES     │         │         │       │
│ timestamp    │ TIMESTAMP                                                                                                                                                          │ YES     │         │         │       │
│ buzTimestamp │ TIMESTAMP                                                                                                                                                          │ YES     │         │         │       │
│ buzVersion   │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ buzName      │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ buzEnv       │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ protocol     │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ schema       │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ vendor       │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ namespace    │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ version      │ VARCHAR                                                                                                                                                            │ YES     │         │         │       │
│ isValid      │ BOOLEAN                                                                                                                                                            │ YES     │         │         │       │
│ contexts     │ STRUCT("io.silverton/buz/internal/contexts/httpHeaders/v1.0.json" STRUCT("Accept" VARCHAR, "Content-Length" BIGINT, "Content-Type" VARCHAR, "User-Agent" VARCHAR)) │ YES     │         │         │       │
│ payload      │ STRUCT(event_name VARCHAR, organization STRUCT(id UBIGINT, "name" VARCHAR), uuid UUID)                                                                             │ YES     │         │         │       │
├──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴─────────┴─────────┴─────────┴───────┤
│ 14 rows                                                                                                                                                                                                       6 columns │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

**Queries like this are possible out of the box:**

```
D select
>     date_trunc('day', timestamp) as day,
>     payload.event_name,
>     payload.organization.id as org_id,
>     count(*) as events
> from
>     local_pile
> group by
>     1,2,3;
┌────────────┬────────────┬────────┬────────┐
│    day     │ event_name │ org_id │ events │
│    date    │  varchar   │ uint64 │ int64  │
├────────────┼────────────┼────────┼────────┤
│ 2023-04-28 │ viewed     │     10 │  210353│
└────────────┴────────────┴────────┴────────┘
```

# Well-structured piles of Parquet

A well-structured pile of parquet is sometimes preferable to a well-structured pile of JSON. Which is fine!

**This too is easy with DuckDB:**

```
D copy local_pile to 'local_pile.parquet' (format parquet);
```

**To query the local parquet pile:**

```
D select * from read_parquet('local_pile.parquet');
┌──────────────────────┬──────────────────────┬──────────────────────┬────────────┬───────────────┬─────────────┬───┬──────────────┬──────────────────────┬─────────┬─────────┬──────────────────────┬──────────────────────┐
│         uuid         │      timestamp       │     buzTimestamp     │ buzVersion │    buzName    │   buzEnv    │ … │    vendor    │      namespace       │ version │ isValid │       contexts       │       payload        │
│         uuid         │      timestamp       │      timestamp       │  varchar   │    varchar    │   varchar   │   │   varchar    │       varchar        │ varchar │ boolean │ struct("io.silvert…  │ struct(event_name …  │
├──────────────────────┼──────────────────────┼──────────────────────┼────────────┼───────────────┼─────────────┼───┼──────────────┼──────────────────────┼─────────┼─────────┼──────────────────────┼──────────────────────┤
│ 813da4d2-c49b-4b99…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ dcbf6249-42e0-4abe…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ 3ae2d65c-f785-41b5…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ 6c7b3e35-6635-4eec…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ 8b3b4c8c-2ce5-4431…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ 8683ec4e-38a4-49c1…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ c098fdd6-7d0a-446a…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ dc47ec95-fe66-472d…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ a3494e5e-4709-4e62…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ a6c4fc0e-b03f-47ac…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ 55065c25-546a-4f26…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ 808bfe01-6489-44ae…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ ff6325aa-5235-4f94…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ b488fe95-50d6-4244…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
│ f7d63eb5-a1e5-41c5…  │ 2023-04-28 21:34:0…  │ 2023-04-28 21:34:0…  │ x.x.dev    │ buz-bootstrap │ development │ … │ io.silverton │ buz.example.birdsB…  │ 1.0     │ true    │ {'io.silverton/buz…  │ {'event_name': vie…  │
```

**Or write it straight back to S3 as partitioned Parquet:**

```
D copy local_pile to 's3://bz-dev-events/partitioned' (format parquet, partition_by (isValid, vendor, namespace, version));
```


# In Conclusion

Tools like Buz and DuckDB make it easier than ever to create and use well-structured data sitting in S3. Your pile of JSON (or Parquet) doesn't need to be a mess!

And with functionality like [registering file paths](https://github.com/duckdb/duckdb/pull/7290) or [this](https://github.com/duckdb/duckdb/discussions/6209) it's only getting better.
