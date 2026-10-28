---
title: "TCP en profundidad y control de congestión"
description: "Algoritmos de control de congestión (Reno, CUBIC, BBR), recuperación de pérdidas, escalado de ventana, ECN y bufferbloat."
sidebar_position: 1
---

# TCP en profundidad y control de congestión

**Nivel:** Intermedio · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

El control de congestión de TCP es lo que impide que Internet colapse. Los algoritmos basados en pérdidas (Reno, CUBIC) prueban el ancho de banda disponible hasta que se pierden paquetes; los basados en retardo y en modelos (BBR) estiman el ancho de banda del cuello de botella y el RTT. Las confirmaciones selectivas, el escalado de ventana y ECN mejoran el rendimiento; los buffers sobredimensionados provocan bufferbloat. Entender todo esto explica la mayoría de las quejas de «la red va lenta».

## Conceptos clave

- Slow start y congestion avoidance
- Fast retransmit y fast recovery
- SACK y escalado de ventana
- Reno, CUBIC y BBR
- ECN y AQM (CoDel, FQ-CoDel)
- Bufferbloat
- Ajuste para redes con gran producto ancho de banda-retardo

## Antes de empezar

- [TCP y UDP](../01-fundamentals/tcp-and-udp.md)

## Estándares y especificaciones

- [RFC 5681 — TCP Congestion Control](https://www.rfc-editor.org/rfc/rfc5681)
- [RFC 9438 — CUBIC for Fast and Long-Distance Networks](https://www.rfc-editor.org/rfc/rfc9438)
- [RFC 2018 — TCP Selective Acknowledgment Options](https://www.rfc-editor.org/rfc/rfc2018)
- [RFC 7323 — TCP Extensions for High Performance](https://www.rfc-editor.org/rfc/rfc7323)
- [RFC 8290 — The FQ-CoDel Packet Scheduler and AQM](https://www.rfc-editor.org/rfc/rfc8290)
- [IETF draft — BBR Congestion Control](https://datatracker.ietf.org/doc/draft-ietf-ccwg-bbr/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [TCP Congestion Control: A Systems Approach](https://tcpcc.systemsapproach.org/) | Libro abierto | Intermedio | Gratis |
| [Stanford CS144 — Introduction to Computer Networking](https://cs144.github.io/) | Curso | Intermedio | Gratis |
| [Bufferbloat.net](https://www.bufferbloat.net/projects/) | Artículos | Intermedio | Gratis |

## Bibliografía

- [*TCP Congestion Control: A Systems Approach*](https://tcpcc.systemsapproach.org/) — Larry Peterson, Lawrence Brakmo, Bruce Davie (Gratis)
- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (De pago)

## Laboratorio práctico

Usa iperf3 y tc netem para añadir retardo y pérdidas, y compara el throughput con CUBIC y con BBR (sysctl net.ipv4.tcp_congestion_control).

## Temas relacionados

- [SCTP y MPTCP](./sctp-and-mptcp.md)
- [QUIC y HTTP/3](./quic.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
