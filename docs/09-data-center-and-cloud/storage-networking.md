---
title: "Storage networking: SAN, iSCSI and NVMe-oF"
description: "How storage travels over networks: Fibre Channel SANs, iSCSI, FCoE, NAS protocols and NVMe over Fabrics."
sidebar_position: 13
---

# Storage networking: SAN, iSCSI and NVMe-oF

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Storage traffic is sensitive to loss and latency. Traditional SANs use Fibre Channel; iSCSI carries SCSI over TCP/IP; NAS protocols (NFS, SMB) share files; NVMe over Fabrics brings flash-speed storage over RDMA or TCP. Network engineers need to understand how these flows behave and how to design for them.

## Key concepts

- Block vs file vs object storage
- Fibre Channel basics
- iSCSI
- NFS and SMB
- NVMe over Fabrics (RDMA, TCP)
- Designing networks for storage traffic

## Before you start

- [TCP and UDP](../01-fundamentals/tcp-and-udp.md)

## Standards and specifications

- [RFC 7143 — Internet Small Computer System Interface (iSCSI) Protocol](https://www.rfc-editor.org/rfc/rfc7143)
- [NVM Express — NVMe over Fabrics specification](https://nvmexpress.org/specifications/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [SNIA — Storage Networking Industry Association education](https://www.snia.org/education) | Articles | Intermediate | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Export a disk from one Linux host over iSCSI (targetcli) and mount it on another, then measure latency under network load.

## Related topics

- [Service mesh](./service-mesh.md)
- [Public cloud networking: AWS, Azure and GCP](./cloud-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
