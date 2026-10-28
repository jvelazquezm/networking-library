---
title: "OSPF"
description: "Enrutamiento de estado de enlace con OSPFv2 y OSPFv3: vecinos, DR/BDR, LSA, áreas, tipos de área y resumen."
sidebar_position: 5
---

# OSPF

**Nivel:** Principiante · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

OSPF inunda anuncios de estado de enlace para que todos los routers de un área tengan el mismo mapa, y luego ejecuta el algoritmo de Dijkstra para construir árboles de caminos más cortos. OSPF de un área es materia del CCNA: vecinos, tipos de red, elección de DR/BDR y coste. En el nivel profesional diseñas redes multiárea, conoces todos los tipos de LSA, usas áreas stub y NSSA para controlar la inundación y resumes en los bordes de área. OSPFv3 aplica el mismo diseño a IPv6.

## Conceptos clave

- Router ID y temporizadores hello y dead
- Estados de vecino y adyacencias
- Tipos de red y elección de DR/BDR
- Coste y ancho de banda de referencia
- Tipos de LSA y la LSDB
- Áreas, ABR y ASBR
- Áreas stub, totally stubby y NSSA
- OSPFv3 y familias de direcciones

## Antes de empezar

- [Conceptos de enrutamiento dinámico y RIP](dynamic-routing-and-rip.md)

## Estándares y especificaciones

- [RFC 2328 — OSPF Version 2](https://www.rfc-editor.org/rfc/rfc2328)
- [RFC 5340 — OSPF for IPv6](https://www.rfc-editor.org/rfc/rfc5340)
- [RFC 3101 — OSPF Not-So-Stubby Area (NSSA)](https://www.rfc-editor.org/rfc/rfc3101)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 26–28: OSPF (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [FRRouting documentation](https://docs.frrouting.org/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)
- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (De pago)

## Laboratorio práctico

Monta en Containerlab una red OSPF de tres áreas con un área stub y una NSSA, inspecciona la LSDB de cada área y resume en los ABR.

## Temas relacionados

- [Conceptos de enrutamiento dinámico y RIP](./dynamic-routing-and-rip.md)
- [EIGRP](./eigrp.md)
- [IS-IS](./is-is.md)
- [Fundamentos de BGP](./bgp-fundamentals.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
