---
title: "Service mesh"
description: "Gestionar el tráfico entre servicios: mallas con y sin sidecar, mTLS, desvío de tráfico, reintentos y observabilidad."
sidebar_position: 11
---

# Service mesh

**Nivel:** Avanzado · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Una service mesh saca del código de las aplicaciones las preocupaciones de red: cifrado con TLS mutuo, reintentos y timeouts, desvío de tráfico para despliegues canary y telemetría detallada. Istio, Linkerd y Cilium la implementan con proxies sidecar (a menudo Envoy) o con modos más recientes sin sidecar. Se solapa con la Gateway API y con las redes basadas en eBPF.

## Conceptos clave

- Plano de datos frente a plano de control
- Sidecar frente a ambient / sin sidecar
- Proxy Envoy
- mTLS e identidad de las cargas
- Reparto de tráfico, reintentos y circuit breaking
- Observabilidad: métricas y trazas

## Antes de empezar

- [Redes en Kubernetes](kubernetes-networking.md)

## Estándares y especificaciones

- [Kubernetes Gateway API](https://gateway-api.sigs.k8s.io/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Istio documentation](https://istio.io/latest/docs/) | Documentación | Avanzado | Gratis |
| [Linkerd documentation](https://linkerd.io/2/overview/) | Documentación | Avanzado | Gratis |
| [Envoy proxy documentation](https://www.envoyproxy.io/docs) | Documentación | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Instala una mesh en un clúster local, haz un despliegue canary desviando el 10 % del tráfico y exige mTLS entre servicios.

## Temas relacionados

- [NFV y CNF](./nfv.md)
- [Redes en Kubernetes](./kubernetes-networking.md)
- [Redes en la nube pública: AWS, Azure y GCP](./cloud-networking.md)
- [Redes de almacenamiento: SAN, iSCSI y NVMe-oF](./storage-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
