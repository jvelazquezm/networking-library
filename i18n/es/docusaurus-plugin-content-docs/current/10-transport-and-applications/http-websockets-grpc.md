---
title: "HTTP, WebSockets y gRPC"
description: "Los protocolos de aplicación de la web y de las APIs: semántica HTTP, HTTP/1.1 y HTTP/2, WebSockets y gRPC."
sidebar_position: 4
---

# HTTP, WebSockets y gRPC

**Nivel:** Intermedio · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

La semántica de HTTP (métodos, códigos de estado, cabeceras, caché) es común a HTTP/1.1, HTTP/2 y HTTP/3. HTTP/2 multiplexa las peticiones sobre una sola conexión; WebSockets convierte una conexión en un canal de mensajes bidireccional; y gRPC usa HTTP/2 y Protocol Buffers para RPC eficientes, y es la base de la telemetría gNMI y de muchos sistemas cloud native, incluidas partes del 5G y de Kubernetes.

## Conceptos clave

- Métodos, códigos de estado y cabeceras
- Caché y peticiones condicionales
- HTTP/1.1 frente a la multiplexación de HTTP/2
- Proxies y proxies inversos
- Upgrade y entramado de WebSockets
- gRPC y Protocol Buffers
- REST frente a RPC

## Antes de empezar

- [TCP y UDP](../01-fundamentals/tcp-and-udp.md)

## Estándares y especificaciones

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
- [RFC 9111 — HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111)
- [RFC 9113 — HTTP/2](https://www.rfc-editor.org/rfc/rfc9113)
- [RFC 6455 — The WebSocket Protocol](https://www.rfc-editor.org/rfc/rfc6455)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [MDN Web Docs — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Documentación | Intermedio | Gratis |
| [MDN Web Docs — The WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) | Documentación | Intermedio | Gratis |
| [gRPC documentation](https://grpc.io/docs/) | Documentación | Intermedio | Gratis |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Libro abierto | Intermedio | Gratis |

## Bibliografía

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Gratis)

## Laboratorio práctico

Compara la misma página por HTTP/1.1 y HTTP/2 en las herramientas de desarrollo del navegador; después escribe un pequeño servicio gRPC y captúralo.

## Temas relacionados

- [SCTP y MPTCP](./sctp-and-mptcp.md)
- [QUIC y HTTP/3](./quic.md)
- [TLS](./tls.md)
- [Balanceo de carga y CDN](./load-balancing-and-cdn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
