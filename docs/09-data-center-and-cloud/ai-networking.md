---
title: "AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet"
description: "Networks for GPU clusters: RDMA, lossless Ethernet, congestion control, rail-optimised topologies and the Ultra Ethernet effort."
sidebar_position: 7
---

# AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet

**Level:** Advanced · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Training large AI models synchronises thousands of GPUs, and the network becomes the bottleneck. These back-end networks use RDMA — over InfiniBand or Ethernet (RoCEv2) — with lossless or carefully controlled congestion (PFC, ECN, DCQCN), rail-optimised topologies and very high radix switches. The Ultra Ethernet Consortium is defining an Ethernet transport designed specifically for AI and HPC.

## Key concepts

- Front-end vs back-end networks
- RDMA, InfiniBand and RoCEv2
- PFC and ECN, DCQCN
- Collective operations and traffic patterns
- Rail-optimised and fat-tree topologies
- Load balancing: packet spraying, adaptive routing
- Ultra Ethernet Transport

## Before you start

- [Data center fabrics: leaf-spine and BGP in the DC](dc-fabrics.md)
- [TCP in depth and congestion control](../10-transport-and-applications/tcp-in-depth.md)

## Standards and specifications

- [InfiniBand Trade Association (RoCE specifications)](https://www.infinibandta.org/)
- [Ultra Ethernet Consortium — specifications](https://ultraethernet.org/)
- [IEEE 802.1Qbb — Priority-based Flow Control](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermediate | Free |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [VXLAN, Geneve and EVPN](./vxlan-evpn.md)
- [Campus fabrics: SD-Access, LISP and VXLAN](./campus-fabrics.md)
- [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](./data-plane-acceleration.md)
- [NFV and CNFs](./nfv.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
