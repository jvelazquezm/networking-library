---
title: "Juniper"
description: "Itinerarios de certificación de Juniper (JNCIA, JNCIS, JNCIP, JNCIE) relacionados con los temas de la biblioteca."
sidebar_position: 2
---

# Juniper

Los cursos gratuitos de [Juniper Open Learning](https://learningportal.juniper.net/) cubren la mayoría de los exámenes de nivel associate y specialist.

## Itinerarios

| Itinerario | Associate | Specialist | Professional | Expert |
| --- | --- | --- | --- | --- |
| Enterprise Routing and Switching | JNCIA-Junos | JNCIS-ENT | JNCIP-ENT | JNCIE-ENT |
| Service Provider Routing and Switching | JNCIA-Junos | JNCIS-SP | JNCIP-SP | JNCIE-SP |
| Data Center | JNCIA-DC | JNCIS-ENT | JNCIP-DC | JNCIE-DC |
| Security | JNCIA-SEC | JNCIS-SEC | JNCIP-SEC | JNCIE-SEC |
| Cloud | JNCIA-Cloud | JNCIS-Cloud | JNCIP-Cloud | JNCIE-Cloud |
| Automation and DevOps | JNCIA-DevOps | JNCIS-DevOps | — | — |

Información oficial: [certificación de Juniper](https://www.juniper.net/us/en/training/certification.html).

## JNCIA-Junos

| Área | Temas de la biblioteca |
| --- | --- |
| Fundamentos de redes | [Modelos OSI y TCP/IP](../../01-fundamentals/osi-and-tcp-ip-models.md), [Direccionamiento IPv4 y la cabecera IPv4](../../01-fundamentals/ipv4-addressing.md), [Subnetting, VLSM y superredes](../../01-fundamentals/subnetting.md), [IPv6: direccionamiento, NDP y SLAAC](../../01-fundamentals/ipv6.md), [Conmutación Ethernet y aprendizaje de MAC](../../02-switching/ethernet-switching.md) |
| Fundamentos de Junos OS, interfaces de usuario y configuración básica | [Trabajar con equipos de red: la CLI](../../01-fundamentals/device-cli.md) |
| Monitorización y mantenimiento | [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](../../12-operations/monitoring.md), [Metodología y herramientas de resolución de problemas](../../12-operations/troubleshooting.md), [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](../../05-ip-services/device-management.md) |
| Fundamentos de enrutamiento | [Fundamentos de enrutamiento y selección de rutas](../../04-routing/routing-fundamentals.md), [Enrutamiento estático](../../04-routing/static-routing.md), [OSPF](../../04-routing/ospf.md) |
| Políticas de enrutamiento y firewall filters | [Redistribución, filtrado de rutas y route maps](../../04-routing/redistribution-and-filtering.md), [Listas de control de acceso](../../11-security/acls.md) |

## JNCIS-ENT y JNCIP-ENT

| Área | Temas de la biblioteca |
| --- | --- |
| Conmutación de capa 2, VLAN y spanning tree | [VLAN, trunking y enrutamiento entre VLAN](../../02-switching/vlans.md), [Spanning Tree: STP, RSTP y Rapid PVST+](../../02-switching/spanning-tree.md), [MST y protección de spanning tree](../../02-switching/mst-and-stp-protection.md), [Agregación de enlaces: LACP y EtherChannel](../../02-switching/link-aggregation.md) |
| Seguridad de capa 2 | [Seguridad de capa 2](../../11-security/layer2-security.md), [802.1X y control de acceso a la red](../../11-security/nac-and-8021x.md) |
| Enrutamiento | [OSPF](../../04-routing/ospf.md), [IS-IS](../../04-routing/is-is.md), [Fundamentos de BGP](../../04-routing/bgp-fundamentals.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [Redistribución, filtrado de rutas y route maps](../../04-routing/redistribution-and-filtering.md), [VRF y VRF-Lite](../../04-routing/vrf.md) |
| Túneles y alta disponibilidad | [Túneles GRE](../../06-wan-and-vpn/gre.md), [IPsec e IKEv2](../../06-wan-and-vpn/ipsec.md), [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](../../04-routing/fast-convergence.md), [Redundancia de primer salto: VRRP, HSRP y GLBP](../../04-routing/first-hop-redundancy.md) |
| Nivel profesional: multicast, CoS, EVPN | [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](../../04-routing/multicast.md), [Calidad de servicio (QoS)](../../05-ip-services/qos.md), [VXLAN, Geneve y EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) |

## JNCIS-SP, JNCIP-SP y JNCIE-SP

| Área | Temas de la biblioteca |
| --- | --- |
| IGP y BGP | [OSPF](../../04-routing/ospf.md), [IS-IS](../../04-routing/is-is.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [Redistribución, filtrado de rutas y route maps](../../04-routing/redistribution-and-filtering.md) |
| MPLS e ingeniería de tráfico | [MPLS y LDP](../../07-service-provider/mpls.md), [Ingeniería de tráfico: RSVP-TE](../../07-service-provider/traffic-engineering.md), [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md) |
| Servicios VPN | [MPLS L3VPN, 6PE y 6VPE](../../07-service-provider/mpls-l3vpn.md), [L2VPN: pseudowires y VPLS](../../07-service-provider/l2vpn.md), [EVPN](../../07-service-provider/evpn.md) |
| Class of service y multicast | [Calidad de servicio (QoS)](../../05-ip-services/qos.md), [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](../../04-routing/multicast.md) |
| IPv6 y alta disponibilidad | [IPv6: direccionamiento, NDP y SLAAC](../../01-fundamentals/ipv6.md), [Mecanismos de transición a IPv6](../../01-fundamentals/ipv6-transition.md), [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](../../04-routing/fast-convergence.md) |

## JNCIP-DC y JNCIE-DC

[Fábricas de centro de datos: leaf-spine y BGP en el DC](../../09-data-center-and-cloud/dc-fabrics.md), [VXLAN, Geneve y EVPN](../../09-data-center-and-cloud/vxlan-evpn.md), [MLAG, vPC y multihoming EVPN](../../02-switching/mlag-and-multihoming.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [NetDevOps, CI/CD y gemelos digitales](../../13-automation/netdevops.md).

:::note
Las áreas anteriores resumen a alto nivel los objetivos publicados de cada examen. Consulta los objetivos oficiales para conocer el alcance y las versiones exactas.
:::
