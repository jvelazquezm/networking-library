---
title: "Network Fundamentals"
description: "How networks and the Internet work: models, devices, addressing, IPv4, IPv6 and the core protocols."
sidebar_position: 0
sidebar_label: Overview
---

# 01 · Network Fundamentals

The concepts every other section builds on: what a network is made of, how communication is layered, how hosts are addressed and how a packet actually travels from one machine to another. If you are new to networking, start here and do not rush subnetting.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [How the Internet works](./how-the-internet-works.md) | Beginner | A big-picture tour of the Internet: networks of networks, ISPs, IXPs, submarine cables, DNS and routing. |
| [Network types and topologies](./network-types-and-topologies.md) | Beginner | LAN, WAN, MAN, PAN; physical and logical topologies; client-server vs peer-to-peer. |
| [Networking devices and their roles](./networking-devices.md) | Beginner | Routers, switches, firewalls, access points, controllers, endpoints and servers — what each one does and at which layer. |
| [Interfaces, cabling and PoE](./interfaces-cabling-and-poe.md) | Beginner | Copper and fibre cabling, connectors, transceivers, Ethernet speeds, duplex and Power over Ethernet. |
| [Performance basics: bandwidth, throughput, latency and jitter](./performance-basics.md) | Beginner | The metrics that describe how a network performs and why they are often confused. |
| [OSI and TCP/IP models](./osi-and-tcp-ip-models.md) | Beginner | Why networks are layered, how the OSI and TCP/IP models compare, and how encapsulation works. |
| [Life of a packet](./life-of-a-packet.md) | Beginner | Follow a single packet hop by hop: ARP, switching, routing, MAC rewrites and the return trip. |
| [Working with network devices: the CLI](./device-cli.md) | Beginner | Navigating and configuring network operating systems: Cisco IOS, Junos, Arista EOS and Nokia SR OS / SR Linux. |
| [Linux networking essentials](./linux-networking.md) | Beginner | The Linux networking stack and tools every network engineer uses: ip, ss, tcpdump, dig, iperf3, nftables. |
| [IPv4 addressing and the IPv4 header](./ipv4-addressing.md) | Beginner | The IPv4 header, address structure, address classes and why CIDR replaced them, public vs private addressing. |
| [Subnetting, VLSM and supernetting](./subnetting.md) | Beginner | Dividing address space into subnets, sizing them with VLSM and summarising them back up. |
| [ARP and ICMP](./arp-and-icmp.md) | Beginner | How IP addresses are mapped to MAC addresses, and how ICMP reports errors and powers ping and traceroute. |
| [TCP and UDP](./tcp-and-udp.md) | Beginner | The two main transport protocols: ports, connections, reliability, flow control and when to use each. |
| [IPv6: addressing, NDP and SLAAC](./ipv6.md) | Beginner | IPv6 addresses and prefixes, address types, the IPv6 header, Neighbor Discovery and autoconfiguration. |
| [IPv6 transition mechanisms](./ipv6-transition.md) | Intermediate | How IPv4 and IPv6 coexist: dual stack, tunnelling and translation (NAT64/DNS64, 464XLAT, DS-Lite, MAP-E). |

## Suggested reading order

1. [How the Internet works](./how-the-internet-works.md) — Beginner
2. [Network types and topologies](./network-types-and-topologies.md) — Beginner
3. [Networking devices and their roles](./networking-devices.md) — Beginner
4. [Interfaces, cabling and PoE](./interfaces-cabling-and-poe.md) — Beginner
5. [Performance basics: bandwidth, throughput, latency and jitter](./performance-basics.md) — Beginner
6. [OSI and TCP/IP models](./osi-and-tcp-ip-models.md) — Beginner
7. [Life of a packet](./life-of-a-packet.md) — Beginner
8. [Working with network devices: the CLI](./device-cli.md) — Beginner
9. [Linux networking essentials](./linux-networking.md) — Beginner
10. [IPv4 addressing and the IPv4 header](./ipv4-addressing.md) — Beginner
11. [Subnetting, VLSM and supernetting](./subnetting.md) — Beginner
12. [ARP and ICMP](./arp-and-icmp.md) — Beginner
13. [TCP and UDP](./tcp-and-udp.md) — Beginner
14. [IPv6: addressing, NDP and SLAAC](./ipv6.md) — Beginner
15. [IPv6 transition mechanisms](./ipv6-transition.md) — Intermediate

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
