---
sidebar_position: 1
title: Overview
description: Deployment Overview
---

Since Buz minimizes event tracking infrastructure it can be deployed quickly in unique ways.


**Terraform is provided for two deployment patterns on AWS and GCP:**

- **[Lambda -> Kinesis Firehose -> Dynamically-partitioned S3](/deploying/aws/lambda)** on AWS
- **[Cloud Run -> Pub/Sub -> BigQuery](/deploying/gcp/cloud_run)** on GCP

This terraform is meant to serve as an example but could just as easily be run in production (ask us how we know..)


## Deployments

| Deployment | Method | Supported? | Maintainer | Details |
| --- | --- | --- | --- | --- |
| AWS Lambda | Container image | Yes ✅ | 🐝 | **[Terraformed end-to-end](https://github.com/silverton-io/buz/tree/main/deploy/terraform/aws/lambda)** |
| AWS ECS | Container image | Yes ✅ | 🐝 | **[X-arch container images](https://github.com/silverton-io/buz/pkgs/container/buz)** |
| GCP Cloud Run | Container image | Yes ✅ | 🐝 | **[Terraformed end-to-end](https://github.com/silverton-io/buz/tree/main/deploy/terraform/gcp/cloud_run)** |
| K8s | Container image | Yes ✅ | 🐝 | **[X-arch container images](https://github.com/silverton-io/buz/pkgs/container/buz)** | 
| Bare metal | Binary | Yes ✅ | 🐝 | **[X-arch binaries](https://github.com/silverton-io/buz/releases/)**
| **[Fly.io](https://fly.io/)** | Container image | Not yet ⚠️ | N/A| This could be you. | 
| Azure function | Container image | Not yet ⚠️ | N/A| This could be you. | 
| **[Knative](https://knative.dev/docs/)** | Container image | Not yet ⚠️ | N/A| This could be you. | 
