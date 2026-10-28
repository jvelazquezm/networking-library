---
title: "Linux networking essentials"
description: "The Linux networking stack and tools every network engineer uses: ip, ss, tcpdump, dig, iperf3, nftables."
sidebar_position: 9
---

# Linux networking essentials

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

Linux runs on servers, inside containers, on many network operating systems and on most lab tools, so being fluent with its networking stack pays off immediately. The iproute2 suite (ip, ss, tc) configures and inspects interfaces, routes and sockets; tcpdump captures traffic; dig, mtr and iperf3 test the network. Network namespaces let you build whole topologies on a laptop.

## Key concepts

- Interfaces, addresses and routes with ip
- Sockets with ss (and netstat)
- Name resolution and dig
- tcpdump and capture filters
- Network namespaces and veth pairs
- Traffic control (tc) basics

## Before you start

- None — this is a good place to start.

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [iproute2 ip(8) manual page](https://man7.org/linux/man-pages/man8/ip.8.html) | Docs | Beginner | Free |
| [Arch Wiki — Network configuration](https://wiki.archlinux.org/title/Network_configuration) | Docs | Beginner | Free |
| [tcpdump documentation](https://www.tcpdump.org/index.html#documentation) | Docs | Beginner | Free |
| [Linux Advanced Routing & Traffic Control HOWTO](https://lartc.org/) | Guide | Intermediate | Free |

## Bibliography

- *Linux Network Administrator's Guide* — Tony Bautts, Terry Dawson, Gregor N. Purdy (Paid)

## Hands-on lab

Create two network namespaces connected by a veth pair, add a router namespace between them and ping across it — no virtual machines needed.

## Related topics

- [Life of a packet](./life-of-a-packet.md)
- [Working with network devices: the CLI](./device-cli.md)
- [IPv4 addressing and the IPv4 header](./ipv4-addressing.md)
- [Subnetting, VLSM and supernetting](./subnetting.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
