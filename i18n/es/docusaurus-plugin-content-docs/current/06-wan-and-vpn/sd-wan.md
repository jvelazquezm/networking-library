---
title: "SD-WAN"
description: "WAN definida por software: control centralizado, independencia del transporte, enrutamiento por aplicación y las principales arquitecturas de fabricantes."
sidebar_position: 6
---

# SD-WAN

**Nivel:** Intermedio · **Sección:** [WAN, VPN y overlays](./index.md)

## Visión general

SD-WAN separa el control y la gestión de la WAN de sus múltiples transportes. Los equipos de borde construyen overlays cifrados sobre MPLS, banda ancha y 5G; una controladora central distribuye el enrutamiento y las políticas; y el tráfico se encamina por aplicación según la pérdida, la latencia y el jitter medidos. Las arquitecturas varían entre fabricantes (Cisco Catalyst SD-WAN, Fortinet, VMware/Velocloud, Juniper, Huawei), pero los conceptos son comunes.

## Conceptos clave

- Underlay frente a overlay
- Roles de orquestador, controladora y borde
- Aprovisionamiento sin intervención (zero-touch)
- Enrutamiento por aplicación y sondas de SLA
- Políticas centralizadas frente a locales
- Salida directa a Internet y accesos a la nube
- SD-WAN y SASE

## Antes de empezar

- [Tecnologías WAN](wan-technologies.md)
- [IPsec e IKEv2](ipsec.md)

## Estándares y especificaciones

- [MEF 70 — SD-WAN service attributes and services](https://www.mef.net/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Laboratorios | Intermedio | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Usa un sandbox SD-WAN gratuito (por ejemplo Cisco DevNet) para explorar las políticas de la controladora y ver cómo reacciona el enrutamiento por aplicación ante un enlace degradado.

## Temas relacionados

- [VPN de acceso remoto: TLS VPN y WireGuard](./remote-access-vpn.md)
- [DMVPN y NHRP](./dmvpn.md)
- [LISP](./lisp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
