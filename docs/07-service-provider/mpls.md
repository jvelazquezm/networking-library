---
title: "MPLS and LDP"
description: "Label switching: labels, the LFIB, label distribution with LDP, PHP and why MPLS still matters."
sidebar_position: 2
---

# MPLS and LDP

**Level:** Intermediate · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

MPLS forwards packets by short labels instead of IP lookups, decoupling the forwarding path from the IP header. That made VPNs, traffic engineering and fast reroute possible over a shared core. LDP distributes labels hop by hop following the IGP. Segment Routing is replacing LDP in new designs, but MPLS forwarding remains the foundation.

## Key concepts

- Label stack and label operations (push, swap, pop)
- LSRs, LERs and FECs
- LIB and LFIB
- LDP sessions and label distribution
- Penultimate hop popping
- MPLS ping and traceroute
- LDP-IGP synchronisation

## Before you start

- [IS-IS](../04-routing/is-is.md)

## Standards and specifications

- [RFC 3031 — Multiprotocol Label Switching Architecture](https://www.rfc-editor.org/rfc/rfc3031)
- [RFC 3032 — MPLS Label Stack Encoding](https://www.rfc-editor.org/rfc/rfc3032)
- [RFC 5036 — LDP Specification](https://www.rfc-editor.org/rfc/rfc5036)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [FRRouting documentation](https://docs.frrouting.org/) | Docs | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *MPLS Fundamentals* — Luc De Ghein (Paid)
- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (Paid)

## Hands-on lab

Build a four-router IS-IS/LDP core in Containerlab and trace a labelled packet hop by hop with MPLS traceroute and Wireshark.

## Related topics

- [Service provider architecture, peering and IXPs](./sp-architecture.md)
- [MPLS L3VPN, 6PE and 6VPE](./mpls-l3vpn.md)
- [L2VPN: pseudowires and VPLS](./l2vpn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
