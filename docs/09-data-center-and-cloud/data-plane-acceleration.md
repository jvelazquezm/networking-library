---
title: "Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4"
description: "How software and hardware make packet processing fast: kernel bypass, NIC virtualisation, SmartNICs/DPUs, in-kernel programmability and programmable switches."
sidebar_position: 8
---

# Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4

**Level:** Advanced · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

General-purpose kernels are too slow for many network functions. DPDK bypasses the kernel and polls NICs from user space; SR-IOV gives VMs and containers direct slices of a NIC; DPUs offload networking and security onto the NIC itself; eBPF and XDP run safe programs inside the Linux kernel at the earliest point of the stack; P4 programs switch pipelines. These technologies power 5G UPFs, cloud networking and Kubernetes data planes.

## Key concepts

- Kernel networking bottlenecks
- DPDK and poll-mode drivers
- SR-IOV virtual functions
- SmartNICs and DPUs
- eBPF and XDP
- P4 and programmable switches
- Use in UPFs, load balancers and CNIs

## Before you start

- [Linux networking essentials](../01-fundamentals/linux-networking.md)

## Standards and specifications

- [P4_16 language specification](https://p4.org/specifications/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [DPDK documentation](https://doc.dpdk.org/guides/) | Docs | Advanced | Free |
| [ebpf.io — What is eBPF?](https://ebpf.io/what-is-ebpf/) | Docs | Advanced | Free |
| [P4 tutorials (p4lang)](https://github.com/p4lang/tutorials) | Tutorials | Advanced | Free |
| [XDP tutorial (xdp-project)](https://github.com/xdp-project/xdp-tutorial) | Tutorials | Advanced | Free |

## Bibliography

- *Learning eBPF* — Liz Rice (Paid)

## Hands-on lab

Work through the first lessons of the XDP tutorial to drop and count packets in the kernel, then compare throughput with an nftables rule.

## Related topics

- [Campus fabrics: SD-Access, LISP and VXLAN](./campus-fabrics.md)
- [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](./ai-networking.md)
- [NFV and CNFs](./nfv.md)
- [Kubernetes networking](./kubernetes-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
