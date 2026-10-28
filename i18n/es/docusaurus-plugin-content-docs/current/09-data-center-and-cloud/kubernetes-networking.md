---
title: "Redes en Kubernetes"
description: "El modelo de red de Kubernetes: pods, services, plugins CNI, kube-proxy, ingress, Gateway API y network policies."
sidebar_position: 10
---

# Redes en Kubernetes

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Kubernetes exige que todo pod pueda llegar a cualquier otro pod sin NAT, y deja la implementación a plugins CNI como Calico, Cilium o Flannel. Los services ofrecen IP virtuales estables implementadas por kube-proxy o por eBPF; Ingress y la Gateway API exponen las aplicaciones; las network policies controlan el tráfico entre pods. Las cargas de telecomunicaciones añaden Multus y SR-IOV para tener varias interfaces.

## Conceptos clave

- Modelo de red de los pods
- Plugins CNI: Calico, Cilium, Flannel
- Services: ClusterIP, NodePort, LoadBalancer
- kube-proxy (iptables, IPVS) frente a eBPF
- DNS en Kubernetes
- Ingress y Gateway API
- Network policies
- Multus y SR-IOV para CNF

## Antes de empezar

- [Contenedores y redes de contenedores](containers.md)

## Estándares y especificaciones

- [CNI — Container Network Interface specification](https://github.com/containernetworking/cni)
- [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [kind — local Kubernetes clusters](https://kind.sigs.k8s.io/) | Herramienta de laboratorio | Principiante | Gratis |
| [Kubernetes docs — Cluster networking](https://kubernetes.io/docs/concepts/cluster-administration/networking/) | Documentación | Intermedio | Gratis |
| [Calico documentation](https://docs.tigera.io/calico/latest/about/) | Documentación | Intermedio | Gratis |
| [Cilium documentation](https://docs.cilium.io/) | Documentación | Avanzado | Gratis |

## Bibliografía

- *Networking and Kubernetes* — James Strong, Vallery Lancey (De pago)

## Laboratorio práctico

Crea un clúster kind con Cilium, despliega dos services, aplica una network policy entre ellos y observa los flujos con Hubble.

## Temas relacionados

- [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](./data-plane-acceleration.md)
- [NFV y CNF](./nfv.md)
- [Service mesh](./service-mesh.md)
- [Redes en la nube pública: AWS, Azure y GCP](./cloud-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
