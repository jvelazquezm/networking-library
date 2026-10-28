---
title: "NAT and PAT"
description: "Network address translation: static NAT, dynamic NAT, PAT/overload, port forwarding and carrier-grade NAT."
sidebar_position: 3
---

# NAT and PAT

**Level:** Beginner · **Section:** [IP Services](./index.md)

## Overview

NAT rewrites addresses as packets cross a boundary, most often from private to public space. Static NAT maps one-to-one, dynamic NAT uses a pool, and PAT (NAT overload) lets thousands of hosts share one public address by translating ports. NAT breaks end-to-end connectivity, which is why protocols need helpers and why IPv6 avoids it.

## Key concepts

- Inside/outside, local/global terminology
- Static NAT and port forwarding
- Dynamic NAT pools
- PAT / NAT overload
- NAT behaviour and traversal (STUN, TURN)
- Carrier-grade NAT (CGNAT)

## Before you start

- [IPv4 addressing and the IPv4 header](../01-fundamentals/ipv4-addressing.md)

## Standards and specifications

- [RFC 3022 — Traditional IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc3022)
- [RFC 4787 — NAT Behavioral Requirements for Unicast UDP](https://www.rfc-editor.org/rfc/rfc4787)
- [RFC 6888 — Common Requirements for Carrier-Grade NATs](https://www.rfc-editor.org/rfc/rfc6888)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 44–45: NAT (static and dynamic)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Practical Networking — NAT series](https://www.practicalnetworking.net/series/nat/nat/) | Article series | Beginner | Free |
| [Practical Networking — Cisco NAT terminology](https://www.practicalnetworking.net/stand-alone/cisco-nat-terminology/) | Article | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Configure PAT on a Linux or IOS router, open several connections and inspect the translation table (conntrack or show ip nat translations).

## Related topics

- [DHCP and DHCPv6](./dhcp.md)
- [DNS, DNSSEC, DoT and DoH](./dns.md)
- [Time: NTP, NTS and PTP](./time-synchronization.md)
- [Quality of Service (QoS)](./qos.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
