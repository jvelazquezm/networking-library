---
title: "Dynamic routing concepts and RIP"
description: "Why dynamic routing, IGP vs EGP, distance vector vs link state vs path vector, and RIP as the classic distance vector protocol."
sidebar_position: 3
---

# Dynamic routing concepts and RIP

**Level:** Beginner · **Section:** [IP Routing](./index.md)

## Overview

Dynamic routing protocols let routers discover paths and react to failures automatically. Distance vector protocols (RIP) share their routing tables with neighbours; link-state protocols (OSPF, IS-IS) share a map of the topology and each router computes its own shortest paths; path-vector BGP carries policy between networks. RIP is rarely deployed today but is the clearest way to learn distance-vector behaviour and loop-prevention mechanisms.

## Key concepts

- IGP vs EGP
- Distance vector, link state and path vector
- Convergence
- Split horizon, route poisoning and hold-down
- RIPv2 and RIPng
- Counting to infinity

## Before you start

- [Routing fundamentals and route selection](routing-fundamentals.md)

## Standards and specifications

- [RFC 2453 — RIP Version 2](https://www.rfc-editor.org/rfc/rfc2453)
- [RFC 2080 — RIPng for IPv6](https://www.rfc-editor.org/rfc/rfc2080)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 24–25: Dynamic routing; RIP and EIGRP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)

## Hands-on lab

Run RIPv2 between three FRRouting containers, break a link and watch the routing tables converge with debug output.

## Related topics

- [Routing fundamentals and route selection](./routing-fundamentals.md)
- [Static routing](./static-routing.md)
- [EIGRP](./eigrp.md)
- [OSPF](./ospf.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
