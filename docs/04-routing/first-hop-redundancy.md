---
title: "First hop redundancy: VRRP, HSRP and GLBP"
description: "Keeping the default gateway available when a router fails, with standard VRRP and Cisco's HSRP and GLBP."
sidebar_position: 12
---

# First hop redundancy: VRRP, HSRP and GLBP

**Level:** Beginner · **Section:** [IP Routing](./index.md)

## Overview

Hosts usually have a single default gateway. First hop redundancy protocols let two or more routers share a virtual IP and MAC address so that one takes over if the other fails. VRRP is the IETF standard; HSRP is Cisco's widely deployed equivalent; GLBP adds load balancing across gateways. In modern fabrics, anycast gateways achieve the same goal.

:::info Vendor notes
HSRP and GLBP are Cisco-specific; VRRP is supported by all major vendors.
:::

## Key concepts

- Virtual IP and virtual MAC
- Active/standby and priority
- Preemption
- Interface and object tracking
- HSRP versions 1 and 2
- GLBP load balancing
- Anycast gateway in EVPN fabrics

## Before you start

- [Static routing](static-routing.md)

## Standards and specifications

- [RFC 9568 — Virtual Router Redundancy Protocol (VRRP) Version 3](https://www.rfc-editor.org/rfc/rfc9568)
- [RFC 2281 — Cisco Hot Standby Router Protocol (HSRP)](https://www.rfc-editor.org/rfc/rfc2281)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 29: First hop redundancy protocols](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Configure VRRP (or HSRP) between two routers with uplink tracking, then shut the uplink and watch the gateway fail over.

## Related topics

- [Policy-based routing](./policy-based-routing.md)
- [VRF and VRF-Lite](./vrf.md)
- [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](./fast-convergence.md)
- [IP multicast: IGMP, PIM, SSM, MSDP and BIER](./multicast.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
