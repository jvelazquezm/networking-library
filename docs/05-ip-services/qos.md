---
title: "Quality of Service (QoS)"
description: "Classification, marking, queuing, policing, shaping and congestion avoidance \u2014 and how to design an end-to-end policy."
sidebar_position: 5
---

# Quality of Service (QoS)

**Level:** Beginner · **Section:** [IP Services](./index.md)

## Overview

When a link is congested something must wait or be dropped; QoS decides what. Traffic is classified and marked (DSCP, CoS), then queued with priority or weighted scheduling, policed or shaped to rates, and protected from global synchronisation with WRED. The DiffServ model gives each class a per-hop behaviour; a good design uses a handful of classes consistently end to end.

## Key concepts

- IntServ vs DiffServ
- Classification and trust boundaries
- Marking: DSCP, CoS, EXP
- Per-hop behaviours: EF, AF, CS, default
- Queuing: priority, CBWFQ
- Policing vs shaping
- WRED and ECN
- Modular QoS CLI and equivalent vendor models

## Before you start

- [Performance basics: bandwidth, throughput, latency and jitter](../01-fundamentals/performance-basics.md)

## Standards and specifications

- [RFC 2474 — Definition of the Differentiated Services Field](https://www.rfc-editor.org/rfc/rfc2474)
- [RFC 2475 — An Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475)
- [RFC 3246 — An Expedited Forwarding PHB](https://www.rfc-editor.org/rfc/rfc3246)
- [RFC 2597 — Assured Forwarding PHB Group](https://www.rfc-editor.org/rfc/rfc2597)
- [RFC 4594 — Configuration Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594)
- [RFC 3168 — Explicit Congestion Notification](https://www.rfc-editor.org/rfc/rfc3168)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 46–47: QoS](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *End-to-End QoS Network Design* — Tim Szigeti, Christina Hattingh, Robert Barton, Kenneth Briley (Paid)
- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Shape a link to 10 Mbit/s with tc, mark a voice-like flow EF and prove its latency stays low while a bulk transfer saturates the link.

## Related topics

- [NAT and PAT](./nat.md)
- [Time: NTP, NTS and PTP](./time-synchronization.md)
- [Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP](./device-management.md)
- [Voice and video over IP: SIP and RTP](./voice-and-video.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
