---
title: "SRv6 and uSID"
description: "Segment Routing over IPv6: the SRH, network programming behaviours, compressed SIDs (uSID) and SRv6 services."
sidebar_position: 8
---

# SRv6 and uSID

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

SRv6 carries segments as IPv6 addresses, so the network programme lives in the IPv6 header and no MPLS is needed. Each SID encodes a locator and a function — forward, decapsulate into a VRF, cross-connect — enabling L3VPN, EVPN and traffic engineering over plain IPv6. Compressed SIDs (uSID) solve the header overhead problem and are being deployed by large operators.

## Key concepts

- Locators and functions
- Segment Routing Header (SRH)
- Endpoint behaviours: End, End.X, End.DT4/DT6/DT46
- SRv6 L3VPN and EVPN
- Compressed SIDs (uSID / NEXT-C-SID)
- SRv6 traffic engineering
- Security and filtering at domain boundaries

## Before you start

- [Segment Routing: SR-MPLS](segment-routing.md)
- [IPv6: addressing, NDP and SLAAC](../01-fundamentals/ipv6.md)

## Standards and specifications

- [RFC 8754 — IPv6 Segment Routing Header (SRH)](https://www.rfc-editor.org/rfc/rfc8754)
- [RFC 8986 — SRv6 Network Programming](https://www.rfc-editor.org/rfc/rfc8986)
- [RFC 9252 — BGP Overlay Services Based on SRv6](https://www.rfc-editor.org/rfc/rfc9252)
- [RFC 9800 — Compressed SRv6 Segment List Encoding](https://www.rfc-editor.org/rfc/rfc9800)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [srv6.md — SRv6 knowledge base](https://srv6.md/) | Reference | Advanced | Free |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Articles | Advanced | Free |
| [Linux kernel SRv6 support (segment-routing.org)](https://segment-routing.org/) | Open source | Advanced | Free |

## Bibliography

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (Paid)

## Hands-on lab

Build an SRv6 L3VPN with Linux (iproute2) or SR Linux nodes and inspect the SRH and SIDs in Wireshark.

## Related topics

- [Traffic engineering: RSVP-TE](./traffic-engineering.md)
- [Segment Routing: SR-MPLS](./segment-routing.md)
- [SDN for the WAN: PCE, PCEP and BGP-LS](./pce-and-bgp-ls.md)
- [Broadband access: PON, DOCSIS, BNG, PPPoE and IPoE](./broadband-access.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
