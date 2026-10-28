---
title: "Open RAN"
description: "Desagregar la red de acceso radio: arquitectura O-RAN, fronthaul abierto, el RIC, xApps y rApps, SMO."
sidebar_position: 7
---

# Open RAN

**Nivel:** Avanzado · **Sección:** [Redes móviles](./index.md)

## Visión general

Open RAN divide la estación base en piezas interoperables de distintos fabricantes (O-RU, O-DU y O-CU) conectadas por interfaces abiertas, y añade programabilidad mediante el RAN Intelligent Controller. El RIC casi en tiempo real aloja xApps sobre E2; el RIC no en tiempo real aloja rApps dentro del marco de Service Management and Orchestration, usando A1 y O1. Las pruebas de interoperabilidad y la integración son la parte difícil.

## Conceptos clave

- O-RU, O-DU, O-CU
- Fronthaul abierto (división 7.2x, M-plane)
- Near-RT RIC, E2 y xApps
- Non-RT RIC, SMO, A1 y rApps
- Interfaces O1 y O2, O-Cloud
- Pruebas, integración y seguridad

## Antes de empezar

- [5G NR y NG-RAN](5g-nr-and-ng-ran.md)

## Estándares y especificaciones

- [O-RAN Alliance specifications](https://specifications.o-ran.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [O-RAN Software Community documentation](https://docs.o-ran-sc.org/) | Documentación | Avanzado | Gratis |
| [OpenAirInterface](https://openairinterface.org/) | Código abierto | Avanzado | Gratis |
| [O-RAN Alliance](https://www.o-ran.org/) | Organismo de estandarización | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Despliega el near-RT RIC de O-RAN SC y ejecuta una xApp de ejemplo contra un nodo E2 simulado.

## Temas relacionados

- [Núcleo 5G: SBA, PFCP, GTP-U y NGAP](./5g-core.md)
- [Voz: IMS, VoLTE y VoNR](./ims-and-voice.md)
- [Network slicing](./network-slicing.md)
- [5G privado y edge computing (MEC)](./private-5g-and-mec.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
