---
title: "5G System architecture"
description: "The end-to-end 5G System: NSA vs SA, the service-based core, PDU sessions, QoS flows and key procedures."
sidebar_position: 3
---

# 5G System architecture

**Level:** Intermediate · **Section:** [Mobile Networks](./index.md)

## Overview

The 5G System combines a new radio (NR) with a cloud-native, service-based core. Non-standalone 5G anchors on 4G; standalone 5G uses the 5G Core end to end, enabling slicing and new QoS. User traffic flows in PDU sessions containing QoS flows identified by 5QI. Registration and PDU session establishment are the two procedures to know by heart.

## Key concepts

- NSA (option 3x) vs SA (option 2)
- Reference points vs service-based interfaces
- Registration and connection management
- PDU sessions and QoS flows (5QI)
- Identifiers: SUPI, SUCI, GUTI, DNN, S-NSSAI
- Releases 15–19 and 5G-Advanced

## Before you start

- [4G LTE and the EPC](lte-and-epc.md)

## Standards and specifications

- [3GPP TS 23.501 — System architecture for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 23.502 — Procedures for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.502)
- [3GPP TS 23.503 — Policy and charging control framework for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.503)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Open book | Intermediate | Free |
| [ShareTechnote — LTE / 5G protocol notes](https://www.sharetechnote.com/) | Reference | Intermediate | Free |
| [3GPP — 5G system overview](https://www.3gpp.org/technologies/5g-system-overview) | Article | Intermediate | Free |

## Bibliography

- [*Private 5G: A Systems Approach*](https://5g.systemsapproach.org/) — Larry Peterson, Oguz Sunay, Bruce Davie (Free)
- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (Paid)

## Hands-on lab

Deploy Open5GS (or free5GC) with UERANSIM and capture a full registration and PDU session establishment in Wireshark.

## Related topics

- [Cellular fundamentals](./cellular-fundamentals.md)
- [4G LTE and the EPC](./lte-and-epc.md)
- [5G NR and NG-RAN](./5g-nr-and-ng-ran.md)
- [5G Core: SBA, PFCP, GTP-U and NGAP](./5g-core.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
