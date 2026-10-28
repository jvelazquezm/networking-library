---
title: "IP Routing"
description: "Route selection, static and dynamic routing, OSPF, IS-IS, EIGRP, BGP, redistribution, VRFs, FHRPs, fast convergence and multicast."
sidebar_position: 0
sidebar_label: Overview
---

# 04 · IP Routing

How packets cross networks: how routers choose paths, how interior gateway protocols build their view of a network, how BGP connects networks to each other, and the tools — policy, VRFs, redundancy, fast convergence and multicast — that turn a working network into a production one.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Routing fundamentals and route selection](./routing-fundamentals.md) | Beginner | The routing table, longest prefix match, administrative distance, metrics, ECMP and the RIB/FIB split. |
| [Static routing](./static-routing.md) | Beginner | IPv4 and IPv6 static routes: network, host, default and floating static routes. |
| [Dynamic routing concepts and RIP](./dynamic-routing-and-rip.md) | Beginner | Why dynamic routing, IGP vs EGP, distance vector vs link state vs path vector, and RIP as the classic distance vector protocol. |
| [EIGRP](./eigrp.md) | Intermediate | Cisco's advanced distance-vector protocol: DUAL, successors and feasible successors, composite metric and stub routing. |
| [OSPF](./ospf.md) | Beginner | Link-state routing with OSPFv2 and OSPFv3: neighbours, DR/BDR, LSAs, areas, area types and summarisation. |
| [IS-IS](./is-is.md) | Intermediate | The link-state IGP of service providers and data centres: levels, TLVs, and why it underpins Segment Routing. |
| [BGP fundamentals](./bgp-fundamentals.md) | Intermediate | The protocol that connects the Internet: sessions, eBGP vs iBGP, path attributes, best-path selection and basic policy. |
| [Advanced BGP](./bgp-advanced.md) | Advanced | Policy at scale: communities, route reflectors, confederations, Add-Path, multipath, dampening, BGP-based traffic engineering and Internet-scale operations. |
| [Redistribution, route filtering and route maps](./redistribution-and-filtering.md) | Intermediate | Moving routes between protocols safely, and controlling which routes are accepted or advertised. |
| [Policy-based routing](./policy-based-routing.md) | Intermediate | Forwarding packets based on criteria other than the destination: source, application or DSCP. |
| [VRF and VRF-Lite](./vrf.md) | Intermediate | Multiple independent routing tables on one router for segmentation and multi-tenancy. |
| [First hop redundancy: VRRP, HSRP and GLBP](./first-hop-redundancy.md) | Beginner | Keeping the default gateway available when a router fails, with standard VRRP and Cisco's HSRP and GLBP. |
| [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](./fast-convergence.md) | Advanced | Detecting failures in milliseconds and repairing paths before the routing protocol reconverges. |
| [IP multicast: IGMP, PIM, SSM, MSDP and BIER](./multicast.md) | Intermediate | Delivering one stream to many receivers: group management, multicast distribution trees and inter-domain multicast. |

## Suggested reading order

1. [Routing fundamentals and route selection](./routing-fundamentals.md) — Beginner
2. [Static routing](./static-routing.md) — Beginner
3. [Dynamic routing concepts and RIP](./dynamic-routing-and-rip.md) — Beginner
4. [OSPF](./ospf.md) — Beginner
5. [First hop redundancy: VRRP, HSRP and GLBP](./first-hop-redundancy.md) — Beginner
6. [EIGRP](./eigrp.md) — Intermediate
7. [IS-IS](./is-is.md) — Intermediate
8. [BGP fundamentals](./bgp-fundamentals.md) — Intermediate
9. [Redistribution, route filtering and route maps](./redistribution-and-filtering.md) — Intermediate
10. [Policy-based routing](./policy-based-routing.md) — Intermediate
11. [VRF and VRF-Lite](./vrf.md) — Intermediate
12. [IP multicast: IGMP, PIM, SSM, MSDP and BIER](./multicast.md) — Intermediate
13. [Advanced BGP](./bgp-advanced.md) — Advanced
14. [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](./fast-convergence.md) — Advanced

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
