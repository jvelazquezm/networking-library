---
title: "Network slicing"
description: "Varias redes lógicas con garantías distintas sobre una infraestructura compartida, de extremo a extremo en RAN, transporte y núcleo."
sidebar_position: 8
---

# Network slicing

**Nivel:** Avanzado · **Sección:** [Redes móviles](./index.md)

## Visión general

Un network slice es una red lógica de extremo a extremo con características propias (caudal, latencia, aislamiento), identificada por un S-NSSAI. El slicing abarca la RAN (planificación y reparto de recursos), el transporte (VPN, políticas SR, Flex-Algo) y el núcleo (funciones de red dedicadas o compartidas), y necesita orquestación para crear y asegurar los slices bajo demanda.

## Conceptos clave

- S-NSSAI, SST y SD
- NSSF y selección de slice
- Slicing en la RAN y reparto de recursos
- Slicing en el transporte (network slices del IETF)
- Slicing en el núcleo: NF compartidas frente a dedicadas
- Gestión y aseguramiento de slices (NSMF, NSSMF)
- Casos de uso comerciales

## Antes de empezar

- [Núcleo 5G: SBA, PFCP, GTP-U y NGAP](5g-core.md)
- [Segment Routing: SR-MPLS](../07-service-provider/segment-routing.md)

## Estándares y especificaciones

- [3GPP TS 23.501 — System architecture for the 5G System (clause 5.15, slicing)](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 28.530 — Management and orchestration; concepts, use cases and requirements](https://www.3gpp.org/ftp/Specs/archive/28_series/28.530)
- [RFC 9543 — A Framework for Network Slices in Networks Built from IETF Technologies](https://www.rfc-editor.org/rfc/rfc9543)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Libro abierto | Intermedio | Gratis |

## Bibliografía

- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (De pago)

## Laboratorio práctico

Configura dos slices en Open5GS con UERANSIM y comprueba que los UE acaban en instancias SMF/UPF distintas.

## Temas relacionados

- [Voz: IMS, VoLTE y VoNR](./ims-and-voice.md)
- [Open RAN](./open-ran.md)
- [5G privado y edge computing (MEC)](./private-5g-and-mec.md)
- [Redes no terrestres (NTN)](./non-terrestrial-networks.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
