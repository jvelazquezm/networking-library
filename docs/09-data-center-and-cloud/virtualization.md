---
title: "Virtualization: hypervisors, VMs and virtual switching"
description: "Type 1 and Type 2 hypervisors, virtual machines, virtual NICs and virtual switches."
sidebar_position: 1
---

# Virtualization: hypervisors, VMs and virtual switching

**Level:** Beginner · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Virtualization runs many operating systems on one physical server. Hypervisors present virtual NICs that connect to virtual switches inside the host, which in turn uplink to the physical network. Understanding where the first 'switch' really is — inside the server — changes how you design VLANs, security and troubleshooting in data centres.

## Key concepts

- Type 1 vs Type 2 hypervisors
- Virtual NICs and virtual switches
- Linux bridge and Open vSwitch
- VLANs and trunks to hypervisors
- VM mobility and its network impact
- Cloud computing service models

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 54: Virtualization and cloud](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Open vSwitch documentation](https://docs.openvswitch.org/) | Docs | Intermediate | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Run two VMs on KVM attached to an Open vSwitch bridge with different VLAN tags, and trunk the bridge to a physical (or virtual) switch.

## Related topics

- [Containers and container networking](./containers.md)
- [SDN and controller-based networking](./sdn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
