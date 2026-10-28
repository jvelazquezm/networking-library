---
title: "Mecanismos de transición a IPv6"
description: "Cómo conviven IPv4 e IPv6: doble pila, túneles y traducción (NAT64/DNS64, 464XLAT, DS-Lite, MAP-E)."
sidebar_position: 15
---

# Mecanismos de transición a IPv6

**Nivel:** Intermedio · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

Internet funcionará con IPv4 e IPv6 en paralelo durante años. La doble pila es la opción por defecto cuando es posible; cuando no lo es, los operadores usan traducción (NAT64 con DNS64, 464XLAT en redes móviles) o túneles y encapsulación (DS-Lite, MAP-E/MAP-T, 6rd). Los operadores móviles, en concreto, usan acceso solo IPv6 con 464XLAT, así que estos mecanismos están por todas partes aunque no los veas.

## Conceptos clave

- Doble pila y Happy Eyeballs
- NAT64 y DNS64
- 464XLAT en redes móviles
- DS-Lite y NAT de operador (CGNAT)
- MAP-E y MAP-T
- Centros de datos solo IPv6 e IPv4 como servicio

## Antes de empezar

- [IPv6: direccionamiento, NDP y SLAAC](ipv6.md)

## Estándares y especificaciones

- [RFC 6146 — Stateful NAT64](https://www.rfc-editor.org/rfc/rfc6146)
- [RFC 6147 — DNS64](https://www.rfc-editor.org/rfc/rfc6147)
- [RFC 6877 — 464XLAT](https://www.rfc-editor.org/rfc/rfc6877)
- [RFC 6333 — Dual-Stack Lite](https://www.rfc-editor.org/rfc/rfc6333)
- [RFC 7597 — MAP-E](https://www.rfc-editor.org/rfc/rfc7597)
- [RFC 8305 — Happy Eyeballs Version 2](https://www.rfc-editor.org/rfc/rfc8305)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Curso | Principiante | Gratis |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermedio | Gratis |
| [RIPE NCC — IPv6 information centre](https://www.ripe.net/manage-ips-and-asns/ipv6/) | Artículos | Intermedio | Gratis |

## Bibliografía

- *IPv6 Fundamentals* — Rick Graziani (De pago)

## Laboratorio práctico

Monta una pasarela NAT64/DNS64 con Jool y un resolvedor con DNS64, y accede a una web solo IPv4 desde un cliente solo IPv6.

## Temas relacionados

- [TCP y UDP](./tcp-and-udp.md)
- [IPv6: direccionamiento, NDP y SLAAC](./ipv6.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
