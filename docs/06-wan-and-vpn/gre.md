---
title: "GRE tunnels"
description: "Generic Routing Encapsulation: carrying any protocol, including multicast and routing protocols, over IP."
sidebar_position: 2
---

# GRE tunnels

**Level:** Intermediate · **Section:** [WAN, VPNs and Overlays](./index.md)

## Overview

GRE wraps one packet inside another, creating a virtual point-to-point link across an IP network. Because it carries multicast, it lets routing protocols run over the tunnel — which plain IPsec cannot do — so GRE over IPsec became the classic site-to-site design. Tunnels add overhead, so MTU and MSS adjustments matter.

## Key concepts

- GRE header and encapsulation
- Tunnel source, destination and addressing
- Running OSPF/EIGRP/BGP over GRE
- Recursive routing problems
- MTU, fragmentation and MSS clamping
- GRE over IPsec

## Before you start

- [Static routing](../04-routing/static-routing.md)

## Standards and specifications

- [RFC 2784 — Generic Routing Encapsulation (GRE)](https://www.rfc-editor.org/rfc/rfc2784)
- [RFC 2890 — Key and Sequence Number Extensions to GRE](https://www.rfc-editor.org/rfc/rfc2890)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [Linux ip-tunnel(8) manual page](https://man7.org/linux/man-pages/man8/ip-tunnel.8.html) | Docs | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Build a GRE tunnel between two Linux routers across a third, run OSPF over it and fix MTU issues with MSS clamping.

## Related topics

- [WAN technologies](./wan-technologies.md)
- [IPsec and IKEv2](./ipsec.md)
- [Remote access VPN: TLS VPN and WireGuard](./remote-access-vpn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
