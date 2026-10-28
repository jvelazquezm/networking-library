---
title: "Protocolos de transporte y aplicación"
description: "TCP en profundidad, SCTP y MPTCP, QUIC, HTTP, WebSockets y gRPC, TLS, balanceo de carga, CDN y programación de sockets."
sidebar_position: 0
sidebar_label: Visión general
---

# 10 · Protocolos de transporte y aplicación

Las capas superiores en profundidad: cómo comparten la red de forma justa los protocolos de transporte, los protocolos modernos que sustituyeron o ampliaron TCP, los protocolos web y de APIs que hablan las aplicaciones, cómo se entrega el contenido a escala y cómo escribir tus propios programas en red.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [TCP en profundidad y control de congestión](./tcp-in-depth.md) | Intermedio | Algoritmos de control de congestión (Reno, CUBIC, BBR), recuperación de pérdidas, escalado de ventana, ECN y bufferbloat. |
| [SCTP y MPTCP](./sctp-and-mptcp.md) | Avanzado | SCTP, orientado a mensajes y con varios flujos (usado en la señalización móvil), y Multipath TCP (usado por los smartphones y en ATSSS). |
| [QUIC y HTTP/3](./quic.md) | Avanzado | El transporte sobre UDP con TLS 1.3 integrado: flujos sin bloqueo de cabeza de línea, 0-RTT y migración de conexiones. |
| [HTTP, WebSockets y gRPC](./http-websockets-grpc.md) | Intermedio | Los protocolos de aplicación de la web y de las APIs: semántica HTTP, HTTP/1.1 y HTTP/2, WebSockets y gRPC. |
| [TLS](./tls.md) | Intermedio | Cómo protege TLS las conexiones: el saludo de TLS 1.3, certificados y PKI, suites de cifrado, SNI y ECH, mTLS. |
| [Balanceo de carga y CDN](./load-balancing-and-cdn.md) | Intermedio | Repartir el tráfico para escalar y estar disponible: balanceo L4 frente a L7, algoritmos, health checks, anycast, CDN y gestión global del tráfico. |
| [Programación de sockets](./socket-programming.md) | Intermedio | Escribir programas en red: la API de sockets, clientes y servidores, TCP y UDP, E/S bloqueante y no bloqueante. |

## Orden de lectura sugerido

1. [TCP en profundidad y control de congestión](./tcp-in-depth.md) — Intermedio
2. [HTTP, WebSockets y gRPC](./http-websockets-grpc.md) — Intermedio
3. [TLS](./tls.md) — Intermedio
4. [Balanceo de carga y CDN](./load-balancing-and-cdn.md) — Intermedio
5. [Programación de sockets](./socket-programming.md) — Intermedio
6. [SCTP y MPTCP](./sctp-and-mptcp.md) — Avanzado
7. [QUIC y HTTP/3](./quic.md) — Avanzado

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
