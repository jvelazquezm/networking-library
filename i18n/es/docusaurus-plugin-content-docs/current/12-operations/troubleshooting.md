---
title: "Metodología y herramientas de resolución de problemas"
description: "Enfoques estructurados para encontrar fallos y las herramientas esenciales: ping, traceroute, mtr, comandos show, capturas y registros."
sidebar_position: 1
---

# Metodología y herramientas de resolución de problemas

**Nivel:** Principiante · **Sección:** [Operación y aseguramiento de redes](./index.md)

## Visión general

Quien diagnostica bien sigue un método en lugar de adivinar: define el problema, reúne hechos, formula una hipótesis, la prueba, corrige y documenta. Los enfoques por capas (de abajo arriba, de arriba abajo, divide y vencerás, seguir el camino) te mantienen ordenado. Las herramientas son pocas pero deben ser naturales para ti, y la resolución de problemas es ahora una parte importante del temario del CCNA v2.0.

## Conceptos clave

- Definir el problema y su alcance
- De abajo arriba, de arriba abajo, divide y vencerás, seguir el camino
- ping, traceroute y mtr
- Contadores de interfaz y tipos de error
- Registros, debugs y sus riesgos
- Capturas de paquetes
- Documentación y revisiones posteriores a incidentes

## Antes de empezar

- [La vida de un paquete](../01-fundamentals/life-of-a-packet.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 11 Lab 2 y others: Troubleshooting labs (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Documentación | Principiante | Gratis |
| [mtr — network diagnostic tool](https://github.com/traviscross/mtr) | Herramienta | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Network Warrior* — Gary Donahue (De pago)

## Laboratorio práctico

Pide a alguien que rompa tu laboratorio de tres formas secretas y arréglalas usando solo comandos show, registros y capturas; después escribe un breve informe del incidente.

## Temas relacionados

- [Monitorización: SNMP, syslog, NetFlow, IPFIX y sFlow](./monitoring.md)
- [Pila de observabilidad: Prometheus y Grafana](./observability-stack.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
