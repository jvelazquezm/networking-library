---
title: "5G NR and NG-RAN"
description: "The 5G radio: numerologies, frame structure, the NR protocol stack, massive MIMO and the gNB CU/DU split."
sidebar_position: 4
---

# 5G NR and NG-RAN

**Level:** Advanced · **Section:** [Mobile Networks](./index.md)

## Overview

NR supports many subcarrier spacings (numerologies) to serve bands from below 1 GHz to mmWave, with flexible slot structures and beam management. The gNB can be split into a central unit (CU), distributed unit (DU) and radio unit (RU), connected by F1 and fronthaul. Understanding the protocol stack — SDAP, PDCP, RLC, MAC, PHY — explains where latency and capacity come from.

## Key concepts

- Numerologies and frame structure
- Bandwidth parts
- SSB, beam management and massive MIMO
- Protocol stack: RRC, SDAP, PDCP, RLC, MAC, PHY
- gNB-CU/DU split and F1
- Functional splits (option 2, 7.2x)
- NG and Xn interfaces

## Before you start

- [5G System architecture](5g-system.md)

## Standards and specifications

- [3GPP TS 38.300 — NR and NG-RAN overall description](https://www.3gpp.org/ftp/Specs/archive/38_series/38.300)
- [3GPP TS 38.401 — NG-RAN architecture description](https://www.3gpp.org/ftp/Specs/archive/38_series/38.401)
- [3GPP TS 38.211 — NR physical channels and modulation](https://www.3gpp.org/ftp/Specs/archive/38_series/38.211)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [ShareTechnote — LTE / 5G protocol notes](https://www.sharetechnote.com/) | Reference | Intermediate | Free |
| [srsRAN Project](https://www.srsran.com/) | Open source | Advanced | Free |
| [OpenAirInterface](https://openairinterface.org/) | Open source | Advanced | Free |

## Bibliography

- *5G NR: The Next Generation Wireless Access Technology* — Erik Dahlman, Stefan Parkvall, Johan Sköld (Paid)

## Hands-on lab

Run srsRAN Project or OpenAirInterface in RF-simulator mode with a simulated UE and inspect the RRC messages.

## Related topics

- [4G LTE and the EPC](./lte-and-epc.md)
- [5G System architecture](./5g-system.md)
- [5G Core: SBA, PFCP, GTP-U and NGAP](./5g-core.md)
- [Voice: IMS, VoLTE and VoNR](./ims-and-voice.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
