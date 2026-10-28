---
title: "Captura de paquetes y port mirroring"
description: "Llevar los paquetes a un analizador: SPAN, RSPAN, ERSPAN, TAP, captura en el propio equipo y análisis en Wireshark."
sidebar_position: 5
---

# Captura de paquetes y port mirroring

**Nivel:** Intermedio · **Sección:** [Operación y aseguramiento de redes](./index.md)

## Visión general

Cuando los contadores y los registros no bastan, necesitas los paquetes. El port mirroring (SPAN local, RSPAN sobre una VLAN, ERSPAN sobre GRE) copia el tráfico a un analizador; los TAP de red lo hacen de forma pasiva en hardware; y muchos equipos pueden capturar internamente. Wireshark y tshark decodifican, filtran y siguen las conversaciones. Distinguir los filtros de captura de los filtros de visualización ahorra horas.

## Conceptos clave

- SPAN, RSPAN y ERSPAN
- TAP de red y packet brokers
- Captura embebida en el equipo
- Filtros de captura (BPF) frente a filtros de visualización
- Seguir flujos e información experta
- tshark para automatizar
- Consideraciones legales y de privacidad

## Antes de empezar

- [Metodología y herramientas de resolución de problemas](troubleshooting.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Documentación | Principiante | Gratis |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Capturas | Principiante | Gratis |
| [Wireshark display filter reference](https://www.wireshark.org/docs/dfref/) | Referencia | Intermedio | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *Wireshark Network Analysis* — Laura Chappell (De pago)

## Laboratorio práctico

Replica un puerto de switch hacia un analizador, captura una transferencia lenta y usa el análisis TCP de Wireshark para identificar retransmisiones y problemas de ventana.

## Temas relacionados

- [Pila de observabilidad: Prometheus y Grafana](./observability-stack.md)
- [Monitorización activa: IP SLA, TWAMP y STAMP](./active-monitoring.md)
- [Diseño de redes y alta disponibilidad](./network-design.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
