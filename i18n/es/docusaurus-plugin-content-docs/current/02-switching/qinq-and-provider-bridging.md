---
title: "QinQ y provider bridging"
description: "Apilar etiquetas VLAN (802.1ad) para transportar las VLAN de los clientes a través de la red de un operador."
sidebar_position: 9
---

# QinQ y provider bridging

**Nivel:** Intermedio · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

QinQ añade una etiqueta de servicio externa (S-tag) delante de la etiqueta del cliente (C-tag), lo que permite a un operador transportar de forma transparente las VLAN de muchos clientes por su red Ethernet. Es la base de muchos servicios Metro Ethernet y también se usa dentro de centros de datos y en la agregación de abonados de banda ancha.

## Conceptos clave

- C-tag y S-tag
- Valores TPID (0x8100, 0x88a8)
- Puertos túnel y tunelización de protocolos de capa 2
- Consideraciones de MTU
- Uso en Metro Ethernet y agregación de banda ancha

## Antes de empezar

- [VLAN, trunking y enrutamiento entre VLAN](vlans.md)

## Estándares y especificaciones

- [IEEE 802.1Q — Bridges and Bridged Networks (includes 802.1ad provider bridges)](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [MEF — Carrier Ethernet services](https://www.mef.net/) | Organismo de estandarización | Intermedio | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Configura QinQ entre dos switches (o subinterfaces VLAN de Linux apiladas dos veces) e inspecciona las tramas con doble etiqueta en Wireshark.

## Temas relacionados

- [Agregación de enlaces: LACP y EtherChannel](./link-aggregation.md)
- [MLAG, vPC y multihoming EVPN](./mlag-and-multihoming.md)
- [OAM Ethernet: CFM e Y.1731](./ethernet-oam.md)
- [Time-Sensitive Networking y DetNet](./tsn-and-detnet.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
