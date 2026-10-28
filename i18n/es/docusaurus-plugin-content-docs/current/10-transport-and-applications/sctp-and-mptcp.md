---
title: "SCTP y MPTCP"
description: "SCTP, orientado a mensajes y con varios flujos (usado en la señalización móvil), y Multipath TCP (usado por los smartphones y en ATSSS)."
sidebar_position: 2
---

# SCTP y MPTCP

**Nivel:** Avanzado · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

SCTP ofrece un transporte fiable orientado a mensajes, con varios flujos y multihoming; nunca triunfó en Internet, pero transporta señalización móvil como NGAP y S1AP, y Diameter. Multipath TCP permite que una conexión use varios caminos a la vez (Wi-Fi y celular) y lo usan los smartphones y la función ATSSS del 5G.

## Conceptos clave

- Asociaciones, flujos y chunks de SCTP
- Multihoming en SCTP
- SCTP en la señalización 4G/5G
- Subflujos y path managers de MPTCP
- MPTCP en Linux
- ATSSS en 5G

## Antes de empezar

- [TCP en profundidad y control de congestión](tcp-in-depth.md)

## Estándares y especificaciones

- [RFC 9260 — Stream Control Transmission Protocol](https://www.rfc-editor.org/rfc/rfc9260)
- [RFC 8684 — TCP Extensions for Multipath Operation with Multiple Addresses](https://www.rfc-editor.org/rfc/rfc8684)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Multipath TCP for Linux — documentation](https://www.mptcp.dev/) | Documentación | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Activa MPTCP en dos equipos Linux con dos caminos entre ellos y observa los subflujos con ss y Wireshark mientras tiras uno de los caminos.

## Temas relacionados

- [TCP en profundidad y control de congestión](./tcp-in-depth.md)
- [QUIC y HTTP/3](./quic.md)
- [HTTP, WebSockets y gRPC](./http-websockets-grpc.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
