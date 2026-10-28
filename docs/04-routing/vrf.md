---
title: "VRF and VRF-Lite"
description: "Multiple independent routing tables on one router for segmentation and multi-tenancy."
sidebar_position: 11
---

# VRF and VRF-Lite

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

A VRF is a separate routing and forwarding table on the same device, letting overlapping address spaces and isolated networks share hardware. VRF-Lite uses VRFs hop by hop without MPLS — common for segmentation in enterprises and data centres — while MPLS L3VPN uses them at the edge of a provider network. Route leaking between VRFs lets shared services reach several tenants.

## Key concepts

- VRF concepts and interfaces
- VRF-Lite with subinterfaces
- Overlapping address spaces
- VRF-aware services (ping, SSH, NTP)
- Route leaking
- Management VRF

## Before you start

- [Static routing](static-routing.md)

## Standards and specifications

- [RFC 4364 — BGP/MPLS IP Virtual Private Networks (VRF concept)](https://www.rfc-editor.org/rfc/rfc4364)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 54: Virtualization (VRF)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (Paid)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Create two customer VRFs with overlapping addresses on the same routers and leak a shared-services prefix into both.

## Related topics

- [Redistribution, route filtering and route maps](./redistribution-and-filtering.md)
- [Policy-based routing](./policy-based-routing.md)
- [First hop redundancy: VRRP, HSRP and GLBP](./first-hop-redundancy.md)
- [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](./fast-convergence.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
