---
title: "Modelos OSI y TCP/IP"
description: "Por qué las redes se organizan en capas, cómo se comparan los modelos OSI y TCP/IP y cómo funciona la encapsulación."
sidebar_position: 6
---

# Modelos OSI y TCP/IP

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

Las capas dividen el enorme problema de las redes en piezas independientes: cada capa presta un servicio a la superior y usa la inferior. El modelo OSI de siete capas es el vocabulario que usan los ingenieros («un problema de capa 2»), mientras que el modelo TCP/IP describe cómo está construida Internet en realidad. La encapsulación, que consiste en envolver los datos con cabeceras sucesivas, es la idea más útil que puedes interiorizar pronto.

## Conceptos clave

- Las siete capas OSI
- El modelo TCP/IP (de Internet)
- Encapsulación y PDU: trama, paquete, segmento
- Comunicación entre capas pares
- Dónde se sitúan los protocolos y dispositivos más comunes
- Límites de los modelos

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

- [RFC 1122 — Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122)
- [ITU-T X.200 — OSI Basic Reference Model](https://www.itu.int/rec/T-REC-X.200)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 3: OSI model and TCP/IP suite (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Cloudflare Learning — What is the OSI model?](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/) | Artículo | Principiante | Gratis |
| [Kurose & Ross — companion site, interactive problems and Wireshark labs](https://gaia.cs.umass.edu/kurose_ross/) | Ejercicios | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |

## Bibliografía

- [*Computer Networks: A Systems Approach*](https://book.systemsapproach.org/) — Larry Peterson, Bruce Davie (Gratis)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (De pago)
- *Computer Networks* — Andrew Tanenbaum, Nick Feamster, David Wetherall (De pago)

## Laboratorio práctico

Captura la carga de una página web en Wireshark y etiqueta las cabeceras Ethernet, IP, TCP y HTTP/TLS de un paquete.

## Temas relacionados

- [Interfaces, cableado y PoE](./interfaces-cabling-and-poe.md)
- [Rendimiento: ancho de banda, throughput, latencia y jitter](./performance-basics.md)
- [La vida de un paquete](./life-of-a-packet.md)
- [Trabajar con equipos de red: la CLI](./device-cli.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
