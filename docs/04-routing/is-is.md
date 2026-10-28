---
title: "IS-IS"
description: "The link-state IGP of service providers and data centres: levels, TLVs, and why it underpins Segment Routing."
sidebar_position: 6
---

# IS-IS

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

IS-IS was designed for OSI but extended to carry IP, and it runs directly over Layer 2 rather than IP. Its TLV-based encoding made it easy to extend — for IPv6, traffic engineering and Segment Routing — which is why most large operators use it. Nokia's NRS I certification is moving from OSPF to IS-IS for exactly this reason.

## Key concepts

- NET addresses and system IDs
- Level 1, Level 2 and L1/L2 routers
- Hellos, LSPs, CSNPs and PSNPs
- TLVs and extensibility
- Wide metrics
- Multi-topology and IPv6
- IS-IS vs OSPF

## Before you start

- [OSPF](ospf.md)

## Standards and specifications

- [RFC 1195 — Use of OSI IS-IS for Routing in TCP/IP and Dual Environments](https://www.rfc-editor.org/rfc/rfc1195)
- [RFC 5308 — Routing IPv6 with IS-IS](https://www.rfc-editor.org/rfc/rfc5308)
- [RFC 5305 — IS-IS Extensions for Traffic Engineering](https://www.rfc-editor.org/rfc/rfc5305)
- [ISO/IEC 10589 — IS-IS intra-domain routing protocol](https://www.iso.org/standard/30932.html)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [FRRouting documentation](https://docs.frrouting.org/) | Docs | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)

## Hands-on lab

Replace OSPF with IS-IS (Level 2 only) in your lab and compare the configuration, the database and the convergence behaviour.

## Related topics

- [EIGRP](./eigrp.md)
- [OSPF](./ospf.md)
- [BGP fundamentals](./bgp-fundamentals.md)
- [Advanced BGP](./bgp-advanced.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
