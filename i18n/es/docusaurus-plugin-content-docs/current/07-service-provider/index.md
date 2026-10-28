---
title: "Redes de operador y transporte"
description: "Arquitectura de operador, MPLS, L3VPN, L2VPN, EVPN, ingeniería de tráfico, Segment Routing, SRv6, PCE, acceso de banda ancha, transporte óptico, backhaul y sincronización."
sidebar_position: 0
sidebar_label: Visión general
---

# 07 · Redes de operador y transporte

Cómo construyen los operadores las redes sobre las que funciona todo lo demás: la arquitectura de un proveedor de servicios, las tecnologías MPLS y Segment Routing de sus redes troncales, los servicios VPN que venden y las capas de acceso, óptica y sincronización que hay debajo. Es el terreno del CCNP/CCIE Service Provider, del JNCIP/JNCIE-SP y del programa SRC de Nokia.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [Arquitectura de operador, peering e IXP](./sp-architecture.md) | Intermedio | Cómo se organiza la red de un operador (acceso, agregación, núcleo, borde, centros de datos) y cómo se interconectan los operadores. |
| [MPLS y LDP](./mpls.md) | Intermedio | Conmutación por etiquetas: etiquetas, la LFIB, distribución de etiquetas con LDP, PHP y por qué MPLS sigue importando. |
| [MPLS L3VPN, 6PE y 6VPE](./mpls-l3vpn.md) | Intermedio | VPN IP BGP/MPLS: VRF, route distinguishers y route targets, MP-BGP VPNv4/VPNv6 y enrutamiento PE-CE. |
| [L2VPN: pseudowires y VPLS](./l2vpn.md) | Avanzado | Transportar Ethernet sobre una red MPLS: pseudowires punto a punto y VPLS multipunto. |
| [EVPN](./evpn.md) | Avanzado | Ethernet VPN: BGP como plano de control de servicios de capa 2 y capa 3 sobre MPLS, SR o VXLAN. |
| [Ingeniería de tráfico: RSVP-TE](./traffic-engineering.md) | Avanzado | Desviar el tráfico de los caminos más cortos con túneles RSVP-TE, restricciones y fast reroute. |
| [Segment Routing: SR-MPLS](./segment-routing.md) | Avanzado | Enrutamiento en origen con segmentos: SID de prefijo y de adyacencia, políticas SR, TI-LFA y migración desde LDP/RSVP-TE. |
| [SRv6 y uSID](./srv6.md) | Avanzado | Segment Routing sobre IPv6: la SRH, los comportamientos de network programming, los SID comprimidos (uSID) y los servicios SRv6. |
| [SDN para la WAN: PCE, PCEP y BGP-LS](./pce-and-bgp-ls.md) | Avanzado | Cálculo centralizado de caminos: recoger la topología con BGP-LS y programar caminos con PCEP. |
| [Acceso de banda ancha: PON, DOCSIS, BNG, PPPoE e IPoE](./broadband-access.md) | Intermedio | Tecnologías fijas de última milla y gestión de abonados: fibra PON, cable, DSL y pasarelas de red de banda ancha. |
| [Transporte óptico: DWDM y OTN](./optical-transport.md) | Avanzado | Mover terabits por fibra: multiplexación por longitud de onda, amplificadores, óptica coherente, ROADM, OTN e IP sobre DWDM. |
| [Metro, backhaul y fronthaul](./metro-backhaul-fronthaul.md) | Intermedio | Transporte para servicios móviles y empresariales: Carrier Ethernet, backhaul, midhaul y fronthaul móvil (CPRI/eCPRI). |
| [Sincronización para redes de transporte](./timing-and-synchronization.md) | Avanzado | Sincronización de frecuencia y fase para redes móviles: GNSS, SyncE, perfiles PTP de telecomunicaciones y presupuestos de error de tiempo. |

## Orden de lectura sugerido

1. [Arquitectura de operador, peering e IXP](./sp-architecture.md) — Intermedio
2. [MPLS y LDP](./mpls.md) — Intermedio
3. [MPLS L3VPN, 6PE y 6VPE](./mpls-l3vpn.md) — Intermedio
4. [Acceso de banda ancha: PON, DOCSIS, BNG, PPPoE e IPoE](./broadband-access.md) — Intermedio
5. [Metro, backhaul y fronthaul](./metro-backhaul-fronthaul.md) — Intermedio
6. [L2VPN: pseudowires y VPLS](./l2vpn.md) — Avanzado
7. [EVPN](./evpn.md) — Avanzado
8. [Ingeniería de tráfico: RSVP-TE](./traffic-engineering.md) — Avanzado
9. [Segment Routing: SR-MPLS](./segment-routing.md) — Avanzado
10. [SRv6 y uSID](./srv6.md) — Avanzado
11. [SDN para la WAN: PCE, PCEP y BGP-LS](./pce-and-bgp-ls.md) — Avanzado
12. [Transporte óptico: DWDM y OTN](./optical-transport.md) — Avanzado
13. [Sincronización para redes de transporte](./timing-and-synchronization.md) — Avanzado

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
