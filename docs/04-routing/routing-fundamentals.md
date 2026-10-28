---
title: "Routing fundamentals and route selection"
description: "The routing table, longest prefix match, administrative distance, metrics, ECMP and the RIB/FIB split."
sidebar_position: 1
---

# Routing fundamentals and route selection

**Level:** Beginner · **Section:** [IP Routing](./index.md)

## Overview

A router forwards each packet by looking up its destination in the routing table and choosing the most specific matching prefix. When several sources offer the same prefix, administrative distance (or route preference) picks the most trusted source, and the protocol's metric picks the best path within it. The control plane builds the RIB; the data plane forwards from a FIB optimised for speed.

:::info Vendor notes
Cisco calls the trust value 'administrative distance'; Juniper calls it 'route preference'. The default values differ between vendors.
:::

## Key concepts

- Connected, local, static and dynamic routes
- Longest prefix match
- Administrative distance / route preference
- Metrics and equal-cost multipath (ECMP)
- RIB vs FIB, CEF-style forwarding
- Recursive lookups and next hops

## Before you start

- [Subnetting, VLSM and supernetting](../01-fundamentals/subnetting.md)

## Standards and specifications

- [RFC 1812 — Requirements for IP Version 4 Routers](https://www.rfc-editor.org/rfc/rfc1812)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 11: Routing fundamentals](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |
| [Kurose & Ross — companion site, interactive problems and Wireshark labs](https://gaia.cs.umass.edu/kurose_ross/) | Exercises | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)

## Hands-on lab

Give a router overlapping routes from different sources and predict, then verify, which one is installed for several destinations.

## Related topics

- [Static routing](./static-routing.md)
- [Dynamic routing concepts and RIP](./dynamic-routing-and-rip.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
