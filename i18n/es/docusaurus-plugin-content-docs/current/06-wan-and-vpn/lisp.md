---
title: "LISP"
description: "Locator/ID Separation Protocol: separar quién es un equipo de dónde está, y su papel en las fábricas de campus."
sidebar_position: 7
---

# LISP

**Nivel:** Avanzado · **Sección:** [WAN, VPN y overlays](./index.md)

## Visión general

LISP separa los dos papeles de una dirección IP, la identidad (EID) y la ubicación (RLOC), y usa un sistema de mapeo para averiguar dónde está un equipo en cada momento. Eso facilita la movilidad, el multihoming y la multi-tenencia, y es el plano de control de Cisco SD-Access. Hoy es un estándar del IETF y aparece en ENCOR y en el CCIE Enterprise.

## Conceptos clave

- EID y RLOC
- Map-server y map-resolver
- Routers de túnel de entrada y de salida
- Map-cache y map-request
- Movilidad de equipos
- LISP en SD-Access

## Antes de empezar

- [Túneles GRE](gre.md)

## Estándares y especificaciones

- [RFC 9300 — The Locator/ID Separation Protocol (LISP)](https://www.rfc-editor.org/rfc/rfc9300)
- [RFC 9301 — LISP Control Plane](https://www.rfc-editor.org/rfc/rfc9301)

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

- [DMVPN y NHRP](./dmvpn.md)
- [SD-WAN](./sd-wan.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
