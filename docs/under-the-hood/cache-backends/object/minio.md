# MinIO

**🟢 Supported**

The `minio` cache backend uses schemas stored within [minio](https://min.io/) to back the in-memory cache.


## Sample Minio Cache Backend Configuration

```
schemaCache:
  backend:
    type: minio
    minioEndpoint: localhost:9000
    accessKeyId: SOME-ACCESS-KEY-ID
    secretAccessKey: SOME-SECRET-ACCESS-KEY
    bucket: honeypot-schemas
    path: /
```
