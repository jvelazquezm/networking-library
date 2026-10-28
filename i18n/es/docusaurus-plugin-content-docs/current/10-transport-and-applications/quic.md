---
title: "QUIC y HTTP/3"
description: "El transporte sobre UDP con TLS 1.3 integrado: flujos sin bloqueo de cabeza de línea, 0-RTT y migración de conexiones."
sidebar_position: 3
---

# QUIC y HTTP/3

**Nivel:** Avanzado · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

QUIC reconstruye un transporte fiable en espacio de usuario sobre UDP e integra TLS 1.3, de modo que el establecimiento cuesta un viaje de ida y vuelta (o cero al reanudar). Los flujos independientes evitan el bloqueo de cabeza de línea de TCP, los identificadores de conexión permiten que las sesiones sobrevivan a cambios de dirección y el cifrado de casi todas las cabeceras evita la osificación. HTTP/3 funciona sobre QUIC y ya transporta una gran parte del tráfico web.

## Conceptos clave

- Establecimiento de conexión y 0-RTT
- Flujos y control de flujo
- Detección de pérdidas y control de congestión
- Identificadores de conexión y migración
- Protección de cabeceras y osificación
- HTTP/3 y QPACK
- QUIC y los middleboxes

## Antes de empezar

- [TCP en profundidad y control de congestión](tcp-in-depth.md)
- [TLS](tls.md)

## Estándares y especificaciones

- [RFC 9000 — QUIC: A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000)
- [RFC 9001 — Using TLS to Secure QUIC](https://www.rfc-editor.org/rfc/rfc9001)
- [RFC 9002 — QUIC Loss Detection and Congestion Control](https://www.rfc-editor.org/rfc/rfc9002)
- [RFC 9114 — HTTP/3](https://www.rfc-editor.org/rfc/rfc9114)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is HTTP/3?](https://www.cloudflare.com/learning/performance/what-is-http3/) | Artículo | Intermedio | Gratis |
| [The Illustrated QUIC Connection](https://quic.xargs.org/) | Interactivo | Avanzado | Gratis |
| [QUIC working group](https://quicwg.org/) | Organismo de estandarización | Avanzado | Gratis |

## Bibliografía

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Gratis)

## Laboratorio práctico

Carga una web por HTTP/3 y descifra el tráfico QUIC en Wireshark usando un SSLKEYLOGFILE generado por tu navegador.

## Temas relacionados

- [TCP en profundidad y control de congestión](./tcp-in-depth.md)
- [SCTP y MPTCP](./sctp-and-mptcp.md)
- [HTTP, WebSockets y gRPC](./http-websockets-grpc.md)
- [TLS](./tls.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
