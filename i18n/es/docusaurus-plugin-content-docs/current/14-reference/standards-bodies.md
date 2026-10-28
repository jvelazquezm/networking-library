---
title: "Organismos de estandarización"
description: "Quién define las tecnologías de red, dónde encontrar las especificaciones y cómo leerlas."
sidebar_position: 1
---

# Organismos de estandarización

Los libros explican, pero los estándares definen. Cuando dos fuentes no coinciden, manda la especificación. Casi todos estos organismos publican sus especificaciones gratis.

| Organismo | Qué define | Dónde están las especificaciones | Coste |
| --- | --- | --- | --- |
| [IETF](https://www.ietf.org/) | Protocolos de Internet: IP, TCP, BGP, DNS, QUIC, MPLS, SR, YANG… | [RFC Editor](https://www.rfc-editor.org/), [Datatracker](https://datatracker.ietf.org/) | Gratis |
| [IEEE 802](https://www.ieee802.org/) | Ethernet (802.3), bridging, VLAN y TSN (802.1), Wi-Fi (802.11) | [Programa IEEE GET](https://ieeexplore.ieee.org/browse/standards/get-program/page) | Gratis (GET) / De pago |
| [3GPP](https://www.3gpp.org/) | Redes móviles: LTE, 5G, 6G | [Especificaciones 3GPP](https://www.3gpp.org/specifications-technologies) | Gratis |
| [UIT](https://www.itu.int/) | Transporte óptico, PON, sincronización (UIT-T); IMT-2020/2030 (UIT-R) | [Recomendaciones UIT-T](https://www.itu.int/en/ITU-T/publications/Pages/recs.aspx) | Gratis |
| [ETSI](https://www.etsi.org/) | NFV, MEC, estándares europeos de telecomunicaciones | [Buscador de estándares ETSI](https://www.etsi.org/standards) | Gratis |
| [O-RAN Alliance](https://www.o-ran.org/) | Arquitectura e interfaces de Open RAN | [Especificaciones O-RAN](https://specifications.o-ran.org/) | Gratis (con registro) |
| [MEF](https://www.mef.net/) | Carrier Ethernet, SD-WAN y definiciones de servicios de red | mef.net | Gratis |
| [Broadband Forum](https://www.broadband-forum.org/) | Arquitecturas de banda ancha fija, BNG, TR-069/TR-369 | broadband-forum.org | Gratis |
| [OIF](https://www.oiforum.com/) | Interoperabilidad óptica (400ZR, 800ZR) | oiforum.com | Gratis |
| [Open Networking Foundation](https://opennetworking.org/) | SDN, OpenFlow | opennetworking.org | Gratis |
| [OpenConfig](https://www.openconfig.net/) | Modelos YANG neutrales, gNMI, gNOI | GitHub | Gratis |
| [Ultra Ethernet Consortium](https://ultraethernet.org/) | Transporte Ethernet para IA y HPC | ultraethernet.org | Gratis |
| [CNCF](https://www.cncf.io/) | Proyectos cloud native (Kubernetes, Cilium, Envoy…) | Documentación de cada proyecto | Gratis |
| [Wi-Fi Alliance](https://www.wi-fi.org/) | Programas de certificación Wi-Fi y WPA | wi-fi.org | Parcialmente gratis |

## Cómo leer una RFC

- **Mira el estado.** *Proposed Standard* e *Internet Standard* son normativos; *Informational*, *Experimental* y *Best Current Practice* significan cosas distintas.
- **Mira qué la actualiza o la deja obsoleta.** La cabecera indica ambas cosas: por ejemplo, la RFC 793 (TCP) quedó obsoleta por la RFC 9293.
- **Conoce las palabras clave.** MUST, SHOULD y MAY tienen significados precisos definidos en las RFC 2119 y 8174.
- **Lee las erratas** en la página de la RFC en el RFC Editor.
- **Sigue el trabajo en curso** en el Datatracker del IETF, donde los Internet-Drafts se convierten en RFC.

## Cómo leer una especificación del 3GPP

- **La serie indica el área:** 21 (vocabulario), 22 (requisitos de servicio), 23 (arquitectura y procedimientos), 24 (protocolos de señalización), 28 (gestión), 29 (protocolos del núcleo), 33 (seguridad), 36 (radio LTE), 38 (radio NR).
- **El primer número de la versión es la release.** La TS 23.501 v18.x.y pertenece a la Release 18.
- **Empieza por las especificaciones generales** (TS 23.501 para el sistema 5G y TS 38.300 para NR) antes de entrar en los detalles de protocolo.
- **Stage 1, 2 y 3** son requisitos, arquitectura y protocolos detallados. Léelos en ese orden.
