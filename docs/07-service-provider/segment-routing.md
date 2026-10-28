---
title: "Segment Routing: SR-MPLS"
description: "Source routing with segments: prefix and adjacency SIDs, SR policies, TI-LFA and migration from LDP/RSVP-TE."
sidebar_position: 7
---

# Segment Routing: SR-MPLS

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

Segment Routing encodes the path in the packet as a list of segments, so the core keeps no per-flow state and needs no LDP or RSVP. SIDs are distributed by the IGP; SR policies steer traffic for traffic engineering; TI-LFA gives 100% fast-reroute coverage. SR-MPLS reuses the MPLS data plane, making migration incremental.

## Key concepts

- Segments and SIDs (prefix, node, adjacency, anycast)
- SRGB and label allocation
- IGP extensions for SR
- SR policies and colours
- TI-LFA
- LDP interworking and mapping server
- Flex-Algo

## Before you start

- [MPLS and LDP](mpls.md)
- [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](../04-routing/fast-convergence.md)

## Standards and specifications

- [RFC 8402 — Segment Routing Architecture](https://www.rfc-editor.org/rfc/rfc8402)
- [RFC 8660 — Segment Routing with the MPLS Data Plane](https://www.rfc-editor.org/rfc/rfc8660)
- [RFC 8667 — IS-IS Extensions for Segment Routing](https://www.rfc-editor.org/rfc/rfc8667)
- [RFC 9256 — Segment Routing Policy Architecture](https://www.rfc-editor.org/rfc/rfc9256)
- [RFC 9350 — IGP Flexible Algorithm](https://www.rfc-editor.org/rfc/rfc9350)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Articles | Advanced | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (Paid)

## Hands-on lab

Enable SR-MPLS on an IS-IS core, remove LDP, configure TI-LFA and steer one flow over a non-shortest path with an SR policy.

## Related topics

- [EVPN](./evpn.md)
- [Traffic engineering: RSVP-TE](./traffic-engineering.md)
- [SRv6 and uSID](./srv6.md)
- [SDN for the WAN: PCE, PCEP and BGP-LS](./pce-and-bgp-ls.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
