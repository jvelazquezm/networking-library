---
title: "Protocolos de descubrimiento: LLDP y CDP"
description: "Cómo anuncian los equipos su identidad y capacidades a sus vecinos, y cómo aprovecharlo para documentar y diagnosticar."
sidebar_position: 4
---

# Protocolos de descubrimiento: LLDP y CDP

**Nivel:** Principiante · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

Los protocolos de descubrimiento permiten que cada equipo diga a sus vecinos directos quién es, qué puerto usa y qué puede hacer. LLDP es el estándar IEEE y funciona entre fabricantes; CDP es el equivalente más antiguo de Cisco y sigue activado por defecto en sus equipos. LLDP-MED añade información para teléfonos IP, como la VLAN de voz y la potencia. Son muy valiosos para mapear redes, y también un motivo para desactivarlos en puertos no confiables.

:::info Notas sobre fabricantes
CDP es propietario de Cisco; LLDP es el estándar neutral que soportan todos los fabricantes importantes.
:::

## Conceptos clave

- TLV de LLDP
- LLDP-MED
- CDP
- Tablas de vecinos
- Consideraciones de seguridad

## Antes de empezar

- [Conmutación Ethernet y aprendizaje de MAC](ethernet-switching.md)

## Estándares y especificaciones

- [IEEE 802.1AB — Station and Media Access Control Connectivity Discovery (LLDP)](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 36: CDP and LLDP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Capturas | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Activa LLDP en un laboratorio mixto Linux/switches (lldpd en Linux) y reconstruye el diagrama de topología solo con las tablas de vecinos.

## Temas relacionados

- [VLAN, trunking y enrutamiento entre VLAN](./vlans.md)
- [DTP y VTP](./dtp-and-vtp.md)
- [Spanning Tree: STP, RSTP y Rapid PVST+](./spanning-tree.md)
- [MST y protección de spanning tree](./mst-and-stp-protection.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
