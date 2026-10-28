---
title: "Data Center, Virtualization and Cloud"
description: "Virtualization, containers, SDN, leaf-spine fabrics, VXLAN/EVPN, campus fabrics, AI networking, data plane acceleration, NFV, Kubernetes, service mesh, public cloud and storage networking."
sidebar_position: 0
sidebar_label: Overview
---

# 09 · Data Center, Virtualization and Cloud

How networks are built inside data centres and clouds, and how networking itself became software: virtual machines and containers, programmable and software-defined networks, fabrics and overlays, the special demands of AI clusters, and the networking models of Kubernetes and the public cloud.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Virtualization: hypervisors, VMs and virtual switching](./virtualization.md) | Beginner | Type 1 and Type 2 hypervisors, virtual machines, virtual NICs and virtual switches. |
| [Containers and container networking](./containers.md) | Beginner | How containers are isolated and connected: namespaces, veth pairs, bridges and Docker network modes. |
| [SDN and controller-based networking](./sdn.md) | Beginner | Separating control and data planes: controllers, northbound and southbound APIs, overlay vs underlay, OpenFlow and programmable data planes. |
| [Data center fabrics: leaf-spine and BGP in the DC](./dc-fabrics.md) | Intermediate | Clos fabrics, ECMP, routed underlays with eBGP or IS-IS, and why data centres abandoned spanning tree. |
| [VXLAN, Geneve and EVPN](./vxlan-evpn.md) | Intermediate | Overlays for multi-tenant data centres: VXLAN and Geneve encapsulation with an EVPN control plane. |
| [Campus fabrics: SD-Access, LISP and VXLAN](./campus-fabrics.md) | Intermediate | Bringing fabric concepts to the campus: overlay with VXLAN, control plane with LISP or EVPN, and group-based policy. |
| [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](./ai-networking.md) | Advanced | Networks for GPU clusters: RDMA, lossless Ethernet, congestion control, rail-optimised topologies and the Ultra Ethernet effort. |
| [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](./data-plane-acceleration.md) | Advanced | How software and hardware make packet processing fast: kernel bypass, NIC virtualisation, SmartNICs/DPUs, in-kernel programmability and programmable switches. |
| [NFV and CNFs](./nfv.md) | Intermediate | Network functions as software: the ETSI NFV architecture, VNFs, cloud-native network functions and their orchestration. |
| [Kubernetes networking](./kubernetes-networking.md) | Intermediate | The Kubernetes network model: pods, services, CNI plugins, kube-proxy, ingress, Gateway API and network policies. |
| [Service mesh](./service-mesh.md) | Advanced | Managing service-to-service traffic: sidecar and sidecarless meshes, mTLS, traffic shifting, retries and observability. |
| [Public cloud networking: AWS, Azure and GCP](./cloud-networking.md) | Intermediate | Virtual networks in the cloud: VPCs/VNets, subnets, routing, gateways, security groups, peering and hybrid connectivity. |
| [Storage networking: SAN, iSCSI and NVMe-oF](./storage-networking.md) | Intermediate | How storage travels over networks: Fibre Channel SANs, iSCSI, FCoE, NAS protocols and NVMe over Fabrics. |

## Suggested reading order

1. [Virtualization: hypervisors, VMs and virtual switching](./virtualization.md) — Beginner
2. [Containers and container networking](./containers.md) — Beginner
3. [SDN and controller-based networking](./sdn.md) — Beginner
4. [Data center fabrics: leaf-spine and BGP in the DC](./dc-fabrics.md) — Intermediate
5. [VXLAN, Geneve and EVPN](./vxlan-evpn.md) — Intermediate
6. [Campus fabrics: SD-Access, LISP and VXLAN](./campus-fabrics.md) — Intermediate
7. [NFV and CNFs](./nfv.md) — Intermediate
8. [Kubernetes networking](./kubernetes-networking.md) — Intermediate
9. [Public cloud networking: AWS, Azure and GCP](./cloud-networking.md) — Intermediate
10. [Storage networking: SAN, iSCSI and NVMe-oF](./storage-networking.md) — Intermediate
11. [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](./ai-networking.md) — Advanced
12. [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](./data-plane-acceleration.md) — Advanced
13. [Service mesh](./service-mesh.md) — Advanced

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
