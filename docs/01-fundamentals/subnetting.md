---
title: "Subnetting, VLSM and supernetting"
description: "Dividing address space into subnets, sizing them with VLSM and summarising them back up."
sidebar_position: 11
---

# Subnetting, VLSM and supernetting

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

Subnetting is the skill that separates people who use networks from people who build them. You split a block into smaller networks, size each one with VLSM to avoid waste, and summarise (supernet) groups of subnets so routing tables stay small. Practise until you can do it in your head — every exam and every design review assumes you can.

## Key concepts

- Network, broadcast and usable host addresses
- Fixed-length subnetting
- Variable-length subnet masks (VLSM)
- Route summarisation and supernetting
- CIDR notation
- Address planning

## Before you start

- [IPv4 addressing and the IPv4 header](ipv4-addressing.md)

## Standards and specifications

- [RFC 4632 — Classless Inter-domain Routing (CIDR)](https://www.rfc-editor.org/rfc/rfc4632)
- [RFC 950 — Internet Standard Subnetting Procedure](https://www.rfc-editor.org/rfc/rfc950)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 13–15: Subnetting and VLSM](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [subnettingpractice.com](https://subnettingpractice.com/) | Exercises | Beginner | Free |
| [Practical Networking — Subnetting Mastery](https://www.practicalnetworking.net/stand-alone/subnetting-mastery/) | Article series | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

Design an addressing plan for a company with four sites and departments of different sizes using a single /20, then summarise each site.

## Related topics

- [Linux networking essentials](./linux-networking.md)
- [IPv4 addressing and the IPv4 header](./ipv4-addressing.md)
- [ARP and ICMP](./arp-and-icmp.md)
- [TCP and UDP](./tcp-and-udp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
