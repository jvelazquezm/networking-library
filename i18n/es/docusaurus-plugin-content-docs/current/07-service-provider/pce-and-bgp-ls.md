---
title: "SDN para la WAN: PCE, PCEP y BGP-LS"
description: "Cálculo centralizado de caminos: recoger la topología con BGP-LS y programar caminos con PCEP."
sidebar_position: 9
---

# SDN para la WAN: PCE, PCEP y BGP-LS

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

Un Path Computation Element calcula caminos con una visión global de la red que ningún router tiene por sí solo. BGP-LS exporta la topología del IGP y los datos de TE a la controladora; PCEP permite a la controladora crear y actualizar caminos SR o RSVP-TE en los routers de cabecera. Juntos permiten optimizar el ancho de banda, calcular caminos disjuntos y automatizar la ingeniería de tráfico en WAN grandes.

## Conceptos clave

- PCE sin estado frente a con estado
- Caminos iniciados por el PCC frente a por el PCE
- Recogida de topología con BGP-LS
- Delegación y actualización de caminos
- Caminos disjuntos y optimizados por latencia
- Controladoras de código abierto y comerciales

## Antes de empezar

- [Segment Routing: SR-MPLS](segment-routing.md)

## Estándares y especificaciones

- [RFC 5440 — Path Computation Element Communication Protocol (PCEP)](https://www.rfc-editor.org/rfc/rfc5440)
- [RFC 8231 — PCEP Extensions for Stateful PCE](https://www.rfc-editor.org/rfc/rfc8231)
- [RFC 8664 — PCEP Extensions for Segment Routing](https://www.rfc-editor.org/rfc/rfc8664)
- [RFC 9552 — Distribution of Link-State and TE Information Using BGP](https://www.rfc-editor.org/rfc/rfc9552)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Artículos | Avanzado | Gratis |

## Bibliografía

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (De pago)

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [Segment Routing: SR-MPLS](./segment-routing.md)
- [SRv6 y uSID](./srv6.md)
- [Acceso de banda ancha: PON, DOCSIS, BNG, PPPoE e IPoE](./broadband-access.md)
- [Transporte óptico: DWDM y OTN](./optical-transport.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
