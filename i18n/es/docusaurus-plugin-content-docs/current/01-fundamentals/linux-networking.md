---
title: "Redes en Linux: lo esencial"
description: "La pila de red de Linux y las herramientas que usa todo ingeniero de redes: ip, ss, tcpdump, dig, iperf3, nftables."
sidebar_position: 9
---

# Redes en Linux: lo esencial

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

Linux funciona en servidores, dentro de contenedores, en muchos sistemas operativos de red y en casi todas las herramientas de laboratorio, así que dominar su pila de red da frutos inmediatos. El conjunto iproute2 (ip, ss, tc) configura e inspecciona interfaces, rutas y sockets; tcpdump captura tráfico; dig, mtr e iperf3 prueban la red. Los network namespaces permiten montar topologías completas en un portátil.

## Conceptos clave

- Interfaces, direcciones y rutas con ip
- Sockets con ss (y netstat)
- Resolución de nombres y dig
- tcpdump y filtros de captura
- Network namespaces y pares veth
- Nociones de control de tráfico (tc)

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [iproute2 ip(8) manual page](https://man7.org/linux/man-pages/man8/ip.8.html) | Documentación | Principiante | Gratis |
| [Arch Wiki — Network configuration](https://wiki.archlinux.org/title/Network_configuration) | Documentación | Principiante | Gratis |
| [tcpdump documentation](https://www.tcpdump.org/index.html#documentation) | Documentación | Principiante | Gratis |
| [Linux Advanced Routing & Traffic Control HOWTO](https://lartc.org/) | Guía | Intermedio | Gratis |

## Bibliografía

- *Linux Network Administrator's Guide* — Tony Bautts, Terry Dawson, Gregor N. Purdy (De pago)

## Laboratorio práctico

Crea dos network namespaces unidos por un par veth, añade un namespace que actúe como router entre ellos y haz ping a través de él, sin máquinas virtuales.

## Temas relacionados

- [La vida de un paquete](./life-of-a-packet.md)
- [Trabajar con equipos de red: la CLI](./device-cli.md)
- [Direccionamiento IPv4 y la cabecera IPv4](./ipv4-addressing.md)
- [Subnetting, VLSM y superredes](./subnetting.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
