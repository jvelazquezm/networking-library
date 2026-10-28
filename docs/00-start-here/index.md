---
title: "How to use this library"
description: "What this library is, how it is organised and how to get the most out of it."
sidebar_position: 0
sidebar_label: How to use this library
---

# How to use this library

The Networking Library is an open, community-maintained map of everything worth learning about computer networks and telecommunications — from the physical layer to 5G, Open RAN and cloud native networking.

It does not try to replace books, courses or standards. It **organises** them: every topic tells you what to learn, where the authoritative specification lives, which resources are worth your time at each level, and how to practise.

## How it is organised

The library has **twelve sections**, ordered roughly from the bottom of the network stack to the top, and from fundamentals to specialised domains:

| # | Section | Covers |
| --- | --- | --- |
| 01 | [Fundamentals](../01-fundamentals/index.md) | Layered models, addressing, IPv4/IPv6 and the protocols every network depends on. |
| 02 | [LAN and Switching](../02-lan-and-switching/index.md) | Ethernet, VLANs, spanning tree, link aggregation and Wi-Fi. |
| 03 | [Routing and Internet Architecture](../03-routing/index.md) | IGPs, BGP, MPLS, Segment Routing and how the Internet is stitched together. |
| 04 | [Transport and Applications](../04-transport-and-applications/index.md) | TCP, UDP, QUIC, DNS, HTTP, TLS and how content is delivered at scale. |
| 05 | [Carrier and Transport Networks](../05-carrier-networks/index.md) | Optical transport, fixed access, backhaul, timing and how operators build their networks. |
| 06 | [Mobile Networks](../06-mobile-networks/index.md) | Cellular fundamentals, 4G, 5G RAN and Core, Open RAN, network slicing and 6G. |
| 07 | [Data Center and Cloud Native Networking](../07-data-center-and-cloud/index.md) | Leaf-spine fabrics, VXLAN/EVPN, SDN, NFV, Kubernetes networking and service meshes. |
| 08 | [Automation and Programmability](../08-automation/index.md) | YANG, NETCONF, gNMI, Python, Ansible, NetDevOps, intent and AI for networks. |
| 09 | [Network Security](../09-security/index.md) | Firewalls, VPNs, Zero Trust, routing security, DDoS and 5G security. |
| 10 | [Network Operations](../10-operations/index.md) | Monitoring and observability, QoS, troubleshooting, performance and design. |
| 11 | [Reference](../11-reference/index.md) | Standards bodies, books, courses, certifications and lab tools. |

## Anatomy of a topic page

Every topic page follows the same structure, so you always know where to look:

1. **Level** — Beginner, Intermediate or Advanced.
2. **Overview** — what the topic is and why it matters.
3. **Key concepts** — the checklist of ideas you should be able to explain.
4. **Before you start** — topics to read first.
5. **Standards and specifications** — the primary sources (RFCs, IEEE, 3GPP, ITU, O-RAN…).
6. **Learning resources** — curated books, courses, articles and tools, sorted by level.
7. **Hands-on lab** — an exercise to turn reading into understanding.
8. **Related topics** — where to go next.

## Three ways to use it

- **Follow a path.** Pick one of the [learning paths](./learning-paths/index.md) and work through it in order.
- **Look something up.** Use the search box or the [glossary](./glossary.md).
- **Go to the source.** Each page links to the standards that define the technology, and the [reference section](../11-reference/standards-bodies.md) explains how to read them.

## Levels

| Level | Meaning |
| --- | --- |
| Beginner | No prior networking knowledge assumed beyond the earlier topics in the section. |
| Intermediate | Assumes the fundamentals; typical of professional work and CCNP-level material. |
| Advanced | Specialised or operator-grade topics; expect to read specifications. |

## A note on currency

Networking moves fast in some areas (5G, cloud native, automation) and barely at all in others (TCP, IP). Every resource should state its version, release or year — especially 3GPP material, where the **release** matters. If you spot something outdated, please [open an issue or a pull request](./contributing.md).
