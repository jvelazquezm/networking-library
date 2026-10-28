---
title: "WLAN architectures"
description: "Autonomous, controller-based (split-MAC), cloud-managed and distributed WLANs; CAPWAP and AP modes."
sidebar_position: 3
---

# WLAN architectures

**Level:** Beginner · **Section:** [Wireless and IoT](./index.md)

## Overview

Small networks run autonomous access points configured one by one. Enterprises centralise control: lightweight access points tunnel to a wireless LAN controller (split-MAC, using CAPWAP), or are managed from a cloud dashboard while forwarding traffic locally. The choice affects roaming, failure domains and where traffic is switched.

## Key concepts

- Autonomous access points
- Lightweight APs and WLCs (split-MAC)
- CAPWAP
- Central vs local (FlexConnect-style) switching
- Cloud-managed WLANs
- AP modes (local, monitor, sniffer, bridge)

## Before you start

- [Wireless fundamentals and RF](wireless-fundamentals.md)
- [VLANs, trunking and inter-VLAN routing](../02-switching/vlans.md)

## Standards and specifications

- [RFC 5415 — CAPWAP Protocol Specification](https://www.rfc-editor.org/rfc/rfc5415)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 56 and Day 58: Wireless architectures; wireless configuration](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |

## Bibliography

- *CWNA Certified Wireless Network Administrator Study Guide* — David D. Coleman, David A. Westcott (Paid)
- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Configure a WLC and two lightweight APs in Packet Tracer with two SSIDs mapped to different VLANs.

## Related topics

- [Wireless fundamentals and RF](./wireless-fundamentals.md)
- [Wi-Fi standards: from 802.11a to Wi-Fi 7](./wifi-standards.md)
- [Wireless security: WPA2, WPA3 and 802.1X](./wireless-security.md)
- [WLAN design, site surveys and roaming](./wlan-design.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
