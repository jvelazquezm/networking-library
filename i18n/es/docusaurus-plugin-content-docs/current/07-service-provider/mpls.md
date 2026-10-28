---
title: "MPLS y LDP"
description: "Conmutación por etiquetas: etiquetas, la LFIB, distribución de etiquetas con LDP, PHP y por qué MPLS sigue importando."
sidebar_position: 2
---

# MPLS y LDP

**Nivel:** Intermedio · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

MPLS reenvía los paquetes mediante etiquetas cortas en lugar de búsquedas IP, desacoplando el camino de reenvío de la cabecera IP. Eso hizo posibles las VPN, la ingeniería de tráfico y el fast reroute sobre un núcleo compartido. LDP distribuye etiquetas salto a salto siguiendo el IGP. Segment Routing está sustituyendo a LDP en los diseños nuevos, pero el reenvío MPLS sigue siendo la base.

## Conceptos clave

- Pila de etiquetas y operaciones (push, swap, pop)
- LSR, LER y FEC
- LIB y LFIB
- Sesiones LDP y distribución de etiquetas
- Penultimate hop popping
- Ping y traceroute MPLS
- Sincronización LDP-IGP

## Antes de empezar

- [IS-IS](../04-routing/is-is.md)

## Estándares y especificaciones

- [RFC 3031 — Multiprotocol Label Switching Architecture](https://www.rfc-editor.org/rfc/rfc3031)
- [RFC 3032 — MPLS Label Stack Encoding](https://www.rfc-editor.org/rfc/rfc3032)
- [RFC 5036 — LDP Specification](https://www.rfc-editor.org/rfc/rfc5036)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [FRRouting documentation](https://docs.frrouting.org/) | Documentación | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *MPLS Fundamentals* — Luc De Ghein (De pago)
- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (De pago)

## Laboratorio práctico

Monta en Containerlab un núcleo de cuatro routers con IS-IS y LDP y sigue un paquete etiquetado salto a salto con traceroute MPLS y Wireshark.

## Temas relacionados

- [Arquitectura de operador, peering e IXP](./sp-architecture.md)
- [MPLS L3VPN, 6PE y 6VPE](./mpls-l3vpn.md)
- [L2VPN: pseudowires y VPLS](./l2vpn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
