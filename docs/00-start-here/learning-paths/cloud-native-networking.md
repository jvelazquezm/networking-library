---
title: "Cloud native and data center networking"
description: "Leaf-spine fabrics, EVPN-VXLAN, AI networking, data plane acceleration, Kubernetes, service mesh and public cloud."
sidebar_position: 5
---

# Cloud native and data center networking

**Level:** Intermediate · **Topics:** 16

Leaf-spine fabrics, EVPN-VXLAN, AI networking, data plane acceleration, Kubernetes, service mesh and public cloud.

## Goal

Understand how modern data centres and cloud platforms are networked, from the physical fabric to service-to-service traffic.

## Steps

1. [Virtualization: hypervisors, VMs and virtual switching](../../09-data-center-and-cloud/virtualization.md) (Beginner) — Start with virtualisation.
2. [Containers and container networking](../../09-data-center-and-cloud/containers.md) (Beginner) — Understand containers.
3. [BGP fundamentals](../../04-routing/bgp-fundamentals.md) (Intermediate) — Learn BGP — it now runs data centres.
4. [Data center fabrics: leaf-spine and BGP in the DC](../../09-data-center-and-cloud/dc-fabrics.md) (Intermediate) — Build a leaf-spine fabric.
5. [MLAG, vPC and EVPN multihoming](../../02-switching/mlag-and-multihoming.md) (Intermediate) — Multihome servers.
6. [VXLAN, Geneve and EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) (Intermediate) — Add overlays.
7. [SDN and controller-based networking](../../09-data-center-and-cloud/sdn.md) (Beginner) — Understand programmable networks.
8. [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](../../09-data-center-and-cloud/ai-networking.md) (Advanced) — Learn what AI clusters need.
9. [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](../../09-data-center-and-cloud/data-plane-acceleration.md) (Advanced) — Go fast with DPDK, eBPF and P4.
10. [NFV and CNFs](../../09-data-center-and-cloud/nfv.md) (Intermediate) — Run network functions as software.
11. [Kubernetes networking](../../09-data-center-and-cloud/kubernetes-networking.md) (Intermediate) — Learn the Kubernetes network model.
12. [Service mesh](../../09-data-center-and-cloud/service-mesh.md) (Advanced) — Manage service-to-service traffic.
13. [Load balancing and CDNs](../../10-transport-and-applications/load-balancing-and-cdn.md) (Intermediate) — Balance load.
14. [Public cloud networking: AWS, Azure and GCP](../../09-data-center-and-cloud/cloud-networking.md) (Intermediate) — Map it all to public cloud.
15. [Storage networking: SAN, iSCSI and NVMe-oF](../../09-data-center-and-cloud/storage-networking.md) (Intermediate) — Carry storage traffic.
16. [Zero Trust and SASE](../../11-security/zero-trust-and-sase.md) (Intermediate) — Apply Zero Trust.

## Milestone project

Run a Kubernetes cluster on a Containerlab EVPN-VXLAN fabric with Cilium peering BGP to the leaves, network policies and Hubble observability.

:::tip How to work through a path
Read the overview and key concepts of each topic, do its hands-on lab, and move on only when you can explain every key concept without notes.
:::
