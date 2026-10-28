---
title: "IP multicast: IGMP, PIM, SSM, MSDP and BIER"
description: "Delivering one stream to many receivers: group management, multicast distribution trees and inter-domain multicast."
sidebar_position: 14
---

# IP multicast: IGMP, PIM, SSM, MSDP and BIER

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

Multicast sends a single copy of traffic that the network replicates only where receivers exist. Hosts join groups with IGMP (IPv4) or MLD (IPv6); routers build distribution trees with PIM — shared trees through a rendezvous point or source trees with SSM. MSDP connects multicast domains, and BIER is a newer stateless approach. IPTV, market data and some enterprise applications depend on it.

## Key concepts

- Multicast addressing and MAC mapping
- IGMPv2/v3 and MLDv2
- IGMP snooping
- PIM sparse mode, RPs and SPT switchover
- Source-specific multicast
- Reverse path forwarding (RPF) check
- Bidirectional PIM and MSDP
- BIER

## Before you start

- [OSPF](ospf.md)

## Standards and specifications

- [RFC 7761 — PIM Sparse Mode](https://www.rfc-editor.org/rfc/rfc7761)
- [RFC 3376 — IGMP Version 3](https://www.rfc-editor.org/rfc/rfc3376)
- [RFC 3810 — MLD Version 2 for IPv6](https://www.rfc-editor.org/rfc/rfc3810)
- [RFC 4607 — Source-Specific Multicast for IP](https://www.rfc-editor.org/rfc/rfc4607)
- [RFC 3618 — Multicast Source Discovery Protocol (MSDP)](https://www.rfc-editor.org/rfc/rfc3618)
- [RFC 8279 — Multicast Using Bit Index Explicit Replication (BIER)](https://www.rfc-editor.org/rfc/rfc8279)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *IP Multicast, Volume I and II* — Josh Loveless, Ray Blair, Arvind Durai (Paid)

## Hands-on lab

Stream a multicast video with VLC across two PIM-SM routers with a static RP, then switch to SSM and compare the state created.

## Related topics

- [First hop redundancy: VRRP, HSRP and GLBP](./first-hop-redundancy.md)
- [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](./fast-convergence.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
