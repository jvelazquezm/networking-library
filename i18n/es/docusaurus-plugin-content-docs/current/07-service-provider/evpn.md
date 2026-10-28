---
title: "EVPN"
description: "Ethernet VPN: BGP como plano de control de servicios de capa 2 y capa 3 sobre MPLS, SR o VXLAN."
sidebar_position: 5
---

# EVPN

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

EVPN sustituye el «inundar y aprender» por BGP: los PE anuncian direcciones MAC e IP como rutas, lo que permite multihoming activo-activo, convergencia rápida y enrutamiento y puenteo integrados. Funciona sobre MPLS, Segment Routing y VXLAN, por lo que se ha convertido en la capa de servicios común de redes de operador y centros de datos. La nueva certificación NRS II de Nokia gira en torno a él.

## Conceptos clave

- Tipos de ruta EVPN 1–5
- Segmentos Ethernet y ESI
- Multihoming all-active y single-active
- Movilidad de MAC
- Enrutamiento y puenteo integrados (simétrico, asimétrico)
- EVPN-VPWS
- EVPN sobre MPLS, SR y VXLAN

## Antes de empezar

- [MPLS y LDP](mpls.md)
- [BGP avanzado](../04-routing/bgp-advanced.md)

## Estándares y especificaciones

- [RFC 7432 — BGP MPLS-Based Ethernet VPN](https://www.rfc-editor.org/rfc/rfc7432)
- [RFC 8214 — Virtual Private Wire Service Support in EVPN](https://www.rfc-editor.org/rfc/rfc8214)
- [RFC 9135 — Integrated Routing and Bridging in EVPN](https://www.rfc-editor.org/rfc/rfc9135)
- [RFC 9136 — IP Prefix Advertisement in EVPN](https://www.rfc-editor.org/rfc/rfc9136)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [Containerlab](https://containerlab.dev/) | Herramienta de laboratorio | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *EVPN in the Data Center* — Dinesh Dutt (De pago)
- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (De pago)

## Laboratorio práctico

Despliega EVPN-MPLS (o EVPN-VXLAN) entre tres nodos SR Linux o cEOS con un CE multihomed all-active y tira uno de los PE.

## Temas relacionados

- [MPLS L3VPN, 6PE y 6VPE](./mpls-l3vpn.md)
- [L2VPN: pseudowires y VPLS](./l2vpn.md)
- [Ingeniería de tráfico: RSVP-TE](./traffic-engineering.md)
- [Segment Routing: SR-MPLS](./segment-routing.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
