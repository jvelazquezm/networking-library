---
title: "NetDevOps, CI/CD y gemelos digitales"
description: "Prácticas de ingeniería de software para redes: flujos con Git, pruebas, laboratorios virtuales, validación previa a los cambios y pipelines."
sidebar_position: 10
---

# NetDevOps, CI/CD y gemelos digitales

**Nivel:** Avanzado · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

NetDevOps trata los cambios de red como versiones de software: cada cambio vive en Git, se revisa, se prueba automáticamente en un laboratorio virtual o gemelo digital y se despliega con un pipeline con verificación y marcha atrás. Herramientas como Containerlab, Batfish y los frameworks de pruebas tipo pyATS lo hacen práctico incluso para equipos pequeños.

## Conceptos clave

- Ramas y revisión de código con Git
- Linting y pruebas unitarias de configuraciones
- Gemelos digitales y laboratorios virtuales
- Validación previa a los cambios (Batfish)
- Pipelines de CI/CD
- Verificación posterior y marcha atrás

## Antes de empezar

- [Plantillas y fuente de verdad: Jinja2 y NetBox](templating-and-source-of-truth.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Herramienta de laboratorio | Intermedio | Gratis |
| [Batfish — configuration analysis](https://www.batfish.org/) | Herramienta | Avanzado | Gratis |
| [pyATS documentation](https://developer.cisco.com/docs/pyats/) | Documentación | Avanzado | Gratis |

## Bibliografía

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)

## Laboratorio práctico

Construye un pipeline de GitHub Actions que arranque una topología de Containerlab, despliegue un cambio propuesto y ejecute Batfish y pruebas de alcanzabilidad en cada pull request.

## Temas relacionados

- [Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC](./model-driven-telemetry.md)
- [Automatización en el equipo: EEM y Python en el dispositivo](./on-box-automation.md)
- [IA en la operación de redes](./ai-for-networks.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
