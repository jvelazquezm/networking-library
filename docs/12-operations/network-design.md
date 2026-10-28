---
title: "Network design and high availability"
description: "Designing networks that scale and survive failures: hierarchy, modularity, redundancy, failure domains, capacity planning and documentation."
sidebar_position: 6
---

# Network design and high availability

**Level:** Intermediate · **Section:** [Network Operations and Assurance](./index.md)

## Overview

Good designs are simple, modular and predictable. Hierarchical campus models (core, distribution, access or collapsed core), spine-leaf data centres and well-defined WAN edges limit failure domains. Redundancy must be designed end to end — links, devices, power, control planes and people — and validated with failure testing. Address plans, naming and documentation make the design operable.

## Key concepts

- Two-tier, three-tier and spine-leaf designs
- Modularity and failure domains
- Redundancy and single points of failure
- Stateful switchover and in-service upgrades
- Capacity planning
- Address and naming plans
- Documentation and diagrams

## Before you start

- [First hop redundancy: VRRP, HSRP and GLBP](../04-routing/first-hop-redundancy.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 52: LAN architectures](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)
- *Top-Down Network Design* — Priscilla Oppenheimer (Paid)

## Hands-on lab

Design the network for a fictional three-site company: topology, IP plan, routing design and a failure analysis of every single component.

## Related topics

- [Active monitoring: IP SLA, TWAMP and STAMP](./active-monitoring.md)
- [Packet capture and port mirroring](./packet-capture.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
