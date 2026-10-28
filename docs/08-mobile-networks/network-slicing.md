---
title: "Network slicing"
description: "Multiple logical networks with different guarantees over shared infrastructure, end to end across RAN, transport and core."
sidebar_position: 8
---

# Network slicing

**Level:** Advanced · **Section:** [Mobile Networks](./index.md)

## Overview

A network slice is a logical end-to-end network with its own characteristics — throughput, latency, isolation — identified by an S-NSSAI. Slicing spans the RAN (scheduling, resource partitioning), transport (VPNs, SR policies, Flex-Algo) and core (dedicated or shared network functions), and needs orchestration to create and assure slices on demand.

## Key concepts

- S-NSSAI, SST and SD
- NSSF and slice selection
- RAN slicing and resource partitioning
- Transport slicing (IETF network slices)
- Core slicing: shared vs dedicated NFs
- Slice management and assurance (NSMF, NSSMF)
- Commercial use cases

## Before you start

- [5G Core: SBA, PFCP, GTP-U and NGAP](5g-core.md)
- [Segment Routing: SR-MPLS](../07-service-provider/segment-routing.md)

## Standards and specifications

- [3GPP TS 23.501 — System architecture for the 5G System (clause 5.15, slicing)](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 28.530 — Management and orchestration; concepts, use cases and requirements](https://www.3gpp.org/ftp/Specs/archive/28_series/28.530)
- [RFC 9543 — A Framework for Network Slices in Networks Built from IETF Technologies](https://www.rfc-editor.org/rfc/rfc9543)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Open book | Intermediate | Free |

## Bibliography

- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (Paid)

## Hands-on lab

Configure two slices in Open5GS with UERANSIM and verify that UEs land on different SMF/UPF instances.

## Related topics

- [Voice: IMS, VoLTE and VoNR](./ims-and-voice.md)
- [Open RAN](./open-ran.md)
- [Private 5G and edge computing (MEC)](./private-5g-and-mec.md)
- [Non-terrestrial networks (NTN)](./non-terrestrial-networks.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
