---
title: "Centro de datos, virtualización y cloud"
description: "Virtualización, contenedores, SDN, fábricas leaf-spine, VXLAN/EVPN, fábricas de campus, redes para IA, aceleración del plano de datos, NFV, Kubernetes, service mesh, nube pública y redes de almacenamiento."
sidebar_position: 0
sidebar_label: Visión general
---

# 09 · Centro de datos, virtualización y cloud

Cómo se construyen las redes dentro de los centros de datos y las nubes, y cómo las propias redes se convirtieron en software: máquinas virtuales y contenedores, redes programables y definidas por software, fábricas y overlays, las exigencias especiales de los clústeres de IA, y los modelos de red de Kubernetes y la nube pública.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [Virtualización: hipervisores, VM y conmutación virtual](./virtualization.md) | Principiante | Hipervisores de tipo 1 y tipo 2, máquinas virtuales, NIC virtuales y switches virtuales. |
| [Contenedores y redes de contenedores](./containers.md) | Principiante | Cómo se aíslan y conectan los contenedores: namespaces, pares veth, bridges y los modos de red de Docker. |
| [SDN y redes basadas en controladora](./sdn.md) | Principiante | Separar los planos de control y de datos: controladoras, APIs northbound y southbound, overlay frente a underlay, OpenFlow y planos de datos programables. |
| [Fábricas de centro de datos: leaf-spine y BGP en el DC](./dc-fabrics.md) | Intermedio | Fábricas Clos, ECMP, underlays enrutados con eBGP o IS-IS, y por qué los centros de datos abandonaron spanning tree. |
| [VXLAN, Geneve y EVPN](./vxlan-evpn.md) | Intermedio | Overlays para centros de datos multi-tenant: encapsulación VXLAN y Geneve con un plano de control EVPN. |
| [Fábricas de campus: SD-Access, LISP y VXLAN](./campus-fabrics.md) | Intermedio | Llevar los conceptos de fábrica al campus: overlay con VXLAN, plano de control con LISP o EVPN y políticas basadas en grupos. |
| [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](./ai-networking.md) | Avanzado | Redes para clústeres de GPU: RDMA, Ethernet sin pérdidas, control de congestión, topologías rail-optimized y la iniciativa Ultra Ethernet. |
| [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](./data-plane-acceleration.md) | Avanzado | Cómo el software y el hardware aceleran el procesamiento de paquetes: bypass del kernel, virtualización de NIC, SmartNIC/DPU, programabilidad en el kernel y switches programables. |
| [NFV y CNF](./nfv.md) | Intermedio | Funciones de red como software: la arquitectura NFV del ETSI, las VNF, las funciones de red cloud native y su orquestación. |
| [Redes en Kubernetes](./kubernetes-networking.md) | Intermedio | El modelo de red de Kubernetes: pods, services, plugins CNI, kube-proxy, ingress, Gateway API y network policies. |
| [Service mesh](./service-mesh.md) | Avanzado | Gestionar el tráfico entre servicios: mallas con y sin sidecar, mTLS, desvío de tráfico, reintentos y observabilidad. |
| [Redes en la nube pública: AWS, Azure y GCP](./cloud-networking.md) | Intermedio | Redes virtuales en la nube: VPC/VNet, subredes, enrutamiento, pasarelas, security groups, peering y conectividad híbrida. |
| [Redes de almacenamiento: SAN, iSCSI y NVMe-oF](./storage-networking.md) | Intermedio | Cómo viaja el almacenamiento por las redes: SAN Fibre Channel, iSCSI, FCoE, protocolos NAS y NVMe over Fabrics. |

## Orden de lectura sugerido

1. [Virtualización: hipervisores, VM y conmutación virtual](./virtualization.md) — Principiante
2. [Contenedores y redes de contenedores](./containers.md) — Principiante
3. [SDN y redes basadas en controladora](./sdn.md) — Principiante
4. [Fábricas de centro de datos: leaf-spine y BGP en el DC](./dc-fabrics.md) — Intermedio
5. [VXLAN, Geneve y EVPN](./vxlan-evpn.md) — Intermedio
6. [Fábricas de campus: SD-Access, LISP y VXLAN](./campus-fabrics.md) — Intermedio
7. [NFV y CNF](./nfv.md) — Intermedio
8. [Redes en Kubernetes](./kubernetes-networking.md) — Intermedio
9. [Redes en la nube pública: AWS, Azure y GCP](./cloud-networking.md) — Intermedio
10. [Redes de almacenamiento: SAN, iSCSI y NVMe-oF](./storage-networking.md) — Intermedio
11. [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](./ai-networking.md) — Avanzado
12. [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](./data-plane-acceleration.md) — Avanzado
13. [Service mesh](./service-mesh.md) — Avanzado

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
