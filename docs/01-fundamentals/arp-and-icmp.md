---
title: "ARP and ICMP"
description: "How IP addresses are mapped to MAC addresses, and how ICMP reports errors and powers ping and traceroute."
sidebar_position: 12
---

# ARP and ICMP

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

ARP is the bridge between Layer 3 and Layer 2 on IPv4 networks: before a host can send a frame it needs the MAC address of the next hop. ICMP is IP's control and error channel — destination unreachable, time exceeded and echo request/reply messages are what ping and traceroute are built on, and Path MTU Discovery depends on it. Blocking ICMP blindly breaks networks in subtle ways.

## Key concepts

- ARP request, reply and cache
- Gratuitous ARP and proxy ARP
- ICMP message types and codes
- How ping and traceroute work
- Path MTU Discovery
- ICMPv6 and NDP (pointer to IPv6)

## Before you start

- None — this is a good place to start.

## Standards and specifications

- [RFC 826 — An Ethernet Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc826)
- [RFC 792 — Internet Control Message Protocol](https://www.rfc-editor.org/rfc/rfc792)
- [RFC 1191 — Path MTU Discovery](https://www.rfc-editor.org/rfc/rfc1191)
- [RFC 4443 — ICMPv6](https://www.rfc-editor.org/rfc/rfc4443)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 5–6: Ethernet LAN switching (ARP)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Captures | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |

## Bibliography

- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (Paid)

## Hands-on lab

Clear your ARP cache, ping your gateway and capture the ARP exchange; then run traceroute and explain every line of output.

## Related topics

- [IPv4 addressing and the IPv4 header](./ipv4-addressing.md)
- [Subnetting, VLSM and supernetting](./subnetting.md)
- [TCP and UDP](./tcp-and-udp.md)
- [IPv6: addressing, NDP and SLAAC](./ipv6.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
