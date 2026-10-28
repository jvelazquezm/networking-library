---
title: "Kubernetes networking"
description: "The Kubernetes network model: pods, services, CNI plugins, kube-proxy, ingress, Gateway API and network policies."
sidebar_position: 10
---

# Kubernetes networking

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Kubernetes requires every pod to reach every other pod without NAT, and leaves the implementation to CNI plugins such as Calico, Cilium or Flannel. Services give stable virtual IPs implemented by kube-proxy or eBPF; Ingress and the Gateway API expose applications; network policies control traffic between pods. Telco workloads add Multus and SR-IOV for multiple interfaces.

## Key concepts

- Pod networking model
- CNI plugins: Calico, Cilium, Flannel
- Services: ClusterIP, NodePort, LoadBalancer
- kube-proxy (iptables, IPVS) vs eBPF
- DNS in Kubernetes
- Ingress and Gateway API
- Network policies
- Multus and SR-IOV for CNFs

## Before you start

- [Containers and container networking](containers.md)

## Standards and specifications

- [CNI — Container Network Interface specification](https://github.com/containernetworking/cni)
- [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [kind — local Kubernetes clusters](https://kind.sigs.k8s.io/) | Lab tool | Beginner | Free |
| [Kubernetes docs — Cluster networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/) | Docs | Intermediate | Free |
| [Calico documentation](https://docs.tigera.io/calico/latest/about/) | Docs | Intermediate | Free |
| [Cilium documentation](https://docs.cilium.io/) | Docs | Advanced | Free |

## Bibliography

- *Networking and Kubernetes* — James Strong, Vallery Lancey (Paid)

## Hands-on lab

Create a kind cluster with Cilium, deploy two services, enforce a network policy between them and observe flows with Hubble.

## Related topics

- [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](./data-plane-acceleration.md)
- [NFV and CNFs](./nfv.md)
- [Service mesh](./service-mesh.md)
- [Public cloud networking: AWS, Azure and GCP](./cloud-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
