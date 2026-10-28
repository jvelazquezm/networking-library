---
title: "Routing and Internet Architecture"
description: "IGPs, BGP, MPLS, Segment Routing and how the Internet is stitched together."
sidebar_position: 0
sidebar_label: Overview
---

# 03 · Routing and Internet Architecture

How packets cross networks: forwarding decisions, interior routing protocols, BGP between autonomous systems and the label- and source-routing technologies that operators use in their backbones.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Routing fundamentals](./routing-fundamentals.md) | Beginner | How a router decides where to send a packet: the routing table, longest prefix match, static routes and the difference between the RIB and the FIB. |
| [OSPF](./ospf.md) | Intermediate | The most widely deployed link-state IGP in enterprises: LSAs, areas, adjacencies and convergence. |
| [IS-IS](./is-is.md) | Intermediate | The link-state IGP favoured by service providers, and why its TLV-based design made it the base for Segment Routing. |
| [BGP](./bgp.md) | Intermediate | The protocol that holds the Internet together: path attributes, policy, iBGP vs eBGP and the best-path algorithm. |
| [MPLS and L3VPN](./mpls.md) | Advanced | Label switching in operator backbones, LDP, and how BGP/MPLS VPNs deliver isolated customer networks over a shared core. |
| [Segment Routing (SR-MPLS and SRv6)](./segment-routing.md) | Advanced | Source routing for modern backbones: segments, SR-MPLS, SRv6 network programming and TI-LFA protection. |
| [IP multicast](./multicast.md) | Advanced | Delivering one stream to many receivers efficiently: group membership, multicast routing trees and where multicast is still used. |

## Suggested order

[Routing fundamentals](./routing-fundamentals.md) → [OSPF](./ospf.md) → [IS-IS](./is-is.md) → [BGP](./bgp.md) → [MPLS and L3VPN](./mpls.md) → [Segment Routing (SR-MPLS and SRv6)](./segment-routing.md) → [IP multicast](./multicast.md)

:::tip New to this area?
Check the [learning paths](../00-start-here/learning-paths/index.md) for a guided route that combines this section with others.
:::
