---
title: "Cloud native networking"
description: "Data center fabrics, overlays, Kubernetes networking, eBPF and service meshes."
sidebar_position: 3
---

# Cloud native networking

**Level:** Intermediate · **Topics:** 9

## Goal

Understand how modern data centres and Kubernetes platforms are networked, from the physical fabric to service-to-service traffic.

## Steps

1. [BGP](../../03-routing/bgp.md) (Intermediate) — Learn BGP — it now runs data centres, not just the Internet.
2. [Data center fabrics](../../07-data-center-and-cloud/data-center-fabrics.md) (Intermediate) — Build a leaf-spine fabric.
3. [VXLAN and EVPN](../../07-data-center-and-cloud/vxlan-evpn.md) (Advanced) — Add overlays for multi-tenancy.
4. [Software-defined networking (SDN)](../../07-data-center-and-cloud/sdn.md) (Intermediate) — Understand programmable networks.
5. [Network Functions Virtualisation (NFV)](../../07-data-center-and-cloud/nfv.md) (Intermediate) — See how network functions became software.
6. [Kubernetes networking](../../07-data-center-and-cloud/kubernetes-networking.md) (Intermediate) — Learn the Kubernetes network model and CNI.
7. [Service mesh](../../07-data-center-and-cloud/service-mesh.md) (Advanced) — Manage service-to-service traffic.
8. [Public cloud networking](../../07-data-center-and-cloud/cloud-networking.md) (Intermediate) — Map it all to public cloud.
9. [Zero Trust](../../09-security/zero-trust.md) (Intermediate) — Apply Zero Trust to the platform.

## Milestone project

Run a Kubernetes cluster on a Containerlab leaf-spine fabric with Cilium, BGP peering to the leaves and network policies.

:::tip How to work through a path
Read the overview and key concepts of each topic, do its hands-on lab, and only move on when you can explain every key concept without notes.
:::
