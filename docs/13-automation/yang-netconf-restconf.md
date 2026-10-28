---
title: "YANG, NETCONF and RESTCONF"
description: "Model-driven management: YANG data models (IETF, OpenConfig, native), NETCONF transactions and RESTCONF over HTTP."
sidebar_position: 7
---

# YANG, NETCONF and RESTCONF

**Level:** Intermediate · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Model-driven programmability replaces screen-scraping with structured, validated data. YANG defines the schema of configuration and state; NETCONF manipulates it over SSH with datastores, locking and commits; RESTCONF exposes the same models over HTTP with JSON or XML. OpenConfig provides vendor-neutral models used by large operators.

## Key concepts

- YANG modules, containers, lists and leaves
- Config vs operational state
- IETF, OpenConfig and native models
- NETCONF datastores and operations
- Candidate configuration and confirmed commit
- RESTCONF resources
- Tooling: pyang, ncclient

## Before you start

- [Data formats: JSON, XML and YAML](data-formats.md)

## Standards and specifications

- [RFC 7950 — The YANG 1.1 Data Modeling Language](https://www.rfc-editor.org/rfc/rfc7950)
- [RFC 6241 — Network Configuration Protocol (NETCONF)](https://www.rfc-editor.org/rfc/rfc6241)
- [RFC 8040 — RESTCONF Protocol](https://www.rfc-editor.org/rfc/rfc8040)
- [RFC 8342 — Network Management Datastore Architecture (NMDA)](https://www.rfc-editor.org/rfc/rfc8342)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [OpenConfig](https://www.openconfig.net/) | Models | Intermediate | Free |
| [YANG Catalog](https://www.yangcatalog.org/) | Reference | Intermediate | Free |
| [ncclient documentation](https://ncclient.readthedocs.io/) | Docs | Intermediate | Free |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Labs | Intermediate | Free |

## Bibliography

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Explore the OpenConfig interfaces model with pyang, then read and change an interface on a lab device with ncclient and with RESTCONF.

## Related topics

- [Python for network engineers](./python-for-networks.md)
- [Templating and source of truth: Jinja2 and NetBox](./templating-and-source-of-truth.md)
- [Model-driven telemetry and operations: gNMI, gNOI and gRPC](./model-driven-telemetry.md)
- [On-box automation: EEM and on-device Python](./on-box-automation.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
