---
title: "Conmutación y Ethernet"
description: "Conmutación Ethernet, VLAN, spanning tree, agregación de enlaces, provider bridging, OAM y TSN."
sidebar_position: 0
sidebar_label: Visión general
---

# 02 · Conmutación y Ethernet

Todo lo que ocurre en la capa 2: cómo aprenden y reenvían los switches, cómo las VLAN segmentan una LAN, cómo se evitan los bucles, cómo se agrupan enlaces para ganar capacidad y redundancia, y cómo Ethernet se convirtió en una tecnología de operador y determinista.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [Conmutación Ethernet y aprendizaje de MAC](./ethernet-switching.md) | Principiante | Tramas Ethernet, direcciones MAC, aprendizaje de MAC, inundación y reenvío. |
| [VLAN, trunking y enrutamiento entre VLAN](./vlans.md) | Principiante | Segmentar una LAN con VLAN, trunks 802.1Q, la VLAN nativa, las VLAN de voz y el enrutamiento entre VLAN. |
| [DTP y VTP](./dtp-and-vtp.md) | Principiante | Los protocolos de Cisco para negociar trunks y distribuir VLAN: cómo funcionan y por qué lo recomendable es desactivarlos. |
| [Protocolos de descubrimiento: LLDP y CDP](./lldp-and-cdp.md) | Principiante | Cómo anuncian los equipos su identidad y capacidades a sus vecinos, y cómo aprovecharlo para documentar y diagnosticar. |
| [Spanning Tree: STP, RSTP y Rapid PVST+](./spanning-tree.md) | Principiante | Por qué los bucles de capa 2 son catastróficos y cómo la familia spanning tree elige una topología sin bucles. |
| [MST y protección de spanning tree](./mst-and-stp-protection.md) | Intermedio | Regiones e instancias de Multiple Spanning Tree y las funciones que mantienen seguro spanning tree: Root Guard, BPDU Guard, Loop Guard, BPDU Filter. |
| [Agregación de enlaces: LACP y EtherChannel](./link-aggregation.md) | Principiante | Agrupar enlaces físicos en uno lógico con LACP, y cómo se reparte el tráfico entre los miembros. |
| [MLAG, vPC y multihoming EVPN](./mlag-and-multihoming.md) | Intermedio | Hacer que dos switches parezcan uno ante un equipo conectado: MLAG, vPC de Cisco, apilamiento y multihoming EVPN estándar. |
| [QinQ y provider bridging](./qinq-and-provider-bridging.md) | Intermedio | Apilar etiquetas VLAN (802.1ad) para transportar las VLAN de los clientes a través de la red de un operador. |
| [OAM Ethernet: CFM e Y.1731](./ethernet-oam.md) | Avanzado | Operación, administración y mantenimiento de Ethernet de operador: comprobación de continuidad, loopback, linktrace y medida del rendimiento. |
| [Time-Sensitive Networking y DetNet](./tsn-and-detnet.md) | Avanzado | Ethernet e IP deterministas: latencia acotada y cero pérdidas por congestión en redes industriales, de automoción y fronthaul 5G. |

## Orden de lectura sugerido

1. [Conmutación Ethernet y aprendizaje de MAC](./ethernet-switching.md) — Principiante
2. [VLAN, trunking y enrutamiento entre VLAN](./vlans.md) — Principiante
3. [DTP y VTP](./dtp-and-vtp.md) — Principiante
4. [Protocolos de descubrimiento: LLDP y CDP](./lldp-and-cdp.md) — Principiante
5. [Spanning Tree: STP, RSTP y Rapid PVST+](./spanning-tree.md) — Principiante
6. [Agregación de enlaces: LACP y EtherChannel](./link-aggregation.md) — Principiante
7. [MST y protección de spanning tree](./mst-and-stp-protection.md) — Intermedio
8. [MLAG, vPC y multihoming EVPN](./mlag-and-multihoming.md) — Intermedio
9. [QinQ y provider bridging](./qinq-and-provider-bridging.md) — Intermedio
10. [OAM Ethernet: CFM e Y.1731](./ethernet-oam.md) — Avanzado
11. [Time-Sensitive Networking y DetNet](./tsn-and-detnet.md) — Avanzado

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
