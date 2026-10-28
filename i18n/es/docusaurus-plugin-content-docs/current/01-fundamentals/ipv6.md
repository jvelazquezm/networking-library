---
title: "IPv6: direccionamiento, NDP y SLAAC"
description: "Direcciones y prefijos IPv6, tipos de dirección, la cabecera IPv6, Neighbor Discovery y la autoconfiguración."
sidebar_position: 14
---

# IPv6: direccionamiento, NDP y SLAAC

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

IPv6 sustituye el espacio de 32 bits de IPv4 por direcciones de 128 bits y de paso limpia el protocolo: no hay broadcast, la cabecera es fija y más simple, el multicast es obligatorio y la autoconfiguración viene de serie. Neighbor Discovery sustituye a ARP y añade el descubrimiento de routers; SLAAC permite que los equipos se configuren solos, opcionalmente junto con DHCPv6. IPv6 ya supone una gran parte del tráfico de Internet, así que trátalo como un protocolo de primera clase, no como un añadido.

## Conceptos clave

- Notación y compresión de direcciones
- Global unicast, unique local, link-local, multicast
- EUI-64 y direcciones de privacidad
- La cabecera IPv6 y las cabeceras de extensión
- Neighbor Discovery: NS/NA, RS/RA, DAD
- SLAAC frente a DHCPv6 con y sin estado

## Antes de empezar

- [Direccionamiento IPv4 y la cabecera IPv4](ipv4-addressing.md)

## Estándares y especificaciones

- [RFC 8200 — IPv6 Specification](https://www.rfc-editor.org/rfc/rfc8200)
- [RFC 4291 — IPv6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291)
- [RFC 4861 — Neighbor Discovery for IPv6](https://www.rfc-editor.org/rfc/rfc4861)
- [RFC 4862 — IPv6 Stateless Address Autoconfiguration](https://www.rfc-editor.org/rfc/rfc4862)
- [RFC 8981 — Temporary Address Extensions for SLAAC](https://www.rfc-editor.org/rfc/rfc8981)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 31–33: IPv6 (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Hurricane Electric IPv6 Certification (hands-on, free)](https://ipv6.he.net/certification/) | Ejercicios | Principiante | Gratis |
| [RIPE NCC Academy](https://academy.ripe.net/) | Curso | Principiante | Gratis |
| [APNIC Academy](https://academy.apnic.net/) | Curso | Principiante | Gratis |
| [Google IPv6 adoption statistics](https://www.google.com/intl/en/ipv6/statistics.html) | Datos | Principiante | Gratis |

## Bibliografía

- *IPv6 Fundamentals* — Rick Graziani (De pago)

## Laboratorio práctico

Monta un laboratorio solo IPv6, observa SLAAC y DAD en Wireshark y completa los niveles de la certificación IPv6 de Hurricane Electric.

## Temas relacionados

- [ARP e ICMP](./arp-and-icmp.md)
- [TCP y UDP](./tcp-and-udp.md)
- [Mecanismos de transición a IPv6](./ipv6-transition.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
