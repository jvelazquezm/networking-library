---
title: "Segment Routing: SR-MPLS"
description: "Enrutamiento en origen con segmentos: SID de prefijo y de adyacencia, políticas SR, TI-LFA y migración desde LDP/RSVP-TE."
sidebar_position: 7
---

# Segment Routing: SR-MPLS

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

Segment Routing codifica el camino en el propio paquete como una lista de segmentos, de modo que el núcleo no guarda estado por flujo ni necesita LDP ni RSVP. Los SID se distribuyen con el IGP; las políticas SR dirigen el tráfico para hacer ingeniería de tráfico; TI-LFA da una cobertura de fast reroute del 100 %. SR-MPLS reutiliza el plano de datos MPLS, por lo que la migración puede ser gradual.

## Conceptos clave

- Segmentos y SID (prefijo, nodo, adyacencia, anycast)
- SRGB y asignación de etiquetas
- Extensiones del IGP para SR
- Políticas SR y colores
- TI-LFA
- Interoperabilidad con LDP y mapping server
- Flex-Algo

## Antes de empezar

- [MPLS y LDP](mpls.md)
- [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](../04-routing/fast-convergence.md)

## Estándares y especificaciones

- [RFC 8402 — Segment Routing Architecture](https://www.rfc-editor.org/rfc/rfc8402)
- [RFC 8660 — Segment Routing with the MPLS Data Plane](https://www.rfc-editor.org/rfc/rfc8660)
- [RFC 8667 — IS-IS Extensions for Segment Routing](https://www.rfc-editor.org/rfc/rfc8667)
- [RFC 9256 — Segment Routing Policy Architecture](https://www.rfc-editor.org/rfc/rfc9256)
- [RFC 9350 — IGP Flexible Algorithm](https://www.rfc-editor.org/rfc/rfc9350)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Artículos | Avanzado | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (De pago)

## Laboratorio práctico

Activa SR-MPLS en un núcleo IS-IS, elimina LDP, configura TI-LFA y dirige un flujo por un camino que no es el más corto con una política SR.

## Temas relacionados

- [EVPN](./evpn.md)
- [Ingeniería de tráfico: RSVP-TE](./traffic-engineering.md)
- [SRv6 y uSID](./srv6.md)
- [SDN para la WAN: PCE, PCEP y BGP-LS](./pce-and-bgp-ls.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
