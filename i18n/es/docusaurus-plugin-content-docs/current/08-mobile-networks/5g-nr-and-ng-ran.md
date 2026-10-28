---
title: "5G NR y NG-RAN"
description: "La radio 5G: numerologías, estructura de trama, la pila de protocolos NR, massive MIMO y la división CU/DU del gNB."
sidebar_position: 4
---

# 5G NR y NG-RAN

**Nivel:** Avanzado · **Sección:** [Redes móviles](./index.md)

## Visión general

NR admite varias separaciones entre subportadoras (numerologías) para servir bandas desde menos de 1 GHz hasta mmWave, con estructuras de slot flexibles y gestión de haces. El gNB puede dividirse en unidad central (CU), unidad distribuida (DU) y unidad de radio (RU), conectadas por F1 y por el fronthaul. Entender la pila de protocolos (SDAP, PDCP, RLC, MAC, PHY) explica de dónde salen la latencia y la capacidad.

## Conceptos clave

- Numerologías y estructura de trama
- Bandwidth parts
- SSB, gestión de haces y massive MIMO
- Pila de protocolos: RRC, SDAP, PDCP, RLC, MAC, PHY
- División gNB-CU/DU y F1
- Divisiones funcionales (opción 2, 7.2x)
- Interfaces NG y Xn

## Antes de empezar

- [Arquitectura del sistema 5G](5g-system.md)

## Estándares y especificaciones

- [3GPP TS 38.300 — NR and NG-RAN overall description](https://www.3gpp.org/ftp/Specs/archive/38_series/38.300)
- [3GPP TS 38.401 — NG-RAN architecture description](https://www.3gpp.org/ftp/Specs/archive/38_series/38.401)
- [3GPP TS 38.211 — NR physical channels and modulation](https://www.3gpp.org/ftp/Specs/archive/38_series/38.211)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [ShareTechnote — LTE / 5G protocol notes](https://www.sharetechnote.com/) | Referencia | Intermedio | Gratis |
| [srsRAN Project](https://www.srsran.com/) | Código abierto | Avanzado | Gratis |
| [OpenAirInterface](https://openairinterface.org/) | Código abierto | Avanzado | Gratis |

## Bibliografía

- *5G NR: The Next Generation Wireless Access Technology* — Erik Dahlman, Stefan Parkvall, Johan Sköld (De pago)

## Laboratorio práctico

Ejecuta srsRAN Project u OpenAirInterface en modo RF simulado con un UE simulado e inspecciona los mensajes RRC.

## Temas relacionados

- [4G LTE y el EPC](./lte-and-epc.md)
- [Arquitectura del sistema 5G](./5g-system.md)
- [Núcleo 5G: SBA, PFCP, GTP-U y NGAP](./5g-core.md)
- [Voz: IMS, VoLTE y VoNR](./ims-and-voice.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
