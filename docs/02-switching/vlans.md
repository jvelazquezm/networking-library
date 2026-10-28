---
title: "VLANs, trunking and inter-VLAN routing"
description: "Segmenting a LAN with VLANs, 802.1Q trunks, the native VLAN, Voice VLANs and routing between VLANs."
sidebar_position: 2
---

# VLANs, trunking and inter-VLAN routing

**Level:** Beginner · **Section:** [Switching and Ethernet](./index.md)

## Overview

VLANs split one physical switched network into several isolated broadcast domains. Access ports carry one VLAN; trunks carry many, tagging frames with an 802.1Q header. Because hosts in different VLANs are in different IP subnets, traffic between them must be routed — by a router on a stick, a Layer 3 switch with SVIs or a firewall. Voice VLANs let a phone and a PC share one switch port.

## Key concepts

- Access and trunk ports
- 802.1Q tagging and the native VLAN
- Allowed VLAN lists
- Voice VLAN
- Router-on-a-stick
- Layer 3 switches and SVIs

## Before you start

- [Ethernet switching and MAC learning](ethernet-switching.md)

## Standards and specifications

- [IEEE 802.1Q — Bridges and Bridged Networks (VLAN tagging)](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 16–18 and Day 46: VLANs; Voice VLAN](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |
| [Practical Networking — CCNA topic index](https://www.practicalnetworking.net/index/ccna/) | Articles | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

Create three VLANs across two switches with a trunk between them and route between the VLANs with SVIs on a Layer 3 switch.

## Related topics

- [Ethernet switching and MAC learning](./ethernet-switching.md)
- [DTP and VTP](./dtp-and-vtp.md)
- [Discovery protocols: LLDP and CDP](./lldp-and-cdp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
