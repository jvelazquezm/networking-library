---
title: "How the Internet works"
description: "A big-picture tour of the Internet: networks of networks, ISPs, IXPs, submarine cables, DNS and routing."
sidebar_position: 1
---

# How the Internet works

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

The Internet is not one network but tens of thousands of independently operated networks (autonomous systems) that agree to exchange traffic. Access ISPs connect homes and businesses, transit providers and Internet Exchange Points interconnect them, and submarine cables carry traffic between continents. Naming (DNS) and inter-domain routing (BGP) are the glue that makes it look like a single system. This page gives you the map; the rest of the library fills in each piece.

## Key concepts

- Networks of networks and autonomous systems
- Access, transit and peering
- Internet Exchange Points (IXPs)
- Submarine and terrestrial fibre
- The role of DNS and BGP
- Who governs the Internet: IETF, ICANN, RIRs

## Before you start

- None — this is a good place to start.

## Standards and specifications

- [RFC 1122 — Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122)
- [IANA — Number resources and the RIR system](https://www.iana.org/numbers)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — How does the Internet work?](https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/) | Article | Beginner | Free |
| [Submarine Cable Map (TeleGeography)](https://www.submarinecablemap.com/) | Interactive map | Beginner | Free |
| [PeeringDB — networks, IXPs and facilities](https://www.peeringdb.com/) | Database | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |

## Bibliography

- [*Computer Networks: A Systems Approach*](https://book.systemsapproach.org/) — Larry Peterson, Bruce Davie (Free)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (Paid)

## Hands-on lab

Run traceroute to a website on another continent, look up each hop's AS on bgp.he.net and identify where your traffic leaves your ISP.

## Related topics

- [Network types and topologies](./network-types-and-topologies.md)
- [Networking devices and their roles](./networking-devices.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
