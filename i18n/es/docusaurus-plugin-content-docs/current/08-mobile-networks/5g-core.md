---
title: "Núcleo 5G: SBA, PFCP, GTP-U y NGAP"
description: "El núcleo cloud native: funciones de red, interfaces basadas en servicios, separación de planos de control y usuario, y sus protocolos."
sidebar_position: 5
---

# Núcleo 5G: SBA, PFCP, GTP-U y NGAP

**Nivel:** Avanzado · **Sección:** [Redes móviles](./index.md)

## Visión general

El núcleo 5G es un conjunto de funciones de red (AMF, SMF, UPF, AUSF, UDM, PCF, NRF, NSSF y más) que se comunican mediante APIs HTTP/2. La SMF controla la UPF mediante PFCP; el tráfico de usuario viaja en túneles GTP-U; y la RAN habla con la AMF mediante NGAP sobre SCTP. Ejecutar estas funciones como contenedores sobre Kubernetes es ya lo habitual.

## Conceptos clave

- Funciones de red y sus roles
- Interfaces basadas en servicios (HTTP/2, OpenAPI)
- Descubrimiento con la NRF
- N2/NGAP sobre SCTP
- N4/PFCP y CUPS
- N3/GTP-U y ubicación de la UPF
- Despliegue cloud native sobre Kubernetes

## Antes de empezar

- [Arquitectura del sistema 5G](5g-system.md)
- [Redes en Kubernetes](../09-data-center-and-cloud/kubernetes-networking.md)

## Estándares y especificaciones

- [3GPP TS 23.501 — System architecture for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 29.500 — Technical realization of Service Based Architecture](https://www.3gpp.org/ftp/Specs/archive/29_series/29.500)
- [3GPP TS 29.244 — PFCP — interface between control and user plane](https://www.3gpp.org/ftp/Specs/archive/29_series/29.244)
- [3GPP TS 38.413 — NG Application Protocol (NGAP)](https://www.3gpp.org/ftp/Specs/archive/38_series/38.413)
- [3GPP TS 29.281 — GTP-U](https://www.3gpp.org/ftp/Specs/archive/29_series/29.281)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Libro abierto | Intermedio | Gratis |
| [Open5GS — open source 4G/5G core](https://open5gs.org/) | Código abierto | Avanzado | Gratis |
| [free5GC — open source 5G core](https://free5gc.org/) | Código abierto | Avanzado | Gratis |
| [UERANSIM — 5G UE and gNB simulator](https://github.com/aligungr/UERANSIM) | Código abierto | Avanzado | Gratis |

## Bibliografía

- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (De pago)

## Laboratorio práctico

Despliega free5GC u Open5GS sobre Kubernetes y sigue el descubrimiento en la NRF, el establecimiento de sesión PFCP y el tráfico GTP-U de un UE.

## Temas relacionados

- [Arquitectura del sistema 5G](./5g-system.md)
- [5G NR y NG-RAN](./5g-nr-and-ng-ran.md)
- [Voz: IMS, VoLTE y VoNR](./ims-and-voice.md)
- [Open RAN](./open-ran.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
