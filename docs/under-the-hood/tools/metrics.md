---
sidebar_position: 2
---

# Event-Level Metrics

Each Honeypot instance has an onboard metrics endpoint located at `/stats`.


:::tip Heads up
**Stats responses look like the following:**


```
{
  "collectorMeta": {
    "version": "v0.11.10",
    "name": "silverton",
    "instanceId": "7d3a2bca-5300-4410-b2cc-5d87bb90d093",
    "startTime": "2022-08-17T18:15:53.778068427Z",
    "trackerDomain": "somewheres.io",
    "cookieDomain": ".somewheres.io"
  },
  "stats": {
    "invalid": {
      "cloudevents": {},
      "generic": {},
      "pixel": {},
      "snowplow": {},
      "webhook": {}
    },
    "valid": {
      "cloudevents": {},
      "generic": {
        "honeypot.internal.tele.beat": 75555,
        "honeypot.internal.tele.shutdown": 56,
        "honeypot.internal.tele.startup": 43
      },
      "pixel": {},
      "snowplow": {},
      "webhook": { "hook.repository": 606 }
    }
  }
}

```
:::