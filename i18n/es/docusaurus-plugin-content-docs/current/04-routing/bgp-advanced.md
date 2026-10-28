---
title: "BGP avanzado"
description: "Políticas a escala: comunidades, reflectores de rutas, confederaciones, Add-Path, multicamino, dampening, ingeniería de tráfico con BGP y operación a escala de Internet."
sidebar_position: 8
---

# BGP avanzado

**Nivel:** Avanzado · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Las grandes redes usan BGP para mucho más que la conectividad a Internet: transporta rutas VPN, EVPN, Flowspec e información de estado de enlace. Escalar iBGP requiere reflectores de rutas o confederaciones; las comunidades y las large communities transportan señales de política entre redes; Add-Path y el multicamino mejoran la resiliencia y el reparto de carga. Los exámenes profesionales y expertos de todos los fabricantes se centran mucho en esto.

## Conceptos clave

- Route maps / políticas de enrutamiento y listas de prefijos
- Comunidades estándar, extendidas y large
- Reflectores de rutas y clusters
- Confederaciones
- Add-Path y multicamino BGP
- Graceful restart y BGP PIC
- Route servers en IXP
- Política de peering frente a tránsito

## Antes de empezar

- [Fundamentos de BGP](bgp-fundamentals.md)

## Estándares y especificaciones

- [RFC 4456 — BGP Route Reflection](https://www.rfc-editor.org/rfc/rfc4456)
- [RFC 5065 — Autonomous System Confederations for BGP](https://www.rfc-editor.org/rfc/rfc5065)
- [RFC 1997 — BGP Communities Attribute](https://www.rfc-editor.org/rfc/rfc1997)
- [RFC 8092 — BGP Large Communities](https://www.rfc-editor.org/rfc/rfc8092)
- [RFC 7911 — Advertisement of Multiple Paths in BGP](https://www.rfc-editor.org/rfc/rfc7911)
- [RFC 7947 — Internet Exchange BGP Route Server](https://www.rfc-editor.org/rfc/rfc7947)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermedio | Gratis |
| [RIPE Labs](https://labs.ripe.net/) | Artículos | Intermedio | Gratis |
| [MANRS — Mutually Agreed Norms for Routing Security](https://manrs.org/) | Guía | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |
| [NANOG — operator talks and tutorials](https://www.nanog.org/) | Vídeo | Avanzado | Gratis |

## Bibliografía

- *Internet Routing Architectures* — Sam Halabi (De pago)
- *BGP Design and Implementation* — Randy Zhang, Micah Bartell (De pago)

## Laboratorio práctico

Monta el núcleo de un operador con dos reflectores de rutas y usa comunidades para etiquetar rutas de clientes, peers y tránsito y filtrar en consecuencia.

## Temas relacionados

- [IS-IS](./is-is.md)
- [Fundamentos de BGP](./bgp-fundamentals.md)
- [Redistribución, filtrado de rutas y route maps](./redistribution-and-filtering.md)
- [Enrutamiento basado en políticas](./policy-based-routing.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
