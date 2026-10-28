---
title: "DDoS y BGP Flowspec"
description: "Ataques volumétricos, de protocolo y de capa de aplicación, amplificación, y mitigación con centros de limpieza, anycast, RTBH y Flowspec."
sidebar_position: 12
---

# DDoS y BGP Flowspec

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

Los ataques de denegación de servicio distribuidos saturan enlaces, equipos o aplicaciones. La reflexión y la amplificación multiplican el tráfico de ataque usando servicios abiertos; las botnets generan inundaciones en la capa de aplicación. La mitigación combina el filtrado aguas arriba, el black-holing activado remotamente, las reglas BGP Flowspec, los centros de limpieza y el anycast para absorber la carga en muchas ubicaciones.

## Conceptos clave

- Ataques volumétricos, de protocolo y L7
- Reflexión y amplificación
- Botnets
- RTBH y RTBH por origen
- BGP Flowspec
- Centros de limpieza y anycast
- Detección con datos de flujos

## Antes de empezar

- [Fundamentos de BGP](../04-routing/bgp-fundamentals.md)

## Estándares y especificaciones

- [RFC 8955 — Dissemination of Flow Specification Rules](https://www.rfc-editor.org/rfc/rfc8955)
- [RFC 7999 — BLACKHOLE Community](https://www.rfc-editor.org/rfc/rfc7999)
- [RFC 5635 — Remote Triggered Black Hole Filtering with uRPF](https://www.rfc-editor.org/rfc/rfc5635)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is a DDoS attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/) | Artículo | Principiante | Gratis |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermedio | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Simula un ataque en un laboratorio y mitígalo con RTBH y una regla Flowspec distribuida desde un reflector de rutas.

## Temas relacionados

- [Zero Trust y SASE](./zero-trust-and-sase.md)
- [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](./routing-security.md)
- [Ataques de red y herramientas de evaluación](./network-attacks-and-tools.md)
- [Criptografía post-cuántica en redes](./post-quantum-cryptography.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
