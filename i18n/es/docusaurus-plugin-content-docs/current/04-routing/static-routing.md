---
title: "Enrutamiento estático"
description: "Rutas estáticas IPv4 e IPv6: de red, de host, por defecto y flotantes."
sidebar_position: 2
---

# Enrutamiento estático

**Nivel:** Principiante · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Las rutas estáticas se configuran a mano y nunca cambian por sí solas. Son perfectas para redes stub, rutas por defecto hacia un ISP y caminos de respaldo (estáticas flotantes con una distancia mayor), y siguen siendo la forma más sencilla de entender cómo funciona el reenvío. Combinadas con seguimiento de objetos o BFD pueden incluso conmutar automáticamente ante fallos.

## Conceptos clave

- Rutas de red, de host y por defecto
- Rutas con siguiente salto frente a interfaz de salida
- Rutas estáticas flotantes
- Rutas estáticas IPv6 y siguientes saltos link-local
- Rutas nulas y blackholing
- Seguimiento y BFD para rutas estáticas

## Antes de empezar

- [Fundamentos de enrutamiento y selección de rutas](routing-fundamentals.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 11: Static routing (plus troubleshooting labs) (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

Conecta tres routers solo con rutas estáticas, añade un camino de respaldo con una estática flotante y tira el enlace principal.

## Temas relacionados

- [Fundamentos de enrutamiento y selección de rutas](./routing-fundamentals.md)
- [Conceptos de enrutamiento dinámico y RIP](./dynamic-routing-and-rip.md)
- [EIGRP](./eigrp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
