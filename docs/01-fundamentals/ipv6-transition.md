---
title: "IPv6 transition mechanisms"
description: "How IPv4 and IPv6 coexist: dual stack, tunnelling and translation (NAT64/DNS64, 464XLAT, DS-Lite, MAP-E)."
sidebar_position: 15
---

# IPv6 transition mechanisms

**Level:** Intermediate · **Section:** [Network Fundamentals](./index.md)

## Overview

The Internet will run IPv4 and IPv6 side by side for years. Dual stack is the default where possible; where it is not, operators use translation (NAT64 with DNS64, 464XLAT on mobile networks) or tunnelling and encapsulation (DS-Lite, MAP-E/MAP-T, 6rd). Mobile operators in particular run IPv6-only access with 464XLAT, so these mechanisms are everywhere even if you never see them.

## Key concepts

- Dual stack and Happy Eyeballs
- NAT64 and DNS64
- 464XLAT on mobile networks
- DS-Lite and carrier-grade NAT
- MAP-E and MAP-T
- IPv6-only data centres and IPv4-as-a-service

## Before you start

- [IPv6: addressing, NDP and SLAAC](ipv6.md)

## Standards and specifications

- [RFC 6146 — Stateful NAT64](https://www.rfc-editor.org/rfc/rfc6146)
- [RFC 6147 — DNS64](https://www.rfc-editor.org/rfc/rfc6147)
- [RFC 6877 — 464XLAT](https://www.rfc-editor.org/rfc/rfc6877)
- [RFC 6333 — Dual-Stack Lite](https://www.rfc-editor.org/rfc/rfc6333)
- [RFC 7597 — MAP-E](https://www.rfc-editor.org/rfc/rfc7597)
- [RFC 8305 — Happy Eyeballs Version 2](https://www.rfc-editor.org/rfc/rfc8305)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Course | Beginner | Free |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermediate | Free |
| [RIPE NCC — IPv6 information centre](https://www.ripe.net/manage-ips-and-asns/ipv6/) | Articles | Intermediate | Free |

## Bibliography

- *IPv6 Fundamentals* — Rick Graziani (Paid)

## Hands-on lab

Build a NAT64/DNS64 gateway with Jool and a DNS64-enabled resolver, and reach an IPv4-only site from an IPv6-only client.

## Related topics

- [TCP and UDP](./tcp-and-udp.md)
- [IPv6: addressing, NDP and SLAAC](./ipv6.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
