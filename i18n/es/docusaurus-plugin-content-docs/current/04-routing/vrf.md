---
title: "VRF y VRF-Lite"
description: "Varias tablas de rutas independientes en un mismo router para segmentación y multi-tenencia."
sidebar_position: 11
---

# VRF y VRF-Lite

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Una VRF es una tabla de enrutamiento y reenvío separada dentro del mismo equipo, lo que permite que espacios de direcciones solapados y redes aisladas compartan hardware. VRF-Lite usa VRF salto a salto sin MPLS, algo habitual para segmentar empresas y centros de datos, mientras que MPLS L3VPN las usa en el borde de la red de un operador. El route leaking entre VRF permite que unos servicios compartidos lleguen a varios clientes.

## Conceptos clave

- Conceptos de VRF e interfaces
- VRF-Lite con subinterfaces
- Espacios de direcciones solapados
- Servicios conscientes de VRF (ping, SSH, NTP)
- Route leaking
- VRF de gestión

## Antes de empezar

- [Enrutamiento estático](static-routing.md)

## Estándares y especificaciones

- [RFC 4364 — BGP/MPLS IP Virtual Private Networks (VRF concept)](https://www.rfc-editor.org/rfc/rfc4364)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 54: Virtualization (VRF) (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (De pago)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Crea dos VRF de clientes con direcciones solapadas en los mismos routers y filtra hacia ambas un prefijo de servicios compartidos.

## Temas relacionados

- [Redistribución, filtrado de rutas y route maps](./redistribution-and-filtering.md)
- [Enrutamiento basado en políticas](./policy-based-routing.md)
- [Redundancia de primer salto: VRRP, HSRP y GLBP](./first-hop-redundancy.md)
- [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](./fast-convergence.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
