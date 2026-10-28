---
title: "Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC"
description: "Transmitir el estado de los equipos con suscripciones gNMI, operarlos con gNOI y montar un pipeline de telemetría."
sidebar_position: 8
---

# Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC

**Nivel:** Intermedio · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

En lugar de consultar cada pocos minutos, los equipos pueden transmitir datos modelados en YANG cuando cambian o con intervalos de menos de un segundo. gNMI (sobre gRPC) gestiona la configuración y las suscripciones; gNOI ofrece RPC operativas como reinicios, gestión de certificados o transferencia de archivos. Colectores como gNMIc o Telegraf alimentan bases de datos de series temporales para paneles y automatización.

## Conceptos clave

- Push frente a pull
- gRPC y Protocol Buffers
- gNMI Get, Set y Subscribe
- Modos de suscripción: sample, on-change
- Servicios gNOI
- Colectores y pipelines

## Antes de empezar

- [YANG, NETCONF y RESTCONF](yang-netconf-restconf.md)
- [Pila de observabilidad: Prometheus y Grafana](../12-operations/observability-stack.md)

## Estándares y especificaciones

- [gNMI specification (OpenConfig)](https://github.com/openconfig/reference/blob/master/rpc/gnmi/gnmi-specification.md)
- [gNOI — gRPC Network Operations Interface](https://github.com/openconfig/gnoi)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [gNMIc — gNMI client and collector](https://gnmic.openconfig.net/) | Herramienta | Intermedio | Gratis |
| [OpenConfig](https://www.openconfig.net/) | Modelos | Intermedio | Gratis |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Transmite los contadores de interfaz de SR Linux o cEOS con gNMIc hacia Prometheus y represéntalos en Grafana.

## Temas relacionados

- [Plantillas y fuente de verdad: Jinja2 y NetBox](./templating-and-source-of-truth.md)
- [YANG, NETCONF y RESTCONF](./yang-netconf-restconf.md)
- [Automatización en el equipo: EEM y Python en el dispositivo](./on-box-automation.md)
- [NetDevOps, CI/CD y gemelos digitales](./netdevops.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
