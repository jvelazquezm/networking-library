---
title: "Ingeniería de tráfico: RSVP-TE"
description: "Desviar el tráfico de los caminos más cortos con túneles RSVP-TE, restricciones y fast reroute."
sidebar_position: 6
---

# Ingeniería de tráfico: RSVP-TE

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

Los IGP siempre eligen el camino más corto, lo que puede saturar algunos enlaces mientras otros están ociosos. La ingeniería de tráfico MPLS construye caminos explícitos que respetan restricciones de ancho de banda y administrativas, señalizados con RSVP-TE, y los protege con fast reroute. Es compleja de operar a escala, y ese es uno de los grandes motivos del paso a Segment Routing.

## Conceptos clave

- Enrutamiento basado en restricciones (CSPF)
- Extensiones TE de los IGP
- Señalización y reservas RSVP-TE
- Caminos explícitos y dinámicos
- Auto-bandwidth
- Fast reroute: protección de enlace y de nodo

## Antes de empezar

- [MPLS y LDP](mpls.md)

## Estándares y especificaciones

- [RFC 3209 — RSVP-TE: Extensions to RSVP for LSP Tunnels](https://www.rfc-editor.org/rfc/rfc3209)
- [RFC 4090 — Fast Reroute Extensions to RSVP-TE](https://www.rfc-editor.org/rfc/rfc4090)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (De pago)

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [L2VPN: pseudowires y VPLS](./l2vpn.md)
- [EVPN](./evpn.md)
- [Segment Routing: SR-MPLS](./segment-routing.md)
- [SRv6 y uSID](./srv6.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
