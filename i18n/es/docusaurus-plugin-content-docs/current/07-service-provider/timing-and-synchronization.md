---
title: "Sincronización para redes de transporte"
description: "Sincronización de frecuencia y fase para redes móviles: GNSS, SyncE, perfiles PTP de telecomunicaciones y presupuestos de error de tiempo."
sidebar_position: 13
---

# Sincronización para redes de transporte

**Nivel:** Avanzado · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

Las redes de radio necesitan un alineamiento muy preciso de frecuencia y fase: el 5G TDD requiere una precisión de fase de unos ±1,5 µs en la interfaz radio. Los operadores distribuyen la hora desde grandmasters alimentados por GNSS, usando Synchronous Ethernet para la frecuencia y perfiles PTP de telecomunicaciones para la fase, con relojes boundary en cada nodo. Diseñar presupuestos de error de tiempo y protegerse frente a caídas de GNSS son habilidades de especialista.

## Conceptos clave

- Frecuencia, fase y hora
- Fuentes GNSS y holdover
- Synchronous Ethernet y ESMC
- Perfiles PTP de telecomunicaciones G.8275.1 y G.8275.2
- Relojes boundary y transparent
- Presupuestos de error de tiempo

## Antes de empezar

- [Hora: NTP, NTS y PTP](../05-ip-services/time-synchronization.md)

## Estándares y especificaciones

- [ITU-T G.8262 — Timing characteristics of SyncE equipment clocks](https://www.itu.int/rec/T-REC-G.8262)
- [ITU-T G.8275.1 — PTP telecom profile for phase/time with full timing support](https://www.itu.int/rec/T-REC-G.8275.1)
- [ITU-T G.8275.2 — PTP telecom profile with partial timing support](https://www.itu.int/rec/T-REC-G.8275.2)
- [IEEE 1588 — Precision Time Protocol](https://standards.ieee.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [LinuxPTP project](https://linuxptp.sourceforge.net/) | Código abierto | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Ejecuta linuxptp con marcas de tiempo por hardware entre dos equipos (o por software en un laboratorio) y observa el desfase y el retardo del camino.

## Temas relacionados

- [Transporte óptico: DWDM y OTN](./optical-transport.md)
- [Metro, backhaul y fronthaul](./metro-backhaul-fronthaul.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
