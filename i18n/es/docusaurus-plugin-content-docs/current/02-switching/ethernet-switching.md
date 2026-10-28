---
title: "Conmutación Ethernet y aprendizaje de MAC"
description: "Tramas Ethernet, direcciones MAC, aprendizaje de MAC, inundación y reenvío."
sidebar_position: 1
---

# Conmutación Ethernet y aprendizaje de MAC

**Nivel:** Principiante · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

Un switch aprende qué direcciones MAC hay detrás de cada puerto leyendo las direcciones de origen, reenvía las tramas unicast conocidas solo por donde deben ir e inunda el tráfico broadcast, multicast y unicast desconocido. Ese algoritmo sencillo, ejecutado en hardware a velocidad de línea, es el corazón de cualquier LAN. Entender el formato de trama y la tabla MAC explica casi todo el comportamiento de capa 2 que vas a diagnosticar.

## Conceptos clave

- Formato de trama Ethernet II
- Direcciones MAC: OUI, unicast, multicast, broadcast
- Aprendizaje, envejecimiento y tabla MAC
- Inundación del tráfico BUM
- Dominios de colisión y de broadcast
- Store-and-forward frente a cut-through

## Antes de empezar

- [Modelos OSI y TCP/IP](../01-fundamentals/osi-and-tcp-ip-models.md)

## Estándares y especificaciones

- [IEEE 802.3 — Ethernet](https://www.ieee802.org/3/)
- [IEEE 802.1Q — Bridges and Bridged Networks](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 5–6: Ethernet LAN switching (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |
| [Practical Networking — CCNA topic index](https://www.practicalnetworking.net/index/ccna/) | Artículos | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

Conecta tres switches en Packet Tracer, genera tráfico entre equipos y observa cómo se llenan y caducan las tablas MAC.

## Temas relacionados

- [VLAN, trunking y enrutamiento entre VLAN](./vlans.md)
- [DTP y VTP](./dtp-and-vtp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
