---
title: "Templating and source of truth: Jinja2 and NetBox"
description: "Generating configurations from data with Jinja2, and keeping intended state in a source of truth such as NetBox."
sidebar_position: 6
---

# Templating and source of truth: Jinja2 and NetBox

**Level:** Intermediate · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Scalable automation separates data from configuration. A source of truth like NetBox stores devices, interfaces, IP addresses, VLANs and circuits; Jinja2 templates turn that data into vendor configurations; pipelines push them and check for drift. This is the pattern behind most mature network automation teams.

## Key concepts

- Intended vs actual state
- NetBox data model
- NetBox APIs and plugins
- Jinja2 syntax: variables, loops, filters
- Per-vendor templates
- Drift detection

## Before you start

- [Python for network engineers](python-for-networks.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [NetBox documentation](https://netboxlabs.com/docs/netbox/) | Docs | Intermediate | Free |
| [Jinja2 template designer documentation](https://jinja.palletsprojects.com/en/stable/templates/) | Docs | Intermediate | Free |
| [NetBox demo instance](https://demo.netbox.dev/) | Demo | Intermediate | Free |

## Bibliography

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)

## Hands-on lab

Model a small fabric in NetBox and generate device configurations for it with Jinja2 using the NetBox API.

## Related topics

- [Configuration management: Ansible, Terraform, Puppet and Chef](./configuration-management.md)
- [Python for network engineers](./python-for-networks.md)
- [YANG, NETCONF and RESTCONF](./yang-netconf-restconf.md)
- [Model-driven telemetry and operations: gNMI, gNOI and gRPC](./model-driven-telemetry.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
