---
title: "MPLS L3VPN, 6PE y 6VPE"
description: "VPN IP BGP/MPLS: VRF, route distinguishers y route targets, MP-BGP VPNv4/VPNv6 y enrutamiento PE-CE."
sidebar_position: 3
---

# MPLS L3VPN, 6PE y 6VPE

**Nivel:** Intermedio · **Sección:** [Redes de operador y transporte](./index.md)

## Visión general

MPLS L3VPN permite que una sola red de operador transporte miles de redes de clientes aisladas con direcciones solapadas. Cada PE mantiene una VRF por cliente; MP-BGP transporta las rutas VPN etiquetadas con route distinguishers y route targets; y la pila de etiquetas MPLS identifica la VRF en el PE de salida. 6PE y 6VPE transportan IPv6 sobre un núcleo MPLS IPv4.

## Conceptos clave

- PE, P y CE
- VRF, RD y RT
- MP-BGP VPNv4 y VPNv6
- Etiqueta de VPN y etiqueta de transporte
- Enrutamiento PE-CE (estático, OSPF, BGP)
- VPN hub-and-spoke y extranet
- 6PE y 6VPE
- Opciones inter-AS (A, B, C)

## Antes de empezar

- [MPLS y LDP](mpls.md)
- [VRF y VRF-Lite](../04-routing/vrf.md)

## Estándares y especificaciones

- [RFC 4364 — BGP/MPLS IP Virtual Private Networks](https://www.rfc-editor.org/rfc/rfc4364)
- [RFC 4659 — BGP-MPLS IP VPN Extension for IPv6 VPN (6VPE)](https://www.rfc-editor.org/rfc/rfc4659)
- [RFC 4798 — Connecting IPv6 Islands over IPv4 MPLS (6PE)](https://www.rfc-editor.org/rfc/rfc4798)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *MPLS Fundamentals* — Luc De Ghein (De pago)
- *CCNP SPCOR 350-501 Official Cert Guide* — Cisco Press (De pago)

## Laboratorio práctico

Añade dos VRF de clientes a tu núcleo MPLS con enrutamiento PE-CE eBGP, crea una ruta extranet y comprueba el aislamiento.

## Temas relacionados

- [Arquitectura de operador, peering e IXP](./sp-architecture.md)
- [MPLS y LDP](./mpls.md)
- [L2VPN: pseudowires y VPLS](./l2vpn.md)
- [EVPN](./evpn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
