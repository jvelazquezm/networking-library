---
title: "DHCP y DHCPv6"
description: "Configuración automática de equipos: el intercambio DHCP, opciones, relays, DHCPv6 y cómo diagnosticarlo."
sidebar_position: 1
---

# DHCP y DHCPv6

**Nivel:** Principiante · **Sección:** [Servicios IP](./index.md)

## Visión general

DHCP entrega a los equipos una dirección, máscara, puerta de enlace, servidores DNS y otras opciones para que nadie tenga que configurarlos a mano. Los clientes buscan un servidor por broadcast, así que los routers actúan como relays para llegar a servidores centrales. DHCPv6 complementa a SLAAC en redes IPv6. Diagnosticar DHCP (ámbitos agotados, relays que faltan, servidores no autorizados) es una habilidad que el nuevo CCNA v2.0 evalúa explícitamente.

## Conceptos clave

- Intercambio DORA: Discover, Offer, Request, Acknowledge
- Concesiones y renovación
- Opciones habituales (router, DNS, dominio)
- Relay DHCP (ip helper)
- DHCPv6 con y sin estado
- Delegación de prefijos
- Diagnóstico en cliente, relay y servidor

## Antes de empezar

- [Direccionamiento IPv4 y la cabecera IPv4](../01-fundamentals/ipv4-addressing.md)

## Estándares y especificaciones

- [RFC 2131 — Dynamic Host Configuration Protocol](https://www.rfc-editor.org/rfc/rfc2131)
- [RFC 2132 — DHCP Options and BOOTP Vendor Extensions](https://www.rfc-editor.org/rfc/rfc2132)
- [RFC 8415 — Dynamic Host Configuration Protocol for IPv6 (DHCPv6)](https://www.rfc-editor.org/rfc/rfc8415)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 39: DHCP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Capturas | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (De pago)

## Laboratorio práctico

Ejecuta un servidor DHCP (Kea o dnsmasq) en una subred y un relay en un router para servir a una segunda subred; captura el intercambio a través del relay.

## Temas relacionados

- [DNS, DNSSEC, DoT y DoH](./dns.md)
- [NAT y PAT](./nat.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
