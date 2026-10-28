---
title: "Data Center and Cloud Native Networking"
description: "Leaf-spine fabrics, VXLAN/EVPN, SDN, NFV, Kubernetes networking and service meshes."
sidebar_position: 0
sidebar_label: Overview
---

# 07 · Data Center and Cloud Native Networking

How networks are built inside data centres and clouds, and how networking itself became software: fabrics and overlays, SDN and NFV, and the networking model of Kubernetes and cloud native applications.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Data center fabrics](./data-center-fabrics.md) | Intermediate | Why data centres moved from three-tier designs to leaf-spine Clos fabrics, and how they are routed. |
| [VXLAN and EVPN](./vxlan-evpn.md) | Advanced | Overlay networking for multi-tenant data centres: VXLAN encapsulation with an EVPN control plane. |
| [Software-defined networking (SDN)](./sdn.md) | Intermediate | Separating the control plane from the data plane: OpenFlow, controllers and programmable data planes with P4. |
| [Network Functions Virtualisation (NFV)](./nfv.md) | Intermediate | Running network functions as software on commodity infrastructure, and the transition from VNFs to CNFs. |
| [Kubernetes networking](./kubernetes-networking.md) | Intermediate | The Kubernetes network model: pods, services, CNI plugins, ingress and network policies, and how eBPF is changing the data plane. |
| [Service mesh](./service-mesh.md) | Advanced | Managing service-to-service traffic: sidecars and sidecarless meshes, mTLS, traffic shifting and observability. |
| [Public cloud networking](./cloud-networking.md) | Intermediate | How networking works in AWS, Azure and Google Cloud: VPCs, subnets, gateways, hybrid connectivity and the differences between providers. |

## Suggested order

[Data center fabrics](./data-center-fabrics.md) → [Software-defined networking (SDN)](./sdn.md) → [Network Functions Virtualisation (NFV)](./nfv.md) → [Kubernetes networking](./kubernetes-networking.md) → [Public cloud networking](./cloud-networking.md) → [VXLAN and EVPN](./vxlan-evpn.md) → [Service mesh](./service-mesh.md)

:::tip New to this area?
Check the [learning paths](../00-start-here/learning-paths/index.md) for a guided route that combines this section with others.
:::
