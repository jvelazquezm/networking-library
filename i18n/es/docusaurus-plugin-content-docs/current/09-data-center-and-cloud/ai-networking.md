---
title: "Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet"
description: "Redes para clústeres de GPU: RDMA, Ethernet sin pérdidas, control de congestión, topologías rail-optimized y la iniciativa Ultra Ethernet."
sidebar_position: 7
---

# Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet

**Nivel:** Avanzado · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Entrenar modelos de IA grandes sincroniza miles de GPU, y la red se convierte en el cuello de botella. Estas redes back-end usan RDMA, sobre InfiniBand o sobre Ethernet (RoCEv2), con congestión sin pérdidas o cuidadosamente controlada (PFC, ECN, DCQCN), topologías rail-optimized y switches de radix muy alto. El Ultra Ethernet Consortium está definiendo un transporte Ethernet diseñado específicamente para IA y HPC.

## Conceptos clave

- Redes front-end frente a back-end
- RDMA, InfiniBand y RoCEv2
- PFC y ECN, DCQCN
- Operaciones colectivas y patrones de tráfico
- Topologías rail-optimized y fat-tree
- Reparto de carga: packet spraying, enrutamiento adaptativo
- Ultra Ethernet Transport

## Antes de empezar

- [Fábricas de centro de datos: leaf-spine y BGP en el DC](dc-fabrics.md)
- [TCP en profundidad y control de congestión](../10-transport-and-applications/tcp-in-depth.md)

## Estándares y especificaciones

- [InfiniBand Trade Association (RoCE specifications)](https://www.infinibandta.org/)
- [Ultra Ethernet Consortium — specifications](https://ultraethernet.org/)
- [IEEE 802.1Qbb — Priority-based Flow Control](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [VXLAN, Geneve y EVPN](./vxlan-evpn.md)
- [Fábricas de campus: SD-Access, LISP y VXLAN](./campus-fabrics.md)
- [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](./data-plane-acceleration.md)
- [NFV y CNF](./nfv.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
