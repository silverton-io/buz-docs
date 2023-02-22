# GCS

**🟢 Supported**

The `gcs` cache backend uses schemas stored in gcs to back the in-memory cache.

## Sample GCS Cache Backend Configuration

```
registry:
  backend:
    type: gcs                 # The backend type
    bucket: buz-schemas  # The gcs bucket containing schemas
    path: /                   # The path to consider as root
```
