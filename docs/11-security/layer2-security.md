---
title: "Layer 2 security"
description: "Port security, DHCP snooping, Dynamic ARP Inspection, IP Source Guard and common Layer 2 attacks."
sidebar_position: 5
---

# Layer 2 security

**Level:** Beginner · **Section:** [Security](./index.md)

## Overview

The access layer is where untrusted devices plug in, and Layer 2 protocols trust everyone by default. Port security limits MAC addresses; DHCP snooping blocks rogue DHCP servers and builds a binding table; Dynamic ARP Inspection and IP Source Guard use that table to stop ARP spoofing and address spoofing. Together they shut down most LAN-based attacks.

## Key concepts

- MAC flooding and port security
- Rogue DHCP and DHCP snooping
- ARP spoofing and Dynamic ARP Inspection
- IP Source Guard
- VLAN hopping and native VLAN hygiene
- Storm control

## Before you start

- [VLANs, trunking and inter-VLAN routing](../02-switching/vlans.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 49–51: Port security, DHCP snooping, Dynamic ARP Inspection](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Launch a rogue DHCP server and an ARP-spoofing attack in a lab, then stop both with DHCP snooping and DAI.

## Related topics

- [Device hardening, AAA and CoPP](./device-hardening-and-aaa.md)
- [Access control lists](./acls.md)
- [IPv6 first-hop security and uRPF](./ipv6-security.md)
- [802.1X and network access control](./nac-and-8021x.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
