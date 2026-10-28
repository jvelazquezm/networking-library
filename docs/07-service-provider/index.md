---
title: "Service Provider and Transport Networks"
description: "Operator architecture, MPLS, L3VPN, L2VPN, EVPN, traffic engineering, Segment Routing, SRv6, PCE, broadband access, optical transport, backhaul and timing."
sidebar_position: 0
sidebar_label: Overview
---

# 07 · Service Provider and Transport Networks

How operators build the networks everything else rides on: the architecture of a service provider, the MPLS and Segment Routing technologies in their backbones, the VPN services they sell, and the access, optical and timing layers underneath. This is the territory of CCNP/CCIE Service Provider, JNCIP/JNCIE-SP and Nokia's SRC programme.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Service provider architecture, peering and IXPs](./sp-architecture.md) | Intermediate | How an operator network is organised — access, aggregation, core, edge, data centres — and how operators interconnect. |
| [MPLS and LDP](./mpls.md) | Intermediate | Label switching: labels, the LFIB, label distribution with LDP, PHP and why MPLS still matters. |
| [MPLS L3VPN, 6PE and 6VPE](./mpls-l3vpn.md) | Intermediate | BGP/MPLS IP VPNs: VRFs, route distinguishers and targets, MP-BGP VPNv4/VPNv6 and PE-CE routing. |
| [L2VPN: pseudowires and VPLS](./l2vpn.md) | Advanced | Carrying Ethernet across an MPLS network: point-to-point pseudowires and multipoint VPLS. |
| [EVPN](./evpn.md) | Advanced | Ethernet VPN: BGP as the control plane for Layer 2 and Layer 3 services over MPLS, SR or VXLAN. |
| [Traffic engineering: RSVP-TE](./traffic-engineering.md) | Advanced | Steering traffic away from shortest paths with RSVP-TE tunnels, constraints and fast reroute. |
| [Segment Routing: SR-MPLS](./segment-routing.md) | Advanced | Source routing with segments: prefix and adjacency SIDs, SR policies, TI-LFA and migration from LDP/RSVP-TE. |
| [SRv6 and uSID](./srv6.md) | Advanced | Segment Routing over IPv6: the SRH, network programming behaviours, compressed SIDs (uSID) and SRv6 services. |
| [SDN for the WAN: PCE, PCEP and BGP-LS](./pce-and-bgp-ls.md) | Advanced | Centralised path computation: collecting topology with BGP-LS and programming paths with PCEP. |
| [Broadband access: PON, DOCSIS, BNG, PPPoE and IPoE](./broadband-access.md) | Intermediate | Fixed last-mile technologies and subscriber management: fibre PON, cable, DSL, and broadband network gateways. |
| [Optical transport: DWDM and OTN](./optical-transport.md) | Advanced | Moving terabits over fibre: wavelength multiplexing, amplifiers, coherent optics, ROADMs, OTN and IP-over-DWDM. |
| [Metro, backhaul and fronthaul](./metro-backhaul-fronthaul.md) | Intermediate | Transport for mobile and enterprise services: Carrier Ethernet, mobile backhaul, midhaul and fronthaul (CPRI/eCPRI). |
| [Timing and synchronization for transport networks](./timing-and-synchronization.md) | Advanced | Frequency and phase synchronisation for mobile networks: GNSS, SyncE, PTP telecom profiles and time error budgets. |

## Suggested reading order

1. [Service provider architecture, peering and IXPs](./sp-architecture.md) — Intermediate
2. [MPLS and LDP](./mpls.md) — Intermediate
3. [MPLS L3VPN, 6PE and 6VPE](./mpls-l3vpn.md) — Intermediate
4. [Broadband access: PON, DOCSIS, BNG, PPPoE and IPoE](./broadband-access.md) — Intermediate
5. [Metro, backhaul and fronthaul](./metro-backhaul-fronthaul.md) — Intermediate
6. [L2VPN: pseudowires and VPLS](./l2vpn.md) — Advanced
7. [EVPN](./evpn.md) — Advanced
8. [Traffic engineering: RSVP-TE](./traffic-engineering.md) — Advanced
9. [Segment Routing: SR-MPLS](./segment-routing.md) — Advanced
10. [SRv6 and uSID](./srv6.md) — Advanced
11. [SDN for the WAN: PCE, PCEP and BGP-LS](./pce-and-bgp-ls.md) — Advanced
12. [Optical transport: DWDM and OTN](./optical-transport.md) — Advanced
13. [Timing and synchronization for transport networks](./timing-and-synchronization.md) — Advanced

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
