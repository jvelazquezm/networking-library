---
title: "4G LTE and the EPC"
description: "The 4G architecture: E-UTRAN and eNodeB, the Evolved Packet Core, bearers, attach and handover."
sidebar_position: 2
---

# 4G LTE and the EPC

**Level:** Intermediate · **Section:** [Mobile Networks](./index.md)

## Overview

LTE introduced an all-IP mobile network: eNodeBs connect directly to an Evolved Packet Core of MME, SGW, PGW and HSS. Traffic flows through bearers with QoS identified by QCI; procedures such as attach, service request and handover are defined in detail by 3GPP. 5G non-standalone still relies on the EPC, and its concepts map directly onto the 5G Core.

## Key concepts

- eNodeB and the X2 and S1 interfaces
- MME, SGW, PGW, HSS and PCRF
- EPS bearers and QCI
- Attach, TAU and service request
- S1 and X2 handover
- GTP-C and GTP-U
- Diameter interfaces

## Before you start

- [Cellular fundamentals](cellular-fundamentals.md)

## Standards and specifications

- [3GPP TS 36.300 — E-UTRA and E-UTRAN overall description](https://www.3gpp.org/ftp/Specs/archive/36_series/36.300)
- [3GPP TS 23.401 — GPRS enhancements for E-UTRAN access (EPC)](https://www.3gpp.org/ftp/Specs/archive/23_series/23.401)
- [3GPP TS 29.274 — GTPv2-C](https://www.3gpp.org/ftp/Specs/archive/29_series/29.274)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [ShareTechnote — LTE / 5G protocol notes](https://www.sharetechnote.com/) | Reference | Intermediate | Free |
| [Open5GS — open source 4G/5G core](https://open5gs.org/) | Open source | Advanced | Free |

## Bibliography

- *4G, LTE-Advanced Pro and The Road to 5G* — Erik Dahlman, Stefan Parkvall, Johan Sköld (Paid)

## Hands-on lab

Run Open5GS as an EPC with srsRAN 4G in ZeroMQ (no radio) mode and capture an attach procedure.

## Related topics

- [Cellular fundamentals](./cellular-fundamentals.md)
- [5G System architecture](./5g-system.md)
- [5G NR and NG-RAN](./5g-nr-and-ng-ran.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
