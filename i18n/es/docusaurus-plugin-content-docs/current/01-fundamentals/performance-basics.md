---
title: "Rendimiento: ancho de banda, throughput, latencia y jitter"
description: "Las métricas que describen el rendimiento de una red y por qué se confunden tan a menudo."
sidebar_position: 5
---

# Rendimiento: ancho de banda, throughput, latencia y jitter

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

El ancho de banda es la capacidad de un enlace; el throughput es lo que realmente obtienes; la latencia es lo que tarda un bit en llegar y el jitter es cuánto varía ese retardo. Cada aplicación se fija en una métrica distinta: las transferencias quieren throughput, la voz quiere poco jitter, los videojuegos y el trading quieren baja latencia. Entender cómo interactúan, incluidos el retardo en colas y el bufferbloat, es la base de QoS, del ajuste de TCP y de la planificación de capacidad.

## Conceptos clave

- Ancho de banda, throughput y goodput
- Retardo de propagación, serialización, colas y procesamiento
- Tiempo de ida y vuelta (RTT)
- Jitter y pérdida de paquetes
- Producto ancho de banda-retardo
- Bufferbloat

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is latency?](https://www.cloudflare.com/learning/performance/glossary/what-is-latency/) | Artículo | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |
| [Bufferbloat.net](https://www.bufferbloat.net/projects/) | Artículos | Intermedio | Gratis |

## Bibliografía

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Gratis)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (De pago)

## Laboratorio práctico

Mide la latencia y el throughput hacia un servidor cercano y otro lejano con ping e iperf3, y calcula el producto ancho de banda-retardo de cada camino.

## Temas relacionados

- [Dispositivos de red y sus funciones](./networking-devices.md)
- [Interfaces, cableado y PoE](./interfaces-cabling-and-poe.md)
- [Modelos OSI y TCP/IP](./osi-and-tcp-ip-models.md)
- [La vida de un paquete](./life-of-a-packet.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
