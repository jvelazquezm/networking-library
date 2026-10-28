---
title: "Multicast IP: IGMP, PIM, SSM, MSDP y BIER"
description: "Entregar un flujo a muchos receptores: gestión de grupos, árboles de distribución multicast y multicast entre dominios."
sidebar_position: 14
---

# Multicast IP: IGMP, PIM, SSM, MSDP y BIER

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

El multicast envía una sola copia del tráfico, que la red replica solo donde hay receptores. Los equipos se unen a grupos con IGMP (IPv4) o MLD (IPv6); los routers construyen árboles de distribución con PIM, ya sean árboles compartidos a través de un punto de encuentro o árboles de origen con SSM. MSDP conecta dominios multicast y BIER es un enfoque más reciente sin estado. IPTV, los datos de mercado y algunas aplicaciones empresariales dependen de él.

## Conceptos clave

- Direccionamiento multicast y su correspondencia MAC
- IGMPv2/v3 y MLDv2
- IGMP snooping
- PIM sparse mode, RP y cambio a SPT
- Multicast de origen específico (SSM)
- Comprobación RPF
- PIM bidireccional y MSDP
- BIER

## Antes de empezar

- [OSPF](ospf.md)

## Estándares y especificaciones

- [RFC 7761 — PIM Sparse Mode](https://www.rfc-editor.org/rfc/rfc7761)
- [RFC 3376 — IGMP Version 3](https://www.rfc-editor.org/rfc/rfc3376)
- [RFC 3810 — MLD Version 2 for IPv6](https://www.rfc-editor.org/rfc/rfc3810)
- [RFC 4607 — Source-Specific Multicast for IP](https://www.rfc-editor.org/rfc/rfc4607)
- [RFC 3618 — Multicast Source Discovery Protocol (MSDP)](https://www.rfc-editor.org/rfc/rfc3618)
- [RFC 8279 — Multicast Using Bit Index Explicit Replication (BIER)](https://www.rfc-editor.org/rfc/rfc8279)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *IP Multicast, Volume I and II* — Josh Loveless, Ray Blair, Arvind Durai (De pago)

## Laboratorio práctico

Emite un vídeo multicast con VLC a través de dos routers PIM-SM con un RP estático, después cambia a SSM y compara el estado creado.

## Temas relacionados

- [Redundancia de primer salto: VRRP, HSRP y GLBP](./first-hop-redundancy.md)
- [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](./fast-convergence.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
