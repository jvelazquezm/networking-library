---
title: "Service provider architecture, peering and IXPs"
description: "How an operator network is organised \u2014 access, aggregation, core, edge, data centres \u2014 and how operators interconnect."
sidebar_position: 1
---

# Service provider architecture, peering and IXPs

**Level:** Intermediate · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

An operator network is layered: access networks reach customers, aggregation concentrates them, a fast core carries traffic between regions and provider edge routers deliver services. Operators interconnect through private peering, Internet Exchange Points and paid transit, governed by commercial and routing policy. Fixed and mobile networks increasingly share the same converged IP/MPLS or SR transport.

## Key concepts

- Access, aggregation, core and edge
- PE, P and CE roles
- Points of presence and data centres
- Peering, transit and IXPs
- Route servers and peering policy
- Converged fixed-mobile transport

## Before you start

- [BGP fundamentals](../04-routing/bgp-fundamentals.md)

## Standards and specifications

- [RFC 7947 — Internet Exchange BGP Route Server](https://www.rfc-editor.org/rfc/rfc7947)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Course | Beginner | Free |
| [PeeringDB](https://www.peeringdb.com/) | Database | Intermediate | Free |
| [Euro-IX — IXP resources](https://www.euro-ix.net/) | Community | Intermediate | Free |
| [NANOG — talks (YouTube)](https://www.youtube.com/@TheNANOG) | Video | Intermediate | Free |

## Bibliography

- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (Paid)
- *Internet Routing Architectures* — Sam Halabi (Paid)

## Hands-on lab

Look up your ISP on PeeringDB and bgp.he.net, list the IXPs where it peers and identify its upstream transit providers.

## Related topics

- [MPLS and LDP](./mpls.md)
- [MPLS L3VPN, 6PE and 6VPE](./mpls-l3vpn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
