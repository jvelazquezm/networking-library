---
title: "Open RAN"
description: "Disaggregating the radio access network: O-RAN architecture, open fronthaul, the RIC, xApps and rApps, SMO."
sidebar_position: 7
---

# Open RAN

**Level:** Advanced · **Section:** [Mobile Networks](./index.md)

## Overview

Open RAN breaks the base station into interoperable parts from different vendors — O-RU, O-DU and O-CU — connected by open interfaces, and adds programmability through the RAN Intelligent Controller. The near-real-time RIC hosts xApps over E2; the non-real-time RIC hosts rApps inside the Service Management and Orchestration framework, using A1 and O1. Interoperability testing and integration are the hard parts.

## Key concepts

- O-RU, O-DU, O-CU
- Open fronthaul (7.2x split, M-plane)
- Near-RT RIC, E2 and xApps
- Non-RT RIC, SMO, A1 and rApps
- O1 and O2 interfaces, O-Cloud
- Testing, integration and security

## Before you start

- [5G NR and NG-RAN](5g-nr-and-ng-ran.md)

## Standards and specifications

- [O-RAN Alliance specifications](https://specifications.o-ran.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [O-RAN Software Community documentation](https://docs.o-ran-sc.org/) | Docs | Advanced | Free |
| [OpenAirInterface](https://openairinterface.org/) | Open source | Advanced | Free |
| [O-RAN Alliance](https://www.o-ran.org/) | Standards body | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Deploy the O-RAN SC near-RT RIC and run a sample xApp against a simulated E2 node.

## Related topics

- [5G Core: SBA, PFCP, GTP-U and NGAP](./5g-core.md)
- [Voice: IMS, VoLTE and VoNR](./ims-and-voice.md)
- [Network slicing](./network-slicing.md)
- [Private 5G and edge computing (MEC)](./private-5g-and-mec.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
