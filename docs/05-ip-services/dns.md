---
title: "DNS, DNSSEC, DoT and DoH"
description: "The Internet's naming system: hierarchy, resolution, record types, caching, DNSSEC and encrypted DNS."
sidebar_position: 2
---

# DNS, DNSSEC, DoT and DoH

**Level:** Beginner · **Section:** [IP Services](./index.md)

## Overview

DNS translates names into addresses and much more — mail routing, service discovery, certificate validation. Recursive resolvers walk the hierarchy from the root to authoritative servers and cache answers by TTL. DNSSEC adds signatures so answers can be validated; DNS over TLS and DNS over HTTPS encrypt queries between clients and resolvers. Many 'network problems' are DNS problems.

## Key concepts

- Hierarchy: root, TLDs, authoritative servers
- Recursive vs iterative resolution
- Record types: A, AAAA, CNAME, MX, NS, PTR, TXT, SRV
- Caching and TTLs
- Zones and delegation
- DNSSEC chain of trust
- DoT and DoH
- Diagnosing DNS issues

## Before you start

- [TCP and UDP](../01-fundamentals/tcp-and-udp.md)

## Standards and specifications

- [RFC 1034 — Domain Names — Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034)
- [RFC 1035 — Domain Names — Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035)
- [RFC 4033 — DNS Security Introduction and Requirements](https://www.rfc-editor.org/rfc/rfc4033)
- [RFC 7858 — DNS over TLS](https://www.rfc-editor.org/rfc/rfc7858)
- [RFC 8484 — DNS Queries over HTTPS](https://www.rfc-editor.org/rfc/rfc8484)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 38: DNS](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Cloudflare Learning — What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/) | Article | Beginner | Free |
| [How DNS works (illustrated comic)](https://howdns.works/) | Article | Beginner | Free |
| [DNSViz — DNSSEC visualiser](https://dnsviz.net/) | Tool | Intermediate | Free |

## Bibliography

- *DNS and BIND* — Cricket Liu, Paul Albitz (Paid)

## Hands-on lab

Trace a resolution with dig +trace, then run your own recursive resolver (Unbound) with DNSSEC validation and inspect a signed zone in DNSViz.

## Related topics

- [DHCP and DHCPv6](./dhcp.md)
- [NAT and PAT](./nat.md)
- [Time: NTP, NTS and PTP](./time-synchronization.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
