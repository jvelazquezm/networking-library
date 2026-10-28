---
title: "Quality of Service (QoS)"
description: "Classifying, marking, queuing and shaping traffic so that what matters gets through when links are congested."
sidebar_position: 2
---

# Quality of Service (QoS)

**Level:** Intermediate · **Section:** [Network Operations](./index.md)

## Overview

Classifying, marking, queuing and shaping traffic so that what matters gets through when links are congested.

## Key concepts

- Classification and marking (DSCP)
- DiffServ per-hop behaviours
- Queuing (priority, WFQ)
- Policing vs shaping
- QoS in 5G (QoS flows, 5QI)

## Before you start

- [TCP and congestion control](../04-transport-and-applications/tcp.md)

## Standards and specifications

- [RFC 2474 — Definition of the Differentiated Services Field](https://www.rfc-editor.org/rfc/rfc2474)
- [RFC 2475 — An Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475)

## Learning resources

_No resources listed yet._ Know a good one? [Suggest it](../00-start-here/contributing.md) — see the format in the contribution guide.

## Hands-on lab

Shape a link to 10 Mbit/s with tc and prove that marked VoIP-like traffic keeps low latency under load.

## Related topics

- [Monitoring and observability](./monitoring-and-observability.md)
- [Troubleshooting methodology](./troubleshooting.md)
- [Performance measurement](./performance-measurement.md)
- [Network design principles](./network-design.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
