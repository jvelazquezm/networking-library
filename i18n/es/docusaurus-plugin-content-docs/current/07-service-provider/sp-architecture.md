---
title: "Arquitectura de operador, peering e IXP"
description: "Cómo se organiza la red de un operador (acceso, agregación, núcleo, borde, centros de datos) y cómo se interconectan los operadores."
sidebar_position: 1
---

# Arquitectura de operador, peering e IXP

**Nivel:** Intermedio · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

La red de un operador está organizada en capas: las redes de acceso llegan a los clientes, la agregación los concentra, un núcleo rápido transporta el tráfico entre regiones y los routers de borde del proveedor entregan los servicios. Los operadores se interconectan mediante peering privado, puntos neutros (IXP) y tránsito de pago, según políticas comerciales y de enrutamiento. Las redes fijas y móviles comparten cada vez más el mismo transporte IP/MPLS o SR convergente.

## Conceptos clave

- Acceso, agregación, núcleo y borde
- Roles PE, P y CE
- Puntos de presencia y centros de datos
- Peering, tránsito e IXP
- Route servers y política de peering
- Transporte convergente fijo-móvil

## Antes de empezar

- [Fundamentos de BGP](../04-routing/bgp-fundamentals.md)

## Estándares y especificaciones

- [RFC 7947 — Internet Exchange BGP Route Server](https://www.rfc-editor.org/rfc/rfc7947)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Curso | Principiante | Gratis |
| [PeeringDB](https://www.peeringdb.com/) | Base de datos | Intermedio | Gratis |
| [Euro-IX — IXP resources](https://www.euro-ix.net/) | Comunidad | Intermedio | Gratis |
| [NANOG — operator talks and tutorials](https://www.nanog.org/) | Vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (De pago)
- *Internet Routing Architectures* — Sam Halabi (De pago)

## Laboratorio práctico

Busca tu ISP en PeeringDB y en bgp.he.net, enumera los IXP donde hace peering e identifica sus proveedores de tránsito.

## Temas relacionados

- [MPLS y LDP](./mpls.md)
- [MPLS L3VPN, 6PE y 6VPE](./mpls-l3vpn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
