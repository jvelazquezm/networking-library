---
title: "Listas de control de acceso"
description: "ACL IPv4 estándar y extendidas, numeradas y con nombre, ACL IPv6, su ubicación y los filtros sin estado equivalentes en otras plataformas."
sidebar_position: 4
---

# Listas de control de acceso

**Nivel:** Principiante · **Sección:** [Seguridad](./index.md)

## Visión general

Las ACL filtran paquetes por direcciones, protocolos y puertos, y también se usan para clasificar tráfico para NAT, QoS y políticas de enrutamiento. Se procesan de arriba abajo con una denegación implícita al final, así que el orden y la ubicación importan. Juniper las llama firewall filters y Linux usa nftables, pero la lógica es la misma.

## Conceptos clave

- ACL estándar frente a extendidas
- ACL numeradas frente a con nombre
- Máscaras wildcard
- Denegación implícita y orden
- Ubicación: cerca del origen o del destino
- ACL IPv6
- ACL como clasificadores
- Filtros sin estado en otras plataformas

## Antes de empezar

- [TCP y UDP](../01-fundamentals/tcp-and-udp.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 34–35: Standard and extended ACLs (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |
| [nftables wiki](https://wiki.nftables.org/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

Escribe ACL extendidas que solo permitan web y DNS desde una VLAN de usuarios a una VLAN de servidores, comprueba los contadores y prueba con nmap.

## Temas relacionados

- [Criptografía básica para redes](./cryptography-basics.md)
- [Bastionado de equipos, AAA y CoPP](./device-hardening-and-aaa.md)
- [Seguridad de capa 2](./layer2-security.md)
- [Seguridad de primer salto IPv6 y uRPF](./ipv6-security.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
