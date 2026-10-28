---
title: "DTP and VTP"
description: "Cisco's trunk negotiation and VLAN distribution protocols \u2014 how they work and why best practice is to disable them."
sidebar_position: 3
---

# DTP and VTP

**Level:** Beginner · **Section:** [Switching and Ethernet](./index.md)

## Overview

DTP negotiates whether a link becomes a trunk; VTP propagates the VLAN database between switches. Both are Cisco-proprietary conveniences that create risk: DTP enables VLAN-hopping attacks and a stray VTP update can wipe VLANs across a campus. They remain worth understanding because they explain why trunks should be configured statically and why VLAN provisioning moved to automation tools.

:::info Vendor notes
DTP and VTP are Cisco-specific. Other vendors use static trunk configuration and protocols such as MVRP (IEEE 802.1Q) or automation to distribute VLANs.
:::

## Key concepts

- DTP modes: dynamic auto, dynamic desirable, nonegotiate
- VTP server, client and transparent modes
- VTP revision numbers and the 'VTP bomb'
- VTP version 3
- Switch spoofing and VLAN hopping
- Best practice: static trunks, VTP transparent or off

## Before you start

- [VLANs, trunking and inter-VLAN routing](vlans.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 19: DTP and VTP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Reproduce a VTP revision-number accident in Packet Tracer, then lock the design down with static trunks and VTP transparent mode.

## Related topics

- [Ethernet switching and MAC learning](./ethernet-switching.md)
- [VLANs, trunking and inter-VLAN routing](./vlans.md)
- [Discovery protocols: LLDP and CDP](./lldp-and-cdp.md)
- [Spanning Tree: STP, RSTP and Rapid PVST+](./spanning-tree.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
