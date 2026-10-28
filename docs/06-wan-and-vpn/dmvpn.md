---
title: "DMVPN and NHRP"
description: "Dynamic multipoint VPNs: mGRE, NHRP and IPsec building on-demand spoke-to-spoke tunnels."
sidebar_position: 5
---

# DMVPN and NHRP

**Level:** Advanced · **Section:** [WAN, VPNs and Overlays](./index.md)

## Overview

DMVPN lets hundreds of spokes connect to a hub with a single multipoint GRE interface and build direct spoke-to-spoke tunnels on demand, resolved through NHRP and protected with IPsec. Phase 3 adds NHRP redirects and shortcuts for scalable routing. It is Cisco technology built on open standards (GRE, NHRP, IPsec) and remains common in enterprise WANs and in the CCIE Enterprise lab.

:::info Vendor notes
DMVPN is Cisco's design. Other vendors offer similar dynamic VPN features under other names, and SD-WAN has largely taken over new deployments.
:::

## Key concepts

- Multipoint GRE
- NHRP registration and resolution
- Phases 1, 2 and 3
- Routing protocol design over DMVPN
- Dual-hub designs
- IPsec profiles

## Before you start

- [GRE tunnels](gre.md)
- [IPsec and IKEv2](ipsec.md)

## Standards and specifications

- [RFC 2332 — NBMA Next Hop Resolution Protocol (NHRP)](https://www.rfc-editor.org/rfc/rfc2332)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (Paid)

## Hands-on lab

Build a DMVPN Phase 3 network with two hubs and three spokes, then verify that spoke-to-spoke traffic bypasses the hub.

## Related topics

- [IPsec and IKEv2](./ipsec.md)
- [Remote access VPN: TLS VPN and WireGuard](./remote-access-vpn.md)
- [SD-WAN](./sd-wan.md)
- [LISP](./lisp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
