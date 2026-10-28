---
title: "Routing fundamentals"
description: "How a router decides where to send a packet: the routing table, longest prefix match, static routes and the difference between the RIB and the FIB."
sidebar_position: 1
---

# Routing fundamentals

**Level:** Beginner · **Section:** [Routing and Internet Architecture](./index.md)

## Overview

How a router decides where to send a packet: the routing table, longest prefix match, static routes and the difference between the RIB and the FIB.

## Key concepts

- Longest prefix match
- Static and default routes
- Administrative distance and metrics
- RIB vs FIB
- Distance vector vs link state

## Before you start

- [IPv4 addressing and subnetting](../01-fundamentals/ipv4-addressing.md)

## Standards and specifications

- [RFC 1812 — Requirements for IP Version 4 Routers](https://www.rfc-editor.org/rfc/rfc1812)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Book (open) | Beginner | Free |
| [Kurose & Ross — companion site and interactive problems](https://gaia.cs.umass.edu/kurose_ross/) | Exercises | Beginner | Free |

## Hands-on lab

Build three Linux routers with static routes, then break one route and debug with traceroute.

## Related topics

- [OSPF](./ospf.md)
- [IS-IS](./is-is.md)
- [BGP](./bgp.md)
- [MPLS and L3VPN](./mpls.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
