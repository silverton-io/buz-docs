---
sidebar_position: 5
---

# Config

Buz ships with a `/config` endpoint that responds with what you might expect: `a json representation of how the system is currently configured`

:::warning It can (and should) be disabled in production
**To disable via the config file:**

```
app:
  enableConfigRoute: false <----------- me me me look at me
```
:::





:::tip Heads up
Config responses look like the following. **Again, this should be disabled in production!!!**

```
{
  "app": {
    "version": "x.x.dev",
    "name": "buz-bootstrap",
    "env": "development",
    "port": "8080",
    "trackerDomain": "bootstrap.silverton.io",
    "enableConfigRoute": true
  },
  "middleware": {
    "timeout": { "enabled": false, "ms": 2000 },
    "rateLimiter": { "enabled": false, "period": "S", "limit": 10 },
    "identity": {
      "cookie": {
        "enabled": true,
        "name": "nuid",
        "secure": true,
        "ttlDays": 365,
        "domain": "",
        "path": "/",
        "sameSite": "Lax"
      },
      "fallback": "00000000-0000-4000-A000-000000000000"
    },
    "cors": {
      "enabled": true,
      "allowOrigin": ["*"],
      "allowCredentials": true,
      "allowMethods": ["POST", "OPTIONS", "GET"],
      "maxAge": 86400
    },
    "requestLogger": { "enabled": true },
    "yeet": { "enabled": false }
  },
  "inputs": {
    "snowplow": {
      "enabled": true,
      "standardRoutesEnabled": true,
      "openRedirectsEnabled": true,
      "getPath": "/plw/g",
      "postPath": "/plw/p",
      "redirectPath": "/plw/r"
    },
    "cloudevents": { "enabled": true, "path": "/cloudevents" },
    "selfDescribing": {
      "enabled": true,
      "path": "/self-describing",
      "contexts": { "rootKey": "contexts" },
      "payload": {
        "rootKey": "payload",
        "schemaKey": "schema",
        "dataKey": "data"
      }
    },
    "webhook": { "enabled": true, "path": "/webhook" },
    "pixel": { "enabled": true, "path": "/pixel" }
  },
  "registry": {
    "backend": { "type": "fs", "path": "./schemas/" },
    "ttlSeconds": 300,
    "maxSizeBytes": 104857600,
    "purge": { "enabled": true, "path": "/c/purge" },
    "http": { "enabled": true }
  },
  "manifold": {},
  "sinks": [
    { "name": "easyfeedback", "type": "stdout", "deliveryRequired": true }
  ],
  "squawkBox": { "enabled": true },
  "privacy": {
    "anonymize": {
      "device": { "ip": false, "useragent": false },
      "user": { "id": false }
    }
  },
  "tele": { "enabled": true }
}
```
:::