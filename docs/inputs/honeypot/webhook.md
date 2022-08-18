---
sidebar_position: 2
---


# Webhook

**🟢 Supported**


## Collection Method

Honeypot is capable of collecting and routing webhooks from various sources.

## Namespacing Method

Honeypot supports two ways of namespacing webhooks: `arbitrary` and `named`.

### Arbitrary webhooks

Any requests sent to the configured root webhook path are considered `arbitrary`.

If Honeypot is configured with a webhook path of `/hook` (the default), all requests to `/hook` **will not be validated** and will be namespaced according to `honeypot.hook.arbitrary`.

:::info Yo
Since this method is basically a webhook catchall it should be used sparingly.
:::

### Named webhooks

Any webhooks sent to a schema-specific webhook path are **namespaced and validated according to the associated schema**.

If Honeypot is configured with a webhook path of `/hook` (the default), all requests to `/hook/com.iterable/payload/v1.0.json` will be validated and namespaced according to the contents of the `com.iterable/payload/v1.0.json` schema.

:::info Pro tip
This is the way.
:::

## Validation Method

**Arbitrary webhooks:** Not validated.

**Named webhooks:** Validated according to the associated schema.


## Sample Webhook Configuration

```
webhook:
  enabled: true     # Whether or not to enable webhooks
  path: /hook       # Root path for incoming webhooks
```
