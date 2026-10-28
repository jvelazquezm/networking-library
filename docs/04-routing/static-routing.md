---
title: "Static routing"
description: "IPv4 and IPv6 static routes: network, host, default and floating static routes."
sidebar_position: 2
---

# Static routing

**Level:** Beginner · **Section:** [IP Routing](./index.md)

## Overview

Static routes are configured by hand and never change on their own. They are perfect for stub networks, default routes towards an ISP and backup paths (floating statics with a higher distance), and they remain the simplest way to understand how forwarding works. Combined with object tracking or BFD they can even fail over automatically.

## Key concepts

- Network, host and default routes
- Next-hop vs exit-interface routes
- Floating static routes
- IPv6 static routes and link-local next hops
- Null routes and blackholing
- Tracking and BFD for static routes

## Before you start

- [Routing fundamentals and route selection](routing-fundamentals.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 11: Static routing (plus troubleshooting labs)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

Connect three routers with static routes only, add a floating static backup path and fail the primary link.

## Related topics

- [Routing fundamentals and route selection](./routing-fundamentals.md)
- [Dynamic routing concepts and RIP](./dynamic-routing-and-rip.md)
- [EIGRP](./eigrp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
