---
title: "NFV and CNFs"
description: "Network functions as software: the ETSI NFV architecture, VNFs, cloud-native network functions and their orchestration."
sidebar_position: 9
---

# NFV and CNFs

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

NFV replaced dedicated appliances with software running on standard servers. ETSI defined the architecture — NFV infrastructure, VNF managers and orchestrators — and operators virtualised firewalls, routers and mobile cores. The second wave moves to cloud-native network functions (CNFs) on Kubernetes, with performance features like SR-IOV and DPDK and new orchestration tools.

## Key concepts

- ETSI NFV architecture: NFVI, VIM, VNFM, NFVO
- VNFs vs CNFs
- Service chaining
- Performance: NUMA, CPU pinning, SR-IOV, DPDK
- Kubernetes for telco: Multus, operators
- Open-source orchestration (e.g. Nephio)

## Before you start

- [Virtualization: hypervisors, VMs and virtual switching](virtualization.md)
- [Containers and container networking](containers.md)

## Standards and specifications

- [ETSI — Network Functions Virtualisation](https://www.etsi.org/technologies/nfv)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Nephio — Kubernetes-based network automation](https://nephio.org/) | Open source | Advanced | Free |
| [Edge Cloud Operations: A Systems Approach](https://ops.systemsapproach.org/) | Open book | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](./ai-networking.md)
- [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](./data-plane-acceleration.md)
- [Kubernetes networking](./kubernetes-networking.md)
- [Service mesh](./service-mesh.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
