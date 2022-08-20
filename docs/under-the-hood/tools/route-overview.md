---
sidebar_position: 6
---

# Route Overview

Buz ships with a `/routes` endpoint for a high-level overview of how all routes have been configured.

:::tip Heads up
Route overview responses look like the following:

```
{
  "healthPath": "/health",
  "statsPath": "/stats",
  "routeOverviewPath": "/routes",
  "configOverviewPath": "/config",
  "cloudeventsPath": "/cloudevent",
  "genericPath": "/generic",
  "webhookPath": "/hook",
  "pixelPath": "/pxl",
  "snowplowStandardGetPath": "/i",
  "snowplowGetPath": "/plw/g",
  "snowplowStandardPostPath": "/com.snowplowanalytics.snowplow/tp2",
  "snowplowPostPath": "/plw/p",
  "snowplowStandardRedirectPath": "r/tp2",
  "snowplowRedirectPath": "/plw/r"
}

```
:::