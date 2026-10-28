---
title: "Cómo funciona Internet"
description: "Una visión general de Internet: redes de redes, ISP, IXP, cables submarinos, DNS y enrutamiento."
sidebar_position: 1
---

# Cómo funciona Internet

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

Internet no es una red, sino decenas de miles de redes gestionadas de forma independiente (sistemas autónomos) que acuerdan intercambiar tráfico. Los ISP de acceso conectan hogares y empresas, los proveedores de tránsito y los puntos neutros (IXP) los interconectan, y los cables submarinos llevan el tráfico entre continentes. El sistema de nombres (DNS) y el enrutamiento entre dominios (BGP) son el pegamento que hace que todo parezca un único sistema. Esta página te da el mapa; el resto de la biblioteca completa cada pieza.

## Conceptos clave

- Redes de redes y sistemas autónomos
- Acceso, tránsito y peering
- Puntos neutros de Internet (IXP)
- Fibra submarina y terrestre
- El papel de DNS y BGP
- Quién gobierna Internet: IETF, ICANN, RIR

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

- [RFC 1122 — Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122)
- [IANA — Number resources and the RIR system](https://www.iana.org/numbers)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — How does the Internet work?](https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/) | Artículo | Principiante | Gratis |
| [Submarine Cable Map (TeleGeography)](https://www.submarinecablemap.com/) | Mapa interactivo | Principiante | Gratis |
| [PeeringDB — networks, IXPs and facilities](https://www.peeringdb.com/) | Base de datos | Principiante | Gratis |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Libro abierto | Principiante | Gratis |

## Bibliografía

- [*Computer Networks: A Systems Approach*](https://book.systemsapproach.org/) — Larry Peterson, Bruce Davie (Gratis)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (De pago)

## Laboratorio práctico

Haz un traceroute a una web de otro continente, busca el AS de cada salto en bgp.he.net e identifica dónde sale tu tráfico de la red de tu ISP.

## Temas relacionados

- [Tipos de red y topologías](./network-types-and-topologies.md)
- [Dispositivos de red y sus funciones](./networking-devices.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
