---
title: "Agregación de enlaces: LACP y EtherChannel"
description: "Agrupar enlaces físicos en uno lógico con LACP, y cómo se reparte el tráfico entre los miembros."
sidebar_position: 7
---

# Agregación de enlaces: LACP y EtherChannel

**Nivel:** Principiante · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

La agregación de enlaces combina varios enlaces paralelos en una interfaz lógica con más ancho de banda y redundancia, y spanning tree la ve como un solo enlace. LACP negocia el grupo y detecta errores de configuración; Cisco llama al resultado EtherChannel y también soporta su protocolo propietario PAgP. Un hash decide qué miembro lleva cada flujo, por eso un flujo nunca supera la velocidad de un único miembro.

## Conceptos clave

- LACP activo/pasivo
- Grupos estáticos y PAgP
- Entradas del hash de reparto
- Grupos de capa 2 frente a capa 3
- Enlaces mínimos y comportamiento ante fallos

## Antes de empezar

- [Conmutación Ethernet y aprendizaje de MAC](ethernet-switching.md)

## Estándares y especificaciones

- [IEEE 802.1AX — Link Aggregation](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 23: EtherChannel (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Agrupa dos interfaces en Linux con LACP hacia un switch y genera varios flujos para ver cómo se reparten.

## Temas relacionados

- [Spanning Tree: STP, RSTP y Rapid PVST+](./spanning-tree.md)
- [MST y protección de spanning tree](./mst-and-stp-protection.md)
- [MLAG, vPC y multihoming EVPN](./mlag-and-multihoming.md)
- [QinQ y provider bridging](./qinq-and-provider-bridging.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
