---
title: "Spanning Tree: STP, RSTP y Rapid PVST+"
description: "Por qué los bucles de capa 2 son catastróficos y cómo la familia spanning tree elige una topología sin bucles."
sidebar_position: 5
---

# Spanning Tree: STP, RSTP y Rapid PVST+

**Nivel:** Principiante · **Sección:** [Conmutación y Ethernet](./index.md)

## Visión general

Las tramas Ethernet no tienen TTL, así que un solo bucle puede inundar una red hasta tumbarla. Spanning Tree elige un puente raíz y bloquea los caminos redundantes, manteniendo un único árbol activo. RSTP hizo la convergencia rápida; PVST+ y Rapid PVST+ de Cisco ejecutan una instancia por VLAN. Incluso en diseños que evitan STP (acceso enrutado, EVPN), sigue siendo la red de seguridad de casi todos los campus.

:::info Notas sobre fabricantes
PVST+ y Rapid PVST+ son implementaciones por VLAN de Cisco; las alternativas estándar son RSTP y MSTP, que interoperan con ellas a través del common spanning tree.
:::

## Conceptos clave

- Tormentas de broadcast y MAC flapping
- Bridge ID y elección de la raíz
- Roles y estados de puerto
- Coste de camino y desempates
- Propuesta/acuerdo de RSTP y puertos edge
- PVST+ y Rapid PVST+
- PortFast y BPDU Guard

## Antes de empezar

- [VLAN, trunking y enrutamiento entre VLAN](vlans.md)

## Estándares y especificaciones

- [IEEE 802.1Q — Bridges and Bridged Networks (includes RSTP and MSTP)](https://1.ieee802.org/)
- [IEEE 802.1D — MAC Bridges (original STP)](https://standards.ieee.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 20–22: Spanning Tree and Rapid Spanning Tree (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (De pago)

## Laboratorio práctico

Monta un triángulo de switches, predice en papel la raíz y el puerto bloqueado, compruébalo, y después tira un enlace y mide la convergencia con STP y con RSTP.

## Temas relacionados

- [DTP y VTP](./dtp-and-vtp.md)
- [Protocolos de descubrimiento: LLDP y CDP](./lldp-and-cdp.md)
- [MST y protección de spanning tree](./mst-and-stp-protection.md)
- [Agregación de enlaces: LACP y EtherChannel](./link-aggregation.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
