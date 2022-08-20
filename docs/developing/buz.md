---
sidebar_position: 2
slug: buz-core
---

# Buz Core

The following is a guide to quickly getting up and running with Buz for local development.

## Prerequisites

:::danger Will need
You will need these:

1. [go 1.19](https://go.dev/blog/go1.19)
2. [docker](https://docs.docker.com/get-docker/)
3. [docker compose](https://docs.docker.com/compose/)
:::


:::info Nice-to-have

And these (at minimum) will make your life better:

1. [psql](https://www.postgresql.org/docs/current/app-psql.html)
2. [rpk](https://docs.redpanda.com/docs/quickstart/)
3. [mysql shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html)
4. [mongosh](https://www.mongodb.com/docs/mongodb-shell/)
5. [clickhouse](https://clickhouse.com/docs/en/getting-started/install)
:::



## Clone the repo

    git clone git@github.com:silverton-io/buz.git


## Bootstrap


**After `cd`ing into the `buz` directory you just cloned, run:**

    make bootstrap

**You should now have a local `config.yml` file and see console output like the following:**

```
...
[GIN-debug] GET    /sqwk/sp                  --> github.com/silverton-io/buz/pkg/handler.SquawkboxHandler.func1 (4 handlers)
...
{"message":"🍯🍯🍯 buz is running! 🍯🍯🍯"}
```


## Bootstrap destinations

:::info Heads up

There's a slim chance you will need all of these. It is simply a matter of convenience.

:::


**To fire up a bunch of destination containers via `docker-compose` run:**

    make bootstrap-destinations


## Tests

**To run `go test` and open up a browser-based coverage report run:**

    make test-cover-pkg


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
  test-cover-pkg   Run tests against pkg, output test profile, and open profile in browser
  help             Display makefile help
```

## Where to go next

- Pick up an issue from [github](https://github.com/silverton-io/buz/issues) and cut your first PR.
- [Deploy Buz](/production-deployment/gcp) to a production environment.
- Play around with the [Buz documentation](/developing/documentation-site).
- Read about the [general philosophy](/introduction/philosophy) of Buz.
