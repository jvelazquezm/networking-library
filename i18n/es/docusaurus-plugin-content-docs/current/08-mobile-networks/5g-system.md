---
title: "Arquitectura del sistema 5G"
description: "El sistema 5G de extremo a extremo: NSA frente a SA, el núcleo basado en servicios, las sesiones PDU, los flujos QoS y los procedimientos clave."
sidebar_position: 3
---

# Arquitectura del sistema 5G

**Nivel:** Intermedio · **Sección:** [Redes móviles](./index.md)

## Visión general

El sistema 5G combina una nueva radio (NR) con un núcleo cloud native basado en servicios. El 5G non-standalone se ancla en el 4G; el standalone usa el núcleo 5G de extremo a extremo y permite slicing y nueva QoS. El tráfico de usuario viaja en sesiones PDU que contienen flujos QoS identificados por 5QI. El registro y el establecimiento de sesión PDU son los dos procedimientos que hay que saberse de memoria.

## Conceptos clave

- NSA (opción 3x) frente a SA (opción 2)
- Puntos de referencia frente a interfaces basadas en servicios
- Gestión del registro y de la conexión
- Sesiones PDU y flujos QoS (5QI)
- Identificadores: SUPI, SUCI, GUTI, DNN, S-NSSAI
- Releases 15–19 y 5G-Advanced

## Antes de empezar

- [4G LTE y el EPC](lte-and-epc.md)

## Estándares y especificaciones

- [3GPP TS 23.501 — System architecture for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.501)
- [3GPP TS 23.502 — Procedures for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.502)
- [3GPP TS 23.503 — Policy and charging control framework for the 5G System](https://www.3gpp.org/ftp/Specs/archive/23_series/23.503)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Libro abierto | Intermedio | Gratis |
| [ShareTechnote — LTE / 5G protocol notes](https://www.sharetechnote.com/) | Referencia | Intermedio | Gratis |
| [3GPP — 5G system overview](https://www.3gpp.org/technologies/5g-system-overview) | Artículo | Intermedio | Gratis |

## Bibliografía

- [*Private 5G: A Systems Approach*](https://5g.systemsapproach.org/) — Larry Peterson, Oguz Sunay, Bruce Davie (Gratis)
- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (De pago)

## Laboratorio práctico

Despliega Open5GS (o free5GC) con UERANSIM y captura en Wireshark un registro completo y el establecimiento de una sesión PDU.

## Temas relacionados

- [Fundamentos celulares](./cellular-fundamentals.md)
- [4G LTE y el EPC](./lte-and-epc.md)
- [5G NR y NG-RAN](./5g-nr-and-ng-ran.md)
- [Núcleo 5G: SBA, PFCP, GTP-U y NGAP](./5g-core.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
