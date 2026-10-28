---
title: "Enrutamiento IP"
description: "Selección de rutas, enrutamiento estático y dinámico, OSPF, IS-IS, EIGRP, BGP, redistribución, VRF, FHRP, convergencia rápida y multicast."
sidebar_position: 0
sidebar_label: Visión general
---

# 04 · Enrutamiento IP

Cómo atraviesan los paquetes las redes: cómo eligen los routers los caminos, cómo construyen los protocolos de pasarela interior su visión de la red, cómo BGP conecta unas redes con otras, y las herramientas (políticas, VRF, redundancia, convergencia rápida y multicast) que convierten una red que funciona en una red de producción.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [Fundamentos de enrutamiento y selección de rutas](./routing-fundamentals.md) | Principiante | La tabla de rutas, la coincidencia de prefijo más largo, la distancia administrativa, las métricas, ECMP y la separación RIB/FIB. |
| [Enrutamiento estático](./static-routing.md) | Principiante | Rutas estáticas IPv4 e IPv6: de red, de host, por defecto y flotantes. |
| [Conceptos de enrutamiento dinámico y RIP](./dynamic-routing-and-rip.md) | Principiante | Por qué el enrutamiento dinámico, IGP frente a EGP, vector distancia frente a estado de enlace frente a vector de caminos, y RIP como protocolo clásico de vector distancia. |
| [EIGRP](./eigrp.md) | Intermedio | El protocolo avanzado de vector distancia de Cisco: DUAL, sucesores y sucesores factibles, métrica compuesta y enrutamiento stub. |
| [OSPF](./ospf.md) | Principiante | Enrutamiento de estado de enlace con OSPFv2 y OSPFv3: vecinos, DR/BDR, LSA, áreas, tipos de área y resumen. |
| [IS-IS](./is-is.md) | Intermedio | El IGP de estado de enlace de los operadores y los centros de datos: niveles, TLV y por qué es la base de Segment Routing. |
| [Fundamentos de BGP](./bgp-fundamentals.md) | Intermedio | El protocolo que conecta Internet: sesiones, eBGP frente a iBGP, atributos de camino, selección del mejor camino y políticas básicas. |
| [BGP avanzado](./bgp-advanced.md) | Avanzado | Políticas a escala: comunidades, reflectores de rutas, confederaciones, Add-Path, multicamino, dampening, ingeniería de tráfico con BGP y operación a escala de Internet. |
| [Redistribución, filtrado de rutas y route maps](./redistribution-and-filtering.md) | Intermedio | Pasar rutas entre protocolos de forma segura y controlar qué rutas se aceptan o se anuncian. |
| [Enrutamiento basado en políticas](./policy-based-routing.md) | Intermedio | Reenviar paquetes según criterios distintos del destino: origen, aplicación o DSCP. |
| [VRF y VRF-Lite](./vrf.md) | Intermedio | Varias tablas de rutas independientes en un mismo router para segmentación y multi-tenencia. |
| [Redundancia de primer salto: VRRP, HSRP y GLBP](./first-hop-redundancy.md) | Principiante | Mantener disponible la puerta de enlace cuando falla un router, con VRRP estándar y HSRP y GLBP de Cisco. |
| [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](./fast-convergence.md) | Avanzado | Detectar fallos en milisegundos y reparar caminos antes de que el protocolo de enrutamiento reconverja. |
| [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](./multicast.md) | Intermedio | Entregar un flujo a muchos receptores: gestión de grupos, árboles de distribución multicast y multicast entre dominios. |

## Orden de lectura sugerido

1. [Fundamentos de enrutamiento y selección de rutas](./routing-fundamentals.md) — Principiante
2. [Enrutamiento estático](./static-routing.md) — Principiante
3. [Conceptos de enrutamiento dinámico y RIP](./dynamic-routing-and-rip.md) — Principiante
4. [OSPF](./ospf.md) — Principiante
5. [Redundancia de primer salto: VRRP, HSRP y GLBP](./first-hop-redundancy.md) — Principiante
6. [EIGRP](./eigrp.md) — Intermedio
7. [IS-IS](./is-is.md) — Intermedio
8. [Fundamentos de BGP](./bgp-fundamentals.md) — Intermedio
9. [Redistribución, filtrado de rutas y route maps](./redistribution-and-filtering.md) — Intermedio
10. [Enrutamiento basado en políticas](./policy-based-routing.md) — Intermedio
11. [VRF y VRF-Lite](./vrf.md) — Intermedio
12. [Multicast IP: IGMP, PIM, SSM, MSDP y BIER](./multicast.md) — Intermedio
13. [BGP avanzado](./bgp-advanced.md) — Avanzado
14. [Convergencia rápida y alta disponibilidad: BFD, GR/NSR, LFA y TI-LFA](./fast-convergence.md) — Avanzado

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
