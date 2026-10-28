---
title: "Service mesh"
description: "Managing service-to-service traffic: sidecar and sidecarless meshes, mTLS, traffic shifting, retries and observability."
sidebar_position: 11
---

# Service mesh

**Level:** Advanced · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

A service mesh moves networking concerns out of application code: encryption with mutual TLS, retries and timeouts, traffic shifting for canary releases and detailed telemetry. Istio, Linkerd and Cilium implement it with sidecar proxies (often Envoy) or newer sidecarless modes. It overlaps with the Gateway API and with eBPF-based networking.

## Key concepts

- Data plane vs control plane
- Sidecar vs ambient / sidecarless
- Envoy proxy
- mTLS and workload identity
- Traffic splitting, retries and circuit breaking
- Observability: metrics and traces

## Before you start

- [Kubernetes networking](kubernetes-networking.md)

## Standards and specifications

- [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Istio documentation](https://istio.io/latest/docs/) | Docs | Advanced | Free |
| [Linkerd documentation](https://linkerd.io/2/overview/) | Docs | Advanced | Free |
| [Envoy proxy documentation](https://www.envoyproxy.io/docs) | Docs | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Install a mesh on a local cluster and perform a canary release by shifting 10% of traffic, then enforce mTLS between services.

## Related topics

- [NFV and CNFs](./nfv.md)
- [Kubernetes networking](./kubernetes-networking.md)
- [Public cloud networking: AWS, Azure and GCP](./cloud-networking.md)
- [Storage networking: SAN, iSCSI and NVMe-oF](./storage-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
