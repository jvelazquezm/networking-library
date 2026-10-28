---
title: "VLAN, trunking y enrutamiento entre VLAN"
description: "Segmentar una LAN con VLAN, trunks 802.1Q, la VLAN nativa, las VLAN de voz y el enrutamiento entre VLAN."
sidebar_position: 2
---

# VLAN, trunking y enrutamiento entre VLAN

**Nivel:** Principiante · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

Las VLAN dividen una red conmutada física en varios dominios de broadcast aislados. Los puertos de acceso llevan una VLAN; los trunks llevan muchas, etiquetando las tramas con una cabecera 802.1Q. Como los equipos de VLAN distintas están en subredes IP distintas, el tráfico entre ellas debe enrutarse: con un router-on-a-stick, un switch de capa 3 con SVI o un firewall. Las VLAN de voz permiten que un teléfono y un PC compartan puerto.

## Conceptos clave

- Puertos de acceso y trunk
- Etiquetado 802.1Q y VLAN nativa
- Listas de VLAN permitidas
- VLAN de voz
- Router-on-a-stick
- Switches de capa 3 y SVI

## Antes de empezar

- [Conmutación Ethernet y aprendizaje de MAC](ethernet-switching.md)

## Estándares y especificaciones

- [IEEE 802.1Q — Bridges and Bridged Networks (VLAN tagging)](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 16–18 y día 46: VLANs; Voice VLAN (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |
| [Practical Networking — CCNA topic index](https://www.practicalnetworking.net/index/ccna/) | Artículos | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

Crea tres VLAN en dos switches unidos por un trunk y enruta entre ellas con SVI en un switch de capa 3.

## Temas relacionados

- [Conmutación Ethernet y aprendizaje de MAC](./ethernet-switching.md)
- [DTP y VTP](./dtp-and-vtp.md)
- [Protocolos de descubrimiento: LLDP y CDP](./lldp-and-cdp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
