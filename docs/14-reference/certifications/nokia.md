---
title: "Nokia"
description: "Nokia Service Routing Certification (NRS I, NRS II, SRA) mapped to library topics, including the 2026/27 changes."
sidebar_position: 3
---

# Nokia

Nokia's [Service Routing Certification (SRC)](https://www.nokia.com/networks/training/src/) programme focuses on service provider routing with SR OS and, increasingly, SR Linux. Free SR Linux tutorials are available at [learn.srlinux.dev](https://learn.srlinux.dev/).

## Programme changes in 2026/27

- **NRS I**: the refreshed exam replaces OSPF with IS-IS and introduces Segment Routing and EVPN. Candidates can choose an SR OS or an SR Linux track. The current exam is available until 8 February 2027 and the new exams open on 9 March 2027.
- **NRS II**: moves from four written exams on LDP, RSVP and traditional services to two written exams — Segment Routing and EVPN — plus a new lab exam.
- **SRA**: now requires five written exams instead of eight (the multicast exam is retired and EVPN Services replaces the elective), plus the unchanged lab exam.

Source: [Nokia — SRC 2026/27 programme update](https://www.nokia.com/learning/news/src-2026-program-update/).

## NRS I (new version)

| Area | Library topics |
| --- | --- |
| IP fundamentals | [OSI and TCP/IP models](../../01-fundamentals/osi-and-tcp-ip-models.md), [IPv4 addressing and the IPv4 header](../../01-fundamentals/ipv4-addressing.md), [Subnetting, VLSM and supernetting](../../01-fundamentals/subnetting.md), [IPv6: addressing, NDP and SLAAC](../../01-fundamentals/ipv6.md), [Ethernet switching and MAC learning](../../02-switching/ethernet-switching.md) |
| Device operation (SR OS / SR Linux) | [Working with network devices: the CLI](../../01-fundamentals/device-cli.md) |
| Routing | [Routing fundamentals and route selection](../../04-routing/routing-fundamentals.md), [Static routing](../../04-routing/static-routing.md), [IS-IS](../../04-routing/is-is.md), [BGP fundamentals](../../04-routing/bgp-fundamentals.md) |
| Introduction to Segment Routing and EVPN | [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md), [EVPN](../../07-service-provider/evpn.md) |

## NRS II (new version)

| Area | Library topics |
| --- | --- |
| Segment Routing | [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md), [SRv6 and uSID](../../07-service-provider/srv6.md), [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](../../04-routing/fast-convergence.md), [SDN for the WAN: PCE, PCEP and BGP-LS](../../07-service-provider/pce-and-bgp-ls.md) |
| EVPN | [EVPN](../../07-service-provider/evpn.md), [MLAG, vPC and EVPN multihoming](../../02-switching/mlag-and-multihoming.md), [VXLAN, Geneve and EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) |
| Supporting topics | [IS-IS](../../04-routing/is-is.md), [Advanced BGP](../../04-routing/bgp-advanced.md), [MPLS and LDP](../../07-service-provider/mpls.md), [MPLS L3VPN, 6PE and 6VPE](../../07-service-provider/mpls-l3vpn.md) |

## SRA

Builds on NRS II with the full service provider portfolio: [Service provider architecture, peering and IXPs](../../07-service-provider/sp-architecture.md), [MPLS L3VPN, 6PE and 6VPE](../../07-service-provider/mpls-l3vpn.md), [L2VPN: pseudowires and VPLS](../../07-service-provider/l2vpn.md), [EVPN](../../07-service-provider/evpn.md), [Quality of Service (QoS)](../../05-ip-services/qos.md), [Advanced BGP](../../04-routing/bgp-advanced.md), [IS-IS](../../04-routing/is-is.md), [OSPF](../../04-routing/ospf.md) and the [Service provider networking](../../00-start-here/learning-paths/service-provider.md) learning path.
