---
title: "Diseño de redes y alta disponibilidad"
description: "Diseñar redes que escalen y sobrevivan a los fallos: jerarquía, modularidad, redundancia, dominios de fallo, planificación de capacidad y documentación."
sidebar_position: 6
---

# Diseño de redes y alta disponibilidad

**Nivel:** Intermedio · **Sección:** [Operación y aseguramiento de redes](./index.md)

## Visión general

Los buenos diseños son sencillos, modulares y predecibles. Los modelos jerárquicos de campus (núcleo, distribución, acceso o núcleo colapsado), los centros de datos spine-leaf y unos bordes WAN bien definidos limitan los dominios de fallo. La redundancia debe diseñarse de extremo a extremo (enlaces, equipos, alimentación, planos de control y personas) y validarse con pruebas de fallo. Los planes de direccionamiento, la nomenclatura y la documentación hacen que el diseño sea operable.

## Conceptos clave

- Diseños de dos niveles, tres niveles y spine-leaf
- Modularidad y dominios de fallo
- Redundancia y puntos únicos de fallo
- Stateful switchover y actualizaciones sin corte
- Planificación de capacidad
- Planes de direccionamiento y nomenclatura
- Documentación y diagramas

## Antes de empezar

- [Redundancia de primer salto: VRRP, HSRP y GLBP](../04-routing/first-hop-redundancy.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 52: LAN architectures (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)
- *Top-Down Network Design* — Priscilla Oppenheimer (De pago)

## Laboratorio práctico

Diseña la red de una empresa ficticia con tres sedes: topología, plan IP, diseño del enrutamiento y un análisis de fallos de cada componente.

## Temas relacionados

- [Monitorización activa: IP SLA, TWAMP y STAMP](./active-monitoring.md)
- [Captura de paquetes y port mirroring](./packet-capture.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
