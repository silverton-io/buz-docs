# GCS

**🟢 Supported**

The `gcs` backend uses schemas stored in gcs to back onboard schema registry.

## Sample GCS Cache Backend Configuration

```
registry:
  backend:
    type: gcs                 # The backend type
    bucket: buz-schemas  # The gcs bucket containing schemas
    path: /                   # The path to consider as root
```
