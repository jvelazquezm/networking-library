---
title: "Spanning Tree: STP, RSTP and Rapid PVST+"
description: "Why Layer 2 loops are catastrophic and how the spanning tree family elects a loop-free topology."
sidebar_position: 5
---

# Spanning Tree: STP, RSTP and Rapid PVST+

**Level:** Beginner · **Section:** [Switching and Ethernet](./index.md)

## Overview

Ethernet frames have no TTL, so a single loop can flood a network until it collapses. Spanning Tree elects a root bridge and blocks redundant paths, keeping one active tree. RSTP made convergence fast; Cisco's PVST+ and Rapid PVST+ run one instance per VLAN. Even in designs that avoid STP (routed access, EVPN), it remains the safety net in almost every campus.

:::info Vendor notes
PVST+ and Rapid PVST+ are Cisco per-VLAN implementations; the standards-based alternatives are RSTP and MSTP, which interoperate with them through the common spanning tree.
:::

## Key concepts

- Broadcast storms and MAC flapping
- Bridge ID and root election
- Port roles and states
- Path cost and tie-breakers
- RSTP proposal/agreement and edge ports
- PVST+ and Rapid PVST+
- PortFast and BPDU Guard

## Before you start

- [VLANs, trunking and inter-VLAN routing](vlans.md)

## Standards and specifications

- [IEEE 802.1Q — Bridges and Bridged Networks (includes RSTP and MSTP)](https://1.ieee802.org/)
- [IEEE 802.1D — MAC Bridges (original STP)](https://standards.ieee.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 20–22: Spanning Tree and Rapid Spanning Tree](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

Build a triangle of switches, predict the root and blocked port on paper, verify, then fail a link and time convergence with STP and RSTP.

## Related topics

- [DTP and VTP](./dtp-and-vtp.md)
- [Discovery protocols: LLDP and CDP](./lldp-and-cdp.md)
- [MST and spanning tree protection](./mst-and-stp-protection.md)
- [Link aggregation: LACP and EtherChannel](./link-aggregation.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
