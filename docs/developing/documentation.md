---
sidebar_position: 1
slug: documentation-site
---

# Documentation Site

The following is a guide to quickly getting up and running with this [Docusaurus](https://docusaurus.io/)-based docs site.

## Prerequisites

:::danger Prerequisites
You will need these:

- [yarn](https://yarnpkg.com/)
:::


## Clone the repo

    git clone git@github.com:silverton-io/buz-docs.git


## Installation

**After `cd`ing into the `buz-docs` directory you just cloned, run:**

    yarn


## Run docs site locally

**To build (and auto-reload) the docs site:**

    yarn start


## Deploying documentation

The docs site is auto-deployed using [Github Actions](https://github.com/silverton-io/buz-docs/blob/main/.github/workflows/deploy-docs.yml).


## Where to go next

- Pick up an issue from [github](https://github.com/silverton-io/buz/issues) and cut your first PR.
- [Deploy Buz](/production-deployment/gcp) to a production environment.
- Play around with the [Buz documentation](/developing/documentation-site).
- Read about the [general philosophy](/introduction/philosophy) of Buz.
