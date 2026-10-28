---
title: "Link aggregation: LACP and EtherChannel"
description: "Bundling physical links into one logical link with LACP, and how traffic is distributed across members."
sidebar_position: 7
---

# Link aggregation: LACP and EtherChannel

**Level:** Beginner · **Section:** [Switching and Ethernet](./index.md)

## Overview

Link aggregation combines several parallel links into one logical interface for more bandwidth and resilience, and spanning tree sees it as a single link. LACP negotiates the bundle and detects misconfiguration; Cisco calls the result EtherChannel and also supports its proprietary PAgP. Hashing decides which member carries each flow, which is why one flow never exceeds a single member's speed.

## Key concepts

- LACP active/passive
- Static bundles and PAgP
- Load-balancing hash inputs
- Layer 2 vs Layer 3 bundles
- Minimum links and failure behaviour

## Before you start

- [Ethernet switching and MAC learning](ethernet-switching.md)

## Standards and specifications

- [IEEE 802.1AX — Link Aggregation](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 23: EtherChannel](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Bond two interfaces on Linux with LACP towards a switch and generate several flows to see how they are distributed.

## Related topics

- [Spanning Tree: STP, RSTP and Rapid PVST+](./spanning-tree.md)
- [MST and spanning tree protection](./mst-and-stp-protection.md)
- [MLAG, vPC and EVPN multihoming](./mlag-and-multihoming.md)
- [QinQ and provider bridging](./qinq-and-provider-bridging.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
