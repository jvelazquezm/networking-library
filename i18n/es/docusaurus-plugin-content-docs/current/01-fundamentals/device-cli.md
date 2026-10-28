---
title: "Trabajar con equipos de red: la CLI"
description: "Navegar y configurar sistemas operativos de red: Cisco IOS, Junos, Arista EOS y Nokia SR OS / SR Linux."
sidebar_position: 8
---

# Trabajar con equipos de red: la CLI

**Nivel:** Principiante · **Sección:** [Fundamentos de redes](./index.md)

## Visión general

La mayoría de los equipos de red se siguen configurando desde una interfaz de línea de comandos, y cada fabricante tiene su propio dialecto. Las ideas son comunes (modos operativo y de configuración, configuración en ejecución y guardada, modelos de commit, comandos show), pero la sintaxis cambia. Aprender dos CLI pronto, por ejemplo IOS y Junos, deja claro qué conceptos son universales y cuáles son manías de cada fabricante.

## Conceptos clave

- Modo operativo frente a modo de configuración
- Configuraciones running, startup y candidate
- Commit, rollback y archivo de configuraciones
- Comandos show y debug
- Consola, SSH y gestión fuera de banda
- Configuración jerárquica (Junos, SR OS) frente a plana (IOS, EOS)

## Antes de empezar

- Ninguno: es un buen punto de partida.

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 4: Intro to the CLI (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Juniper Open Learning (free courses)](https://learningportal.juniper.net/) | Curso | Principiante | Gratis |
| [Cisco Packet Tracer](https://www.netacad.com/cisco-packet-tracer) | Simulador | Principiante | Gratis |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [Arista EOS User Manual](https://www.arista.com/en/um-eos) | Documentación | Intermedio | Gratis |

## Bibliografía

- [*Junos OS Basics (Day One series)*](https://www.juniper.net/documentation/) — Juniper Networks (Gratis)
- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Configura el mismo hostname, IP de interfaz y ruta estática en un equipo IOS (Packet Tracer) y en un contenedor SR Linux o cEOS con Containerlab, y compáralos.

## Temas relacionados

- [Modelos OSI y TCP/IP](./osi-and-tcp-ip-models.md)
- [La vida de un paquete](./life-of-a-packet.md)
- [Redes en Linux: lo esencial](./linux-networking.md)
- [Direccionamiento IPv4 y la cabecera IPv4](./ipv4-addressing.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
