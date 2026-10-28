---
title: "Seguridad de primer salto IPv6 y uRPF"
description: "Proteger las redes de acceso IPv6 (RA Guard, DHCPv6 Guard, inspección ND) y antisuplantación con uRPF y BCP 38."
sidebar_position: 6
---

# Seguridad de primer salto IPv6 y uRPF

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

IPv6 sustituye ARP y DHCP por mecanismos basados en ICMPv6 que tienen sus propios ataques: anuncios de router no autorizados, suplantación de NDP y agotamiento de tablas. Las funciones de seguridad de primer salto son el equivalente de las de IPv4. Unicast Reverse Path Forwarding y el filtrado de entrada (BCP 38) frenan las direcciones de origen suplantadas en el borde de la red, tanto en IPv4 como en IPv6.

## Conceptos clave

- RA no autorizados y RA Guard
- DHCPv6 Guard
- Inspección ND y source guard
- Abuso de cabeceras de extensión
- uRPF en modo estricto y laxo
- Filtrado de entrada BCP 38

## Antes de empezar

- [IPv6: direccionamiento, NDP y SLAAC](../01-fundamentals/ipv6.md)

## Estándares y especificaciones

- [RFC 6105 — IPv6 Router Advertisement Guard](https://www.rfc-editor.org/rfc/rfc6105)
- [RFC 3704 — Ingress Filtering for Multihomed Networks](https://www.rfc-editor.org/rfc/rfc3704)
- [RFC 2827 — Network Ingress Filtering (BCP 38)](https://www.rfc-editor.org/rfc/rfc2827)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [MANRS — Mutually Agreed Norms for Routing Security](https://manrs.org/) | Guía | Intermedio | Gratis |

## Bibliografía

- *IPv6 Fundamentals* — Rick Graziani (De pago)

## Laboratorio práctico

Envía anuncios de router no autorizados en un laboratorio IPv6 (por ejemplo con Scapy) y bloquéalos con RA Guard; activa uRPF y prueba con tráfico suplantado.

## Temas relacionados

- [Listas de control de acceso](./acls.md)
- [Seguridad de capa 2](./layer2-security.md)
- [802.1X y control de acceso a la red](./nac-and-8021x.md)
- [Firewalls, NGFW, IDS/IPS y proxies](./firewalls-and-ips.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
