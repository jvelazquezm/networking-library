---
title: "Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow"
description: "Las fuentes de datos clásicas de monitorización: contadores consultados, eventos y registros de flujos, y para qué sirve cada una."
sidebar_position: 2
---

# Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow

**Nivel:** Principiante · **Sección:** [Operación y aseguramiento de redes](./index.md)

## Visión general

La monitorización de redes combina tres tipos de datos. SNMP consulta contadores y estado (y recibe traps); syslog transmite eventos; y la exportación de flujos (NetFlow, IPFIX, sFlow) resume quién habló con quién y cuánto. Juntos responden si la red funciona, qué ha cambiado y adónde va el tráfico. La telemetría en streaming es el sucesor moderno para contadores y estado.

:::info Notas sobre fabricantes
NetFlow es el protocolo de Cisco; IPFIX es el estándar del IETF derivado de NetFlow v9, y sFlow es una alternativa basada en muestreo que soportan muchos fabricantes.
:::

## Conceptos clave

- SNMPv2c frente a SNMPv3, MIB y OID
- Intervalos de consulta y desbordamiento de contadores
- Severidades de syslog y recogida centralizada
- NetFlow v9 e IPFIX
- Muestreo con sFlow
- Análisis de flujos para capacidad y seguridad
- Nociones de alertas

## Antes de empezar

- [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](../05-ip-services/device-management.md)

## Estándares y especificaciones

- [RFC 3411 — SNMP Management Frameworks Architecture](https://www.rfc-editor.org/rfc/rfc3411)
- [RFC 5424 — The Syslog Protocol](https://www.rfc-editor.org/rfc/rfc5424)
- [RFC 3954 — Cisco Systems NetFlow Services Export Version 9](https://www.rfc-editor.org/rfc/rfc3954)
- [RFC 7011 — IPFIX Protocol Specification](https://www.rfc-editor.org/rfc/rfc7011)
- [sFlow specification](https://sflow.org/developers/specifications.php)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 40–41: SNMP and syslog (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [pmacct — flow collection](https://github.com/pmacct/pmacct) | Código abierto | Intermedio | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Exporta IPFIX desde un router Linux (o virtual) a un colector, encuentra los mayores emisores y compáralo con las gráficas SNMP de las interfaces.

## Temas relacionados

- [Metodología y herramientas de resolución de problemas](./troubleshooting.md)
- [Pila de observabilidad: Prometheus y Grafana](./observability-stack.md)
- [Monitorización activa: IP SLA, TWAMP y STAMP](./active-monitoring.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
