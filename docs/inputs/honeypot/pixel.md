---
sidebar_position: 3
---


# Pixel

**🟢 Supported**

## Collection Method

### Parameter Payloads

Honeypot supports collecting payloads via url query params.

While this method of data collection is useful it does have drawbacks such as [max uri lengths](https://stackoverflow.com/questions/812925/what-is-the-maximum-possible-length-of-a-query-string) and the inability to explicitly declare parameter types.

The *good* thing about the pixel input is it is extremely simple to get started with.

**For example** -> if `/pxl` is configured as a pixel input, submitting a `GET` request to `/pxl/?hello=world&userId=10` will send a payload of `{"hello": "world", "userId": "10"}` to the configured sinks. No sdk's necessary.

### Base64 Encoded Parameter Payloads

Honeypot supports a "special" query param, `hbp`, by which b64 encoded payloads can be collected.

**For example** -> if `/pxl` is configured as a pixel input, submitting a `GET` request to `/pxl?hbp=eyJoZWxsbyI6IndvcmxkIn0` will send a payload of `{"hello":"world"}` to the configured sinks.

## Namespacing Method

Honeypot supports two ways of namespacing pixel payloads: `arbitrary` and `named`.

### Arbitrary Pixels

Any pixels sent to the configured pixel path route are considered `arbitrary`. These payloads **are not validated**, and all end up in the same namespace titled `honeypot.pixel.arbitrary`.

:::info Yo
Since the `arbitrary` namespace is basically a catchall, it should be used sparingly.
:::

### Named Pixels

Any pixels sent to a schema-specific pixel path are **namespaced and validated according to the associated schema**.

This simply means that if Honeypot is configured with a pixel path of `/pxl` (the default), all requests to `/pxl/io.silverton/someschema/v1.0.json` will be validated and namespaced according to the contents of the `io.silverton/someschema/v1.0.json` schema.

:::info Pro tip
Named pixels are the better way to go. Especially if the payloads are base64 encoded so properties can have non-string types.
:::


## Validation Method

:::danger Please Note
Honeypot **will attempt to validate** incoming pixel-based payloads, but **since type information cannot be passed via query parameters, the `type` for all properties should be `string`.**

**Any non-string properties within the associated schema will fail validation.**
:::


## Sample Pixel Configuration

```
inputs:
  pixel:
    enabled: true
    path: /pxl
```
