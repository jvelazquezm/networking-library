---
title: "Conceptos de enrutamiento dinámico y RIP"
description: "Por qué el enrutamiento dinámico, IGP frente a EGP, vector distancia frente a estado de enlace frente a vector de caminos, y RIP como protocolo clásico de vector distancia."
sidebar_position: 3
---

# Conceptos de enrutamiento dinámico y RIP

**Nivel:** Principiante · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Los protocolos de enrutamiento dinámico permiten que los routers descubran caminos y reaccionen a los fallos automáticamente. Los protocolos de vector distancia (RIP) comparten su tabla de rutas con los vecinos; los de estado de enlace (OSPF, IS-IS) comparten un mapa de la topología y cada router calcula sus propios caminos más cortos; BGP, de vector de caminos, transporta políticas entre redes. RIP apenas se despliega hoy, pero es la forma más clara de aprender el comportamiento del vector distancia y sus mecanismos para evitar bucles.

## Conceptos clave

- IGP frente a EGP
- Vector distancia, estado de enlace y vector de caminos
- Convergencia
- Split horizon, envenenamiento de rutas y hold-down
- RIPv2 y RIPng
- Cuenta hasta infinito

## Antes de empezar

- [Fundamentos de enrutamiento y selección de rutas](routing-fundamentals.md)

## Estándares y especificaciones

- [RFC 2453 — RIP Version 2](https://www.rfc-editor.org/rfc/rfc2453)
- [RFC 2080 — RIPng for IPv6](https://www.rfc-editor.org/rfc/rfc2080)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 24–25: Dynamic routing; RIP and EIGRP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)

## Laboratorio práctico

Ejecuta RIPv2 entre tres contenedores FRRouting, rompe un enlace y observa la convergencia de las tablas con la salida de debug.

## Temas relacionados

- [Fundamentos de enrutamiento y selección de rutas](./routing-fundamentals.md)
- [Enrutamiento estático](./static-routing.md)
- [EIGRP](./eigrp.md)
- [OSPF](./ospf.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
