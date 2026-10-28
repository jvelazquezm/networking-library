---
title: "Nokia"
description: "Nokia Service Routing Certification (NRS I, NRS II, SRA) relacionada con los temas de la biblioteca, incluidos los cambios de 2026/27."
sidebar_position: 3
---

# Nokia

El programa [Service Routing Certification (SRC)](https://www.nokia.com/networks/training/src/) de Nokia se centra en el enrutamiento de operador con SR OS y, cada vez más, con SR Linux. Hay tutoriales gratuitos de SR Linux en [learn.srlinux.dev](https://learn.srlinux.dev/).

## Cambios del programa en 2026/27

- **NRS I**: el examen renovado sustituye OSPF por IS-IS e introduce Segment Routing y EVPN. Se puede elegir un itinerario SR OS o SR Linux. El examen actual está disponible hasta el 8 de febrero de 2027 y los nuevos abren el 9 de marzo de 2027.
- **NRS II**: pasa de cuatro exámenes escritos sobre LDP, RSVP y servicios tradicionales a dos exámenes escritos, de Segment Routing y de EVPN, más un nuevo examen de laboratorio.
- **SRA**: ahora exige cinco exámenes escritos en lugar de ocho (se retira el de multicast y el de EVPN Services sustituye al optativo), además del examen de laboratorio, que no cambia.

Fuente: [Nokia — actualización del programa SRC 2026/27](https://www.nokia.com/learning/news/src-2026-program-update/).

## NRS I (nueva versión)

| Área | Temas de la biblioteca |
| --- | --- |
| Fundamentos de IP | [Modelos OSI y TCP/IP](../../01-fundamentals/osi-and-tcp-ip-models.md), [Direccionamiento IPv4 y la cabecera IPv4](../../01-fundamentals/ipv4-addressing.md), [Subnetting, VLSM y superredes](../../01-fundamentals/subnetting.md), [IPv6: direccionamiento, NDP y SLAAC](../../01-fundamentals/ipv6.md), [Conmutación Ethernet y aprendizaje de MAC](../../02-switching/ethernet-switching.md) |
| Operación del equipo (SR OS / SR Linux) | [Trabajar con equipos de red: la CLI](../../01-fundamentals/device-cli.md) |
| Enrutamiento | [Fundamentos de enrutamiento y selección de rutas](../../04-routing/routing-fundamentals.md), [Enrutamiento estático](../../04-routing/static-routing.md), [IS-IS](../../04-routing/is-is.md), [Fundamentos de BGP](../../04-routing/bgp-fundamentals.md) |
| Introducción a Segment Routing y EVPN | [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md), [EVPN](../../07-service-provider/evpn.md) |

## NRS II (nueva versión)

| Área | Temas de la biblioteca |
| --- | --- |
| Segment Routing | [Segment Routing: SR-MPLS](../../07-service-provider/segment-routing.md), [SRv6 y uSID](../../07-service-provider/srv6.md), [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](../../04-routing/fast-convergence.md), [SDN para la WAN: PCE, PCEP y BGP-LS](../../07-service-provider/pce-and-bgp-ls.md) |
| EVPN | [EVPN](../../07-service-provider/evpn.md), [MLAG, vPC y multihoming EVPN](../../02-switching/mlag-and-multihoming.md), [VXLAN, Geneve y EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) |
| Temas de apoyo | [IS-IS](../../04-routing/is-is.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [MPLS y LDP](../../07-service-provider/mpls.md), [MPLS L3VPN, 6PE y 6VPE](../../07-service-provider/mpls-l3vpn.md) |

## SRA

Se apoya en NRS II con el catálogo completo de operador: [Arquitectura de operador, peering e IXP](../../07-service-provider/sp-architecture.md), [MPLS L3VPN, 6PE y 6VPE](../../07-service-provider/mpls-l3vpn.md), [L2VPN: pseudowires y VPLS](../../07-service-provider/l2vpn.md), [EVPN](../../07-service-provider/evpn.md), [Calidad de servicio (QoS)](../../05-ip-services/qos.md), [BGP avanzado](../../04-routing/bgp-advanced.md), [IS-IS](../../04-routing/is-is.md), [OSPF](../../04-routing/ospf.md) y la ruta de aprendizaje [Redes de operador](../../00-start-here/learning-paths/service-provider.md).
