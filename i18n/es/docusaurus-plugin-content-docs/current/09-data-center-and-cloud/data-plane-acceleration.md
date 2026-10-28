---
title: "Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4"
description: "Cómo el software y el hardware aceleran el procesamiento de paquetes: bypass del kernel, virtualización de NIC, SmartNIC/DPU, programabilidad en el kernel y switches programables."
sidebar_position: 8
---

# Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4

**Nivel:** Avanzado · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Los kernels de propósito general son demasiado lentos para muchas funciones de red. DPDK evita el kernel y sondea las NIC desde el espacio de usuario; SR-IOV da a VM y contenedores porciones directas de una NIC; las DPU descargan red y seguridad en la propia tarjeta; eBPF y XDP ejecutan programas seguros dentro del kernel de Linux en el punto más temprano de la pila; P4 programa los pipelines de los switches. Estas tecnologías mueven las UPF 5G, las redes cloud y los planos de datos de Kubernetes.

## Conceptos clave

- Cuellos de botella de la red en el kernel
- DPDK y drivers en modo sondeo
- Funciones virtuales SR-IOV
- SmartNIC y DPU
- eBPF y XDP
- P4 y switches programables
- Uso en UPF, balanceadores y CNI

## Antes de empezar

- [Redes en Linux: lo esencial](../01-fundamentals/linux-networking.md)

## Estándares y especificaciones

- [P4_16 language specification](https://p4.org/specifications/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [DPDK documentation](https://doc.dpdk.org/guides/) | Documentación | Avanzado | Gratis |
| [ebpf.io — What is eBPF?](https://ebpf.io/what-is-ebpf/) | Documentación | Avanzado | Gratis |
| [P4 tutorials (p4lang)](https://github.com/p4lang/tutorials) | Tutoriales | Avanzado | Gratis |
| [XDP tutorial (xdp-project)](https://github.com/xdp-project/xdp-tutorial) | Tutoriales | Avanzado | Gratis |

## Bibliografía

- *Learning eBPF* — Liz Rice (De pago)

## Laboratorio práctico

Sigue las primeras lecciones del tutorial de XDP para descartar y contar paquetes en el kernel, y compara el rendimiento con una regla de nftables.

## Temas relacionados

- [Fábricas de campus: SD-Access, LISP y VXLAN](./campus-fabrics.md)
- [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](./ai-networking.md)
- [NFV y CNF](./nfv.md)
- [Redes en Kubernetes](./kubernetes-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
