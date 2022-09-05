---
sidebar_position: 3
slug: /examples/quickstart
hide_table_of_contents: true
---

# Quickstart

This quickstart will get you started with Buz, a multi-node Redpanda cluster, the Redpanda console, and Materialize for rapidly bootstrapping streaming analytics. It is an end-to-end real-time event collection, pipelining, and aggregation system.


![quickstart-diag](./img/quickstart-diag.png)



**If you don't have `docker` and `docker-compose` you will need to install those first.**


## 1. Clone the Buz repo

**`git clone git@github.com:silverton-io/buz.git && cd buz`**


```
~/code ❯❯❯ git clone git@github.com:silverton-io/buz.git
Cloning into 'buz'...
remote: Enumerating objects: 1324, done.
remote: Counting objects: 100% (1324/1324), done.
remote: Compressing objects: 100% (615/615), done.
remote: Total 1324 (delta 611), reused 1163 (delta 495), pack-reused 0
Receiving objects: 100% (1324/1324), 25.89 MiB | 4.35 MiB/s, done.
Resolving deltas: 100% (611/611), done.
~/code ❯❯❯ cd buz
```

## 2. Bootstrap Buz, Redpanda, the Console, and Materialize

**`docker-compose -f examples/quickstart/docker-compose.yml up -d`**

:::danger Note
This step requires [docker-compose](https://docs.docker.com/compose/).
:::


```
~/c/buz ❯❯❯ docker-compose -f examples/quickstart/docker-compose.yml up -d
...
Creating materialize ... done
Creating redpanda-1  ... done
Creating redpanda-3  ... done
Creating redpanda-2  ... done
Creating sample-ui   ... done
Creating console     ... done
Creating buz         ... done
Creating mzcli       ... done
```


## 3. Send Events to Buz

The Buz quickstart serves a page that you can use to quickly start firing Snowplow events using the [Snowplow Browser Tracker](https://docs.snowplowanalytics.com/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/) here: [localhost:8081](http://localhost:8081/)

The following events are tracked on this page:

  - Page views
  - Page ping (time on page)
  - Forms
  - Redirects
  - Transactions and transaction items
  - Struct events
  - Snowplow self-describing events

using both the `GET` and batch `POST` capabilities of the Snowplow tracker.


## 4. View Events in the Redpanda Console

The Quickstart runs Redpanda's Console at [localhost:8082](http://localhost:8082).

Incoming events can be viewed in the console using the [Topic Viewer](http://localhost:8082/topics/hpt-invalid?o=-1&p=-1&q&s=50#messages).


## 5. Query Real-Time Events using a Streaming Materialized View

Connect to Materialize using `psql`:

**`psql -h 127.0.0.1 -p 6875 -U materialize`**


And select real-time data from the `valid_events` and `invalid_events` materialized views:

```
~/c/buz ❯❯❯ psql -h 127.0.0.1 -p 6875 -U materialize

psql (14.1, server 9.5.0)
Type "help" for help.

materialize=> \x
Expanded display is on.
materialize=> select event -> 'payload' as payload, event -> 'contexts' as contexts, event -> 'eventMeta' as meta from valid_events limit 1;
-[ RECORD 1 ]--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
payload  | {"data":{},"schema":"io.silverton/snowplow/page_view/v1.0.json"}
contexts | {"iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0":{"id":"56aaa54a-bd7a-4898-a056-f1e4a5cc8874"},"iglu:org.w3/PerformanceTiming/jsonschema/1-0-0":{"connectEnd":1653319584968,"connectStart":1653319584967,"domComplete":1653319585324,"domContentLoadedEventEnd":1653319585302,"domContentLoadedEventStart":1653319585301,"domInteractive":1653319585293,"domLoading":1653319585038,"domainLookupEnd":1653319584967,"domainLookupStart":1653319584967,"fetchStart":1653319584967,"loadEventEnd":1653319585325,"loadEventStart":1653319585324,"navigationStart":1653319584980,"redirectEnd":0,"redirectStart":0,"requestStart":1653319584994,"responseEnd":1653319585029,"responseStart":1653319585028,"secureConnectionStart":0,"unloadEventEnd":0,"unloadEventStart":0}}
meta     | {"namespace":"snowplow.pageView","path":"io.silverton/snowplow/page_view/v1.0.json","protocol":"snowplow","uuid":"23edc1db-0ef0-4ee6-88ab-abc3c022eef9","vendor":"io.silverton","version":"1.0"}
```

# Next Steps

We have a lot planned. Want to be a part of it?

- Sign up for **[Insiders-Only Updates](/insiders-only)**
- Check out the **[Buz Roadmap](/introduction/roadmap)**
