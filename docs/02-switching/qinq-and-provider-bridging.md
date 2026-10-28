---
title: "QinQ and provider bridging"
description: "Stacking VLAN tags (802.1ad) to carry customer VLANs across a provider network."
sidebar_position: 9
---

# QinQ and provider bridging

**Level:** Intermediate · **Section:** [Switching and Ethernet](./index.md)

## Overview

QinQ adds an outer service tag (S-tag) in front of the customer's tag (C-tag), letting a provider carry many customers' VLANs transparently across its Ethernet network. It is the base of many Metro Ethernet services and is also used inside data centres and for subscriber aggregation in broadband networks.

## Key concepts

- C-tag and S-tag
- TPID values (0x8100, 0x88a8)
- Tunnel ports and Layer 2 protocol tunnelling
- MTU considerations
- Use in Metro Ethernet and broadband aggregation

## Before you start

- [VLANs, trunking and inter-VLAN routing](vlans.md)

## Standards and specifications

- [IEEE 802.1Q — Bridges and Bridged Networks (includes 802.1ad provider bridges)](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [MEF — Carrier Ethernet services](https://www.mef.net/) | Standards body | Intermediate | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Configure QinQ between two switches (or Linux VLAN subinterfaces stacked twice) and inspect the double-tagged frames in Wireshark.

## Related topics

- [Link aggregation: LACP and EtherChannel](./link-aggregation.md)
- [MLAG, vPC and EVPN multihoming](./mlag-and-multihoming.md)
- [Ethernet OAM: CFM and Y.1731](./ethernet-oam.md)
- [Time-Sensitive Networking and DetNet](./tsn-and-detnet.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
