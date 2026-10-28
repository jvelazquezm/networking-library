---
title: "OSPF"
description: "Link-state routing with OSPFv2 and OSPFv3: neighbours, DR/BDR, LSAs, areas, area types and summarisation."
sidebar_position: 5
---

# OSPF

**Level:** Beginner · **Section:** [IP Routing](./index.md)

## Overview

OSPF floods link-state advertisements so every router in an area has the same map, then runs Dijkstra's algorithm to build shortest-path trees. Single-area OSPF is CCNA material: neighbours, network types, DR/BDR election, cost. At the professional level you design multi-area networks, understand every LSA type, use stub and NSSA areas to control flooding and summarise at area borders. OSPFv3 brings the same design to IPv6.

## Key concepts

- Router ID, hello and dead timers
- Neighbour states and adjacencies
- Network types and DR/BDR election
- Cost and reference bandwidth
- LSA types and the LSDB
- Areas, ABRs and ASBRs
- Stub, totally stubby and NSSA areas
- OSPFv3 and address families

## Before you start

- [Dynamic routing concepts and RIP](dynamic-routing-and-rip.md)

## Standards and specifications

- [RFC 2328 — OSPF Version 2](https://www.rfc-editor.org/rfc/rfc2328)
- [RFC 5340 — OSPF for IPv6](https://www.rfc-editor.org/rfc/rfc5340)
- [RFC 3101 — OSPF Not-So-Stubby Area (NSSA)](https://www.rfc-editor.org/rfc/rfc3101)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 26–28: OSPF](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [FRRouting documentation](https://docs.frrouting.org/) | Docs | Intermediate | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)
- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (Paid)

## Hands-on lab

Build a three-area OSPF network with a stub area and an NSSA in Containerlab, inspect the LSDB in each area and summarise at the ABRs.

## Related topics

- [Dynamic routing concepts and RIP](./dynamic-routing-and-rip.md)
- [EIGRP](./eigrp.md)
- [IS-IS](./is-is.md)
- [BGP fundamentals](./bgp-fundamentals.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
