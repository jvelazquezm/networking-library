---
title: "MLAG, vPC y multihoming EVPN"
description: "Hacer que dos switches parezcan uno ante un equipo conectado: MLAG, vPC de Cisco, apilamiento y multihoming EVPN estándar."
sidebar_position: 8
---

# MLAG, vPC y multihoming EVPN

**Nivel:** Intermedio · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

La agregación clásica termina en un único switch, que es un punto único de fallo. La agregación multichasis permite que un servidor o switch agrupe enlaces hacia dos switches que cooperan mediante un peer link; Cisco lo llama vPC, y Arista y otros lo llaman MLAG. Son soluciones propietarias; el multihoming EVPN (ESI-LAG) es el sucesor estándar que se usa en las fábricas modernas.

:::info Notas sobre fabricantes
MLAG y vPC son específicos de cada fabricante; el multihoming EVPN es la opción interoperable.
:::

## Conceptos clave

- Apilamiento frente a MLAG
- Peer link y keepalive
- Puertos huérfanos y split-brain
- vPC (Cisco) y MLAG (Arista y otros)
- Multihoming EVPN con Ethernet Segment Identifier
- Activo-activo frente a activo único

## Antes de empezar

- [Agregación de enlaces: LACP y EtherChannel](link-aggregation.md)

## Estándares y especificaciones

- [RFC 7432 — BGP MPLS-Based Ethernet VPN (multihoming)](https://www.rfc-editor.org/rfc/rfc7432)
- [RFC 8365 — Network Virtualization Overlay Solution Using EVPN](https://www.rfc-editor.org/rfc/rfc8365)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Herramienta de laboratorio | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *EVPN in the Data Center* — Dinesh Dutt (De pago)
- *Cloud Native Data Center Networking* — Dinesh Dutt (De pago)

## Laboratorio práctico

Monta multihoming EVPN entre dos leaves SR Linux o cEOS y un equipo Linux con un bond LACP en Containerlab, y tira uno de los leaves.

## Temas relacionados

- [MST y protección de spanning tree](./mst-and-stp-protection.md)
- [Agregación de enlaces: LACP y EtherChannel](./link-aggregation.md)
- [QinQ y provider bridging](./qinq-and-provider-bridging.md)
- [OAM Ethernet: CFM e Y.1731](./ethernet-oam.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
