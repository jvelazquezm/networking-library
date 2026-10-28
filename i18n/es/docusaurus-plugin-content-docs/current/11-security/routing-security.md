---
title: "Seguridad del enrutamiento: RPKI, ASPA y BGPsec"
description: "Proteger el sistema de enrutamiento de Internet frente a secuestros y fugas: filtrado, IRR, validación de origen con RPKI, ASPA y BGPsec."
sidebar_position: 11
---

# Seguridad del enrutamiento: RPKI, ASPA y BGPsec

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

BGP se fía de lo que dicen los vecinos, así que errores y ataques pueden desviar el tráfico de regiones enteras. Los operadores se defienden con filtrado de prefijos basado en datos de los IRR, ROA firmadas con RPKI y validación del origen de las rutas, y con acciones coordinadas a través de MANRS. ASPA añade validación del camino frente a fugas de rutas; BGPsec firma el camino completo, pero apenas se ha desplegado.

## Conceptos clave

- Secuestros y fugas de rutas
- Filtrado de prefijos e IRR
- RPKI, ROA y validadores
- Validación del origen de las rutas
- ASPA
- BGPsec
- Acciones de MANRS

## Antes de empezar

- [Fundamentos de BGP](../04-routing/bgp-fundamentals.md)

## Estándares y especificaciones

- [RFC 6480 — An Infrastructure to Support Secure Internet Routing](https://www.rfc-editor.org/rfc/rfc6480)
- [RFC 6811 — BGP Prefix Origin Validation](https://www.rfc-editor.org/rfc/rfc6811)
- [RFC 8205 — BGPsec Protocol Specification](https://www.rfc-editor.org/rfc/rfc8205)
- [IETF draft — BGP AS_PATH Verification Based on ASPA Objects](https://datatracker.ietf.org/doc/draft-ietf-sidrops-aspa-verification/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Curso | Principiante | Gratis |
| [Is BGP safe yet? (Cloudflare)](https://isbgpsafeyet.com/) | Artículo | Principiante | Gratis |
| [MANRS — Mutually Agreed Norms for Routing Security](https://manrs.org/) | Guía | Intermedio | Gratis |
| [Routinator — RPKI validator](https://routinator.docs.nlnetlabs.nl/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *Internet Routing Architectures* — Sam Halabi (De pago)

## Laboratorio práctico

Ejecuta Routinator como validador, activa la validación de origen en un laboratorio BGP con FRRouting e inyecta un anuncio inválido.

## Temas relacionados

- [MACsec y políticas basadas en grupos](./macsec-and-group-policy.md)
- [Zero Trust y SASE](./zero-trust-and-sase.md)
- [DDoS y BGP Flowspec](./ddos.md)
- [Ataques de red y herramientas de evaluación](./network-attacks-and-tools.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
