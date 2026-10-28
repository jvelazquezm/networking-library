---
title: "Timing and synchronization for transport networks"
description: "Frequency and phase synchronisation for mobile networks: GNSS, SyncE, PTP telecom profiles and time error budgets."
sidebar_position: 13
---

# Timing and synchronization for transport networks

**Level:** Advanced · **Section:** [Service Provider and Transport Networks](./index.md)

## Overview

Radio networks need tight frequency and phase alignment — TDD 5G requires phase accuracy of about ±1.5 µs at the air interface. Operators distribute time from GNSS-fed grandmasters using Synchronous Ethernet for frequency and PTP telecom profiles for phase, with boundary clocks in every node. Designing time error budgets and protecting against GNSS outages are specialist skills.

## Key concepts

- Frequency, phase and time
- GNSS sources and holdover
- Synchronous Ethernet and ESMC
- PTP telecom profiles G.8275.1 and G.8275.2
- Boundary and transparent clocks
- Time error budgets

## Before you start

- [Time: NTP, NTS and PTP](../05-ip-services/time-synchronization.md)

## Standards and specifications

- [ITU-T G.8262 — Timing characteristics of SyncE equipment clocks](https://www.itu.int/rec/T-REC-G.8262)
- [ITU-T G.8275.1 — PTP telecom profile for phase/time with full timing support](https://www.itu.int/rec/T-REC-G.8275.1)
- [ITU-T G.8275.2 — PTP telecom profile with partial timing support](https://www.itu.int/rec/T-REC-G.8275.2)
- [IEEE 1588 — Precision Time Protocol](https://standards.ieee.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [LinuxPTP project](https://linuxptp.sourceforge.net/) | Open source | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Run linuxptp with hardware timestamping between two hosts (or software timestamping in a lab) and observe the offset and path delay.

## Related topics

- [Optical transport: DWDM and OTN](./optical-transport.md)
- [Metro, backhaul and fronthaul](./metro-backhaul-fronthaul.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
