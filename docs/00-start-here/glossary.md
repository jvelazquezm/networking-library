---
title: "Glossary"
description: "Short definitions of the terms and acronyms used across the library."
sidebar_position: 3
---

# Glossary

Short, plain-language definitions. Each term is explained in depth in the relevant topic page.

**3GPP**  
3rd Generation Partnership Project, the body that standardises mobile networks (UMTS, LTE, 5G, 6G).

**AMF**  
Access and Mobility Management Function — the 5G Core function that handles registration, connection and mobility.

**Anycast**  
Announcing the same IP address from many locations so traffic goes to the nearest one.

**AS (Autonomous System)**  
A network under a single routing policy, identified by an AS number and connected to others with BGP.

**BGP**  
Border Gateway Protocol — the routing protocol used between autonomous systems on the Internet.

**CIDR**  
Classless Inter-Domain Routing — writing networks as address/prefix-length, e.g. 192.0.2.0/24.

**CNF**  
Cloud-native Network Function — a network function packaged as containers, usually run on Kubernetes.

**CNI**  
Container Network Interface — the plugin specification Kubernetes uses to connect pods to the network.

**Control plane**  
The part of a network device that decides where traffic should go (routing protocols, signalling).

**CU / DU / RU**  
Central, Distributed and Radio Units — the functional split of a 5G base station.

**Data plane**  
The part of a network device that actually forwards packets, also called the forwarding or user plane.

**DSCP**  
Differentiated Services Code Point — the field in the IP header used to mark traffic for QoS.

**DWDM**  
Dense Wavelength Division Multiplexing — carrying many optical wavelengths on one fibre.

**eBPF**  
A Linux kernel technology that runs sandboxed programs in the kernel, widely used for networking and observability.

**ECMP**  
Equal-Cost Multi-Path — spreading traffic over several paths of the same cost.

**eCPRI**  
Enhanced Common Public Radio Interface — a packet-based fronthaul protocol between radio and baseband units.

**EVPN**  
Ethernet VPN — a BGP-based control plane for Layer 2 and Layer 3 VPNs, commonly used with VXLAN.

**gNB**  
The 5G base station (next-generation NodeB).

**gNMI**  
gRPC Network Management Interface — a protocol for configuration and streaming telemetry.

**IGP**  
Interior Gateway Protocol — a routing protocol used inside one autonomous system (OSPF, IS-IS).

**IXP**  
Internet Exchange Point — a place where networks interconnect to exchange traffic.

**Latency**  
The time it takes for data to travel from source to destination.

**MPLS**  
Multiprotocol Label Switching — forwarding based on short labels instead of IP lookups.

**MTU**  
Maximum Transmission Unit — the largest packet a link can carry without fragmentation.

**NAT**  
Network Address Translation — rewriting addresses as packets cross a boundary, typically private to public.

**NETCONF**  
A protocol for model-driven, transactional configuration of network devices.

**Network slice**  
A logical end-to-end network with specific characteristics, running on shared infrastructure.

**NFV**  
Network Functions Virtualisation — running network functions as software on general-purpose hardware.

**NR**  
New Radio — the 5G radio access technology.

**O-RAN**  
Open RAN — a disaggregated, open-interface RAN architecture specified by the O-RAN Alliance.

**OSPF**  
Open Shortest Path First — a link-state interior routing protocol.

**PON**  
Passive Optical Network — a point-to-multipoint fibre access architecture (GPON, XGS-PON).

**PTP**  
Precision Time Protocol (IEEE 1588) — distributes accurate time over packet networks.

**QoS**  
Quality of Service — techniques to prioritise and guarantee treatment for certain traffic.

**RFC**  
Request for Comments — the document series that publishes Internet standards and best practice (IETF).

**RIC**  
RAN Intelligent Controller — the O-RAN component that hosts xApps (near-real-time) and rApps (non-real-time).

**RPKI**  
Resource Public Key Infrastructure — cryptographically ties IP prefixes to the ASes allowed to originate them.

**SDN**  
Software-Defined Networking — separating the control plane from the data plane and controlling it centrally.

**Segment Routing**  
A source-routing approach where the path is encoded as a list of segments in the packet.

**Service mesh**  
An infrastructure layer that manages service-to-service traffic, security and observability.

**SMF**  
Session Management Function — the 5G Core function that manages PDU sessions.

**Subnet**  
A logical subdivision of an IP network sharing a common prefix.

**Throughput**  
The amount of data successfully transferred per unit of time.

**UPF**  
User Plane Function — the 5G Core function that forwards user traffic.

**VLAN**  
Virtual LAN — a logical Layer 2 network separated by 802.1Q tags.

**VRF**  
Virtual Routing and Forwarding — multiple independent routing tables on one router.

**VXLAN**  
Virtual eXtensible LAN — encapsulating Layer 2 frames in UDP to build overlays.

**YANG**  
A data modelling language for network configuration and state.

**Zero Trust**  
A security model that grants no implicit trust based on network location.
