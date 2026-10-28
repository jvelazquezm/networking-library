---
title: "Advanced BGP"
description: "Policy at scale: communities, route reflectors, confederations, Add-Path, multipath, dampening, BGP-based traffic engineering and Internet-scale operations."
sidebar_position: 8
---

# Advanced BGP

**Level:** Advanced · **Section:** [IP Routing](./index.md)

## Overview

Large networks use BGP for far more than Internet connectivity: it carries VPN routes, EVPN, Flowspec and link-state information. Scaling iBGP requires route reflectors or confederations; communities and large communities carry policy signals between networks; Add-Path and multipath improve resilience and load sharing. Professional and expert exams across all vendors focus heavily here.

## Key concepts

- Route maps / routing policies and prefix lists
- Standard, extended and large communities
- Route reflectors and clusters
- Confederations
- Add-Path and BGP multipath
- Graceful restart and BGP PIC
- Route servers at IXPs
- Peering vs transit policy

## Before you start

- [BGP fundamentals](bgp-fundamentals.md)

## Standards and specifications

- [RFC 4456 — BGP Route Reflection](https://www.rfc-editor.org/rfc/rfc4456)
- [RFC 5065 — Autonomous System Confederations for BGP](https://www.rfc-editor.org/rfc/rfc5065)
- [RFC 1997 — BGP Communities Attribute](https://www.rfc-editor.org/rfc/rfc1997)
- [RFC 8092 — BGP Large Communities](https://www.rfc-editor.org/rfc/rfc8092)
- [RFC 7911 — Advertisement of Multiple Paths in BGP](https://www.rfc-editor.org/rfc/rfc7911)
- [RFC 7947 — Internet Exchange BGP Route Server](https://www.rfc-editor.org/rfc/rfc7947)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermediate | Free |
| [RIPE Labs](https://labs.ripe.net/) | Articles | Intermediate | Free |
| [MANRS — Mutually Agreed Norms for Routing Security](https://manrs.org/) | Guide | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |
| [NANOG — operator talks and tutorials](https://www.nanog.org/) | Video | Advanced | Free |

## Bibliography

- *Internet Routing Architectures* — Sam Halabi (Paid)
- *BGP Design and Implementation* — Randy Zhang, Micah Bartell (Paid)

## Hands-on lab

Build a service provider core with two route reflectors and use communities to tag customer, peer and transit routes and filter accordingly.

## Related topics

- [IS-IS](./is-is.md)
- [BGP fundamentals](./bgp-fundamentals.md)
- [Redistribution, route filtering and route maps](./redistribution-and-filtering.md)
- [Policy-based routing](./policy-based-routing.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
