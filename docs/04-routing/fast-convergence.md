---
title: "Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA"
description: "Detecting failures in milliseconds and repairing paths before the routing protocol reconverges."
sidebar_position: 13
---

# Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA

**Level:** Advanced · **Section:** [IP Routing](./index.md)

## Overview

Routing protocol timers are measured in seconds; applications care about milliseconds. BFD detects link and neighbour failures quickly and tells the routing protocols; graceful restart and non-stop routing keep forwarding through control-plane restarts; Loop-Free Alternates and TI-LFA pre-install backup paths so traffic is repaired locally while the network reconverges.

## Key concepts

- Failure detection vs reconvergence
- BFD single-hop and multihop
- Graceful restart and non-stop routing
- SPF and LSA throttling
- Loop-Free Alternates (LFA) and remote LFA
- TI-LFA with Segment Routing
- BGP Prefix Independent Convergence

## Before you start

- [OSPF](ospf.md)

## Standards and specifications

- [RFC 5880 — Bidirectional Forwarding Detection (BFD)](https://www.rfc-editor.org/rfc/rfc5880)
- [RFC 5881 — BFD for IPv4 and IPv6 (Single Hop)](https://www.rfc-editor.org/rfc/rfc5881)
- [RFC 5286 — Basic Specification for IP Fast Reroute: Loop-Free Alternates](https://www.rfc-editor.org/rfc/rfc5286)
- [RFC 4724 — Graceful Restart Mechanism for BGP](https://www.rfc-editor.org/rfc/rfc4724)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Articles | Advanced | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (Paid)

## Hands-on lab

Enable BFD under OSPF or IS-IS in your lab, fail a link silently (drop packets with tc) and compare convergence time with and without BFD.

## Related topics

- [VRF and VRF-Lite](./vrf.md)
- [First hop redundancy: VRRP, HSRP and GLBP](./first-hop-redundancy.md)
- [IP multicast: IGMP, PIM, SSM, MSDP and BIER](./multicast.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
