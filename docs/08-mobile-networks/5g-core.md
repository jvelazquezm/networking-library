---
title: "5G Core: SBA, PFCP, GTP-U and NGAP"
description: "The cloud-native core network: network functions, service-based interfaces, control/user plane separation and its protocols."
sidebar_position: 5
---

# 5G Core: SBA, PFCP, GTP-U and NGAP

**Level:** Advanced · **Section:** [Mobile Networks](./index.md)

## Overview

The 5G Core is a set of network functions — AMF, SMF, UPF, AUSF, UDM, PCF, NRF, NSSF and more — that talk to each other over HTTP/2 APIs. The SMF controls the UPF over PFCP; user traffic is tunnelled in GTP-U; the RAN talks to the AMF over NGAP on SCTP. Running these functions as containers on Kubernetes is now the norm.

## Key concepts

- Network functions and their roles
- Service-based interfaces (HTTP/2, OpenAPI)
- NRF discovery
- N2/NGAP over SCTP
- N4/PFCP and CUPS
- N3/GTP-U and UPF placement
- Cloud-native deployment on Kubernetes

## Before you start

- [5G System architecture](5g-system.md)
- [Kubernetes networking](../09-data-center-and-cloud/kubernetes-networking.md)

## Standards and specifications

- [3GPP TS 23.501 — System architecture for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 29.500 — Technical realization of Service Based Architecture](https://www.3gpp.org/ftp/Specs/archive/29_series/29.500)
- [3GPP TS 29.244 — PFCP — interface between control and user plane](https://www.3gpp.org/ftp/Specs/archive/29_series/29.244)
- [3GPP TS 38.413 — NG Application Protocol (NGAP)](https://www.3gpp.org/ftp/Specs/archive/38_series/38.413)
- [3GPP TS 29.281 — GTP-U](https://www.3gpp.org/ftp/Specs/archive/29_series/29.281)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Open book | Intermediate | Free |
| [Open5GS — open source 4G/5G core](https://open5gs.org/) | Open source | Advanced | Free |
| [free5GC — open source 5G core](https://free5gc.org/) | Open source | Advanced | Free |
| [UERANSIM — 5G UE and gNB simulator](https://github.com/aligungr/UERANSIM) | Open source | Advanced | Free |

## Bibliography

- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (Paid)

## Hands-on lab

Deploy free5GC or Open5GS on Kubernetes, then trace NRF discovery, PFCP session establishment and GTP-U traffic for one UE.

## Related topics

- [5G System architecture](./5g-system.md)
- [5G NR and NG-RAN](./5g-nr-and-ng-ran.md)
- [Voice: IMS, VoLTE and VoNR](./ims-and-voice.md)
- [Open RAN](./open-ran.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
