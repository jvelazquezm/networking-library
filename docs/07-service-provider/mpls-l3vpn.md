---
title: "MPLS L3VPN, 6PE and 6VPE"
description: "BGP/MPLS IP VPNs: VRFs, route distinguishers and targets, MP-BGP VPNv4/VPNv6 and PE-CE routing."
sidebar_position: 3
---

# MPLS L3VPN, 6PE and 6VPE

**Level:** Intermediate · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

MPLS L3VPN lets one provider network carry thousands of isolated customer networks with overlapping addresses. Each PE keeps a VRF per customer; MP-BGP carries VPN routes tagged with route distinguishers and route targets; the MPLS label stack identifies the VRF at the egress PE. 6PE and 6VPE carry IPv6 over an IPv4 MPLS core.

## Key concepts

- PE, P and CE
- VRFs, RDs and RTs
- MP-BGP VPNv4 and VPNv6
- VPN label and transport label
- PE-CE routing (static, OSPF, BGP)
- Hub-and-spoke and extranet VPNs
- 6PE and 6VPE
- Inter-AS options (A, B, C)

## Before you start

- [MPLS and LDP](mpls.md)
- [VRF and VRF-Lite](../04-routing/vrf.md)

## Standards and specifications

- [RFC 4364 — BGP/MPLS IP Virtual Private Networks](https://www.rfc-editor.org/rfc/rfc4364)
- [RFC 4659 — BGP-MPLS IP VPN Extension for IPv6 VPN (6VPE)](https://www.rfc-editor.org/rfc/rfc4659)
- [RFC 4798 — Connecting IPv6 Islands over IPv4 MPLS (6PE)](https://www.rfc-editor.org/rfc/rfc4798)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *MPLS Fundamentals* — Luc De Ghein (Paid)
- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (Paid)

## Hands-on lab

Add two customer VRFs to your MPLS core with eBGP PE-CE routing, create an extranet route and verify isolation.

## Related topics

- [Service provider architecture, peering and IXPs](./sp-architecture.md)
- [MPLS and LDP](./mpls.md)
- [L2VPN: pseudowires and VPLS](./l2vpn.md)
- [EVPN](./evpn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
