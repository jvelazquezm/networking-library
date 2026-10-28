---
title: "SDN for the WAN: PCE, PCEP and BGP-LS"
description: "Centralised path computation: collecting topology with BGP-LS and programming paths with PCEP."
sidebar_position: 9
---

# SDN for the WAN: PCE, PCEP and BGP-LS

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

A Path Computation Element computes paths with a global view of the network that no single router has. BGP-LS exports the IGP topology and TE data to the controller; PCEP lets the controller create and update SR or RSVP-TE paths on head-ends. Together they enable bandwidth optimisation, disjoint paths and automated traffic engineering in large WANs.

## Key concepts

- Stateless vs stateful PCE
- PCC-initiated vs PCE-initiated paths
- BGP-LS topology collection
- Delegation and path updates
- Disjoint and latency-optimised paths
- Open-source and commercial controllers

## Before you start

- [Segment Routing: SR-MPLS](segment-routing.md)

## Standards and specifications

- [RFC 5440 — Path Computation Element Communication Protocol (PCEP)](https://www.rfc-editor.org/rfc/rfc5440)
- [RFC 8231 — PCEP Extensions for Stateful PCE](https://www.rfc-editor.org/rfc/rfc8231)
- [RFC 8664 — PCEP Extensions for Segment Routing](https://www.rfc-editor.org/rfc/rfc8664)
- [RFC 9552 — Distribution of Link-State and TE Information Using BGP](https://www.rfc-editor.org/rfc/rfc9552)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Articles | Advanced | Free |

## Bibliography

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (Paid)

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [Segment Routing: SR-MPLS](./segment-routing.md)
- [SRv6 and uSID](./srv6.md)
- [Broadband access: PON, DOCSIS, BNG, PPPoE and IPoE](./broadband-access.md)
- [Optical transport: DWDM and OTN](./optical-transport.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
