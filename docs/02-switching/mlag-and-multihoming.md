---
title: "MLAG, vPC and EVPN multihoming"
description: "Making two switches look like one to a downstream device: MLAG, Cisco vPC, stacking and standards-based EVPN multihoming."
sidebar_position: 8
---

# MLAG, vPC and EVPN multihoming

**Level:** Intermediate · **Section:** [Switching and Ethernet](./index.md)

## Overview

Classic link aggregation ends on one switch, which is a single point of failure. Multi-chassis LAG lets a server or switch bundle links to two upstream switches that cooperate through a peer link — Cisco calls it vPC, Arista and others call it MLAG. These are proprietary; EVPN multihoming (ESI-LAG) is the standards-based successor used in modern fabrics.

:::info Vendor notes
MLAG and vPC are vendor-specific; EVPN multihoming is the interoperable approach.
:::

## Key concepts

- Stacking vs MLAG
- Peer link and keepalive
- Orphan ports and split-brain
- vPC (Cisco) and MLAG (Arista, others)
- EVPN multihoming with Ethernet Segment Identifiers
- Active-active vs single-active

## Before you start

- [Link aggregation: LACP and EtherChannel](link-aggregation.md)

## Standards and specifications

- [RFC 7432 — BGP MPLS-Based Ethernet VPN (multihoming)](https://www.rfc-editor.org/rfc/rfc7432)
- [RFC 8365 — Network Virtualization Overlay Solution Using EVPN](https://www.rfc-editor.org/rfc/rfc8365)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *EVPN in the Data Center* — Dinesh Dutt (Paid)
- *Cloud Native Data Center Networking* — Dinesh Dutt (Paid)

## Hands-on lab

Build EVPN multihoming between two SR Linux or cEOS leaves and a Linux host with an LACP bond in Containerlab, then fail one leaf.

## Related topics

- [MST and spanning tree protection](./mst-and-stp-protection.md)
- [Link aggregation: LACP and EtherChannel](./link-aggregation.md)
- [QinQ and provider bridging](./qinq-and-provider-bridging.md)
- [Ethernet OAM: CFM and Y.1731](./ethernet-oam.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
