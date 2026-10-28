---
title: "IPv4 addressing and the IPv4 header"
description: "The IPv4 header, address structure, address classes and why CIDR replaced them, public vs private addressing."
sidebar_position: 10
---

# IPv4 addressing and the IPv4 header

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

An IPv4 address is a 32-bit number split into a network part and a host part by a prefix length. The original class system wasted addresses and was replaced by CIDR; private ranges and NAT then stretched the address space further. The IPv4 header itself is worth knowing field by field, because TTL, fragmentation, DSCP and the protocol field show up in troubleshooting constantly.

## Key concepts

- Binary and dotted-decimal notation
- Prefix length and subnet mask
- Classful history and CIDR
- Private (RFC 1918), loopback, link-local and special ranges
- Unicast, broadcast and multicast
- IPv4 header fields: TTL, DSCP, protocol, fragmentation

## Before you start

- None — this is a good place to start.

## Standards and specifications

- [RFC 791 — Internet Protocol](https://www.rfc-editor.org/rfc/rfc791)
- [RFC 1918 — Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)
- [RFC 6890 — Special-Purpose IP Address Registries](https://www.rfc-editor.org/rfc/rfc6890)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 7–8 and Day 10: IPv4 addressing; the IPv4 header](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Practical Networking — CCNA topic index](https://www.practicalnetworking.net/index/ccna/) | Articles | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (Paid)

## Hands-on lab

Capture traffic in Wireshark and explain every field of an IPv4 header, then trigger fragmentation with a large ping and the don't-fragment bit.

## Related topics

- [Working with network devices: the CLI](./device-cli.md)
- [Linux networking essentials](./linux-networking.md)
- [Subnetting, VLSM and supernetting](./subnetting.md)
- [ARP and ICMP](./arp-and-icmp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
