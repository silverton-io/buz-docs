---
sidebar_position: 1
title: Lambda
description: Deploy Buz, the open-source serverless event tracking system, to production in minutes with AWS Lambda.
---

# Deploy Buz to AWS Lambda using Terraform

**Estimated time: 3 minutes**


## Overview

The easiest and most cost-effective way to deploy Buz on AWS is via **[Lambda](https://aws.amazon.com/lambda/)**.

The following is a guide to doing so with Terraform. It sets up the following resources:

* **1 Lambda function for running serverless Buz**
* **1 Cloudfront distribution for mapping lambda to a pretty DNS name**
* **1 S3 bucket for schemas**
* **1 S3 bucket for valid and invalid events**
* **1 ECR repository for hosting Buz artifacts**
* **2 Kinesis Firehose delivery streams for sending [dynamically-partitioned events](https://docs.aws.amazon.com/firehose/latest/dev/dynamic-partitioning.html) to S3**

The deployment also sets up the appropriate IAM config.


:::warning Local Prerequisites
You will need the following locally to terraform Buz:
- [terraform](https://www.terraform.io/downloads)
- [aws](https://aws.amazon.com/cli/) cli
- [docker](https://www.docker.com/)
:::

:::warning AWS Prerequisites
You will need the following AWS resources:
- A Route53 [hosted zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html)
- A Certificate Manager [certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) for the intended domain/subdomain
:::


## Deploy

## 1. Clone Buz and navigate to the AWS Lambda deployment dir

```
git clone git@github.com:silverton-io/buz.git && cd buz/deploy/terraform/aws/lambda/
```

## 2. Authenticate the Docker cli to your default registry

```
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
```

(More info can be found here: https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)

## 3. Create and Populate a tfvars file

```
touch terraform.tfvars
```

**Sample Contents:**
```
system = "buz"
env = "prod"
buz_domain = "buz.yourdomain.com"
events_bucket_name = "events"
schema_bucket_name = "schemas"
certificate_arn = "arn:aws:acm:your_certificate_arn"
```

## 4. Apply

```
terraform apply
```

**If all goes well the terraform output will be something like the following:**

```
buz_cloudfront_url = "cu3mw22lqz3z0.cloudfront.net"
buz_function_url = "https://aasdfghjklasdfjklgqwertyuiop.lambda-url.us-east-1.on.aws/"
buz_version = "v0.12.8"
events_bucket = "buz-dev-events"
invalid_stream = "buz-dev-invalid"
schema_bucket = "buz-dev-schemas"
valid_stream = "buz-dev-valid"
```

## 5.
