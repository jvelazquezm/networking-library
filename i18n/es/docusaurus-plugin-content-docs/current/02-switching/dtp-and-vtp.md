---
title: "DTP y VTP"
description: "Los protocolos de Cisco para negociar trunks y distribuir VLAN: cómo funcionan y por qué lo recomendable es desactivarlos."
sidebar_position: 3
---

# DTP y VTP

**Nivel:** Principiante · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

DTP negocia si un enlace pasa a ser trunk; VTP propaga la base de datos de VLAN entre switches. Ambos son comodidades propietarias de Cisco que generan riesgos: DTP facilita ataques de VLAN hopping y una actualización VTP perdida puede borrar las VLAN de todo un campus. Merece la pena entenderlos porque explican por qué los trunks deben configurarse de forma estática y por qué el aprovisionamiento de VLAN pasó a herramientas de automatización.

:::info Notas sobre fabricantes
DTP y VTP son específicos de Cisco. Otros fabricantes usan configuración estática de trunks y protocolos como MVRP (IEEE 802.1Q) o automatización para distribuir VLAN.
:::

## Conceptos clave

- Modos DTP: dynamic auto, dynamic desirable, nonegotiate
- Modos VTP servidor, cliente y transparente
- Números de revisión VTP y la «bomba VTP»
- VTP versión 3
- Suplantación de switch y VLAN hopping
- Buenas prácticas: trunks estáticos, VTP transparente o desactivado

## Antes de empezar

- [VLAN, trunking y enrutamiento entre VLAN](vlans.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 19: DTP and VTP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Reproduce en Packet Tracer un accidente con el número de revisión de VTP y después blinda el diseño con trunks estáticos y VTP en modo transparente.

## Temas relacionados

- [Conmutación Ethernet y aprendizaje de MAC](./ethernet-switching.md)
- [VLAN, trunking y enrutamiento entre VLAN](./vlans.md)
- [Protocolos de descubrimiento: LLDP y CDP](./lldp-and-cdp.md)
- [Spanning Tree: STP, RSTP y Rapid PVST+](./spanning-tree.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
