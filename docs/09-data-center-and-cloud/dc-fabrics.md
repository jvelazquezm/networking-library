---
title: "Data center fabrics: leaf-spine and BGP in the DC"
description: "Clos fabrics, ECMP, routed underlays with eBGP or IS-IS, and why data centres abandoned spanning tree."
sidebar_position: 4
---

# Data center fabrics: leaf-spine and BGP in the DC

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Modern data centres use leaf-spine (Clos) fabrics: every leaf connects to every spine, giving predictable latency and massive ECMP for east-west traffic. The underlay is routed — often eBGP with one AS per leaf, sometimes IS-IS or OSPF — so there is no spanning tree to block links. Unnumbered interfaces and automation keep large fabrics manageable.

## Key concepts

- Three-tier vs leaf-spine
- Clos and oversubscription
- ECMP and hashing
- eBGP underlay design and ASN schemes
- BGP unnumbered (RFC 8950)
- Super-spines and multi-pod designs
- Automation-first operations

## Before you start

- [BGP fundamentals](../04-routing/bgp-fundamentals.md)

## Standards and specifications

- [RFC 7938 — Use of BGP for Routing in Large-Scale Data Centers](https://www.rfc-editor.org/rfc/rfc7938)
- [RFC 8950 — Advertising IPv4 NLRI with an IPv6 Next Hop](https://www.rfc-editor.org/rfc/rfc8950)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [Arista — free cEOS-lab and vEOS-lab images (registration)](https://www.arista.com/en/support/software-download) | Lab images | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *Cloud Native Data Center Networking* — Dinesh Dutt (Paid)
- *BGP in the Data Center* — Dinesh Dutt (Paid)

## Hands-on lab

Build a 2-spine, 4-leaf fabric in Containerlab with eBGP unnumbered and verify ECMP from leaf to leaf.

## Related topics

- [Containers and container networking](./containers.md)
- [SDN and controller-based networking](./sdn.md)
- [VXLAN, Geneve and EVPN](./vxlan-evpn.md)
- [Campus fabrics: SD-Access, LISP and VXLAN](./campus-fabrics.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
