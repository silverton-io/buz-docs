# MinIO

**🟢 Supported**

The `minio` cache backend uses schemas stored within [minio](https://min.io/) to back onboard schema registry.


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
