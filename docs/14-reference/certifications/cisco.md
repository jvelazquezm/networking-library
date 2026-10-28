---
title: "Cisco"
description: "Cisco certification tracks (CCNA, CCNP, CCIE) mapped to library topics."
sidebar_position: 1
---

# Cisco

## Tracks

| Track | Associate | Professional | Expert |
| --- | --- | --- | --- |
| Enterprise | CCNA (200-301) | CCNP Enterprise: ENCOR 350-401 + a concentration (e.g. ENARSI 300-410) | CCIE Enterprise Infrastructure: ENCOR + 8-hour lab |
| Service Provider | CCNA | CCNP Service Provider: SPCOR 350-501 + a concentration | CCIE Service Provider: SPCOR + lab |
| Data Center | CCNA | CCNP Data Center: DCCOR 350-601 + a concentration | CCIE Data Center |
| Security | CCNA | CCNP Security: SCOR 350-701 + a concentration | CCIE Security |
| Automation (formerly DevNet) | CCNA Automation | CCNP Automation | CCIE Automation |
| Design | — | — | CCDE |

Official information: [Cisco certifications](https://www.cisco.com/site/us/en/learn/training-certifications/index.html).

## CCNA (200-301)

The blueprint below follows the six domains of v1.1. **Version 2.0 replaces it on 3 February 2027**: domains are consolidated into five, about 28–30% of topics become troubleshooting tasks, and new topics are added (marked ★).

| Domain (v1.1 weight) | Library topics |
| --- | --- |
| 1. Network Fundamentals (20%) | [Networking devices and their roles](../../01-fundamentals/networking-devices.md), [Network types and topologies](../../01-fundamentals/network-types-and-topologies.md), [Interfaces, cabling and PoE](../../01-fundamentals/interfaces-cabling-and-poe.md) ★ PoE, [IPv4 addressing and the IPv4 header](../../01-fundamentals/ipv4-addressing.md), [Subnetting, VLSM and supernetting](../../01-fundamentals/subnetting.md), [IPv6: addressing, NDP and SLAAC](../../01-fundamentals/ipv6.md), [OSI and TCP/IP models](../../01-fundamentals/osi-and-tcp-ip-models.md), [TCP and UDP](../../01-fundamentals/tcp-and-udp.md), [Wireless fundamentals and RF](../../03-wireless/wireless-fundamentals.md), [Virtualization: hypervisors, VMs and virtual switching](../../09-data-center-and-cloud/virtualization.md), [Containers and container networking](../../09-data-center-and-cloud/containers.md), [VRF and VRF-Lite](../../04-routing/vrf.md), [Ethernet switching and MAC learning](../../02-switching/ethernet-switching.md) |
| 2. Network Access (20%) | [VLANs, trunking and inter-VLAN routing](../../02-switching/vlans.md), [DTP and VTP](../../02-switching/dtp-and-vtp.md), [Discovery protocols: LLDP and CDP](../../02-switching/lldp-and-cdp.md), [Link aggregation: LACP and EtherChannel](../../02-switching/link-aggregation.md), [Spanning Tree: STP, RSTP and Rapid PVST+](../../02-switching/spanning-tree.md), [WLAN architectures](../../03-wireless/wlan-architectures.md) |
| 3. IP Connectivity (25%) | [Routing fundamentals and route selection](../../04-routing/routing-fundamentals.md), [Static routing](../../04-routing/static-routing.md), [OSPF](../../04-routing/ospf.md), [First hop redundancy: VRRP, HSRP and GLBP](../../04-routing/first-hop-redundancy.md) |
| 4. IP Services (10%) | [NAT and PAT](../../05-ip-services/nat.md), [Time: NTP, NTS and PTP](../../05-ip-services/time-synchronization.md), [DHCP and DHCPv6](../../05-ip-services/dhcp.md) ★ troubleshooting, [DNS, DNSSEC, DoT and DoH](../../05-ip-services/dns.md) ★ diagnosis, [Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP](../../05-ip-services/device-management.md), [Quality of Service (QoS)](../../05-ip-services/qos.md) |
| 5. Security Fundamentals (15%) | [Security concepts and programs](../../11-security/security-concepts.md), [Device hardening, AAA and CoPP](../../11-security/device-hardening-and-aaa.md), [IPsec and IKEv2](../../06-wan-and-vpn/ipsec.md), [Remote access VPN: TLS VPN and WireGuard](../../06-wan-and-vpn/remote-access-vpn.md), [Layer 2 security](../../11-security/layer2-security.md), [Access control lists](../../11-security/acls.md), [Wireless security: WPA2, WPA3 and 802.1X](../../03-wireless/wireless-security.md) |
| 6. Automation and Programmability (10%) | [Network management approaches](../../13-automation/management-approaches.md) ★, [SDN and controller-based networking](../../09-data-center-and-cloud/sdn.md), [Campus fabrics: SD-Access, LISP and VXLAN](../../09-data-center-and-cloud/campus-fabrics.md), [REST APIs](../../13-automation/rest-apis.md), [Configuration management: Ansible, Terraform, Puppet and Chef](../../13-automation/configuration-management.md) ★ Ansible, [Data formats: JSON, XML and YAML](../../13-automation/data-formats.md), [AI in network operations](../../13-automation/ai-for-networks.md) ★ prompting and agentic AI |
| Troubleshooting (v2.0, across domains) | [Troubleshooting methodology and tools](../../12-operations/troubleshooting.md), [Life of a packet](../../01-fundamentals/life-of-a-packet.md) |

Suggested route: the [Networking from zero](../../00-start-here/learning-paths/networking-from-zero.md) learning path.

## CCNP Enterprise — ENCOR 350-401 (v1.2)

| Domain | Library topics |
| --- | --- |
| 1. Architecture (15%) | [Network design and high availability](../../12-operations/network-design.md), [First hop redundancy: VRRP, HSRP and GLBP](../../04-routing/first-hop-redundancy.md), [SD-WAN](../../06-wan-and-vpn/sd-wan.md), [Campus fabrics: SD-Access, LISP and VXLAN](../../09-data-center-and-cloud/campus-fabrics.md), [Quality of Service (QoS)](../../05-ip-services/qos.md) |
| 2. Virtualization (10%) | [Virtualization: hypervisors, VMs and virtual switching](../../09-data-center-and-cloud/virtualization.md), [VRF and VRF-Lite](../../04-routing/vrf.md), [GRE tunnels](../../06-wan-and-vpn/gre.md), [IPsec and IKEv2](../../06-wan-and-vpn/ipsec.md), [LISP](../../06-wan-and-vpn/lisp.md), [VXLAN, Geneve and EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) |
| 3. Infrastructure (30%) | [VLANs, trunking and inter-VLAN routing](../../02-switching/vlans.md), [Link aggregation: LACP and EtherChannel](../../02-switching/link-aggregation.md), [MST and spanning tree protection](../../02-switching/mst-and-stp-protection.md), [EIGRP](../../04-routing/eigrp.md), [OSPF](../../04-routing/ospf.md), [BGP fundamentals](../../04-routing/bgp-fundamentals.md), [Policy-based routing](../../04-routing/policy-based-routing.md), [Time: NTP, NTS and PTP](../../05-ip-services/time-synchronization.md), [NAT and PAT](../../05-ip-services/nat.md), [First hop redundancy: VRRP, HSRP and GLBP](../../04-routing/first-hop-redundancy.md), [IP multicast: IGMP, PIM, SSM, MSDP and BIER](../../04-routing/multicast.md) |
| 4. Network Assurance (10%) | [Troubleshooting methodology and tools](../../12-operations/troubleshooting.md), [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](../../12-operations/monitoring.md), [Packet capture and port mirroring](../../12-operations/packet-capture.md), [Active monitoring: IP SLA, TWAMP and STAMP](../../12-operations/active-monitoring.md), [YANG, NETCONF and RESTCONF](../../13-automation/yang-netconf-restconf.md) |
| 5. Security (20%) | [Device hardening, AAA and CoPP](../../11-security/device-hardening-and-aaa.md), [Access control lists](../../11-security/acls.md), [REST APIs](../../13-automation/rest-apis.md), [Firewalls, NGFW, IDS/IPS and proxies](../../11-security/firewalls-and-ips.md), [802.1X and network access control](../../11-security/nac-and-8021x.md), [MACsec and group-based policy](../../11-security/macsec-and-group-policy.md) |
| 6. Automation and Artificial Intelligence (15%) | [Python for network engineers](../../13-automation/python-for-networks.md), [Data formats: JSON, XML and YAML](../../13-automation/data-formats.md), [YANG, NETCONF and RESTCONF](../../13-automation/yang-netconf-restconf.md), [REST APIs](../../13-automation/rest-apis.md), [On-box automation: EEM and on-device Python](../../13-automation/on-box-automation.md), [Configuration management: Ansible, Terraform, Puppet and Chef](../../13-automation/configuration-management.md), [AI in network operations](../../13-automation/ai-for-networks.md) |

## CCNP Enterprise — ENARSI 300-410

| Area | Library topics |
| --- | --- |
| Layer 3 technologies | [EIGRP](../../04-routing/eigrp.md), [OSPF](../../04-routing/ospf.md), [BGP fundamentals](../../04-routing/bgp-fundamentals.md), [Advanced BGP](../../04-routing/bgp-advanced.md), [Redistribution, route filtering and route maps](../../04-routing/redistribution-and-filtering.md), [Policy-based routing](../../04-routing/policy-based-routing.md), [VRF and VRF-Lite](../../04-routing/vrf.md), [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](../../04-routing/fast-convergence.md) |
| VPN technologies | [MPLS and LDP](../../07-service-provider/mpls.md), [MPLS L3VPN, 6PE and 6VPE](../../07-service-provider/mpls-l3vpn.md), [DMVPN and NHRP](../../06-wan-and-vpn/dmvpn.md) |
| Infrastructure security | [Device hardening, AAA and CoPP](../../11-security/device-hardening-and-aaa.md), [IPv6 first-hop security and uRPF](../../11-security/ipv6-security.md), [Access control lists](../../11-security/acls.md) |
| Infrastructure services | [DHCP and DHCPv6](../../05-ip-services/dhcp.md), [Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP](../../05-ip-services/device-management.md), [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](../../12-operations/monitoring.md), [Active monitoring: IP SLA, TWAMP and STAMP](../../12-operations/active-monitoring.md) |

## CCIE Enterprise Infrastructure (lab)

| Domain | Library topics |
| --- | --- |
| Network Infrastructure (30%) | [VLANs, trunking and inter-VLAN routing](../../02-switching/vlans.md), [Link aggregation: LACP and EtherChannel](../../02-switching/link-aggregation.md), [MST and spanning tree protection](../../02-switching/mst-and-stp-protection.md), [VRF and VRF-Lite](../../04-routing/vrf.md), [Policy-based routing](../../04-routing/policy-based-routing.md), [Redistribution, route filtering and route maps](../../04-routing/redistribution-and-filtering.md), [EIGRP](../../04-routing/eigrp.md), [OSPF](../../04-routing/ospf.md), [Advanced BGP](../../04-routing/bgp-advanced.md), [IP multicast: IGMP, PIM, SSM, MSDP and BIER](../../04-routing/multicast.md) |
| Software Defined Infrastructure (25%) | [Campus fabrics: SD-Access, LISP and VXLAN](../../09-data-center-and-cloud/campus-fabrics.md), [SD-WAN](../../06-wan-and-vpn/sd-wan.md) |
| Transport Technologies and Solutions (15%) | [GRE tunnels](../../06-wan-and-vpn/gre.md), [MPLS and LDP](../../07-service-provider/mpls.md), [MPLS L3VPN, 6PE and 6VPE](../../07-service-provider/mpls-l3vpn.md), [DMVPN and NHRP](../../06-wan-and-vpn/dmvpn.md), [IPsec and IKEv2](../../06-wan-and-vpn/ipsec.md) |
| Infrastructure Security and Services (15%) | [Device hardening, AAA and CoPP](../../11-security/device-hardening-and-aaa.md), [Layer 2 security](../../11-security/layer2-security.md), [IPv6 first-hop security and uRPF](../../11-security/ipv6-security.md), [Quality of Service (QoS)](../../05-ip-services/qos.md), [First hop redundancy: VRRP, HSRP and GLBP](../../04-routing/first-hop-redundancy.md), [Time: NTP, NTS and PTP](../../05-ip-services/time-synchronization.md), [DHCP and DHCPv6](../../05-ip-services/dhcp.md), [NAT and PAT](../../05-ip-services/nat.md), [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](../../12-operations/monitoring.md), [Active monitoring: IP SLA, TWAMP and STAMP](../../12-operations/active-monitoring.md), [Packet capture and port mirroring](../../12-operations/packet-capture.md) |
| Infrastructure Automation and Programmability (15%) | [Data formats: JSON, XML and YAML](../../13-automation/data-formats.md), [Templating and source of truth: Jinja2 and NetBox](../../13-automation/templating-and-source-of-truth.md), [On-box automation: EEM and on-device Python](../../13-automation/on-box-automation.md), [REST APIs](../../13-automation/rest-apis.md), [Python for network engineers](../../13-automation/python-for-networks.md), [Model-driven telemetry and operations: gNMI, gNOI and gRPC](../../13-automation/model-driven-telemetry.md) |

## CCNP and CCIE Service Provider

| Area | Library topics |
| --- | --- |
| Architecture | [Service provider architecture, peering and IXPs](../../07-service-provider/sp-architecture.md), [NFV and CNFs](../../09-data-center-and-cloud/nfv.md), [Quality of Service (QoS)](../../05-ip-services/qos.md) |
| Networking | [IS-IS](../../04-routing/is-is.md), [OSPF](../../04-routing/ospf.md), [Advanced BGP](../../04-routing/bgp-advanced.md), [IPv6 transition mechanisms](../../01-fundamentals/ipv6-transition.md), [Fast convergence and high availability: BFD, GR/NSR, LFA and TI-LFA](../../04-routing/fast-convergence.md) |
| MPLS and Segment Routing | [MPLS and LDP](../../07-service-provider/mpls.md), [Traffic engineering: RSVP-TE](../../07-service-provider/traffic-engineering.md), [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md), [SRv6 and uSID](../../07-service-provider/srv6.md), [SDN for the WAN: PCE, PCEP and BGP-LS](../../07-service-provider/pce-and-bgp-ls.md) |
| Services | [MPLS L3VPN, 6PE and 6VPE](../../07-service-provider/mpls-l3vpn.md), [L2VPN: pseudowires and VPLS](../../07-service-provider/l2vpn.md), [EVPN](../../07-service-provider/evpn.md), [IP multicast: IGMP, PIM, SSM, MSDP and BIER](../../04-routing/multicast.md) |
| Automation and Assurance | [YANG, NETCONF and RESTCONF](../../13-automation/yang-netconf-restconf.md), [Model-driven telemetry and operations: gNMI, gNOI and gRPC](../../13-automation/model-driven-telemetry.md), [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](../../12-operations/monitoring.md) |
| Access and transport (lab context) | [Broadband access: PON, DOCSIS, BNG, PPPoE and IPoE](../../07-service-provider/broadband-access.md), [Metro, backhaul and fronthaul](../../07-service-provider/metro-backhaul-fronthaul.md), [Timing and synchronization for transport networks](../../07-service-provider/timing-and-synchronization.md), [Routing security: RPKI, ASPA and BGPsec](../../11-security/routing-security.md) |

Suggested route: the [Service provider networking](../../00-start-here/learning-paths/service-provider.md) learning path.

## CCNA, CCNP and CCIE Automation

Start with section 13, [Automation, Programmability and AI](../../13-automation/index.md), then add [Containers and container networking](../../09-data-center-and-cloud/containers.md), [Kubernetes networking](../../09-data-center-and-cloud/kubernetes-networking.md) and [NetDevOps, CI/CD and digital twins](../../13-automation/netdevops.md). Suggested route: the [Network automation](../../00-start-here/learning-paths/network-automation.md) learning path.
