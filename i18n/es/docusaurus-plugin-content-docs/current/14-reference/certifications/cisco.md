---
title: "Cisco"
description: "Itinerarios de certificación de Cisco (CCNA, CCNP, CCIE) relacionados con los temas de la biblioteca."
sidebar_position: 1
---

# Cisco

## Itinerarios

| Itinerario | Associate | Professional | Expert |
| --- | --- | --- | --- |
| Enterprise | CCNA (200-301) | CCNP Enterprise: ENCOR 350-401 + una especialización (por ejemplo ENARSI 300-410) | CCIE Enterprise Infrastructure: ENCOR + laboratorio de 8 horas |
| Service Provider | CCNA | CCNP Service Provider: SPCOR 350-501 + una especialización | CCIE Service Provider: SPCOR + laboratorio |
| Data Center | CCNA | CCNP Data Center: DCCOR 350-601 + una especialización | CCIE Data Center |
| Security | CCNA | CCNP Security: SCOR 350-701 + una especialización | CCIE Security |
| Automation (antes DevNet) | CCNA Automation | CCNP Automation | CCIE Automation |
| Diseño | — | — | CCDE |

Información oficial: [certificaciones de Cisco](https://www.cisco.com/site/us/en/learn/training-certifications/index.html).

## CCNA (200-301)

La tabla sigue los seis dominios de la v1.1. **La versión 2.0 la sustituye el 3 de febrero de 2027**: los dominios se agrupan en cinco, en torno al 28–30 % de los temas pasan a ser tareas de diagnóstico y se añaden temas nuevos (marcados con ★).

| Dominio (peso en v1.1) | Temas de la biblioteca |
| --- | --- |
| 1. Network Fundamentals (20 %) | [Dispositivos de red y sus funciones](../../01-fundamentals/networking-devices.md), [Tipos de red y topologías](../../01-fundamentals/network-types-and-topologies.md), [Interfaces, cableado y PoE](../../01-fundamentals/interfaces-cabling-and-poe.md) ★ PoE, [Direccionamiento IPv4 y la cabecera IPv4](../../01-fundamentals/ipv4-addressing.md), [Subnetting, VLSM y superredes](../../01-fundamentals/subnetting.md), [IPv6: direccionamiento, NDP y SLAAC](../../01-fundamentals/ipv6.md), [Modelos OSI y TCP/IP](../../01-fundamentals/osi-and-tcp-ip-models.md), [TCP y UDP](../../01-fundamentals/tcp-and-udp.md), [Fundamentos inalámbricos y RF](../../03-wireless/wireless-fundamentals.md), [Virtualización: hipervisores, VM y conmutación virtual](../../09-data-center-and-cloud/virtualization.md), [Contenedores y redes de contenedores](../../09-data-center-and-cloud/containers.md), [VRF y VRF-Lite](../../04-routing/vrf.md), [Conmutación Ethernet y aprendizaje de MAC](../../02-switching/ethernet-switching.md) |
| 2. Network Access (20 %) | [VLAN, trunking y enrutamiento entre VLAN](../../02-switching/vlans.md), [DTP y VTP](../../02-switching/dtp-and-vtp.md), [Protocolos de descubrimiento: LLDP y CDP](../../02-switching/lldp-and-cdp.md), [Agregación de enlaces: LACP y EtherChannel](../../02-switching/link-aggregation.md), [Spanning Tree: STP, RSTP y Rapid PVST+](../../02-switching/spanning-tree.md), [Arquitecturas WLAN](../../03-wireless/wlan-architectures.md) |
| 3. IP Connectivity (25 %) | [Fundamentos de enrutamiento y selección de rutas](../../04-routing/routing-fundamentals.md), [Enrutamiento estático](../../04-routing/static-routing.md), [OSPF](../../04-routing/ospf.md), [Redundancia de primer salto: VRRP, HSRP y GLBP](../../04-routing/first-hop-redundancy.md) |
| 4. IP Services (10 %) | [NAT y PAT](../../05-ip-services/nat.md), [Hora: NTP, NTS y PTP](../../05-ip-services/time-synchronization.md), [DHCP y DHCPv6](../../05-ip-services/dhcp.md) ★ diagnóstico, [DNS, DNSSEC, DoT y DoH](../../05-ip-services/dns.md) ★ diagnóstico, [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](../../05-ip-services/device-management.md), [Calidad de servicio (QoS)](../../05-ip-services/qos.md) |
| 5. Security Fundamentals (15 %) | [Conceptos y programas de seguridad](../../11-security/security-concepts.md), [Bastionado de equipos, AAA y CoPP](../../11-security/device-hardening-and-aaa.md), [IPsec e IKEv2](../../06-wan-and-vpn/ipsec.md), [VPN de acceso remoto: TLS VPN y WireGuard](../../06-wan-and-vpn/remote-access-vpn.md), [Seguridad de capa 2](../../11-security/layer2-security.md), [Listas de control de acceso](../../11-security/acls.md), [Seguridad inalámbrica: WPA2, WPA3 y 802.1X](../../03-wireless/wireless-security.md) |
| 6. Automation and Programmability (10 %) | [Enfoques de gestión de redes](../../13-automation/management-approaches.md) ★, [SDN y redes basadas en controladora](../../09-data-center-and-cloud/sdn.md), [Fábricas de campus: SD-Access, LISP y VXLAN](../../09-data-center-and-cloud/campus-fabrics.md), [APIs REST](../../13-automation/rest-apis.md), [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](../../13-automation/configuration-management.md) ★ Ansible, [Formatos de datos: JSON, XML y YAML](../../13-automation/data-formats.md), [IA en la operación de redes](../../13-automation/ai-for-networks.md) ★ prompts e IA con agentes |
| Diagnóstico (v2.0, en todos los dominios) | [Metodología y herramientas de resolución de problemas](../../12-operations/troubleshooting.md), [La vida de un paquete](../../01-fundamentals/life-of-a-packet.md) |

Ruta sugerida: la ruta de aprendizaje [Redes desde cero](../../00-start-here/learning-paths/networking-from-zero.md).

## CCNP Enterprise — ENCOR 350-401 (v1.2)

| Dominio | Temas de la biblioteca |
| --- | --- |
| 1. Architecture (15 %) | [Diseño de redes y alta disponibilidad](../../12-operations/network-design.md), [Redundancia de primer salto: VRRP, HSRP y GLBP](../../04-routing/first-hop-redundancy.md), [SD-WAN](../../06-wan-and-vpn/sd-wan.md), [Fábricas de campus: SD-Access, LISP y VXLAN](../../09-data-center-and-cloud/campus-fabrics.md), [Calidad de servicio (QoS)](../../05-ip-services/qos.md) |
| 2. Virtualization (10 %) | [Virtualización: hipervisores, VM y conmutación virtual](../../09-data-center-and-cloud/virtualization.md), [VRF y VRF-Lite](../../04-routing/vrf.md), [Túneles GRE](../../06-wan-and-vpn/gre.md), [IPsec e IKEv2](../../06-wan-and-vpn/ipsec.md), [LISP](../../06-wan-and-vpn/lisp.md), [VXLAN, Geneve y EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) |
| 3. Infrastructure (30 %) | [VLAN, trunking y enrutamiento entre VLAN](../../02-switching/vlans.md), [Agregación de enlaces: LACP y EtherChannel](../../02-switching/link-aggregation.md), [MST y protección de spanning tree](../../02-switching/mst-and-stp-protection.md), [EIGRP](../../04-routing/eigrp.md), [OSPF](../../04-routing/ospf.md), [Fundamentos de BGP](../../04-routing/bgp-fundamentals.md), [Enrutamiento basado en políticas](../../04-routing/policy-based-routing.md), [Hora: NTP, NTS y PTP](../../05-ip-services/time-synchronization.md), [NAT y PAT](../../05-ip-services/nat.md), [Redundancia de primer salto: VRRP, HSRP y GLBP](../../04-routing/first-hop-redundancy.md), [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](../../04-routing/multicast.md) |
| 4. Network Assurance (10 %) | [Metodología y herramientas de resolución de problemas](../../12-operations/troubleshooting.md), [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](../../12-operations/monitoring.md), [Captura de paquetes y port mirroring](../../12-operations/packet-capture.md), [Monitorización activa: IP SLA, TWAMP y STAMP](../../12-operations/active-monitoring.md), [YANG, NETCONF y RESTCONF](../../13-automation/yang-netconf-restconf.md) |
| 5. Security (20 %) | [Bastionado de equipos, AAA y CoPP](../../11-security/device-hardening-and-aaa.md), [Listas de control de acceso](../../11-security/acls.md), [APIs REST](../../13-automation/rest-apis.md), [Firewalls, NGFW, IDS/IPS y proxies](../../11-security/firewalls-and-ips.md), [802.1X y control de acceso a la red](../../11-security/nac-and-8021x.md), [MACsec y políticas basadas en grupos](../../11-security/macsec-and-group-policy.md) |
| 6. Automation and Artificial Intelligence (15 %) | [Python para ingenieros de redes](../../13-automation/python-for-networks.md), [Formatos de datos: JSON, XML y YAML](../../13-automation/data-formats.md), [YANG, NETCONF y RESTCONF](../../13-automation/yang-netconf-restconf.md), [APIs REST](../../13-automation/rest-apis.md), [Automatización en el equipo: EEM y Python en el dispositivo](../../13-automation/on-box-automation.md), [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](../../13-automation/configuration-management.md), [IA en la operación de redes](../../13-automation/ai-for-networks.md) |

## CCNP Enterprise — ENARSI 300-410

| Área | Temas de la biblioteca |
| --- | --- |
| Tecnologías de capa 3 | [EIGRP](../../04-routing/eigrp.md), [OSPF](../../04-routing/ospf.md), [Fundamentos de BGP](../../04-routing/bgp-fundamentals.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [Redistribución, filtrado de rutas y route maps](../../04-routing/redistribution-and-filtering.md), [Enrutamiento basado en políticas](../../04-routing/policy-based-routing.md), [VRF y VRF-Lite](../../04-routing/vrf.md), [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](../../04-routing/fast-convergence.md) |
| Tecnologías VPN | [MPLS y LDP](../../07-service-provider/mpls.md), [MPLS L3VPN, 6PE y 6VPE](../../07-service-provider/mpls-l3vpn.md), [DMVPN y NHRP](../../06-wan-and-vpn/dmvpn.md) |
| Seguridad de la infraestructura | [Bastionado de equipos, AAA y CoPP](../../11-security/device-hardening-and-aaa.md), [Seguridad de primer salto IPv6 y uRPF](../../11-security/ipv6-security.md), [Listas de control de acceso](../../11-security/acls.md) |
| Servicios de infraestructura | [DHCP y DHCPv6](../../05-ip-services/dhcp.md), [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](../../05-ip-services/device-management.md), [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](../../12-operations/monitoring.md), [Monitorización activa: IP SLA, TWAMP y STAMP](../../12-operations/active-monitoring.md) |

## CCIE Enterprise Infrastructure (laboratorio)

| Dominio | Temas de la biblioteca |
| --- | --- |
| Network Infrastructure (30 %) | [VLAN, trunking y enrutamiento entre VLAN](../../02-switching/vlans.md), [Agregación de enlaces: LACP y EtherChannel](../../02-switching/link-aggregation.md), [MST y protección de spanning tree](../../02-switching/mst-and-stp-protection.md), [VRF y VRF-Lite](../../04-routing/vrf.md), [Enrutamiento basado en políticas](../../04-routing/policy-based-routing.md), [Redistribución, filtrado de rutas y route maps](../../04-routing/redistribution-and-filtering.md), [EIGRP](../../04-routing/eigrp.md), [OSPF](../../04-routing/ospf.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](../../04-routing/multicast.md) |
| Software Defined Infrastructure (25 %) | [Fábricas de campus: SD-Access, LISP y VXLAN](../../09-data-center-and-cloud/campus-fabrics.md), [SD-WAN](../../06-wan-and-vpn/sd-wan.md) |
| Transport Technologies and Solutions (15 %) | [Túneles GRE](../../06-wan-and-vpn/gre.md), [MPLS y LDP](../../07-service-provider/mpls.md), [MPLS L3VPN, 6PE y 6VPE](../../07-service-provider/mpls-l3vpn.md), [DMVPN y NHRP](../../06-wan-and-vpn/dmvpn.md), [IPsec e IKEv2](../../06-wan-and-vpn/ipsec.md) |
| Infrastructure Security and Services (15 %) | [Bastionado de equipos, AAA y CoPP](../../11-security/device-hardening-and-aaa.md), [Seguridad de capa 2](../../11-security/layer2-security.md), [Seguridad de primer salto IPv6 y uRPF](../../11-security/ipv6-security.md), [Calidad de servicio (QoS)](../../05-ip-services/qos.md), [Redundancia de primer salto: VRRP, HSRP y GLBP](../../04-routing/first-hop-redundancy.md), [Hora: NTP, NTS y PTP](../../05-ip-services/time-synchronization.md), [DHCP y DHCPv6](../../05-ip-services/dhcp.md), [NAT y PAT](../../05-ip-services/nat.md), [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](../../12-operations/monitoring.md), [Monitorización activa: IP SLA, TWAMP y STAMP](../../12-operations/active-monitoring.md), [Captura de paquetes y port mirroring](../../12-operations/packet-capture.md) |
| Infrastructure Automation and Programmability (15 %) | [Formatos de datos: JSON, XML y YAML](../../13-automation/data-formats.md), [Plantillas y fuente de verdad: Jinja2 y NetBox](../../13-automation/templating-and-source-of-truth.md), [Automatización en el equipo: EEM y Python en el dispositivo](../../13-automation/on-box-automation.md), [APIs REST](../../13-automation/rest-apis.md), [Python para ingenieros de redes](../../13-automation/python-for-networks.md), [Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC](../../13-automation/model-driven-telemetry.md) |

## CCNP y CCIE Service Provider

| Área | Temas de la biblioteca |
| --- | --- |
| Arquitectura | [Arquitectura de operador, peering e IXP](../../07-service-provider/sp-architecture.md), [NFV y CNF](../../09-data-center-and-cloud/nfv.md), [Calidad de servicio (QoS)](../../05-ip-services/qos.md) |
| Redes | [IS-IS](../../04-routing/is-is.md), [OSPF](../../04-routing/ospf.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [Mecanismos de transición a IPv6](../../01-fundamentals/ipv6-transition.md), [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](../../04-routing/fast-convergence.md) |
| MPLS y Segment Routing | [MPLS y LDP](../../07-service-provider/mpls.md), [Ingeniería de tráfico: RSVP-TE](../../07-service-provider/traffic-engineering.md), [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md), [SRv6 y uSID](../../07-service-provider/srv6.md), [SDN para la WAN: PCE, PCEP y BGP-LS](../../07-service-provider/pce-and-bgp-ls.md) |
| Servicios | [MPLS L3VPN, 6PE y 6VPE](../../07-service-provider/mpls-l3vpn.md), [L2VPN: pseudowires y VPLS](../../07-service-provider/l2vpn.md), [EVPN](../../07-service-provider/evpn.md), [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](../../04-routing/multicast.md) |
| Automatización y aseguramiento | [YANG, NETCONF y RESTCONF](../../13-automation/yang-netconf-restconf.md), [Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC](../../13-automation/model-driven-telemetry.md), [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](../../12-operations/monitoring.md) |
| Acceso y transporte (contexto de laboratorio) | [Acceso de banda ancha: PON, DOCSIS, BNG, PPPoE e IPoE](../../07-service-provider/broadband-access.md), [Metro, backhaul y fronthaul](../../07-service-provider/metro-backhaul-fronthaul.md), [Sincronización para redes de transporte](../../07-service-provider/timing-and-synchronization.md), [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](../../11-security/routing-security.md) |

Ruta sugerida: la ruta de aprendizaje [Redes de operador](../../00-start-here/learning-paths/service-provider.md).

## CCNA, CCNP y CCIE Automation

Empieza por la sección 13, [Automatización, programabilidad e IA](../../13-automation/index.md), y añade [Contenedores y redes de contenedores](../../09-data-center-and-cloud/containers.md), [Redes en Kubernetes](../../09-data-center-and-cloud/kubernetes-networking.md) y [NetDevOps, CI/CD y gemelos digitales](../../13-automation/netdevops.md). Ruta sugerida: la ruta de aprendizaje [Automatización de redes](../../00-start-here/learning-paths/network-automation.md).
