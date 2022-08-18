---
sidebar_position: 1
slug: self-describing
---

# Self-Describing Payloads

**🟢 Supported**

## Collection Method
Honeypot listens on a configurable endpoint for incoming `POST` requests of `self describing` payloads, structured as:

```
{
  $CONTEXTS_ROOT_KEY: {
    "some-context-schema": {"context-data": "here"},
    "another-context-schema": {"more-context-data": "here"}
  },
  $PAYLOAD_ROOT_KEY: {
    $PAYLOAD_SCHEMA_KEY: "some-key",
    $PAYLOAD_DATA_KEY: {"data": "here"}
  }
}
```

This endpoint accepts both **batches of self-describing events** and **single self-describing events** and requires a `Content-Type` header of `application/json`.

:::danger Note
If a `Content-Type` header is not specified, the event will not be accepted.
:::


## Namespace Method

Honeypot supports only `named` self-describing payloads.

### Named self-describing payloads

All inbound self-describing payloads are namespaced according to the contents of `$PAYLOAD_KEY.$SCHEMA_KEY`.

:::tip For Example
If you have incoming self-describing payloads structured as:
```
{
  "contexts": {
    "com.yourco/siteContext": {
      "partnerId": 12,
      "site": "partnersite.com"
    }
  },
  "payload": {
    "schema": "com.yourco/clickedSomething/v1.0.json",
    "data": {
      "user": 10,
      "did": "something"
    }
  }
}
```

**The event will be namespaced according to the contents of `payload.schema` (or `com.yourco/clickedSomething/v1.0.json`).**
:::

## Validation Method

Honeypot uses the schema defined at `$PAYLOAD_KEY.$SCHEMA_KEY` to validate each payload.

:::tip For Example
If you have incoming self-describing events structured as:

```
{
  "contexts": {
    "com.yourco/siteContext": {
      "partnerId": 12,
      "site": "partnersite.com"
    }
  },
  "payload": {
    "schema": "com.yourco/clickedSomething/v1.0.json",
    "data": {
      "user": 10,
      "clicked": "something"
    }
  }
}
```

**`payload.data` (or `{"user": 10, "did":"something"}`) will be validated according to the contents of `payload.schema` (or `com.yourco/clickedSomething/v1.0.json`).**
:::


## Sample Self-Describing Event Configuration
```
  generic:
    enabled: true         # Whether or not to enable generic self-describing events
    path: /gen/p          # Path for incoming self-describing events
    contexts: 
      rootKey: contexts   # The contexts root key (contexts)
    payload:
      rootKey: payload    # The payload root key (payload)
      schemaKey: schema   # The payload schema key (payload.schema)
      dataKey: data       # The payload data key (payload.data)
```
