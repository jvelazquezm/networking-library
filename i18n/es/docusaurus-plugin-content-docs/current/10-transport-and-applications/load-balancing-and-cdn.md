---
title: "Balanceo de carga y CDN"
description: "Repartir el tráfico para escalar y estar disponible: balanceo L4 frente a L7, algoritmos, health checks, anycast, CDN y gestión global del tráfico."
sidebar_position: 6
---

# Balanceo de carga y CDN

**Nivel:** Intermedio · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

Los grandes servicios reparten el tráfico entre muchos servidores y muchas ubicaciones. Los balanceadores trabajan en la capa 4 (conexiones) o en la capa 7 (peticiones), eligen el servidor con algoritmos como round robin, menos conexiones o hashing consistente, y retiran los servidores caídos mediante health checks. Las CDN guardan contenido en caché en el borde y usan anycast y DNS para enviar a cada usuario al punto de presencia más cercano.

## Conceptos clave

- Balanceo L4 frente a L7
- Algoritmos: round robin, menos conexiones, hashing
- Health checks y persistencia de sesión
- Direct server return y anycast
- Proxies inversos y pasarelas de API
- Caché en CDN y edge compute
- Balanceo global basado en DNS

## Antes de empezar

- [HTTP, WebSockets y gRPC](http-websockets-grpc.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is load balancing?](https://www.cloudflare.com/learning/performance/what-is-load-balancing/) | Artículo | Principiante | Gratis |
| [Cloudflare Learning — What is a CDN?](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) | Artículo | Principiante | Gratis |
| [HAProxy documentation](https://docs.haproxy.org/) | Documentación | Intermedio | Gratis |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Libro abierto | Intermedio | Gratis |

## Bibliografía

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Gratis)

## Laboratorio práctico

Pon HAProxy delante de tres servidores web, prueba distintos algoritmos y apaga un servidor para ver cómo lo retiran los health checks.

## Temas relacionados

- [HTTP, WebSockets y gRPC](./http-websockets-grpc.md)
- [TLS](./tls.md)
- [Programación de sockets](./socket-programming.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
