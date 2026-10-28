---
title: "Fábricas de centro de datos: leaf-spine y BGP en el DC"
description: "Fábricas Clos, ECMP, underlays enrutados con eBGP o IS-IS, y por qué los centros de datos abandonaron spanning tree."
sidebar_position: 4
---

# Fábricas de centro de datos: leaf-spine y BGP en el DC

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Los centros de datos modernos usan fábricas leaf-spine (Clos): cada leaf se conecta a todos los spines, lo que da una latencia predecible y un ECMP masivo para el tráfico este-oeste. El underlay es enrutado (a menudo eBGP con un AS por leaf, a veces IS-IS u OSPF), así que no hay spanning tree bloqueando enlaces. Las interfaces sin numerar y la automatización hacen manejables las fábricas grandes.

## Conceptos clave

- Tres niveles frente a leaf-spine
- Clos y sobresuscripción
- ECMP y hashing
- Diseño de underlay eBGP y esquemas de ASN
- BGP unnumbered (RFC 8950)
- Super-spines y diseños multi-pod
- Operación con la automatización como base

## Antes de empezar

- [Fundamentos de BGP](../04-routing/bgp-fundamentals.md)

## Estándares y especificaciones

- [RFC 7938 — Use of BGP for Routing in Large-Scale Data Centers](https://www.rfc-editor.org/rfc/rfc7938)
- [RFC 8950 — Advertising IPv4 NLRI with an IPv6 Next Hop](https://www.rfc-editor.org/rfc/rfc8950)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Herramienta de laboratorio | Intermedio | Gratis |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [Arista — free cEOS-lab and vEOS-lab images (registration)](https://www.arista.com/en/support/software-download) | Imágenes de laboratorio | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *Cloud Native Data Center Networking* — Dinesh Dutt (De pago)
- *BGP in the Data Center* — Dinesh Dutt (De pago)

## Laboratorio práctico

Monta en Containerlab una fábrica de 2 spines y 4 leaves con eBGP unnumbered y comprueba el ECMP entre leaves.

## Temas relacionados

- [Contenedores y redes de contenedores](./containers.md)
- [SDN y redes basadas en controladora](./sdn.md)
- [VXLAN, Geneve y EVPN](./vxlan-evpn.md)
- [Fábricas de campus: SD-Access, LISP y VXLAN](./campus-fabrics.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
