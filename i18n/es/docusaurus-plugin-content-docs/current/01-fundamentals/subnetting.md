---
title: "Subnetting, VLSM y superredes"
description: "Dividir el espacio de direcciones en subredes, dimensionarlas con VLSM y resumirlas de nuevo."
sidebar_position: 11
---

# Subnetting, VLSM y superredes

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

El subnetting es la habilidad que separa a quien usa redes de quien las construye. Divides un bloque en redes más pequeñas, dimensionas cada una con VLSM para no desperdiciar direcciones y resumes (superredes) grupos de subredes para que las tablas de rutas sean pequeñas. Practica hasta hacerlo de cabeza: todos los exámenes y todas las revisiones de diseño lo dan por hecho.

## Conceptos clave

- Dirección de red, de broadcast y hosts utilizables
- Subnetting de longitud fija
- Máscaras de longitud variable (VLSM)
- Resumen de rutas y superredes
- Notación CIDR
- Planificación del direccionamiento

## Antes de empezar

- [Direccionamiento IPv4 y la cabecera IPv4](ipv4-addressing.md)

## Estándares y especificaciones

- [RFC 4632 — Classless Inter-domain Routing (CIDR)](https://www.rfc-editor.org/rfc/rfc4632)
- [RFC 950 — Internet Standard Subnetting Procedure](https://www.rfc-editor.org/rfc/rfc950)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 13–15: Subnetting and VLSM (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [subnettingpractice.com](https://subnettingpractice.com/) | Ejercicios | Principiante | Gratis |
| [Practical Networking — Subnetting Mastery](https://www.practicalnetworking.net/stand-alone/subnetting-mastery/) | Serie de artículos | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

Diseña un plan de direccionamiento para una empresa con cuatro sedes y departamentos de distinto tamaño usando un único /20, y resume cada sede.

## Temas relacionados

- [Redes en Linux: lo esencial](./linux-networking.md)
- [Direccionamiento IPv4 y la cabecera IPv4](./ipv4-addressing.md)
- [ARP e ICMP](./arp-and-icmp.md)
- [TCP y UDP](./tcp-and-udp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
