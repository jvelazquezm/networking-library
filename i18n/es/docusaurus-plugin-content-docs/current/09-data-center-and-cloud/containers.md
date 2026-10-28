---
title: "Contenedores y redes de contenedores"
description: "Cómo se aíslan y conectan los contenedores: namespaces, pares veth, bridges y los modos de red de Docker."
sidebar_position: 2
---

# Contenedores y redes de contenedores

**Nivel:** Principiante · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Los contenedores comparten el kernel del equipo, pero cada uno tiene su propio network namespace, conectado al equipo mediante pares veth y bridges, con NAT para el tráfico saliente. Los modos bridge, host, macvlan y overlay de Docker muestran los compromisos de cada opción. Las redes de contenedores son la base de Kubernetes y de herramientas de laboratorio como Containerlab.

## Conceptos clave

- Contenedores frente a VM
- Network namespaces y pares veth
- Modos de Docker: bridge, host, macvlan y none
- Publicación de puertos y NAT
- Redes overlay
- Imágenes de contenedor de sistemas operativos de red

## Antes de empezar

- [Virtualización: hipervisores, VM y conmutación virtual](virtualization.md)
- [Redes en Linux: lo esencial](../01-fundamentals/linux-networking.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 54: Virtualization (containers) (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Docker docs — Networking overview](https://docs.docker.com/engine/network/) | Documentación | Principiante | Gratis |
| [Containerlab](https://containerlab.dev/) | Herramienta de laboratorio | Intermedio | Gratis |

## Bibliografía

- *Networking and Kubernetes* — James Strong, Vallery Lancey (De pago)

## Laboratorio práctico

Recrea a mano la red bridge por defecto de Docker con ip netns, pares veth, un bridge de Linux y una regla de masquerade en iptables/nftables.

## Temas relacionados

- [Virtualización: hipervisores, VM y conmutación virtual](./virtualization.md)
- [SDN y redes basadas en controladora](./sdn.md)
- [Fábricas de centro de datos: leaf-spine y BGP en el DC](./dc-fabrics.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
