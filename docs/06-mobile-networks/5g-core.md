---
title: "5G Core (5GC)"
description: "The cloud native core network: AMF, SMF, UPF and friends, the service-based interfaces and how it runs on Kubernetes."
sidebar_position: 5
---

# 5G Core (5GC)

**Level:** Advanced · **Section:** [Mobile Networks](./index.md)

## Overview

The cloud native core network: AMF, SMF, UPF and friends, the service-based interfaces and how it runs on Kubernetes.

## Key concepts

- Network functions (AMF, SMF, UPF, AUSF, UDM, PCF, NRF, NSSF)
- Service-based interfaces (HTTP/2, JSON)
- Control/user plane separation
- UPF placement and edge
- Cloud native deployment

## Before you start

- [5G System architecture](5g-system-architecture.md)
- [Kubernetes networking](../07-data-center-and-cloud/kubernetes-networking.md)

## Standards and specifications

- [3GPP TS 23.501 — System architecture for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 29.500 — 5G System; Technical Realization of Service Based Architecture](https://www.3gpp.org/ftp/Specs/archive/29_series/29.500)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Open5GS — open source 5G core](https://open5gs.org/) | Open source | Advanced | Free |
| [free5GC](https://free5gc.org/) | Open source | Advanced | Free |

## Hands-on lab

Deploy free5GC or Open5GS on Kubernetes and trace an NRF discovery request between functions.

## Related topics

- [Cellular fundamentals](./cellular-fundamentals.md)
- [4G LTE and the EPC](./lte-and-epc.md)
- [5G System architecture](./5g-system-architecture.md)
- [5G NR and NG-RAN](./5g-ran.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
