---
title: "L2VPN: pseudowires y VPLS"
description: "Transportar Ethernet sobre una red MPLS: pseudowires punto a punto y VPLS multipunto."
sidebar_position: 4
---

# L2VPN: pseudowires y VPLS

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

Las VPN de capa 2 hacen que la red de un operador parezca un cable o un switch para el cliente. Los pseudowires (VPWS) emulan circuitos punto a punto señalizados con LDP o BGP; VPLS emula una LAN multipunto con aprendizaje de MAC en los PE. Ambos están muy desplegados, pero EVPN los está sustituyendo porque resuelve sus limitaciones de escala y multihoming.

## Conceptos clave

- Circuitos de acceso
- VPWS / pseudowires
- Señalización LDP y BGP
- VPLS y H-VPLS
- Aprendizaje de MAC y split horizon
- Limitaciones que llevaron a EVPN

## Antes de empezar

- [MPLS y LDP](mpls.md)

## Estándares y especificaciones

- [RFC 8077 — Pseudowire Setup and Maintenance Using LDP](https://www.rfc-editor.org/rfc/rfc8077)
- [RFC 4761 — VPLS Using BGP for Auto-Discovery and Signaling](https://www.rfc-editor.org/rfc/rfc4761)
- [RFC 4762 — VPLS Using LDP Signaling](https://www.rfc-editor.org/rfc/rfc4762)

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

- [MPLS y LDP](./mpls.md)
- [MPLS L3VPN, 6PE y 6VPE](./mpls-l3vpn.md)
- [EVPN](./evpn.md)
- [Ingeniería de tráfico: RSVP-TE](./traffic-engineering.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
