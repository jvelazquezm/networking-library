---
title: "Service mesh"
description: "Managing service-to-service traffic: sidecars and sidecarless meshes, mTLS, traffic shifting and observability."
sidebar_position: 6
---

# Service mesh

**Level:** Advanced · **Section:** [Data Center and Cloud Native Networking](./index.md)

## Overview

Managing service-to-service traffic: sidecars and sidecarless meshes, mTLS, traffic shifting and observability.

## Key concepts

- Data plane vs control plane
- Sidecar vs ambient/sidecarless
- mTLS between services
- Traffic shifting and retries
- Observability

## Before you start

- [Kubernetes networking](kubernetes-networking.md)

## Standards and specifications

- [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Istio documentation](https://istio.io/latest/docs/) | Docs | Advanced | Free |
| [Linkerd documentation](https://linkerd.io/docs/) | Docs | Advanced | Free |

## Hands-on lab

Install a mesh on a local cluster and do a canary release by shifting 10% of traffic.

## Related topics

- [Data center fabrics](./data-center-fabrics.md)
- [VXLAN and EVPN](./vxlan-evpn.md)
- [Software-defined networking (SDN)](./sdn.md)
- [Network Functions Virtualisation (NFV)](./nfv.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
