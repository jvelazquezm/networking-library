---
title: "Redes cloud native y de centro de datos"
description: "Fábricas leaf-spine, EVPN-VXLAN, redes para IA, aceleración del plano de datos, Kubernetes, service mesh y nube pública."
sidebar_position: 5
---

# Redes cloud native y de centro de datos

**Nivel:** Intermedio · **Temas:** 16

Fábricas leaf-spine, EVPN-VXLAN, redes para IA, aceleración del plano de datos, Kubernetes, service mesh y nube pública.

## Objetivo

Entender cómo se conectan los centros de datos y las plataformas cloud modernas, desde la fábrica física hasta el tráfico entre servicios.

## Pasos

1. [Virtualización: hipervisores, VM y conmutación virtual](../../09-data-center-and-cloud/virtualization.md) (Principiante) — Empieza por la virtualización.
2. [Contenedores y redes de contenedores](../../09-data-center-and-cloud/containers.md) (Principiante) — Entiende los contenedores.
3. [Fundamentos de BGP](../../04-routing/bgp-fundamentals.md) (Intermedio) — Aprende BGP: hoy hace funcionar los centros de datos.
4. [Fábricas de centro de datos: leaf-spine y BGP en el DC](../../09-data-center-and-cloud/dc-fabrics.md) (Intermedio) — Construye una fábrica leaf-spine.
5. [MLAG, vPC y multihoming EVPN](../../02-switching/mlag-and-multihoming.md) (Intermedio) — Conecta servidores a dos switches.
6. [VXLAN, Geneve y EVPN](../../09-data-center-and-cloud/vxlan-evpn.md) (Intermedio) — Añade overlays.
7. [SDN y redes basadas en controladora](../../09-data-center-and-cloud/sdn.md) (Principiante) — Entiende las redes programables.
8. [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](../../09-data-center-and-cloud/ai-networking.md) (Avanzado) — Aprende lo que necesitan los clústeres de IA.
9. [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](../../09-data-center-and-cloud/data-plane-acceleration.md) (Avanzado) — Ve rápido con DPDK, eBPF y P4.
10. [NFV y CNF](../../09-data-center-and-cloud/nfv.md) (Intermedio) — Ejecuta funciones de red como software.
11. [Redes en Kubernetes](../../09-data-center-and-cloud/kubernetes-networking.md) (Intermedio) — Aprende el modelo de red de Kubernetes.
12. [Service mesh](../../09-data-center-and-cloud/service-mesh.md) (Avanzado) — Gestiona el tráfico entre servicios.
13. [Balanceo de carga y CDN](../../10-transport-and-applications/load-balancing-and-cdn.md) (Intermedio) — Reparte la carga.
14. [Redes en la nube pública: AWS, Azure y GCP](../../09-data-center-and-cloud/cloud-networking.md) (Intermedio) — Trasládalo todo a la nube pública.
15. [Redes de almacenamiento: SAN, iSCSI y NVMe-oF](../../09-data-center-and-cloud/storage-networking.md) (Intermedio) — Transporta tráfico de almacenamiento.
16. [Zero Trust y SASE](../../11-security/zero-trust-and-sase.md) (Intermedio) — Aplica Zero Trust.

## Proyecto final

Ejecuta un clúster Kubernetes sobre una fábrica EVPN-VXLAN de Containerlab con Cilium haciendo BGP con los leaves, network policies y observabilidad con Hubble.

:::tip Cómo recorrer una ruta
Lee la visión general y los conceptos clave de cada tema, haz su laboratorio práctico y avanza solo cuando puedas explicar cada concepto clave sin apuntes.
:::
