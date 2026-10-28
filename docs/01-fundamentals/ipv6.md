---
title: "IPv6: addressing, NDP and SLAAC"
description: "IPv6 addresses and prefixes, address types, the IPv6 header, Neighbor Discovery and autoconfiguration."
sidebar_position: 14
---

# IPv6: addressing, NDP and SLAAC

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

IPv6 replaces IPv4's 32-bit space with 128-bit addresses and cleans up the protocol along the way: no broadcast, a simpler fixed header, mandatory multicast and built-in autoconfiguration. Neighbor Discovery replaces ARP and adds router discovery; SLAAC lets hosts configure themselves, optionally with DHCPv6. IPv6 is now a large share of Internet traffic, so treat it as a first-class protocol, not an add-on.

## Key concepts

- Address notation and compression
- Global unicast, unique local, link-local, multicast
- EUI-64 and privacy addresses
- The IPv6 header and extension headers
- Neighbor Discovery: NS/NA, RS/RA, DAD
- SLAAC vs stateful and stateless DHCPv6

## Before you start

- [IPv4 addressing and the IPv4 header](ipv4-addressing.md)

## Standards and specifications

- [RFC 8200 — IPv6 Specification](https://www.rfc-editor.org/rfc/rfc8200)
- [RFC 4291 — IPv6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291)
- [RFC 4861 — Neighbor Discovery for IPv6](https://www.rfc-editor.org/rfc/rfc4861)
- [RFC 4862 — IPv6 Stateless Address Autoconfiguration](https://www.rfc-editor.org/rfc/rfc4862)
- [RFC 8981 — Temporary Address Extensions for SLAAC](https://www.rfc-editor.org/rfc/rfc8981)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 31–33: IPv6](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Hurricane Electric IPv6 Certification (hands-on, free)](https://ipv6.he.net/certification/) | Exercises | Beginner | Free |
| [RIPE NCC Academy](https://academy.ripe.net/) | Course | Beginner | Free |
| [APNIC Academy](https://academy.apnic.net/) | Course | Beginner | Free |
| [Google IPv6 adoption statistics](https://www.google.com/intl/en/ipv6/statistics.html) | Data | Beginner | Free |

## Bibliography

- *IPv6 Fundamentals* — Rick Graziani (Paid)

## Hands-on lab

Build an IPv6-only lab, watch SLAAC and DAD in Wireshark, then complete the Hurricane Electric IPv6 certification levels.

## Related topics

- [ARP and ICMP](./arp-and-icmp.md)
- [TCP and UDP](./tcp-and-udp.md)
- [IPv6 transition mechanisms](./ipv6-transition.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
