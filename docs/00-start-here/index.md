---
title: "How to use this library"
description: "What this library is, how it is organised and how to get the most out of it."
sidebar_position: 0
sidebar_label: How to use this library
---

# How to use this library

The Networking Library is an open, community-maintained map of what is worth learning about computer networks and telecommunications — from how the Internet works to Segment Routing, 5G and AI data centre networks.

It does not try to replace books, courses or standards. It **organises** them: every topic explains what to learn, links the authoritative specifications, lists the best resources — **free and open resources first** — and suggests a hands-on lab.

## Vendor-neutral by design

Topics are organised by technology, not by exam or vendor. Standards come first; vendor-specific protocols (for example HSRP, EIGRP or DMVPN) are included when they are widely deployed, help explain a concept or led to a standard, and are clearly marked as such. The [certification maps](../14-reference/certifications/index.md) show how Cisco, Juniper, Nokia, Arista, Huawei and vendor-neutral certifications map onto the library.

## How it is organised

136 topics in thirteen sections, ordered roughly from the bottom of the stack to the top and from fundamentals to specialised domains:

| # | Section | Covers |
| --- | --- | --- |
| 01 | [Network Fundamentals](../01-fundamentals/index.md) | How networks and the Internet work: models, devices, addressing, IPv4, IPv6 and the core protocols. |
| 02 | [Switching and Ethernet](../02-switching/index.md) | Ethernet switching, VLANs, spanning tree, link aggregation, provider bridging, OAM and TSN. |
| 03 | [Wireless and IoT](../03-wireless/index.md) | Radio fundamentals, Wi-Fi up to Wi-Fi 7, WLAN architectures and security, and IoT radio technologies. |
| 04 | [IP Routing](../04-routing/index.md) | Route selection, static and dynamic routing, OSPF, IS-IS, EIGRP, BGP, redistribution, VRFs, FHRPs, fast convergence and multicast. |
| 05 | [IP Services](../05-ip-services/index.md) | DHCP, DNS, NAT, time synchronisation, QoS, device management protocols and voice over IP. |
| 06 | [WAN, VPNs and Overlays](../06-wan-and-vpn/index.md) | WAN technologies, GRE, IPsec, remote-access VPNs, DMVPN, SD-WAN and LISP. |
| 07 | [Service Provider and Transport Networks](../07-service-provider/index.md) | Operator architecture, MPLS, L3VPN, L2VPN, EVPN, traffic engineering, Segment Routing, SRv6, PCE, broadband access, optical transport, backhaul and timing. |
| 08 | [Mobile Networks](../08-mobile-networks/index.md) | Cellular fundamentals, 4G, the 5G System, NR and NG-RAN, the 5G Core, IMS voice, Open RAN, slicing, private 5G, NTN and 6G. |
| 09 | [Data Center, Virtualization and Cloud](../09-data-center-and-cloud/index.md) | Virtualization, containers, SDN, leaf-spine fabrics, VXLAN/EVPN, campus fabrics, AI networking, data plane acceleration, NFV, Kubernetes, service mesh, public cloud and storage networking. |
| 10 | [Transport and Application Protocols](../10-transport-and-applications/index.md) | TCP in depth, SCTP and MPTCP, QUIC, HTTP, WebSockets and gRPC, TLS, load balancing, CDNs and socket programming. |
| 11 | [Security](../11-security/index.md) | Security concepts, cryptography, device hardening, ACLs, Layer 2 and IPv6 security, NAC, firewalls, MACsec, Zero Trust, routing security, DDoS, PQC and 5G security. |
| 12 | [Network Operations and Assurance](../12-operations/index.md) | Troubleshooting methodology, monitoring with SNMP, syslog and flow data, observability stacks, active measurement, packet capture and network design. |
| 13 | [Automation, Programmability and AI](../13-automation/index.md) | Management approaches, data formats, REST APIs, Ansible and Terraform, Python, templating and source of truth, YANG/NETCONF/RESTCONF, gNMI, on-box automation, NetDevOps and AI. |
| 14 | [Reference](../14-reference/index.md) | Standards bodies, books, courses, labs, community and certification maps. |

## Anatomy of a topic page

1. **Level** — Beginner, Intermediate or Advanced.
2. **Overview** — what the topic is and why it matters.
3. **Key concepts** — the checklist of ideas you should be able to explain.
4. **Before you start** — topics to read first.
5. **Standards and specifications** — the primary sources (RFCs, IEEE, 3GPP, ITU, O-RAN…).
6. **Learning resources** — free resources first, then paid, sorted by level.
7. **Bibliography** — books, free ones first.
8. **Hands-on lab** — an exercise to turn reading into understanding.
9. **Related topics** — where to go next.

## Levels

| Level | Meaning | Roughly equivalent to |
| --- | --- | --- |
| Beginner | No prior networking knowledge assumed beyond earlier topics. | CCNA, JNCIA, Network+, HCIA, NRS I |
| Intermediate | Assumes the fundamentals; typical of professional work. | CCNP, JNCIS/JNCIP, HCIP, NRS II, ACE L3–L4 |
| Advanced | Specialised or operator-grade topics; expect to read specifications. | CCIE, JNCIE, HCIE, SRA, ACE L6–L7 |

## Three ways to use it

- **Follow a path.** Pick one of the [learning paths](./learning-paths/index.md) and work through it in order.
- **Prepare a certification.** Open your certification's [map](../14-reference/certifications/index.md).
- **Look something up.** Use the search box or the [glossary](./glossary.md).

## A note on currency

Some areas move fast (5G, cloud native, automation, certification blueprints) and others barely move (IP, TCP). Resources state their version, release or year where it matters — especially 3GPP material, where the **release** matters. If you spot something outdated, please [contribute a fix](./contributing.md).
