---
title: "Time-Sensitive Networking and DetNet"
description: "Deterministic Ethernet and IP: bounded latency and zero congestion loss for industrial, automotive and 5G fronthaul networks."
sidebar_position: 11
---

# Time-Sensitive Networking and DetNet

**Level:** Advanced · **Section:** [Switching and Ethernet](./index.md)

## Overview

Most networks are best effort. Time-Sensitive Networking (IEEE 802.1 TSN) adds time synchronisation, scheduled traffic, frame preemption and redundancy so that critical traffic gets guaranteed latency over Ethernet. DetNet (IETF) extends the same guarantees across routed networks. TSN is used in factories, cars and mobile fronthaul.

## Key concepts

- Time synchronisation (802.1AS)
- Scheduled traffic (802.1Qbv)
- Frame preemption
- Frame replication and elimination (802.1CB)
- TSN profiles for industry and fronthaul
- DetNet architecture

## Before you start

- [Time: NTP, NTS and PTP](../05-ip-services/time-synchronization.md)

## Standards and specifications

- [IEEE 802.1 TSN Task Group](https://1.ieee802.org/tsn/)
- [RFC 8655 — Deterministic Networking Architecture](https://www.rfc-editor.org/rfc/rfc8655)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [IETF DetNet working group](https://datatracker.ietf.org/wg/detnet/about/) | Standards body | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [QinQ and provider bridging](./qinq-and-provider-bridging.md)
- [Ethernet OAM: CFM and Y.1731](./ethernet-oam.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
