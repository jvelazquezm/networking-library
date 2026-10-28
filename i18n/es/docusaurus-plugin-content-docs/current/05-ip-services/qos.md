---
title: "Calidad de servicio (QoS)"
description: "Clasificación, marcado, colas, policing, shaping y prevención de congestión, y cómo diseñar una política extremo a extremo."
sidebar_position: 5
---

# Calidad de servicio (QoS)

**Nivel:** Principiante · **Sección:** [Servicios IP](./index.md)

## Visión general

Cuando un enlace está congestionado, algo tiene que esperar o descartarse; QoS decide qué. El tráfico se clasifica y marca (DSCP, CoS), después se encola con prioridad o planificación ponderada, se limita (policing) o se conforma (shaping) a una tasa, y se protege de la sincronización global con WRED. El modelo DiffServ da a cada clase un comportamiento por salto; un buen diseño usa unas pocas clases de forma coherente de extremo a extremo.

## Conceptos clave

- IntServ frente a DiffServ
- Clasificación y fronteras de confianza
- Marcado: DSCP, CoS, EXP
- Comportamientos por salto: EF, AF, CS, por defecto
- Colas: prioridad, CBWFQ
- Policing frente a shaping
- WRED y ECN
- Modular QoS CLI y modelos equivalentes de otros fabricantes

## Antes de empezar

- [Rendimiento: ancho de banda, throughput, latencia y jitter](../01-fundamentals/performance-basics.md)

## Estándares y especificaciones

- [RFC 2474 — Definition of the Differentiated Services Field](https://www.rfc-editor.org/rfc/rfc2474)
- [RFC 2475 — An Architecture for Differentiated Services](https://www.rfc-editor.org/rfc/rfc2475)
- [RFC 3246 — An Expedited Forwarding PHB](https://www.rfc-editor.org/rfc/rfc3246)
- [RFC 2597 — Assured Forwarding PHB Group](https://www.rfc-editor.org/rfc/rfc2597)
- [RFC 4594 — Configuration Guidelines for DiffServ Service Classes](https://www.rfc-editor.org/rfc/rfc4594)
- [RFC 3168 — Explicit Congestion Notification](https://www.rfc-editor.org/rfc/rfc3168)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 46–47: QoS (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *End-to-End QoS Network Design* — Tim Szigeti, Christina Hattingh, Robert Barton, Kenneth Briley (De pago)
- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Limita un enlace a 10 Mbit/s con tc, marca un flujo tipo voz como EF y demuestra que su latencia se mantiene baja mientras una transferencia masiva satura el enlace.

## Temas relacionados

- [NAT y PAT](./nat.md)
- [Hora: NTP, NTS y PTP](./time-synchronization.md)
- [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](./device-management.md)
- [Voz y vídeo sobre IP: SIP y RTP](./voice-and-video.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
