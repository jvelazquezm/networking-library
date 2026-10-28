---
title: "Monitorización activa: IP SLA, TWAMP y STAMP"
description: "Medir latencia, jitter y pérdidas con sondas sintéticas, desde IP SLA en el router hasta los estándares TWAMP y STAMP."
sidebar_position: 4
---

# Monitorización activa: IP SLA, TWAMP y STAMP

**Nivel:** Intermedio · **Sección:** [Operación y aseguramiento de redes](./index.md)

## Visión general

La monitorización pasiva informa sobre el tráfico real; la activa envía sondas para medir los caminos antes de que los usuarios se quejen. IP SLA de Cisco y RPM de Juniper son implementaciones de fabricante; TWAMP y su sucesor más sencillo, STAMP, son estándares del IETF para medidas bidireccionales. Las sondas también activan el seguimiento de rutas estáticas, FHRP y la selección de caminos en SD-WAN.

## Conceptos clave

- Sondas sintéticas frente a medidas pasivas
- Medida de latencia, jitter y pérdidas
- IP SLA y RPM
- TWAMP y STAMP
- Objetos de seguimiento a partir de las sondas
- Sondas blackbox para servicios

## Antes de empezar

- [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](monitoring.md)

## Estándares y especificaciones

- [RFC 5357 — Two-Way Active Measurement Protocol (TWAMP)](https://www.rfc-editor.org/rfc/rfc5357)
- [RFC 8762 — Simple Two-Way Active Measurement Protocol (STAMP)](https://www.rfc-editor.org/rfc/rfc8762)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [Prometheus blackbox exporter](https://github.com/prometheus/blackbox_exporter) | Código abierto | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Configura una sonda IP SLA (o el blackbox exporter) entre dos sedes y úsala para provocar la conmutación de una ruta estática.

## Temas relacionados

- [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](./monitoring.md)
- [Pila de observabilidad: Prometheus y Grafana](./observability-stack.md)
- [Captura de paquetes y port mirroring](./packet-capture.md)
- [Diseño de redes y alta disponibilidad](./network-design.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
