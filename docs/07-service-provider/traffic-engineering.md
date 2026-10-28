---
title: "Traffic engineering: RSVP-TE"
description: "Steering traffic away from shortest paths with RSVP-TE tunnels, constraints and fast reroute."
sidebar_position: 6
---

# Traffic engineering: RSVP-TE

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

IGPs always choose the shortest path, which can overload some links while others sit idle. MPLS traffic engineering builds explicit label-switched paths that respect bandwidth and administrative constraints, signalled with RSVP-TE, and protects them with fast reroute. It is complex to operate at scale, which is a major reason for the move to Segment Routing.

## Key concepts

- Constraint-based routing (CSPF)
- IGP TE extensions
- RSVP-TE signalling and reservations
- Explicit and dynamic paths
- Auto-bandwidth
- Fast reroute: link and node protection

## Before you start

- [MPLS and LDP](mpls.md)

## Standards and specifications

- [RFC 3209 — RSVP-TE: Extensions to RSVP for LSP Tunnels](https://www.rfc-editor.org/rfc/rfc3209)
- [RFC 4090 — Fast Reroute Extensions to RSVP-TE](https://www.rfc-editor.org/rfc/rfc4090)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (Paid)

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [L2VPN: pseudowires and VPLS](./l2vpn.md)
- [EVPN](./evpn.md)
- [Segment Routing: SR-MPLS](./segment-routing.md)
- [SRv6 and uSID](./srv6.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
