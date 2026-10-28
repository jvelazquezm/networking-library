---
title: "EIGRP"
description: "Cisco's advanced distance-vector protocol: DUAL, successors and feasible successors, composite metric and stub routing."
sidebar_position: 4
---

# EIGRP

**Level:** Intermediate · **Section:** [IP Routing](./index.md)

## Overview

EIGRP uses the Diffusing Update Algorithm to compute loop-free paths and keeps pre-computed backup paths (feasible successors) for near-instant failover. It was Cisco-proprietary until it was published as an informational RFC in 2016, and it is still common in Cisco enterprise networks. It is covered in CCNA, ENCOR and ENARSI.

:::info Vendor notes
EIGRP is implemented almost exclusively by Cisco. Open-source support exists in FRRouting, but other vendors do not ship it.
:::

## Key concepts

- Neighbour discovery and the topology table
- DUAL, successors and feasible successors
- Feasibility condition
- Composite metric and wide metrics
- Stub routing and summarisation
- Named mode

## Before you start

- [Dynamic routing concepts and RIP](dynamic-routing-and-rip.md)

## Standards and specifications

- [RFC 7868 — Cisco's Enhanced Interior Gateway Routing Protocol (EIGRP)](https://www.rfc-editor.org/rfc/rfc7868)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 25: RIP and EIGRP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (Paid)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (Paid)

## Hands-on lab

Build an EIGRP topology with unequal paths, identify the feasible successor and fail the primary path.

## Related topics

- [Static routing](./static-routing.md)
- [Dynamic routing concepts and RIP](./dynamic-routing-and-rip.md)
- [OSPF](./ospf.md)
- [IS-IS](./is-is.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
