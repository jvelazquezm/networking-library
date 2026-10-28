---
title: "802.1X y control de acceso a la red"
description: "Autenticar equipos y usuarios antes de darles acceso a la red: 802.1X, EAP, MAB, VLAN dinámicas y postura."
sidebar_position: 7
---

# 802.1X y control de acceso a la red

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

El control de acceso a la red decide quién y qué puede conectarse y dónde acaba. 802.1X autentica usuarios o equipos a través del switch o del punto de acceso contra un servidor RADIUS usando EAP; MAC Authentication Bypass cubre los equipos que no pueden hacer 802.1X; y el servidor RADIUS puede devolver VLAN, ACL o etiquetas de grupo de seguridad. Las comprobaciones de postura añaden el estado del equipo a la decisión.

## Conceptos clave

- Suplicante, autenticador y servidor de autenticación
- Métodos EAP (EAP-TLS, PEAP, TEAP)
- MAC Authentication Bypass
- VLAN dinámicas y ACL descargables
- Change of Authorization
- Postura y perfilado

## Antes de empezar

- [Bastionado de equipos, AAA y CoPP](device-hardening-and-aaa.md)
- [VLAN, trunking y enrutamiento entre VLAN](../02-switching/vlans.md)

## Estándares y especificaciones

- [IEEE 802.1X — Port-Based Network Access Control](https://1.ieee802.org/)
- [RFC 3580 — IEEE 802.1X RADIUS Usage Guidelines](https://www.rfc-editor.org/rfc/rfc3580)
- [RFC 5176 — Dynamic Authorization Extensions to RADIUS](https://www.rfc-editor.org/rfc/rfc5176)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [FreeRADIUS documentation](https://www.freeradius.org/documentation/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Configura 802.1X cableado con EAP-TLS contra FreeRADIUS y devuelve una VLAN según el grupo del certificado.

## Temas relacionados

- [Seguridad de capa 2](./layer2-security.md)
- [Seguridad de primer salto IPv6 y uRPF](./ipv6-security.md)
- [Firewalls, NGFW, IDS/IPS y proxies](./firewalls-and-ips.md)
- [MACsec y políticas basadas en grupos](./macsec-and-group-policy.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
