---
title: "Pila de observabilidad: Prometheus y Grafana"
description: "Métricas, registros y paneles modernos para redes: bases de datos de series temporales, exporters, paneles y alertas."
sidebar_position: 3
---

# Pila de observabilidad: Prometheus y Grafana

**Nivel:** Intermedio · **Sección:** [Operación y aseguramiento de redes](./index.md)

## Visión general

Los equipos de red usan cada vez más las mismas herramientas de observabilidad que los equipos de software. Prometheus recoge y almacena métricas de series temporales (mediante exporters SNMP o gNMI), Grafana construye paneles, Loki u otras herramientas gestionan los registros y Alertmanager enruta las alertas. Combinado con telemetría en streaming, ofrece mucho más detalle que las herramientas NMS tradicionales.

## Conceptos clave

- Métricas, registros y trazas
- Bases de datos de series temporales y etiquetas
- Exporters de Prometheus (SNMP, gNMI, blackbox)
- Nociones de PromQL
- Paneles de Grafana
- Alertas y guardias

## Antes de empezar

- [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](monitoring.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) | Documentación | Intermedio | Gratis |
| [Grafana documentation](https://grafana.com/docs/grafana/latest/) | Documentación | Intermedio | Gratis |
| [Prometheus SNMP exporter](https://github.com/prometheus/snmp_exporter) | Código abierto | Intermedio | Gratis |
| [gNMIc — gNMI client and collector](https://gnmic.openconfig.net/) | Herramienta | Intermedio | Gratis |
| [Edge Cloud Operations: A Systems Approach](https://ops.systemsapproach.org/) | Libro abierto | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Despliega Prometheus, Grafana y el exporter SNMP con Docker Compose contra los equipos de tu laboratorio y construye un panel de interfaces con alertas.

## Temas relacionados

- [Metodología y herramientas de resolución de problemas](./troubleshooting.md)
- [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](./monitoring.md)
- [Monitorización activa: IP SLA, TWAMP y STAMP](./active-monitoring.md)
- [Captura de paquetes y port mirroring](./packet-capture.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
