---
title: "Zero Trust y SASE"
description: "Nunca confíes, verifica siempre: acceso centrado en la identidad, motores de políticas, ZTNA y secure access service edge."
sidebar_position: 10
---

# Zero Trust y SASE

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

Zero Trust abandona la idea de que todo lo que está dentro del perímetro es de fiar. Cada petición de acceso se evalúa según la identidad, el estado del equipo y el contexto mediante un punto de decisión de políticas, y se aplica cerca del recurso. ZTNA sustituye el acceso amplio por VPN por un acceso por aplicación; SASE entrega red y seguridad (SD-WAN, pasarela web segura, CASB, ZTNA, firewall) como un servicio en la nube.

## Conceptos clave

- Confianza implícita frente a Zero Trust
- Puntos de decisión y de aplicación de políticas
- Identidad, postura del equipo y contexto
- Microsegmentación
- ZTNA frente a VPN
- Componentes de SASE y SSE

## Antes de empezar

- [Firewalls, NGFW, IDS/IPS y proxies](firewalls-and-ips.md)

## Estándares y especificaciones

- [NIST SP 800-207 — Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is Zero Trust?](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) | Artículo | Principiante | Gratis |
| [CISA — Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model) | Guía | Intermedio | Gratis |

## Bibliografía

- *Zero Trust Networks* — Razi Rais, Christina Morillo, Evan Gilman, Doug Barth (De pago)

## Laboratorio práctico

Publica una aplicación web interna mediante un proxy ZTNA (por ejemplo un identity-aware proxy de código abierto) en lugar de una VPN y exige MFA.

## Temas relacionados

- [Firewalls, NGFW, IDS/IPS y proxies](./firewalls-and-ips.md)
- [MACsec y políticas basadas en grupos](./macsec-and-group-policy.md)
- [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](./routing-security.md)
- [DDoS y BGP Flowspec](./ddos.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
