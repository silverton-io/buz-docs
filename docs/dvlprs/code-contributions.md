---
sidebar_position: 3
slug: contributing-code-to-buz
title: Code
---

## Contributing Code to Buz

The following is a guide to quickly getting up and running with Buz for local development.

## Prerequisites

:::danger Required for development
- [go 1.19](https://go.dev/blog/go1.19)
:::


:::info Niceties
- [docker](https://docs.docker.com/get-docker/)
- [docker compose](https://docs.docker.com/compose/)
:::



## Clone the repo

    git clone git@github.com:silverton-io/buz.git


## Bootstrap


**After `cd`ing into the `buz` directory you just cloned, run:**

    make bootstrap

**You should now have a local `config.yml` file and see console output like the following:**

```
...
...
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing custom snowplow routes"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing custom open redirect route"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing generic routes"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing cloudevents routes"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing webhook routes"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing pixel routes"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🟢 initializing squawkbox routes"}
{"level":"info","time":"2022-09-24T21:52:35-04:00","message":"🐝🐝🐝 buz is running 🐝🐝🐝"}
```

## Tests

**To run `go test` and open up a browser-based coverage report run:**

    make test-cover-pkg


## Bootstrap destinations

:::info Heads up

There's a slim chance you will need all of these. It is simply a matter of convenience.

:::


**To fire up a bunch of destination containers via `docker-compose` run:**

    make bootstrap-destinations



3. [psql](https://www.postgresql.org/docs/current/app-psql.html)
4. [rpk](https://docs.redpanda.com/docs/quickstart/)
5. [mysql shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html)
6. [mongosh](https://www.mongodb.com/docs/mongodb-shell/)
. [clickhouse](https://clickhouse.com/docs/en/getting-started/install)


## General Help

**To view all `make` options run:**

    make help

**You should see something like the following:**

```
$ make help

Usage:
  make
  run              Run buz locally
  bootstrap        Bootstrap development environment
  bootstrap-destinations  Bootstrap various containerized database/stream systems
  build-docker     Build local buz image
  buildx-deploy    Build multi-platform buz image and push it to edge repo
  lint             Lint go code
  test             Run tests against pkg
  test-cover-pkg   Run tests against pkg, output test profile, and open profile in browser
  help             Display makefile help
```

## Where to go next

- Pick up an issue from [github](https://github.com/silverton-io/buz/issues) and cut your first PR.
- [Deploy Buz](/production-deployment/gcp/console) to a production environment.
- Play around with the [Buz documentation](/developing/documentation-site).
- Read about the [general philosophy](/introduction/philosophy) of Buz.
