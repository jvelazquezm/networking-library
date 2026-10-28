---
title: "On-box automation: EEM and on-device Python"
description: "Automation that runs on the device itself: event-driven scripts, Cisco EEM, Junos event and commit scripts, and on-box Python."
sidebar_position: 9
---

# On-box automation: EEM and on-device Python

**Level:** Intermediate · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Some automation is best done locally: reacting to an interface flap, adding a check when someone commits a change, or collecting diagnostics at the moment of failure. Cisco's Embedded Event Manager and Guest Shell, Junos commit and event scripts, and Python on SR Linux, EOS and NX-OS all provide this. It complements, rather than replaces, off-box automation.

## Key concepts

- Event-driven automation
- Cisco EEM applets
- Guest Shell and on-box Python
- Junos commit, op and event scripts
- Agents on SR Linux and EOS
- When to choose on-box vs off-box

## Before you start

- [Python for network engineers](python-for-networks.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Write an EEM applet (or an SR Linux event handler) that logs and saves diagnostics whenever a specific interface goes down.

## Related topics

- [YANG, NETCONF and RESTCONF](./yang-netconf-restconf.md)
- [Model-driven telemetry and operations: gNMI, gNOI and gRPC](./model-driven-telemetry.md)
- [NetDevOps, CI/CD and digital twins](./netdevops.md)
- [AI in network operations](./ai-for-networks.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
