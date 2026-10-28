---
title: "Kubernetes networking"
description: "The Kubernetes network model: pods, services, CNI plugins, ingress and network policies, and how eBPF is changing the data plane."
sidebar_position: 5
---

# Kubernetes networking

**Level:** Intermediate · **Section:** [Data Center and Cloud Native Networking](./index.md)

## Overview

The Kubernetes network model: pods, services, CNI plugins, ingress and network policies, and how eBPF is changing the data plane.

## Key concepts

- Pod-to-pod networking model
- CNI plugins (Calico, Cilium, Flannel)
- Services and kube-proxy
- Ingress and Gateway API
- Network policies
- eBPF data planes
- Multus and telco CNFs

## Before you start

- [Network models: OSI and TCP/IP](../01-fundamentals/network-models.md)

## Standards and specifications

- [CNI — Container Network Interface specification](https://github.com/containernetworking/cni)
- [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Kubernetes — Cluster networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/) | Docs | Intermediate | Free |
| [Cilium documentation](https://docs.cilium.io/) | Docs | Advanced | Free |
| [ebpf.io — What is eBPF?](https://ebpf.io/) | Docs | Advanced | Free |

## Hands-on lab

Create a kind cluster with Cilium, deploy two services and enforce a network policy between them.

## Related topics

- [Data center fabrics](./data-center-fabrics.md)
- [VXLAN and EVPN](./vxlan-evpn.md)
- [Software-defined networking (SDN)](./sdn.md)
- [Network Functions Virtualisation (NFV)](./nfv.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
