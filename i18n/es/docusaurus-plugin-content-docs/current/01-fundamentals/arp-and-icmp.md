---
title: "ARP e ICMP"
description: "Cómo se asocian las direcciones IP a direcciones MAC y cómo ICMP informa de errores y hace funcionar ping y traceroute."
sidebar_position: 12
---

# ARP e ICMP

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

ARP es el puente entre la capa 3 y la capa 2 en redes IPv4: antes de enviar una trama, un equipo necesita la dirección MAC del siguiente salto. ICMP es el canal de control y errores de IP: los mensajes de destino inalcanzable, tiempo excedido y solicitud/respuesta de eco son la base de ping y traceroute, y el descubrimiento de la MTU del camino depende de él. Bloquear ICMP a ciegas rompe las redes de formas sutiles.

## Conceptos clave

- Petición, respuesta y caché ARP
- ARP gratuito y proxy ARP
- Tipos y códigos de mensajes ICMP
- Cómo funcionan ping y traceroute
- Descubrimiento de la MTU del camino
- ICMPv6 y NDP (ver IPv6)

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

- [RFC 826 — An Ethernet Address Resolution Protocol](https://www.rfc-editor.org/rfc/rfc826)
- [RFC 792 — Internet Control Message Protocol](https://www.rfc-editor.org/rfc/rfc792)
- [RFC 1191 — Path MTU Discovery](https://www.rfc-editor.org/rfc/rfc1191)
- [RFC 4443 — ICMPv6](https://www.rfc-editor.org/rfc/rfc4443)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 5–6: Ethernet LAN switching (ARP) (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Capturas | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |

## Bibliografía

- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (De pago)

## Laboratorio práctico

Borra tu caché ARP, haz ping a tu puerta de enlace y captura el intercambio ARP; después ejecuta traceroute y explica cada línea de la salida.

## Temas relacionados

- [Direccionamiento IPv4 y la cabecera IPv4](./ipv4-addressing.md)
- [Subnetting, VLSM y superredes](./subnetting.md)
- [TCP y UDP](./tcp-and-udp.md)
- [IPv6: direccionamiento, NDP y SLAAC](./ipv6.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
