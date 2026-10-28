---
title: "MST y protección de spanning tree"
description: "Regiones e instancias de Multiple Spanning Tree y las funciones que mantienen seguro spanning tree: Root Guard, BPDU Guard, Loop Guard, BPDU Filter."
sidebar_position: 6
---

# MST y protección de spanning tree

**Nivel:** Intermedio · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

MSTP agrupa muchas VLAN en pocas instancias de spanning tree, escalando mucho mejor que STP por VLAN e interoperando entre fabricantes. Las funciones de protección evitan accidentes y ataques: BPDU Guard apaga los puertos de acceso que reciben BPDU, Root Guard mantiene la raíz donde la diseñaste, Loop Guard y UDLD detectan enlaces unidireccionales. Son temas habituales del nivel profesional.

## Conceptos clave

- Regiones MST, instancias e IST/CIST
- Asignación de VLAN a instancias
- Interoperabilidad con RSTP y PVST+
- BPDU Guard y BPDU Filter
- Root Guard
- Loop Guard y UDLD
- Ajuste de STP

## Antes de empezar

- [Spanning Tree: STP, RSTP y Rapid PVST+](spanning-tree.md)

## Estándares y especificaciones

- [IEEE 802.1Q — Bridges and Bridged Networks (MSTP)](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Diseña una región MST con dos instancias para repartir las VLAN entre dos switches de distribución y compruébalo con comandos show.

## Temas relacionados

- [Protocolos de descubrimiento: LLDP y CDP](./lldp-and-cdp.md)
- [Spanning Tree: STP, RSTP y Rapid PVST+](./spanning-tree.md)
- [Agregación de enlaces: LACP y EtherChannel](./link-aggregation.md)
- [MLAG, vPC y multihoming EVPN](./mlag-and-multihoming.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
