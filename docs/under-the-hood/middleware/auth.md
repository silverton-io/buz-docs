---
sidebar_position: 5
---

# Auth

**🟢 Supported**

The auth middleware protects all `input` routes and all `registry` routes using user-provided tokens. It expects a `Bearer` or `Basic` scheme within an `Authorization` header such as

**`Authorization: Bearer $YOUR-TOKEN`**

or

**`Authorization: Basic $YOUR-B64-ENCODED-USERNAME-AND-PASSWORD`**


## Sample Auth Middleware Configuration


```
auth:
enabled: false
tokens:
    - YnV6OmJ1enp6enp6eg== # basic
    - eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJidXoiLCJpYXQiOjE2ODE1MDg4MTMsImV4cCI6MTcxMzA0NDgxMywiYXVkIjoiYnV6LmRldiIsInN1YiI6ImJ1ekBidXouZGV2Iiwic3lzdGVtIjoiYnV6Iiwicm9sZSI6ImJ1eiIsInRvcGljIjoiYnV6In0.6I1iRZeYlw_lNWQr1EMJf3VcEMoWd9kPtmxIUMvUST0 # jwt
    - buzkKLfwI2bgKSAO6maJVol51rUsmM3bkdHzfZ5EgNyo9tyHPlU3zfA9Qacj7KVi # fake api key
```
