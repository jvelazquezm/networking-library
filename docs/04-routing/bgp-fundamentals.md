---
title: "BGP fundamentals"
description: "The protocol that connects the Internet: sessions, eBGP vs iBGP, path attributes, best-path selection and basic policy."
sidebar_position: 7
---

# BGP fundamentals

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

BGP exchanges reachability between autonomous systems and lets each network apply its own policy. It runs over TCP, carries path attributes such as AS_PATH, NEXT_HOP, LOCAL_PREF and MED, and picks one best path per prefix through a well-defined decision process. Every network engineer needs the basics; enterprises use it to connect to ISPs and clouds, and data centres use it as their IGP.

## Key concepts

- Autonomous systems and ASNs
- Sessions, states and timers
- eBGP vs iBGP and the iBGP full-mesh rule
- Path attributes
- Best-path selection
- Advertising networks and next-hop-self
- Multihoming to two ISPs

## Before you start

- [Routing fundamentals and route selection](routing-fundamentals.md)

## Standards and specifications

- [RFC 4271 — A Border Gateway Protocol 4 (BGP-4)](https://www.rfc-editor.org/rfc/rfc4271)
- [RFC 4760 — Multiprotocol Extensions for BGP-4](https://www.rfc-editor.org/rfc/rfc4760)
- [RFC 6793 — BGP Support for Four-Octet AS Number Space](https://www.rfc-editor.org/rfc/rfc6793)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Course | Beginner | Free |
| [APNIC Academy](https://academy.apnic.net/) | Course | Beginner | Free |
| [Cloudflare Learning — What is BGP?](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/) | Article | Beginner | Free |
| [Hurricane Electric BGP Toolkit](https://bgp.he.net/) | Tool | Beginner | Free |
| [FRRouting documentation](https://docs.frrouting.org/) | Docs | Intermediate | Free |

## Bibliography

- *Internet Routing Architectures* — Sam Halabi (Paid)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)

## Hands-on lab

Multihome a small enterprise AS to two ISP ASes in Containerlab and use LOCAL_PREF and AS-path prepending to control outbound and inbound traffic.

## Related topics

- [OSPF](./ospf.md)
- [IS-IS](./is-is.md)
- [Advanced BGP](./bgp-advanced.md)
- [Redistribution, route filtering and route maps](./redistribution-and-filtering.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
