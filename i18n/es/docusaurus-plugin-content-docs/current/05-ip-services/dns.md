---
title: "DNS, DNSSEC, DoT y DoH"
description: "El sistema de nombres de Internet: jerarquía, resolución, tipos de registro, caché, DNSSEC y DNS cifrado."
sidebar_position: 2
---

# DNS, DNSSEC, DoT y DoH

**Nivel:** Principiante · **Sección:** [Servicios IP](./index.md)

## Visión general

DNS traduce nombres en direcciones y mucho más: enrutamiento del correo, descubrimiento de servicios, validación de certificados. Los resolvedores recursivos recorren la jerarquía desde la raíz hasta los servidores autoritativos y guardan las respuestas en caché según su TTL. DNSSEC añade firmas para poder validar las respuestas; DNS sobre TLS y DNS sobre HTTPS cifran las consultas entre clientes y resolvedores. Muchos «problemas de red» son en realidad problemas de DNS.

## Conceptos clave

- Jerarquía: raíz, TLD, servidores autoritativos
- Resolución recursiva frente a iterativa
- Tipos de registro: A, AAAA, CNAME, MX, NS, PTR, TXT, SRV
- Caché y TTL
- Zonas y delegación
- Cadena de confianza de DNSSEC
- DoT y DoH
- Diagnóstico de problemas de DNS

## Antes de empezar

- [TCP y UDP](../01-fundamentals/tcp-and-udp.md)

## Estándares y especificaciones

- [RFC 1034 — Domain Names — Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034)
- [RFC 1035 — Domain Names — Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035)
- [RFC 4033 — DNS Security Introduction and Requirements](https://www.rfc-editor.org/rfc/rfc4033)
- [RFC 7858 — DNS over TLS](https://www.rfc-editor.org/rfc/rfc7858)
- [RFC 8484 — DNS Queries over HTTPS](https://www.rfc-editor.org/rfc/rfc8484)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 38: DNS (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Cloudflare Learning — What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/) | Artículo | Principiante | Gratis |
| [How DNS works (illustrated comic)](https://howdns.works/) | Artículo | Principiante | Gratis |
| [DNSViz — DNSSEC visualiser](https://dnsviz.net/) | Herramienta | Intermedio | Gratis |

## Bibliografía

- *DNS and BIND* — Cricket Liu, Paul Albitz (De pago)

## Laboratorio práctico

Traza una resolución con dig +trace; después ejecuta tu propio resolvedor recursivo (Unbound) con validación DNSSEC e inspecciona una zona firmada en DNSViz.

## Temas relacionados

- [DHCP y DHCPv6](./dhcp.md)
- [NAT y PAT](./nat.md)
- [Hora: NTP, NTS y PTP](./time-synchronization.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
