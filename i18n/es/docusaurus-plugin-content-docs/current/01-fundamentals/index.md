---
title: "Fundamentos de redes"
description: "Cómo funcionan las redes e Internet: modelos, dispositivos, direccionamiento, IPv4, IPv6 y los protocolos básicos."
sidebar_position: 0
sidebar_label: Visión general
---

# 01 · Fundamentos de redes

Los conceptos sobre los que se construye todo lo demás: de qué está hecha una red, cómo se organiza la comunicación en capas, cómo se direccionan los equipos y cómo viaja realmente un paquete de una máquina a otra. Si empiezas en redes, comienza aquí y no tengas prisa con el subnetting.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [Cómo funciona Internet](./how-the-internet-works.md) | Principiante | Una visión general de Internet: redes de redes, ISP, IXP, cables submarinos, DNS y enrutamiento. |
| [Tipos de red y topologías](./network-types-and-topologies.md) | Principiante | LAN, WAN, MAN y PAN; topologías físicas y lógicas; cliente-servidor frente a peer-to-peer. |
| [Dispositivos de red y sus funciones](./networking-devices.md) | Principiante | Routers, switches, firewalls, puntos de acceso, controladoras, equipos finales y servidores: qué hace cada uno y en qué capa. |
| [Interfaces, cableado y PoE](./interfaces-cabling-and-poe.md) | Principiante | Cableado de cobre y fibra, conectores, transceptores, velocidades Ethernet, dúplex y Power over Ethernet. |
| [Rendimiento: ancho de banda, throughput, latencia y jitter](./performance-basics.md) | Principiante | Las métricas que describen el rendimiento de una red y por qué se confunden tan a menudo. |
| [Modelos OSI y TCP/IP](./osi-and-tcp-ip-models.md) | Principiante | Por qué las redes se organizan en capas, cómo se comparan los modelos OSI y TCP/IP y cómo funciona la encapsulación. |
| [La vida de un paquete](./life-of-a-packet.md) | Principiante | Sigue un paquete salto a salto: ARP, conmutación, enrutamiento, reescritura de direcciones MAC y el camino de vuelta. |
| [Trabajar con equipos de red: la CLI](./device-cli.md) | Principiante | Navegar y configurar sistemas operativos de red: Cisco IOS, Junos, Arista EOS y Nokia SR OS / SR Linux. |
| [Redes en Linux: lo esencial](./linux-networking.md) | Principiante | La pila de red de Linux y las herramientas que usa todo ingeniero de redes: ip, ss, tcpdump, dig, iperf3, nftables. |
| [Direccionamiento IPv4 y la cabecera IPv4](./ipv4-addressing.md) | Principiante | La cabecera IPv4, la estructura de las direcciones, las clases y por qué CIDR las sustituyó, direccionamiento público y privado. |
| [Subnetting, VLSM y superredes](./subnetting.md) | Principiante | Dividir el espacio de direcciones en subredes, dimensionarlas con VLSM y resumirlas de nuevo. |
| [ARP e ICMP](./arp-and-icmp.md) | Principiante | Cómo se asocian las direcciones IP a direcciones MAC y cómo ICMP informa de errores y hace funcionar ping y traceroute. |
| [TCP y UDP](./tcp-and-udp.md) | Principiante | Los dos protocolos de transporte principales: puertos, conexiones, fiabilidad, control de flujo y cuándo usar cada uno. |
| [IPv6: direccionamiento, NDP y SLAAC](./ipv6.md) | Principiante | Direcciones y prefijos IPv6, tipos de dirección, la cabecera IPv6, Neighbor Discovery y la autoconfiguración. |
| [Mecanismos de transición a IPv6](./ipv6-transition.md) | Intermedio | Cómo conviven IPv4 e IPv6: doble pila, túneles y traducción (NAT64/DNS64, 464XLAT, DS-Lite, MAP-E). |

## Orden de lectura sugerido

1. [Cómo funciona Internet](./how-the-internet-works.md) — Principiante
2. [Tipos de red y topologías](./network-types-and-topologies.md) — Principiante
3. [Dispositivos de red y sus funciones](./networking-devices.md) — Principiante
4. [Interfaces, cableado y PoE](./interfaces-cabling-and-poe.md) — Principiante
5. [Rendimiento: ancho de banda, throughput, latencia y jitter](./performance-basics.md) — Principiante
6. [Modelos OSI y TCP/IP](./osi-and-tcp-ip-models.md) — Principiante
7. [La vida de un paquete](./life-of-a-packet.md) — Principiante
8. [Trabajar con equipos de red: la CLI](./device-cli.md) — Principiante
9. [Redes en Linux: lo esencial](./linux-networking.md) — Principiante
10. [Direccionamiento IPv4 y la cabecera IPv4](./ipv4-addressing.md) — Principiante
11. [Subnetting, VLSM y superredes](./subnetting.md) — Principiante
12. [ARP e ICMP](./arp-and-icmp.md) — Principiante
13. [TCP y UDP](./tcp-and-udp.md) — Principiante
14. [IPv6: direccionamiento, NDP y SLAAC](./ipv6.md) — Principiante
15. [Mecanismos de transición a IPv6](./ipv6-transition.md) — Intermedio

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
