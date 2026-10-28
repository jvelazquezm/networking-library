---
title: "4G LTE y el EPC"
description: "La arquitectura 4G: E-UTRAN y eNodeB, el Evolved Packet Core, los bearers, el attach y el handover."
sidebar_position: 2
---

# 4G LTE y el EPC

**Nivel:** Intermedio · **Sección:** [Redes móviles](./index.md)

## Visión general

LTE introdujo una red móvil totalmente IP: los eNodeB se conectan directamente a un Evolved Packet Core formado por MME, SGW, PGW y HSS. El tráfico fluye por bearers con QoS identificada por QCI; procedimientos como el attach, la petición de servicio y el handover están definidos con detalle por el 3GPP. El 5G non-standalone sigue dependiendo del EPC, y sus conceptos se trasladan directamente al núcleo 5G.

## Conceptos clave

- eNodeB y las interfaces X2 y S1
- MME, SGW, PGW, HSS y PCRF
- Bearers EPS y QCI
- Attach, TAU y petición de servicio
- Handover S1 y X2
- GTP-C y GTP-U
- Interfaces Diameter

## Antes de empezar

- [Fundamentos celulares](cellular-fundamentals.md)

## Estándares y especificaciones

- [3GPP TS 36.300 — E-UTRA and E-UTRAN overall description](https://www.3gpp.org/ftp/Specs/archive/36_series/36.300)
- [3GPP TS 23.401 — GPRS enhancements for E-UTRAN access (EPC)](https://www.3gpp.org/ftp/Specs/archive/23_series/23.401)
- [3GPP TS 29.274 — GTPv2-C](https://www.3gpp.org/ftp/Specs/archive/29_series/29.274)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [ShareTechnote — LTE / 5G protocol notes](https://www.sharetechnote.com/) | Referencia | Intermedio | Gratis |
| [Open5GS — open source 4G/5G core](https://open5gs.org/) | Código abierto | Avanzado | Gratis |

## Bibliografía

- *4G, LTE-Advanced Pro and The Road to 5G* — Erik Dahlman, Stefan Parkvall, Johan Sköld (De pago)

## Laboratorio práctico

Ejecuta Open5GS como EPC con srsRAN 4G en modo ZeroMQ (sin radio) y captura un procedimiento de attach.

## Temas relacionados

- [Fundamentos celulares](./cellular-fundamentals.md)
- [Arquitectura del sistema 5G](./5g-system.md)
- [5G NR y NG-RAN](./5g-nr-and-ng-ran.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
