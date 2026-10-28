---
title: "Policy-based routing"
description: "Forwarding packets based on criteria other than the destination: source, application or DSCP."
sidebar_position: 10
---

# Policy-based routing

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

Policy-based routing overrides the routing table for selected traffic — for example sending guest traffic out of a cheaper Internet link or steering a specific application through a firewall. It is simple to configure but easy to forget, so it must be documented and combined with tracking so that it fails over when the chosen path dies.

## Key concepts

- Match criteria: source, destination, protocol, DSCP
- Setting next hop or VRF
- Local vs transit PBR
- Tracking and failover
- PBR vs SD-WAN application routing

## Before you start

- [Static routing](static-routing.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (Paid)

## Hands-on lab

Use PBR to send traffic from one subnet through a second ISP while the rest follows the default route, with tracking for failover.

## Related topics

- [Advanced BGP](./bgp-advanced.md)
- [Redistribution, route filtering and route maps](./redistribution-and-filtering.md)
- [VRF and VRF-Lite](./vrf.md)
- [First hop redundancy: VRRP, HSRP and GLBP](./first-hop-redundancy.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
