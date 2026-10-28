---
title: "Fundamentos de enrutamiento y selección de rutas"
description: "La tabla de rutas, la coincidencia de prefijo más largo, la distancia administrativa, las métricas, ECMP y la separación RIB/FIB."
sidebar_position: 1
---

# Fundamentos de enrutamiento y selección de rutas

**Nivel:** Principiante · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Un router reenvía cada paquete buscando su destino en la tabla de rutas y eligiendo el prefijo coincidente más específico. Cuando varias fuentes ofrecen el mismo prefijo, la distancia administrativa (o preferencia de ruta) elige la fuente más fiable, y la métrica del protocolo elige el mejor camino dentro de ella. El plano de control construye la RIB; el plano de datos reenvía desde una FIB optimizada para la velocidad.

:::info Notas sobre fabricantes
Cisco llama a este valor de confianza «distancia administrativa» y Juniper «preferencia de ruta». Los valores por defecto cambian entre fabricantes.
:::

## Conceptos clave

- Rutas conectadas, locales, estáticas y dinámicas
- Coincidencia de prefijo más largo
- Distancia administrativa / preferencia de ruta
- Métricas y multicamino de igual coste (ECMP)
- RIB frente a FIB, reenvío tipo CEF
- Búsquedas recursivas y siguientes saltos

## Antes de empezar

- [Subnetting, VLSM y superredes](../01-fundamentals/subnetting.md)

## Estándares y especificaciones

- [RFC 1812 — Requirements for IP Version 4 Routers](https://www.rfc-editor.org/rfc/rfc1812)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 11: Routing fundamentals (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |
| [Kurose & Ross — companion site, interactive problems and Wireshark labs](https://gaia.cs.umass.edu/kurose_ross/) | Ejercicios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)

## Laboratorio práctico

Da a un router rutas solapadas de distintas fuentes y predice, y luego comprueba, cuál se instala para varios destinos.

## Temas relacionados

- [Enrutamiento estático](./static-routing.md)
- [Conceptos de enrutamiento dinámico y RIP](./dynamic-routing-and-rip.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
