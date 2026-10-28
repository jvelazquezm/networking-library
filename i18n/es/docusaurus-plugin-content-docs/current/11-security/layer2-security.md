---
title: "Seguridad de capa 2"
description: "Port security, DHCP snooping, Dynamic ARP Inspection, IP Source Guard y los ataques habituales de capa 2."
sidebar_position: 5
---

# Seguridad de capa 2

**Nivel:** Principiante · **Sección:** [Seguridad](./index.md)

## Visión general

La capa de acceso es donde se conectan los equipos no confiables, y los protocolos de capa 2 confían en todo el mundo por defecto. Port security limita las direcciones MAC; DHCP snooping bloquea servidores DHCP no autorizados y construye una tabla de asociaciones; Dynamic ARP Inspection e IP Source Guard usan esa tabla para frenar la suplantación de ARP y de direcciones. Juntos cierran la mayoría de los ataques desde la LAN.

## Conceptos clave

- Inundación de MAC y port security
- DHCP no autorizado y DHCP snooping
- Suplantación de ARP y Dynamic ARP Inspection
- IP Source Guard
- VLAN hopping e higiene de la VLAN nativa
- Storm control

## Antes de empezar

- [VLAN, trunking y enrutamiento entre VLAN](../02-switching/vlans.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 49–51: Port security, DHCP snooping, Dynamic ARP Inspection (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Lanza en un laboratorio un servidor DHCP no autorizado y un ataque de suplantación ARP, y detén ambos con DHCP snooping y DAI.

## Temas relacionados

- [Bastionado de equipos, AAA y CoPP](./device-hardening-and-aaa.md)
- [Listas de control de acceso](./acls.md)
- [Seguridad de primer salto IPv6 y uRPF](./ipv6-security.md)
- [802.1X y control de acceso a la red](./nac-and-8021x.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
