---
title: "MACsec y políticas basadas en grupos"
description: "Cifrado de capa 2 salto a salto con MACsec, y segmentación por identidad con políticas basadas en grupos (Cisco TrustSec, SGT)."
sidebar_position: 9
---

# MACsec y políticas basadas en grupos

**Nivel:** Avanzado · **Sección:** [Seguridad](./index.md)

## Visión general

MACsec cifra cada trama de un enlace a velocidad de línea, protegiendo interconexiones entre centros de datos, enlaces troncales de campus y circuitos WAN sin la sobrecarga de IPsec. Las políticas basadas en grupos separan la política del direccionamiento: los equipos reciben una etiqueta de grupo al autenticarse y la política se expresa entre grupos, aplicándose en cualquier punto de la red. Cisco TrustSec es la implementación más conocida; también existen políticas por grupos en VXLAN-GBP.

:::info Notas sobre fabricantes
TrustSec y las SGT son tecnologías de Cisco; otros fabricantes implementan políticas basadas en grupos con sus propias etiquetas o con la VXLAN Group Policy Option.
:::

## Conceptos clave

- MACsec (802.1AE) y MKA
- MACsec switch-equipo y switch-switch
- MACsec sobre circuitos WAN
- Security group tags y SGACL
- Propagación de etiquetas en línea y con SXP
- VXLAN Group Policy Option

## Antes de empezar

- [802.1X y control de acceso a la red](nac-and-8021x.md)

## Estándares y especificaciones

- [IEEE 802.1AE — MAC Security (MACsec)](https://1.ieee802.org/)
- [IEEE 802.1X — Port-Based Network Access Control (MKA)](https://1.ieee802.org/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [802.1X y control de acceso a la red](./nac-and-8021x.md)
- [Firewalls, NGFW, IDS/IPS y proxies](./firewalls-and-ips.md)
- [Zero Trust y SASE](./zero-trust-and-sase.md)
- [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](./routing-security.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
