---
title: "EIGRP"
description: "El protocolo avanzado de vector distancia de Cisco: DUAL, sucesores y sucesores factibles, métrica compuesta y enrutamiento stub."
sidebar_position: 4
---

# EIGRP

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

EIGRP usa el algoritmo DUAL para calcular caminos sin bucles y mantiene caminos de respaldo precalculados (sucesores factibles) para conmutar casi al instante. Fue propietario de Cisco hasta que se publicó como RFC informativa en 2016, y sigue siendo habitual en redes empresariales de Cisco. Aparece en CCNA, ENCOR y ENARSI.

:::info Notas sobre fabricantes
EIGRP lo implementa casi exclusivamente Cisco. Existe soporte de código abierto en FRRouting, pero otros fabricantes no lo incluyen.
:::

## Conceptos clave

- Descubrimiento de vecinos y tabla de topología
- DUAL, sucesores y sucesores factibles
- Condición de factibilidad
- Métrica compuesta y wide metrics
- Enrutamiento stub y resumen
- Modo con nombre (named mode)

## Antes de empezar

- [Conceptos de enrutamiento dinámico y RIP](dynamic-routing-and-rip.md)

## Estándares y especificaciones

- [RFC 7868 — Cisco's Enhanced Interior Gateway Routing Protocol (EIGRP)](https://www.rfc-editor.org/rfc/rfc7868)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 25: RIP and EIGRP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (De pago)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)

## Laboratorio práctico

Monta una topología EIGRP con caminos desiguales, identifica el sucesor factible y tira el camino principal.

## Temas relacionados

- [Enrutamiento estático](./static-routing.md)
- [Conceptos de enrutamiento dinámico y RIP](./dynamic-routing-and-rip.md)
- [OSPF](./ospf.md)
- [IS-IS](./is-is.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
