---
title: "SRv6 y uSID"
description: "Segment Routing sobre IPv6: la SRH, los comportamientos de network programming, los SID comprimidos (uSID) y los servicios SRv6."
sidebar_position: 8
---

# SRv6 y uSID

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

SRv6 transporta los segmentos como direcciones IPv6, así que el «programa» de red vive en la cabecera IPv6 y no hace falta MPLS. Cada SID codifica un localizador y una función (reenviar, desencapsular hacia una VRF, hacer un cross-connect), lo que permite L3VPN, EVPN e ingeniería de tráfico sobre IPv6 puro. Los SID comprimidos (uSID) resuelven el problema del tamaño de la cabecera y los están desplegando grandes operadores.

## Conceptos clave

- Localizadores y funciones
- Segment Routing Header (SRH)
- Comportamientos de endpoint: End, End.X, End.DT4/DT6/DT46
- L3VPN y EVPN sobre SRv6
- SID comprimidos (uSID / NEXT-C-SID)
- Ingeniería de tráfico con SRv6
- Seguridad y filtrado en los bordes del dominio

## Antes de empezar

- [Segment Routing: SR-MPLS](segment-routing.md)
- [IPv6: direccionamiento, NDP y SLAAC](../01-fundamentals/ipv6.md)

## Estándares y especificaciones

- [RFC 8754 — IPv6 Segment Routing Header (SRH)](https://www.rfc-editor.org/rfc/rfc8754)
- [RFC 8986 — SRv6 Network Programming](https://www.rfc-editor.org/rfc/rfc8986)
- [RFC 9252 — BGP Overlay Services Based on SRv6](https://www.rfc-editor.org/rfc/rfc9252)
- [RFC 9800 — Compressed SRv6 Segment List Encoding](https://www.rfc-editor.org/rfc/rfc9800)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [srv6.md — SRv6 knowledge base](https://srv6.md/) | Referencia | Avanzado | Gratis |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Artículos | Avanzado | Gratis |
| [Linux kernel SRv6 support (segment-routing.org)](https://segment-routing.org/) | Código abierto | Avanzado | Gratis |

## Bibliografía

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (De pago)

## Laboratorio práctico

Monta una L3VPN SRv6 con Linux (iproute2) o nodos SR Linux e inspecciona la SRH y los SID en Wireshark.

## Temas relacionados

- [Ingeniería de tráfico: RSVP-TE](./traffic-engineering.md)
- [Segment Routing: SR-MPLS](./segment-routing.md)
- [SDN para la WAN: PCE, PCEP y BGP-LS](./pce-and-bgp-ls.md)
- [Acceso de banda ancha: PON, DOCSIS, BNG, PPPoE e IPoE](./broadband-access.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
