# MinIO

**🟢 Supported**

The `minio` backend uses schemas stored within [minio](https://min.io/) to back the onboard schema cache.


## Sample Minio Cache Backend Configuration

```
registry:
  backend:
    type: minio
    minioEndpoint: localhost:9000
    accessKeyId: SOME-ACCESS-KEY-ID
    secretAccessKey: SOME-SECRET-ACCESS-KEY
    bucket: buz-schemas
    path: /
```
