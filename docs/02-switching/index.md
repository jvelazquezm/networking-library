---
title: "Switching and Ethernet"
description: "Ethernet switching, VLANs, spanning tree, link aggregation, provider bridging, OAM and TSN."
sidebar_position: 0
sidebar_label: Overview
---

# 02 · Switching and Ethernet

Everything that happens at Layer 2: how switches learn and forward, how VLANs segment a LAN, how loops are prevented, how links are bundled for capacity and resilience, and how Ethernet grew into a carrier-grade and deterministic technology.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Ethernet switching and MAC learning](./ethernet-switching.md) | Beginner | Ethernet frames, MAC addresses, MAC learning, flooding and forwarding. |
| [VLANs, trunking and inter-VLAN routing](./vlans.md) | Beginner | Segmenting a LAN with VLANs, 802.1Q trunks, the native VLAN, Voice VLANs and routing between VLANs. |
| [DTP and VTP](./dtp-and-vtp.md) | Beginner | Cisco's trunk negotiation and VLAN distribution protocols — how they work and why best practice is to disable them. |
| [Discovery protocols: LLDP and CDP](./lldp-and-cdp.md) | Beginner | How devices advertise their identity and capabilities to neighbours, and how to use that for documentation and troubleshooting. |
| [Spanning Tree: STP, RSTP and Rapid PVST+](./spanning-tree.md) | Beginner | Why Layer 2 loops are catastrophic and how the spanning tree family elects a loop-free topology. |
| [MST and spanning tree protection](./mst-and-stp-protection.md) | Intermediate | Multiple Spanning Tree regions and instances, and the features that keep spanning tree safe: Root Guard, BPDU Guard, Loop Guard, BPDU Filter. |
| [Link aggregation: LACP and EtherChannel](./link-aggregation.md) | Beginner | Bundling physical links into one logical link with LACP, and how traffic is distributed across members. |
| [MLAG, vPC and EVPN multihoming](./mlag-and-multihoming.md) | Intermediate | Making two switches look like one to a downstream device: MLAG, Cisco vPC, stacking and standards-based EVPN multihoming. |
| [QinQ and provider bridging](./qinq-and-provider-bridging.md) | Intermediate | Stacking VLAN tags (802.1ad) to carry customer VLANs across a provider network. |
| [Ethernet OAM: CFM and Y.1731](./ethernet-oam.md) | Advanced | Operations, administration and maintenance for carrier Ethernet: continuity checks, loopback, linktrace and performance monitoring. |
| [Time-Sensitive Networking and DetNet](./tsn-and-detnet.md) | Advanced | Deterministic Ethernet and IP: bounded latency and zero congestion loss for industrial, automotive and 5G fronthaul networks. |

## Suggested reading order

1. [Ethernet switching and MAC learning](./ethernet-switching.md) — Beginner
2. [VLANs, trunking and inter-VLAN routing](./vlans.md) — Beginner
3. [DTP and VTP](./dtp-and-vtp.md) — Beginner
4. [Discovery protocols: LLDP and CDP](./lldp-and-cdp.md) — Beginner
5. [Spanning Tree: STP, RSTP and Rapid PVST+](./spanning-tree.md) — Beginner
6. [Link aggregation: LACP and EtherChannel](./link-aggregation.md) — Beginner
7. [MST and spanning tree protection](./mst-and-stp-protection.md) — Intermediate
8. [MLAG, vPC and EVPN multihoming](./mlag-and-multihoming.md) — Intermediate
9. [QinQ and provider bridging](./qinq-and-provider-bridging.md) — Intermediate
10. [Ethernet OAM: CFM and Y.1731](./ethernet-oam.md) — Advanced
11. [Time-Sensitive Networking and DetNet](./tsn-and-detnet.md) — Advanced

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
