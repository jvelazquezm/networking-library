---
title: "Access control lists"
description: "Standard and extended, numbered and named IPv4 ACLs, IPv6 ACLs, placement and the equivalent stateless filters on other platforms."
sidebar_position: 4
---

# Access control lists

**Level:** Beginner · **Section:** [Security](./index.md)

## Overview

ACLs filter packets by addresses, protocols and ports, and are also used to classify traffic for NAT, QoS and routing policy. They are processed top-down with an implicit deny at the end, so order and placement matter. Juniper calls them firewall filters and Linux uses nftables, but the logic is the same.

## Key concepts

- Standard vs extended ACLs
- Numbered vs named ACLs
- Wildcard masks
- Implicit deny and ordering
- Placement: close to source or destination
- IPv6 ACLs
- ACLs as classifiers
- Stateless filters on other platforms

## Before you start

- [TCP and UDP](../01-fundamentals/tcp-and-udp.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 34–35: Standard and extended ACLs](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |
| [nftables wiki](https://wiki.nftables.org/) | Docs | Intermediate | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

Write extended ACLs that allow only web and DNS from a user VLAN to a server VLAN, verify hit counters and test with nmap.

## Related topics

- [Cryptography basics for networks](./cryptography-basics.md)
- [Device hardening, AAA and CoPP](./device-hardening-and-aaa.md)
- [Layer 2 security](./layer2-security.md)
- [IPv6 first-hop security and uRPF](./ipv6-security.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
