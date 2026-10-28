---
title: "Data center fabrics"
description: "Why data centres moved from three-tier designs to leaf-spine Clos fabrics, and how they are routed."
sidebar_position: 1
---

# Data center fabrics

**Level:** Intermediate · **Section:** [Data Center and Cloud Native Networking](./index.md)

## Overview

Why data centres moved from three-tier designs to leaf-spine Clos fabrics, and how they are routed.

## Key concepts

- Clos and leaf-spine topologies
- East-west traffic
- ECMP
- BGP in the data center
- Oversubscription

## Before you start

- [BGP](../03-routing/bgp.md)

## Standards and specifications

- [RFC 7938 — Use of BGP for Routing in Large-Scale Data Centers](https://www.rfc-editor.org/rfc/rfc7938)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |

## Hands-on lab

Build a 2-spine, 4-leaf fabric in Containerlab with eBGP unnumbered and verify ECMP.

## Related topics

- [VXLAN and EVPN](./vxlan-evpn.md)
- [Software-defined networking (SDN)](./sdn.md)
- [Network Functions Virtualisation (NFV)](./nfv.md)
- [Kubernetes networking](./kubernetes-networking.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
