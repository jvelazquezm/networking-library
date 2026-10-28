---
title: "Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA"
description: "Detectar fallos en milisegundos y reparar caminos antes de que el protocolo de enrutamiento reconverja."
sidebar_position: 13
---

# Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA

**Nivel:** Avanzado · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Los temporizadores de los protocolos de enrutamiento se miden en segundos; a las aplicaciones les importan los milisegundos. BFD detecta rápidamente fallos de enlace y de vecino y avisa a los protocolos; graceful restart y non-stop routing mantienen el reenvío durante reinicios del plano de control; Loop-Free Alternates y TI-LFA preinstalan caminos de respaldo para que el tráfico se repare localmente mientras la red reconverge.

## Conceptos clave

- Detección de fallos frente a reconvergencia
- BFD de un salto y multisalto
- Graceful restart y non-stop routing
- Regulación de SPF y LSA
- Loop-Free Alternates (LFA) y LFA remoto
- TI-LFA con Segment Routing
- BGP Prefix Independent Convergence

## Antes de empezar

- [OSPF](ospf.md)

## Estándares y especificaciones

- [RFC 5880 — Bidirectional Forwarding Detection (BFD)](https://www.rfc-editor.org/rfc/rfc5880)
- [RFC 5881 — BFD for IPv4 and IPv6 (Single Hop)](https://www.rfc-editor.org/rfc/rfc5881)
- [RFC 5286 — Basic Specification for IP Fast Reroute: Loop-Free Alternates](https://www.rfc-editor.org/rfc/rfc5286)
- [RFC 4724 — Graceful Restart Mechanism for BGP](https://www.rfc-editor.org/rfc/rfc4724)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [segment-routing.net — Segment Routing community site](https://www.segment-routing.net/) | Artículos | Avanzado | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *Segment Routing, Part I and Part II* — Clarence Filsfils et al. (De pago)

## Laboratorio práctico

Activa BFD con OSPF o IS-IS en tu laboratorio, provoca un fallo silencioso (descartando paquetes con tc) y compara el tiempo de convergencia con y sin BFD.

## Temas relacionados

- [VRF y VRF-Lite](./vrf.md)
- [Redundancia de primer salto: VRRP, HSRP y GLBP](./first-hop-redundancy.md)
- [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](./multicast.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
