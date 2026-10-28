---
title: "Redundancia de primer salto: VRRP, HSRP y GLBP"
description: "Mantener disponible la puerta de enlace cuando falla un router, con VRRP estándar y HSRP y GLBP de Cisco."
sidebar_position: 12
---

# Redundancia de primer salto: VRRP, HSRP y GLBP

**Nivel:** Principiante · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Los equipos suelen tener una única puerta de enlace por defecto. Los protocolos de redundancia de primer salto permiten que dos o más routers compartan una IP y una MAC virtuales para que uno tome el relevo si el otro falla. VRRP es el estándar del IETF; HSRP es el equivalente de Cisco, muy desplegado; GLBP añade reparto de carga entre puertas de enlace. En las fábricas modernas, las anycast gateways consiguen lo mismo.

:::info Notas sobre fabricantes
HSRP y GLBP son específicos de Cisco; VRRP lo soportan todos los fabricantes importantes.
:::

## Conceptos clave

- IP virtual y MAC virtual
- Activo/en espera y prioridad
- Preempción
- Seguimiento de interfaces y objetos
- HSRP versiones 1 y 2
- Reparto de carga con GLBP
- Anycast gateway en fábricas EVPN

## Antes de empezar

- [Enrutamiento estático](static-routing.md)

## Estándares y especificaciones

- [RFC 9568 — Virtual Router Redundancy Protocol (VRRP) Version 3](https://www.rfc-editor.org/rfc/rfc9568)
- [RFC 2281 — Cisco Hot Standby Router Protocol (HSRP)](https://www.rfc-editor.org/rfc/rfc2281)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 29: First hop redundancy protocols (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Configura VRRP (o HSRP) entre dos routers con seguimiento del enlace de subida, apaga ese enlace y observa cómo conmuta la puerta de enlace.

## Temas relacionados

- [Enrutamiento basado en políticas](./policy-based-routing.md)
- [VRF y VRF-Lite](./vrf.md)
- [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](./fast-convergence.md)
- [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](./multicast.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
