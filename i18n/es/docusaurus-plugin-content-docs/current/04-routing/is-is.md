---
title: "IS-IS"
description: "El IGP de estado de enlace de los operadores y los centros de datos: niveles, TLV y por qué es la base de Segment Routing."
sidebar_position: 6
---

# IS-IS

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

IS-IS se diseñó para OSI pero se amplió para transportar IP, y funciona directamente sobre la capa 2 en lugar de sobre IP. Su codificación basada en TLV lo hace fácil de extender (para IPv6, ingeniería de tráfico y Segment Routing), y por eso la mayoría de los grandes operadores lo usan. La certificación NRS I de Nokia está pasando de OSPF a IS-IS precisamente por esa razón.

## Conceptos clave

- Direcciones NET e identificadores de sistema
- Routers de nivel 1, nivel 2 y L1/L2
- Hellos, LSP, CSNP y PSNP
- TLV y extensibilidad
- Wide metrics
- Multitopología e IPv6
- IS-IS frente a OSPF

## Antes de empezar

- [OSPF](ospf.md)

## Estándares y especificaciones

- [RFC 1195 — Use of OSI IS-IS for Routing in TCP/IP and Dual Environments](https://www.rfc-editor.org/rfc/rfc1195)
- [RFC 5308 — Routing IPv6 with IS-IS](https://www.rfc-editor.org/rfc/rfc5308)
- [RFC 5305 — IS-IS Extensions for Traffic Engineering](https://www.rfc-editor.org/rfc/rfc5305)
- [ISO/IEC 10589 — IS-IS intra-domain routing protocol](https://www.iso.org/standard/30932.html)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [FRRouting documentation](https://docs.frrouting.org/) | Documentación | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)

## Laboratorio práctico

Sustituye OSPF por IS-IS (solo nivel 2) en tu laboratorio y compara la configuración, la base de datos y la convergencia.

## Temas relacionados

- [EIGRP](./eigrp.md)
- [OSPF](./ospf.md)
- [Fundamentos de BGP](./bgp-fundamentals.md)
- [BGP avanzado](./bgp-advanced.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
