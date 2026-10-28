---
title: "Streaming telemetry and gNMI"
description: "Replacing polling with push: model-driven telemetry over gNMI and how to build a modern collection pipeline."
sidebar_position: 3
---

# Streaming telemetry and gNMI

**Level:** Advanced · **Section:** [Automation and Programmability](./index.md)

## Overview

Replacing polling with push: model-driven telemetry over gNMI and how to build a modern collection pipeline.

## Key concepts

- Push vs pull
- gNMI subscribe modes
- Collectors (gnmic, Telegraf)
- Time-series storage and dashboards

## Before you start

- [YANG data models](yang-data-models.md)

## Standards and specifications

- [gNMI specification (OpenConfig)](https://github.com/openconfig/reference/blob/master/rpc/gnmi/gnmi-specification.md)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [OpenConfig](https://www.openconfig.net/) | Models | Intermediate | Free |

## Hands-on lab

Stream interface counters with gnmic into Prometheus and graph them in Grafana.

## Related topics

- [YANG data models](./yang-data-models.md)
- [NETCONF and RESTCONF](./netconf-restconf.md)
- [Automation tools: Python, Ansible and friends](./automation-tools.md)
- [NetDevOps: testing and CI/CD](./netdevops.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
