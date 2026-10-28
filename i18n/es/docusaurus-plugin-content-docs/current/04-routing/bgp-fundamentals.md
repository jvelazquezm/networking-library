---
title: "Fundamentos de BGP"
description: "El protocolo que conecta Internet: sesiones, eBGP frente a iBGP, atributos de camino, selección del mejor camino y políticas básicas."
sidebar_position: 7
---

# Fundamentos de BGP

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

BGP intercambia alcanzabilidad entre sistemas autónomos y permite que cada red aplique su propia política. Funciona sobre TCP, transporta atributos de camino como AS_PATH, NEXT_HOP, LOCAL_PREF y MED, y elige un mejor camino por prefijo mediante un proceso de decisión bien definido. Todo ingeniero de redes necesita las bases: las empresas lo usan para conectarse a ISP y nubes, y los centros de datos lo usan como IGP.

## Conceptos clave

- Sistemas autónomos y ASN
- Sesiones, estados y temporizadores
- eBGP frente a iBGP y la regla de malla completa iBGP
- Atributos de camino
- Selección del mejor camino
- Anunciar redes y next-hop-self
- Multihoming a dos ISP

## Antes de empezar

- [Fundamentos de enrutamiento y selección de rutas](routing-fundamentals.md)

## Estándares y especificaciones

- [RFC 4271 — A Border Gateway Protocol 4 (BGP-4)](https://www.rfc-editor.org/rfc/rfc4271)
- [RFC 4760 — Multiprotocol Extensions for BGP-4](https://www.rfc-editor.org/rfc/rfc4760)
- [RFC 6793 — BGP Support for Four-Octet AS Number Space](https://www.rfc-editor.org/rfc/rfc6793)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Curso | Principiante | Gratis |
| [APNIC Academy](https://academy.apnic.net/) | Curso | Principiante | Gratis |
| [Cloudflare Learning — What is BGP?](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/) | Artículo | Principiante | Gratis |
| [Hurricane Electric BGP Toolkit](https://bgp.he.net/) | Herramienta | Principiante | Gratis |
| [FRRouting documentation](https://docs.frrouting.org/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *Internet Routing Architectures* — Sam Halabi (De pago)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)

## Laboratorio práctico

Conecta en Containerlab un AS empresarial a dos AS de ISP y usa LOCAL_PREF y AS-path prepending para controlar el tráfico saliente y entrante.

## Temas relacionados

- [OSPF](./ospf.md)
- [IS-IS](./is-is.md)
- [BGP avanzado](./bgp-advanced.md)
- [Redistribución, filtrado de rutas y route maps](./redistribution-and-filtering.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
