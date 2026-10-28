---
title: "Redes de almacenamiento: SAN, iSCSI y NVMe-oF"
description: "Cómo viaja el almacenamiento por las redes: SAN Fibre Channel, iSCSI, FCoE, protocolos NAS y NVMe over Fabrics."
sidebar_position: 13
---

# Redes de almacenamiento: SAN, iSCSI y NVMe-oF

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

El tráfico de almacenamiento es sensible a las pérdidas y a la latencia. Las SAN tradicionales usan Fibre Channel; iSCSI transporta SCSI sobre TCP/IP; los protocolos NAS (NFS, SMB) comparten archivos; y NVMe over Fabrics lleva el almacenamiento flash a velocidad nativa sobre RDMA o TCP. Los ingenieros de redes necesitan entender cómo se comportan estos flujos y cómo diseñar para ellos.

## Conceptos clave

- Almacenamiento de bloques, archivos y objetos
- Fundamentos de Fibre Channel
- iSCSI
- NFS y SMB
- NVMe over Fabrics (RDMA, TCP)
- Diseñar redes para tráfico de almacenamiento

## Antes de empezar

- [TCP y UDP](../01-fundamentals/tcp-and-udp.md)

## Estándares y especificaciones

- [RFC 7143 — Internet Small Computer System Interface (iSCSI) Protocol](https://www.rfc-editor.org/rfc/rfc7143)
- [NVM Express — NVMe over Fabrics specification](https://nvmexpress.org/specifications/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [SNIA — Storage Networking Industry Association education](https://www.snia.org/education) | Artículos | Intermedio | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Exporta un disco desde un equipo Linux por iSCSI (targetcli), móntalo en otro y mide la latencia con la red cargada.

## Temas relacionados

- [Service mesh](./service-mesh.md)
- [Redes en la nube pública: AWS, Azure y GCP](./cloud-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
