---
title: "SDN y redes basadas en controladora"
description: "Separar los planos de control y de datos: controladoras, APIs northbound y southbound, overlay frente a underlay, OpenFlow y planos de datos programables."
sidebar_position: 3
---

# SDN y redes basadas en controladora

**Nivel:** Principiante · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Las redes definidas por software trasladan las decisiones de cada equipo a una controladora con visión global, que expone la red mediante APIs. La idea aparece hoy por todas partes: fábricas de campus, SD-WAN, controladoras de centro de datos y redes de los hiperescaladores. El vocabulario clave (planos, interfaces northbound y southbound, underlay y overlay) es materia del CCNA.

## Conceptos clave

- Planos de datos, de control y de gestión
- Controladoras, APIs northbound y southbound
- Underlay, overlay y fábrica
- OpenFlow
- Redes basadas en controladora frente a tradicionales
- P4 y planos de datos programables (visión general)

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

- [Open Networking Foundation](https://opennetworking.org/)
- [P4 Language Consortium](https://p4.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 62: Software-defined networking (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Software-Defined Networks: A Systems Approach](https://sdn.systemsapproach.org/) | Libro abierto | Intermedio | Gratis |
| [Mininet](https://github.com/mininet/mininet) | Herramienta de laboratorio | Intermedio | Gratis |

## Bibliografía

- [*Software-Defined Networks: A Systems Approach*](https://sdn.systemsapproach.org/) — Larry Peterson et al. (Gratis)

## Laboratorio práctico

Ejecuta Mininet con una controladora SDN, empuja reglas de flujo mediante la API de la controladora y observa las tablas de flujo de los switches.

## Temas relacionados

- [Virtualización: hipervisores, VM y conmutación virtual](./virtualization.md)
- [Contenedores y redes de contenedores](./containers.md)
- [Fábricas de centro de datos: leaf-spine y BGP en el DC](./dc-fabrics.md)
- [VXLAN, Geneve y EVPN](./vxlan-evpn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
