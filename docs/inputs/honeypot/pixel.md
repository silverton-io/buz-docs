---
sidebar_position: 3
---


# Pixel

**🟢 Supported**

## Collection Method

### Parameter Payloads

Honeypot supports collecting payloads via url query params.

This method of data collection has drawbacks such as [max uri lengths](https://stackoverflow.com/questions/812925/what-is-the-maximum-possible-length-of-a-query-string), but is extremely simple to get started with.


**For example** -> if `/pxl` is configured as a pixel input, submitting a `GET` request to `/pxl/?hello=world&userId=10` will send a payload of `{"hello": "world", "userId": "10"}` to the configured sinks. No sdk's necessary.

### Base64 Encoded Parameter Payloads

The Honeypot pixel input supports a "special" query param, `hbp`, by which b64 encoded payloads can be collected.

If Honeypot is configured with a pixel path of `/pxl` (the default), submitting a `GET` request to `/pxl?hbp=eyJoZWxsbyI6IndvcmxkIn0` will send a payload of `{"hello":"world"}` to the configured sinks.

## Namespacing Method

Honeypot supports two ways of namespacing pixel payloads: `arbitrary` and `named`.

### Arbitrary Pixels

Any requests sent to the configured root pixel path are considered `arbitrary`.

If Honeypot is configured with a pixel path of `/pxl` (the default), all requests to `/pxl` **will not be validated** and will be namespaced according to `honeypot.pixel.arbitrary`.

:::info Yo
Since this method is basically a catchall it should be used sparingly.
:::

### Named Pixels

Any requests sent to a schema-specific pixel path are **namespaced and validated according to the associated schema**.

If Honeypot is configured with a pixel path of `/pxl` (the default), all requests to `/pxl/io.silverton/someschema/v1.0.json` will be validated and namespaced according to the contents of the `io.silverton/someschema/v1.0.json` schema.

:::info Pro tip
Named pixels are the better way to go. Especially when payloads are base64 encoded so properties can have non-string types.
:::


## Validation Method

**Arbitrary pixels:**  Not validated and share the same namespace.

**Named pixels with string query params:** Validated according to the associated schema. *But all schema properties must be of type `string`* 👎.

**Named pixels with the `hbp` b64-encoded query param:** Validated according to the associated schema. *Schema properties can be of any type* 👍.

## Sample Pixel Configuration

```
inputs:
  pixel:
    enabled: true
    path: /pxl
```
