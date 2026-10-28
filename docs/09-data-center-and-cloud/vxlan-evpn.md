---
title: "VXLAN, Geneve and EVPN"
description: "Overlays for multi-tenant data centres: VXLAN and Geneve encapsulation with an EVPN control plane."
sidebar_position: 5
---

# VXLAN, Geneve and EVPN

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Overlays let tenants have their own Layer 2 and Layer 3 networks on top of a shared routed fabric. VXLAN encapsulates Ethernet frames in UDP with a 24-bit VNI; Geneve adds extensible options and is used by many cloud and SDN platforms. EVPN distributes MAC and IP reachability with BGP, avoiding flood-and-learn and enabling anycast gateways and multihoming.

## Key concepts

- VXLAN header and VNIs
- VTEPs and BUM replication (ingress, multicast)
- Geneve
- EVPN route types 2, 3 and 5
- L2VNI vs L3VNI
- Symmetric and asymmetric IRB
- Anycast gateway
- Multi-site and DCI

## Before you start

- [Data center fabrics: leaf-spine and BGP in the DC](dc-fabrics.md)
- [EVPN](../07-service-provider/evpn.md)

## Standards and specifications

- [RFC 7348 — Virtual eXtensible Local Area Network (VXLAN)](https://www.rfc-editor.org/rfc/rfc7348)
- [RFC 8926 — Geneve: Generic Network Virtualization Encapsulation](https://www.rfc-editor.org/rfc/rfc8926)
- [RFC 8365 — Network Virtualization Overlay Solution Using EVPN](https://www.rfc-editor.org/rfc/rfc8365)
- [RFC 9135 — Integrated Routing and Bridging in EVPN](https://www.rfc-editor.org/rfc/rfc9135)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *EVPN in the Data Center* — Dinesh Dutt (Paid)
- *Cloud Native Data Center Networking* — Dinesh Dutt (Paid)

## Hands-on lab

Add VXLAN/EVPN to the leaf-spine lab, stretch a Layer 2 segment across leaves and add a routed L3VNI with an anycast gateway.

## Related topics

- [SDN and controller-based networking](./sdn.md)
- [Data center fabrics: leaf-spine and BGP in the DC](./dc-fabrics.md)
- [Campus fabrics: SD-Access, LISP and VXLAN](./campus-fabrics.md)
- [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](./ai-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
