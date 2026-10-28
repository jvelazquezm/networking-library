---
title: "EVPN"
description: "Ethernet VPN: BGP as the control plane for Layer 2 and Layer 3 services over MPLS, SR or VXLAN."
sidebar_position: 5
---

# EVPN

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

EVPN replaces flood-and-learn with BGP: PEs advertise MAC and IP addresses as routes, supporting active-active multihoming, fast convergence and integrated routing and bridging. It runs over MPLS, Segment Routing and VXLAN, making it the common service layer for both carrier networks and data centres. Nokia's new NRS II certification is built around it.

## Key concepts

- EVPN route types 1–5
- Ethernet segments and ESI
- All-active and single-active multihoming
- MAC mobility
- Integrated routing and bridging (symmetric, asymmetric)
- EVPN-VPWS
- EVPN over MPLS, SR and VXLAN

## Before you start

- [MPLS and LDP](mpls.md)
- [Advanced BGP](../04-routing/bgp-advanced.md)

## Standards and specifications

- [RFC 7432 — BGP MPLS-Based Ethernet VPN](https://www.rfc-editor.org/rfc/rfc7432)
- [RFC 8214 — Virtual Private Wire Service Support in EVPN](https://www.rfc-editor.org/rfc/rfc8214)
- [RFC 9135 — Integrated Routing and Bridging in EVPN](https://www.rfc-editor.org/rfc/rfc9135)
- [RFC 9136 — IP Prefix Advertisement in EVPN](https://www.rfc-editor.org/rfc/rfc9136)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *EVPN in the Data Center* — Dinesh Dutt (Paid)
- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (Paid)

## Hands-on lab

Deploy EVPN-MPLS (or EVPN-VXLAN) between three SR Linux or cEOS nodes with an all-active multihomed CE and fail one PE.

## Related topics

- [MPLS L3VPN, 6PE and 6VPE](./mpls-l3vpn.md)
- [L2VPN: pseudowires and VPLS](./l2vpn.md)
- [Traffic engineering: RSVP-TE](./traffic-engineering.md)
- [Segment Routing: SR-MPLS](./segment-routing.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
