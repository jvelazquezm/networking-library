---
title: "NetDevOps, CI/CD and digital twins"
description: "Software engineering practices for networks: Git workflows, testing, virtual labs, pre-change validation and pipelines."
sidebar_position: 10
---

# NetDevOps, CI/CD and digital twins

**Level:** Advanced · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

NetDevOps treats network changes like software releases: every change lives in Git, is reviewed, is tested automatically in a virtual lab or digital twin, and is deployed by a pipeline with verification and rollback. Tools such as Containerlab, Batfish and pyATS-style testing frameworks make it practical even for small teams.

## Key concepts

- Git branching and code review
- Linting and unit tests for configs
- Digital twins and virtual labs
- Pre-change validation (Batfish)
- CI/CD pipelines
- Post-change verification and rollback

## Before you start

- [Templating and source of truth: Jinja2 and NetBox](templating-and-source-of-truth.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |
| [Batfish — configuration analysis](https://www.batfish.org/) | Tool | Advanced | Free |
| [pyATS documentation](https://developer.cisco.com/docs/pyats/) | Docs | Advanced | Free |

## Bibliography

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)

## Hands-on lab

Build a GitHub Actions pipeline that starts a Containerlab topology, deploys a proposed change and runs Batfish and reachability tests on every pull request.

## Related topics

- [Model-driven telemetry and operations: gNMI, gNOI and gRPC](./model-driven-telemetry.md)
- [On-box automation: EEM and on-device Python](./on-box-automation.md)
- [AI in network operations](./ai-for-networks.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
