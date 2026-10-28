---
title: "IPv6 first-hop security and uRPF"
description: "Protecting IPv6 access networks \u2014 RA Guard, DHCPv6 Guard, ND inspection \u2014 and anti-spoofing with uRPF and BCP 38."
sidebar_position: 6
---

# IPv6 first-hop security and uRPF

**Level:** Intermediate · **Section:** [Security](./index.md)

## Overview

IPv6 replaces ARP and DHCP with ICMPv6-based mechanisms that have their own attacks: rogue router advertisements, NDP spoofing and table exhaustion. First-hop security features mirror their IPv4 equivalents. Unicast Reverse Path Forwarding and ingress filtering (BCP 38) stop spoofed source addresses at the network edge for both IPv4 and IPv6.

## Key concepts

- Rogue RAs and RA Guard
- DHCPv6 Guard
- ND inspection and source guard
- Extension header abuse
- uRPF strict and loose modes
- BCP 38 ingress filtering

## Before you start

- [IPv6: addressing, NDP and SLAAC](../01-fundamentals/ipv6.md)

## Standards and specifications

- [RFC 6105 — IPv6 Router Advertisement Guard](https://www.rfc-editor.org/rfc/rfc6105)
- [RFC 3704 — Ingress Filtering for Multihomed Networks](https://www.rfc-editor.org/rfc/rfc3704)
- [RFC 2827 — Network Ingress Filtering (BCP 38)](https://www.rfc-editor.org/rfc/rfc2827)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [MANRS — Mutually Agreed Norms for Routing Security](https://manrs.org/) | Guide | Intermediate | Free |

## Bibliography

- *IPv6 Fundamentals* — Rick Graziani (Paid)

## Hands-on lab

Send rogue router advertisements in an IPv6 lab (e.g. with Scapy) and block them with RA Guard; enable uRPF and test spoofed traffic.

## Related topics

- [Access control lists](./acls.md)
- [Layer 2 security](./layer2-security.md)
- [802.1X and network access control](./nac-and-8021x.md)
- [Firewalls, NGFW, IDS/IPS and proxies](./firewalls-and-ips.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
