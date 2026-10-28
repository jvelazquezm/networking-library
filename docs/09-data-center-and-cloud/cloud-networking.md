---
title: "Public cloud networking: AWS, Azure and GCP"
description: "Virtual networks in the cloud: VPCs/VNets, subnets, routing, gateways, security groups, peering and hybrid connectivity."
sidebar_position: 12
---

# Public cloud networking: AWS, Azure and GCP

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Every cloud provider gives you a software-defined network with its own rules. VPCs (AWS, GCP) and VNets (Azure) contain subnets, route tables, Internet and NAT gateways; security groups and network ACLs filter traffic; peering and transit hubs connect networks; VPNs and dedicated interconnects reach on-premises sites. The concepts are familiar but the defaults and limits differ in important ways.

## Key concepts

- VPCs, VNets and subnets
- Route tables and gateways
- Security groups vs network ACLs
- Peering and transit hubs
- Load balancers in the cloud
- VPN and dedicated interconnects
- Multi-cloud networking

## Before you start

- [Subnetting, VLSM and supernetting](../01-fundamentals/subnetting.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [AWS — Amazon VPC user guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) | Docs | Intermediate | Free |
| [Microsoft Learn — Azure Virtual Network overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) | Docs | Intermediate | Free |
| [Google Cloud — VPC overview](https://cloud.google.com/vpc/docs/overview) | Docs | Intermediate | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Build a two-tier VPC with public and private subnets, a NAT gateway and a site-to-site VPN in a cloud free tier — then tear it down.

## Related topics

- [Kubernetes networking](./kubernetes-networking.md)
- [Service mesh](./service-mesh.md)
- [Storage networking: SAN, iSCSI and NVMe-oF](./storage-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
