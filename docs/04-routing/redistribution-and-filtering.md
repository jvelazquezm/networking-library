---
title: "Redistribution, route filtering and route maps"
description: "Moving routes between protocols safely, and controlling which routes are accepted or advertised."
sidebar_position: 9
---

# Redistribution, route filtering and route maps

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

Real networks run several routing protocols and must exchange routes between them. Redistribution is powerful and dangerous: mutual redistribution at several points can create loops and suboptimal routing. Prefix lists, route maps (Cisco) or routing policies (Junos, SR OS), tags and distance manipulation keep it under control.

## Key concepts

- Redistribution between IGPs and BGP
- Seed metrics
- Prefix lists and access lists
- Route maps and routing policies
- Route tags to prevent loops
- Distribute lists and administrative distance tuning

## Before you start

- [OSPF](ospf.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (Paid)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)

## Hands-on lab

Mutually redistribute between OSPF and EIGRP (or OSPF and IS-IS) at two points, reproduce a routing loop, then fix it with tags.

## Related topics

- [BGP fundamentals](./bgp-fundamentals.md)
- [Advanced BGP](./bgp-advanced.md)
- [Policy-based routing](./policy-based-routing.md)
- [VRF and VRF-Lite](./vrf.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
