---
title: "Programación de sockets"
description: "Escribir programas en red: la API de sockets, clientes y servidores, TCP y UDP, E/S bloqueante y no bloqueante."
sidebar_position: 7
---

# Programación de sockets

**Nivel:** Intermedio · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

Toda aplicación en red se construye sobre sockets. Escribir unos pocos clientes y servidores pequeños (un servidor de eco, una sonda UDP, un cliente HTTP sencillo) enseña más sobre TCP, UDP y puertos que cualquier diagrama, y te convierte en alguien mucho mejor diagnosticando problemas de aplicaciones.

## Conceptos clave

- Sockets, direcciones y puertos
- Ciclo de vida de cliente y servidor TCP
- Envío y recepción UDP
- E/S bloqueante, no bloqueante y basada en eventos
- Sockets de doble pila IPv4/IPv6
- Errores habituales: lecturas parciales, timeouts

## Antes de empezar

- [TCP y UDP](../01-fundamentals/tcp-and-udp.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/) | Libro abierto | Intermedio | Gratis |
| [Python docs — socket module](https://docs.python.org/3/library/socket.html) | Documentación | Intermedio | Gratis |
| [Stanford CS144 — Introduction to Computer Networking](https://cs144.github.io/) | Curso | Intermedio | Gratis |

## Bibliografía

- [*Beej's Guide to Network Programming*](https://beej.us/guide/bgnet/) — Brian “Beej” Hall (Gratis)

## Laboratorio práctico

Escribe en Python un servidor de eco TCP y una sonda de latencia UDP, ejecútalos sobre IPv4 e IPv6 y captura ambos en Wireshark.

## Temas relacionados

- [TLS](./tls.md)
- [Balanceo de carga y CDN](./load-balancing-and-cdn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
