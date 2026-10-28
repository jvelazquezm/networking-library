---
title: "Life of a packet"
description: "Follow a single packet hop by hop: ARP, switching, routing, MAC rewrites and the return trip."
sidebar_position: 7
---

# Life of a packet

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

Putting the layers together is where networking clicks. When a host sends a packet to another network it uses ARP to find its gateway, the switch forwards the frame by MAC address, and each router looks up the destination IP, rewrites the Layer 2 header and passes it on — while the IP header stays (almost) the same end to end. Being able to narrate this process precisely is the foundation of troubleshooting.

## Key concepts

- Default gateway
- ARP resolution for the next hop
- Switch forwarding decisions
- Router lookup and Layer 2 rewrite
- TTL decrement and checksum
- The return path

## Before you start

- [OSI and TCP/IP models](osi-and-tcp-ip-models.md)
- [ARP and ICMP](arp-and-icmp.md)

## Standards and specifications

- [RFC 1812 — Requirements for IP Version 4 Routers](https://www.rfc-editor.org/rfc/rfc1812)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 12: Life of a packet](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Practical Networking — Packet Traveling series](https://www.practicalnetworking.net/series/packet-traveling/packet-traveling/) | Article series | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

In Packet Tracer simulation mode, follow a ping across two routers and write down every MAC and IP address at each hop.

## Related topics

- [Performance basics: bandwidth, throughput, latency and jitter](./performance-basics.md)
- [OSI and TCP/IP models](./osi-and-tcp-ip-models.md)
- [Working with network devices: the CLI](./device-cli.md)
- [Linux networking essentials](./linux-networking.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
