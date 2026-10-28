---
title: "Model-driven telemetry and operations: gNMI, gNOI and gRPC"
description: "Streaming state from devices with gNMI subscriptions, operating them with gNOI, and building a telemetry pipeline."
sidebar_position: 8
---

# Model-driven telemetry and operations: gNMI, gNOI and gRPC

**Level:** Intermediate · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Instead of polling every few minutes, devices can stream YANG-modelled data as it changes or at sub-second intervals. gNMI (over gRPC) handles configuration and subscriptions; gNOI provides operational RPCs such as reboots, certificate management and file transfer. Collectors such as gNMIc or Telegraf feed time-series databases for dashboards and automation.

## Key concepts

- Push vs pull
- gRPC and Protocol Buffers
- gNMI Get, Set and Subscribe
- Subscription modes: sample, on-change
- gNOI services
- Collectors and pipelines

## Before you start

- [YANG, NETCONF and RESTCONF](yang-netconf-restconf.md)
- [Observability stack: Prometheus and Grafana](../12-operations/observability-stack.md)

## Standards and specifications

- [gNMI specification (OpenConfig)](https://github.com/openconfig/reference/blob/master/rpc/gnmi/gnmi-specification.md)
- [gNOI — gRPC Network Operations Interface](https://github.com/openconfig/gnoi)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [gNMIc — gNMI client and collector](https://gnmic.openconfig.net/) | Tool | Intermediate | Free |
| [OpenConfig](https://www.openconfig.net/) | Models | Intermediate | Free |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Stream interface counters from SR Linux or cEOS with gNMIc into Prometheus and graph them in Grafana.

## Related topics

- [Templating and source of truth: Jinja2 and NetBox](./templating-and-source-of-truth.md)
- [YANG, NETCONF and RESTCONF](./yang-netconf-restconf.md)
- [On-box automation: EEM and on-device Python](./on-box-automation.md)
- [NetDevOps, CI/CD and digital twins](./netdevops.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
