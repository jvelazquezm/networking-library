---
title: "NFV y CNF"
description: "Funciones de red como software: la arquitectura NFV del ETSI, las VNF, las funciones de red cloud native y su orquestación."
sidebar_position: 9
---

# NFV y CNF

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

NFV sustituyó los appliances dedicados por software que funciona en servidores estándar. El ETSI definió la arquitectura (infraestructura NFV, gestores de VNF y orquestadores) y los operadores virtualizaron firewalls, routers y núcleos móviles. La segunda ola pasa a funciones de red cloud native (CNF) sobre Kubernetes, con funciones de rendimiento como SR-IOV y DPDK y nuevas herramientas de orquestación.

## Conceptos clave

- Arquitectura NFV del ETSI: NFVI, VIM, VNFM, NFVO
- VNF frente a CNF
- Encadenamiento de servicios
- Rendimiento: NUMA, CPU pinning, SR-IOV, DPDK
- Kubernetes para telecomunicaciones: Multus, operators
- Orquestación de código abierto (por ejemplo Nephio)

## Antes de empezar

- [Virtualización: hipervisores, VM y conmutación virtual](virtualization.md)
- [Contenedores y redes de contenedores](containers.md)

## Estándares y especificaciones

- [ETSI — Network Functions Virtualisation](https://www.etsi.org/technologies/nfv)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nephio — Kubernetes-based network automation](https://nephio.org/) | Código abierto | Avanzado | Gratis |
| [Edge Cloud Operations: A Systems Approach](https://ops.systemsapproach.org/) | Libro abierto | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](./ai-networking.md)
- [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](./data-plane-acceleration.md)
- [Redes en Kubernetes](./kubernetes-networking.md)
- [Service mesh](./service-mesh.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
