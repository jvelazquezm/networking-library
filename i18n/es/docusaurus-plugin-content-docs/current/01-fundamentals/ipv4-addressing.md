---
title: "Direccionamiento IPv4 y la cabecera IPv4"
description: "La cabecera IPv4, la estructura de las direcciones, las clases y por qué CIDR las sustituyó, direccionamiento público y privado."
sidebar_position: 10
---

# Direccionamiento IPv4 y la cabecera IPv4

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

Una dirección IPv4 es un número de 32 bits dividido en parte de red y parte de host mediante una longitud de prefijo. El sistema original de clases desperdiciaba direcciones y fue sustituido por CIDR; los rangos privados y NAT estiraron después el espacio disponible. Merece la pena conocer la cabecera IPv4 campo a campo, porque TTL, fragmentación, DSCP y el campo de protocolo aparecen constantemente al resolver problemas.

## Conceptos clave

- Notación binaria y decimal con puntos
- Longitud de prefijo y máscara de subred
- Historia de las clases y CIDR
- Rangos privados (RFC 1918), loopback, link-local y especiales
- Unicast, broadcast y multicast
- Campos de la cabecera IPv4: TTL, DSCP, protocolo, fragmentación

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

- [RFC 791 — Internet Protocol](https://www.rfc-editor.org/rfc/rfc791)
- [RFC 1918 — Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)
- [RFC 6890 — Special-Purpose IP Address Registries](https://www.rfc-editor.org/rfc/rfc6890)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 7–8 y día 10: IPv4 addressing; the IPv4 header (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Practical Networking — CCNA topic index](https://www.practicalnetworking.net/index/ccna/) | Artículos | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (De pago)

## Laboratorio práctico

Captura tráfico en Wireshark y explica cada campo de una cabecera IPv4; después provoca fragmentación con un ping grande y el bit de no fragmentar.

## Temas relacionados

- [Trabajar con equipos de red: la CLI](./device-cli.md)
- [Redes en Linux: lo esencial](./linux-networking.md)
- [Subnetting, VLSM y superredes](./subnetting.md)
- [ARP e ICMP](./arp-and-icmp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
