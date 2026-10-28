---
title: "Discovery protocols: LLDP and CDP"
description: "How devices advertise their identity and capabilities to neighbours, and how to use that for documentation and troubleshooting."
sidebar_position: 4
---

# Discovery protocols: LLDP and CDP

**Level:** Beginner · **Section:** [Switching and Ethernet](./index.md)

## Overview

Discovery protocols let each device tell its directly connected neighbours who it is, which port it is using and what it can do. LLDP is the IEEE standard and works across vendors; CDP is Cisco's older equivalent and still enabled by default on Cisco gear. LLDP-MED adds information for IP phones such as voice VLAN and power. They are invaluable for mapping networks — and a reason to disable them on untrusted ports.

:::info Vendor notes
CDP is Cisco-proprietary; LLDP is the vendor-neutral standard supported by all major vendors.
:::

## Key concepts

- LLDP TLVs
- LLDP-MED
- CDP
- Neighbour tables
- Security considerations

## Before you start

- [Ethernet switching and MAC learning](ethernet-switching.md)

## Standards and specifications

- [IEEE 802.1AB — Station and Media Access Control Connectivity Discovery (LLDP)](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 36: CDP and LLDP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Captures | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Enable LLDP on a mixed Linux/switch lab (lldpd on Linux) and rebuild the topology diagram from neighbour tables alone.

## Related topics

- [VLANs, trunking and inter-VLAN routing](./vlans.md)
- [DTP and VTP](./dtp-and-vtp.md)
- [Spanning Tree: STP, RSTP and Rapid PVST+](./spanning-tree.md)
- [MST and spanning tree protection](./mst-and-stp-protection.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
