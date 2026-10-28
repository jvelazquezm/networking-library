---
title: "SDN and controller-based networking"
description: "Separating control and data planes: controllers, northbound and southbound APIs, overlay vs underlay, OpenFlow and programmable data planes."
sidebar_position: 3
---

# SDN and controller-based networking

**Level:** Beginner · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Software-defined networking moves decisions from individual boxes to a controller with a global view, exposing the network through APIs. The idea now appears everywhere: campus fabrics, SD-WAN, data-centre controllers and hyperscaler networks. Key vocabulary — planes, northbound and southbound interfaces, underlay and overlay — is CCNA material.

## Key concepts

- Data, control and management planes
- Controllers, northbound and southbound APIs
- Underlay, overlay and fabric
- OpenFlow
- Controller-based vs traditional networking
- P4 and programmable data planes (overview)

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

- [Open Networking Foundation](https://opennetworking.org/)
- [P4 Language Consortium](https://p4.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 62: Software-defined networking](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Software-Defined Networks: A Systems Approach](https://sdn.systemsapproach.org/) | Open book | Intermediate | Free |
| [Mininet](https://github.com/mininet/mininet) | Lab tool | Intermediate | Free |

## Bibliography

- [*Software-Defined Networks: A Systems Approach*](https://sdn.systemsapproach.org/) — Larry Peterson et al. (Free)

## Hands-on lab

Run Mininet with an SDN controller, push flow rules through the controller's API and watch the switch flow tables.

## Related topics

- [Virtualization: hypervisors, VMs and virtual switching](./virtualization.md)
- [Containers and container networking](./containers.md)
- [Data center fabrics: leaf-spine and BGP in the DC](./dc-fabrics.md)
- [VXLAN, Geneve and EVPN](./vxlan-evpn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
