---
title: "Containers and container networking"
description: "How containers are isolated and connected: namespaces, veth pairs, bridges and Docker network modes."
sidebar_position: 2
---

# Containers and container networking

**Level:** Beginner · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Containers share the host kernel but get their own network namespace, connected to the host through veth pairs and bridges, with NAT for outbound traffic. Docker's bridge, host, macvlan and overlay modes show the trade-offs. Container networking is the foundation for Kubernetes and for lab tools like Containerlab.

## Key concepts

- Containers vs VMs
- Network namespaces and veth pairs
- Docker bridge, host, macvlan and none
- Port publishing and NAT
- Overlay networks
- Container images for network operating systems

## Before you start

- [Virtualization: hypervisors, VMs and virtual switching](virtualization.md)
- [Linux networking essentials](../01-fundamentals/linux-networking.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 54: Virtualization (containers)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Docker docs — Networking overview](https://docs.docker.com/engine/network/) | Docs | Beginner | Free |
| [Containerlab](https://containerlab.dev/) | Lab tool | Intermediate | Free |

## Bibliography

- *Networking and Kubernetes* — James Strong, Vallery Lancey (Paid)

## Hands-on lab

Recreate Docker's default bridge network by hand with ip netns, veth pairs, a Linux bridge and an iptables/nftables masquerade rule.

## Related topics

- [Virtualization: hypervisors, VMs and virtual switching](./virtualization.md)
- [SDN and controller-based networking](./sdn.md)
- [Data center fabrics: leaf-spine and BGP in the DC](./dc-fabrics.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
