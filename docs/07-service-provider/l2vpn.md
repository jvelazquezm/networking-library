---
title: "L2VPN: pseudowires and VPLS"
description: "Carrying Ethernet across an MPLS network: point-to-point pseudowires and multipoint VPLS."
sidebar_position: 4
---

# L2VPN: pseudowires and VPLS

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

Layer 2 VPNs make a provider network look like a cable or a switch to the customer. Pseudowires (VPWS) emulate point-to-point circuits signalled by LDP or BGP; VPLS emulates a multipoint LAN with MAC learning on the PEs. Both are widely deployed but are being replaced by EVPN, which fixes their scaling and multihoming limitations.

## Key concepts

- Attachment circuits
- VPWS / pseudowires
- LDP and BGP signalling
- VPLS and H-VPLS
- MAC learning and split horizon
- Limitations that led to EVPN

## Before you start

- [MPLS and LDP](mpls.md)

## Standards and specifications

- [RFC 8077 — Pseudowire Setup and Maintenance Using LDP](https://www.rfc-editor.org/rfc/rfc8077)
- [RFC 4761 — VPLS Using BGP for Auto-Discovery and Signaling](https://www.rfc-editor.org/rfc/rfc4761)
- [RFC 4762 — VPLS Using LDP Signaling](https://www.rfc-editor.org/rfc/rfc4762)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (Paid)

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [MPLS and LDP](./mpls.md)
- [MPLS L3VPN, 6PE and 6VPE](./mpls-l3vpn.md)
- [EVPN](./evpn.md)
- [Traffic engineering: RSVP-TE](./traffic-engineering.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
