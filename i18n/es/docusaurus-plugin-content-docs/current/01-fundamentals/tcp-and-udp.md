---
title: "TCP y UDP"
description: "Los dos protocolos de transporte principales: puertos, conexiones, fiabilidad, control de flujo y cuándo usar cada uno."
sidebar_position: 13
---

# TCP y UDP

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

TCP ofrece a las aplicaciones un flujo de bytes fiable y ordenado, con establecimiento de conexión, confirmaciones, retransmisiones y control de flujo. UDP ofrece una capa mínima sobre IP sin ninguna garantía, que es justo lo que buscan los medios en tiempo real, DNS y QUIC. Los números de puerto permiten que muchas aplicaciones compartan una dirección IP. Esta página cubre lo esencial; el control de congestión y los transportes modernos están en la sección 10.

## Conceptos clave

- Puertos y sockets
- Saludo a tres vías y cierre de TCP
- Números de secuencia, confirmaciones y retransmisión
- Control de flujo y ventanas
- Datagramas UDP
- Elegir entre TCP y UDP

## Antes de empezar

- [Modelos OSI y TCP/IP](osi-and-tcp-ip-models.md)

## Estándares y especificaciones

- [RFC 9293 — Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293)
- [RFC 768 — User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768)
- [IANA — Service name and port number registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 30: TCP and UDP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Kurose & Ross — companion site, interactive problems and Wireshark labs](https://gaia.cs.umass.edu/kurose_ross/) | Ejercicios | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |

## Bibliografía

- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (De pago)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (De pago)

## Laboratorio práctico

Captura una conexión TCP en Wireshark, usa «Follow TCP stream» e identifica el saludo, los datos, las confirmaciones y el cierre.

## Temas relacionados

- [Subnetting, VLSM y superredes](./subnetting.md)
- [ARP e ICMP](./arp-and-icmp.md)
- [IPv6: direccionamiento, NDP y SLAAC](./ipv6.md)
- [Mecanismos de transición a IPv6](./ipv6-transition.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
