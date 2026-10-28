---
title: "Glossary"
description: "Short definitions of the terms and acronyms used across the library."
sidebar_position: 3
---

# Glossary

Short, plain-language definitions. Each term is explained in depth in the relevant topic page — use the search box to find it.

**3GPP**  
3rd Generation Partnership Project — the body that standardises mobile networks (LTE, 5G, 6G).

**5QI**  
5G QoS Identifier — a number that maps a QoS flow to standardised characteristics such as priority and delay budget.

**AAA**  
Authentication, authorisation and accounting — controlling and recording who can do what on a device or network.

**ACL**  
Access control list — an ordered list of permit/deny rules used to filter or classify traffic.

**AMF**  
Access and Mobility Management Function — the 5G Core function that handles registration and mobility.

**Anycast**  
Announcing the same IP address from several locations so traffic reaches the nearest one.

**ARP**  
Address Resolution Protocol — maps IPv4 addresses to MAC addresses on a link.

**AS (Autonomous System)**  
A network under a single routing policy, identified by an AS number and connected to others with BGP.

**BFD**  
Bidirectional Forwarding Detection — a lightweight protocol that detects path failures in milliseconds.

**BGP**  
Border Gateway Protocol — the path-vector routing protocol used between autonomous systems.

**BNG**  
Broadband Network Gateway — the router that authenticates and manages fixed broadband subscribers.

**BPDU**  
Bridge Protocol Data Unit — the message spanning tree uses to elect a root and build a loop-free topology.

**CAPWAP**  
Control and Provisioning of Wireless Access Points — the protocol between lightweight access points and controllers.

**CIDR**  
Classless Inter-Domain Routing — writing networks as address/prefix-length, e.g. 192.0.2.0/24.

**CNF**  
Cloud-native network function — a network function packaged as containers, usually run on Kubernetes.

**CNI**  
Container Network Interface — the plugin specification Kubernetes uses to connect pods to the network.

**Control plane**  
The part of a network device that decides where traffic should go (routing protocols, signalling).

**CoPP**  
Control Plane Policing — rate-limiting traffic destined to a device's CPU to protect its control plane.

**CU / DU / RU**  
Central, distributed and radio units — the functional split of a 5G base station.

**Data plane**  
The part of a network device that forwards packets; also called the forwarding or user plane.

**DHCP**  
Dynamic Host Configuration Protocol — automatically gives hosts their IP configuration.

**DMVPN**  
Dynamic Multipoint VPN — a Cisco design using mGRE, NHRP and IPsec to build on-demand spoke-to-spoke tunnels.

**DNS**  
Domain Name System — the distributed system that translates names into addresses and other records.

**DPU**  
Data processing unit — a programmable NIC that offloads networking, storage and security functions.

**DSCP**  
Differentiated Services Code Point — the field in the IP header used to mark traffic for QoS.

**DWDM**  
Dense Wavelength Division Multiplexing — carrying many optical wavelengths on one fibre.

**eBPF**  
A Linux kernel technology that runs sandboxed programs in the kernel, widely used for networking and observability.

**ECMP**  
Equal-cost multipath — spreading traffic over several paths of the same cost.

**eCPRI**  
Enhanced Common Public Radio Interface — a packet-based fronthaul protocol between radio and baseband units.

**EIGRP**  
Enhanced Interior Gateway Routing Protocol — Cisco's advanced distance-vector routing protocol.

**EVPN**  
Ethernet VPN — a BGP-based control plane for Layer 2 and Layer 3 VPNs over MPLS, SR or VXLAN.

**FHRP**  
First hop redundancy protocol — VRRP, HSRP or GLBP; keeps the default gateway available.

**Flex-Algo**  
IGP Flexible Algorithm — lets an IGP compute additional shortest-path trees with different metrics or constraints.

**gNB**  
The 5G base station (next-generation NodeB).

**gNMI**  
gRPC Network Management Interface — a protocol for configuration and streaming telemetry.

**GRE**  
Generic Routing Encapsulation — a simple tunnelling protocol that can carry any Layer 3 protocol, including multicast.

**GTP-U**  
GPRS Tunnelling Protocol for user plane — tunnels user traffic between the RAN and the UPF/gateways.

**HSRP**  
Hot Standby Router Protocol — Cisco's first hop redundancy protocol.

**IGP**  
Interior gateway protocol — a routing protocol used inside one autonomous system (OSPF, IS-IS, EIGRP).

**IKEv2**  
Internet Key Exchange version 2 — negotiates keys and security associations for IPsec.

**IMS**  
IP Multimedia Subsystem — the SIP-based architecture that delivers voice and messaging on 4G and 5G.

**IPFIX**  
IP Flow Information Export — the IETF standard for exporting flow records, derived from NetFlow v9.

**IPsec**  
A suite of protocols that authenticates and encrypts IP packets.

**IS-IS**  
Intermediate System to Intermediate System — a link-state IGP popular with operators.

**IXP**  
Internet Exchange Point — a place where networks interconnect to exchange traffic.

**LACP**  
Link Aggregation Control Protocol — negotiates bundles of parallel links.

**Latency**  
The time it takes for data to travel from source to destination.

**LISP**  
Locator/ID Separation Protocol — separates endpoint identity from location using a mapping system.

**LLDP**  
Link Layer Discovery Protocol — the IEEE standard for advertising device identity to neighbours.

**MACsec**  
IEEE 802.1AE — hop-by-hop encryption of Ethernet frames.

**MPLS**  
Multiprotocol Label Switching — forwarding based on short labels instead of IP lookups.

**MTU**  
Maximum transmission unit — the largest packet a link can carry without fragmentation.

**NAT**  
Network address translation — rewriting addresses as packets cross a boundary.

**NDP**  
Neighbor Discovery Protocol — IPv6's mechanism for address resolution, router discovery and more.

**NETCONF**  
A protocol for model-driven, transactional configuration of network devices.

**Network slice**  
A logical end-to-end network with specific characteristics, running on shared infrastructure.

**NFV**  
Network Functions Virtualisation — running network functions as software on general-purpose hardware.

**NHRP**  
Next Hop Resolution Protocol — resolves tunnel addresses to underlay addresses in DMVPN.

**NR**  
New Radio — the 5G radio access technology.

**NTP**  
Network Time Protocol — synchronises clocks over packet networks.

**O-RAN**  
Open RAN — a disaggregated RAN architecture with open interfaces, specified by the O-RAN Alliance.

**OSPF**  
Open Shortest Path First — a link-state IGP.

**PAT**  
Port address translation (NAT overload) — many hosts share one public address by translating ports.

**PCE**  
Path Computation Element — a controller that computes paths with a global view of the network.

**PFCP**  
Packet Forwarding Control Protocol — used by the SMF to control the UPF in 5G.

**PIM**  
Protocol Independent Multicast — builds multicast distribution trees.

**PoE**  
Power over Ethernet — delivering power and data over the same twisted-pair cable.

**PON**  
Passive optical network — point-to-multipoint fibre access (GPON, XGS-PON).

**PTP**  
Precision Time Protocol (IEEE 1588) — distributes highly accurate time over packet networks.

**QoS**  
Quality of Service — techniques to prioritise and guarantee treatment for certain traffic.

**RADIUS**  
A protocol for centralised authentication, authorisation and accounting of network access.

**RDMA**  
Remote Direct Memory Access — moving data between machines' memory without involving their CPUs; used by AI and storage networks.

**RFC**  
Request for Comments — the IETF document series that publishes Internet standards and best practice.

**RIC**  
RAN Intelligent Controller — the O-RAN component that hosts xApps (near-real-time) and rApps (non-real-time).

**RoCEv2**  
RDMA over Converged Ethernet version 2 — RDMA carried over UDP/IP on Ethernet networks.

**RPKI**  
Resource Public Key Infrastructure — cryptographically ties IP prefixes to the ASes allowed to originate them.

**RSVP-TE**  
Resource Reservation Protocol with traffic engineering extensions — signals explicit MPLS paths.

**SD-WAN**  
Software-defined WAN — centrally controlled overlays across multiple WAN transports with application-aware routing.

**SDN**  
Software-defined networking — separating the control plane from the data plane and controlling it centrally.

**Segment Routing**  
A source-routing approach where the path is encoded as a list of segments in the packet.

**SIP**  
Session Initiation Protocol — sets up and manages voice, video and messaging sessions.

**SLAAC**  
Stateless Address Autoconfiguration — IPv6 hosts configuring their own addresses from router advertisements.

**SMF**  
Session Management Function — the 5G Core function that manages PDU sessions.

**SNMP**  
Simple Network Management Protocol — polls and receives management information from devices.

**SRv6**  
Segment Routing over IPv6 — segments encoded as IPv6 addresses.

**STP / RSTP / MSTP**  
Spanning Tree Protocol and its rapid and multiple-instance versions — prevent Layer 2 loops.

**Subnet**  
A logical subdivision of an IP network sharing a common prefix.

**TACACS+**  
A protocol for centralised device administration AAA, separating authentication, authorisation and accounting.

**Throughput**  
The amount of data successfully transferred per unit of time.

**TI-LFA**  
Topology-Independent Loop-Free Alternate — Segment Routing fast reroute with full coverage.

**TLS**  
Transport Layer Security — authenticates and encrypts application connections.

**TSN**  
Time-Sensitive Networking — IEEE 802.1 standards for deterministic Ethernet.

**UPF**  
User Plane Function — the 5G Core function that forwards user traffic.

**VLAN**  
Virtual LAN — a logical Layer 2 network separated by 802.1Q tags.

**VRF**  
Virtual routing and forwarding — independent routing tables on one router.

**VRRP**  
Virtual Router Redundancy Protocol — the IETF standard first hop redundancy protocol.

**VXLAN**  
Virtual eXtensible LAN — encapsulates Layer 2 frames in UDP to build overlays.

**WPA3**  
Wi-Fi Protected Access 3 — current Wi-Fi security, using SAE for personal networks.

**xApp / rApp**  
Applications running on the near-real-time and non-real-time O-RAN RICs.

**YANG**  
A data modelling language for network configuration and state.

**Zero Trust**  
A security model that grants no implicit trust based on network location.
