---
title: "La vida de un paquete"
description: "Sigue un paquete salto a salto: ARP, conmutación, enrutamiento, reescritura de direcciones MAC y el camino de vuelta."
sidebar_position: 7
---

# La vida de un paquete

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

Juntar todas las capas es el momento en que las redes «hacen clic». Cuando un equipo envía un paquete a otra red usa ARP para averiguar la MAC de su puerta de enlace, el switch reenvía la trama por dirección MAC y cada router busca la IP de destino, reescribe la cabecera de capa 2 y lo pasa al siguiente, mientras la cabecera IP se mantiene (casi) igual de extremo a extremo. Saber narrar este proceso con precisión es la base de la resolución de problemas.

## Conceptos clave

- Puerta de enlace predeterminada
- Resolución ARP del siguiente salto
- Decisiones de reenvío del switch
- Búsqueda en el router y reescritura de capa 2
- Decremento del TTL y checksum
- El camino de vuelta

## Antes de empezar

- [Modelos OSI y TCP/IP](osi-and-tcp-ip-models.md)
- [ARP e ICMP](arp-and-icmp.md)

## Estándares y especificaciones

- [RFC 1812 — Requirements for IP Version 4 Routers](https://www.rfc-editor.org/rfc/rfc1812)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 12: Life of a packet (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Practical Networking — Packet Traveling series](https://www.practicalnetworking.net/series/packet-traveling/packet-traveling/) | Serie de artículos | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

En el modo simulación de Packet Tracer, sigue un ping a través de dos routers y anota todas las direcciones MAC e IP en cada salto.

## Temas relacionados

- [Rendimiento: ancho de banda, throughput, latencia y jitter](./performance-basics.md)
- [Modelos OSI y TCP/IP](./osi-and-tcp-ip-models.md)
- [Trabajar con equipos de red: la CLI](./device-cli.md)
- [Redes en Linux: lo esencial](./linux-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
