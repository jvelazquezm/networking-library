---
title: "Hora: NTP, NTS y PTP"
description: "Por qué importa la hora exacta y cómo la entregan NTP, Network Time Security y Precision Time Protocol."
sidebar_position: 4
---

# Hora: NTP, NTS y PTP

**Nivel:** Principiante · **Sección:** [Servicios IP](./index.md)

## Visión general

Los registros, los certificados, la autenticación y los sistemas distribuidos dependen de una hora correcta. NTP sincroniza relojes con precisión de milisegundos sobre redes normales mediante una jerarquía de estratos; Network Time Security añade autenticación. PTP (IEEE 1588) alcanza precisiones por debajo del microsegundo con marcas de tiempo por hardware y es imprescindible en redes móviles, finanzas e industria.

## Conceptos clave

- Por qué importa la hora
- Jerarquía de estratos de NTP
- Modos cliente, servidor y peer
- Autenticación NTP y NTS
- PTP: grandmaster, relojes boundary y transparent
- Marcas de tiempo por hardware
- Perfiles PTP de telecomunicaciones (ver la sección de Operador)

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

- [RFC 5905 — Network Time Protocol Version 4](https://www.rfc-editor.org/rfc/rfc5905)
- [RFC 8915 — Network Time Security for NTP](https://www.rfc-editor.org/rfc/rfc8915)
- [IEEE 1588 — Precision Time Protocol](https://standards.ieee.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 37: NTP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [NTP Pool Project](https://www.ntppool.org/) | Servicio | Principiante | Gratis |
| [Chrony documentation](https://chrony-project.org/documentation.html) | Documentación | Intermedio | Gratis |
| [LinuxPTP project](https://linuxptp.sourceforge.net/) | Código abierto | Avanzado | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Configura chrony con NTS contra un servidor NTS público; después ejecuta linuxptp entre dos equipos y compara los desfases obtenidos.

## Temas relacionados

- [DNS, DNSSEC, DoT y DoH](./dns.md)
- [NAT y PAT](./nat.md)
- [Calidad de servicio (QoS)](./qos.md)
- [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](./device-management.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
