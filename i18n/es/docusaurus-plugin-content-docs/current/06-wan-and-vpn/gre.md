---
title: "Túneles GRE"
description: "Generic Routing Encapsulation: transportar cualquier protocolo, incluidos multicast y protocolos de enrutamiento, sobre IP."
sidebar_position: 2
---

# Túneles GRE

**Nivel:** Intermedio · **Sección:** [WAN, VPN y overlays](./index.md)

## Visión general

GRE envuelve un paquete dentro de otro y crea un enlace virtual punto a punto a través de una red IP. Como transporta multicast, permite que los protocolos de enrutamiento funcionen sobre el túnel, algo que IPsec por sí solo no puede hacer; por eso GRE sobre IPsec se convirtió en el diseño clásico entre sedes. Los túneles añaden cabeceras, así que hay que ajustar la MTU y el MSS.

## Conceptos clave

- Cabecera GRE y encapsulación
- Origen, destino y direccionamiento del túnel
- OSPF/EIGRP/BGP sobre GRE
- Problemas de enrutamiento recursivo
- MTU, fragmentación y ajuste del MSS
- GRE sobre IPsec

## Antes de empezar

- [Enrutamiento estático](../04-routing/static-routing.md)

## Estándares y especificaciones

- [RFC 2784 — Generic Routing Encapsulation (GRE)](https://www.rfc-editor.org/rfc/rfc2784)
- [RFC 2890 — Key and Sequence Number Extensions to GRE](https://www.rfc-editor.org/rfc/rfc2890)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [Linux ip-tunnel(8) manual page](https://man7.org/linux/man-pages/man8/ip-tunnel.8.html) | Documentación | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Crea un túnel GRE entre dos routers Linux a través de un tercero, ejecuta OSPF sobre él y corrige los problemas de MTU ajustando el MSS.

## Temas relacionados

- [Tecnologías WAN](./wan-technologies.md)
- [IPsec e IKEv2](./ipsec.md)
- [VPN de acceso remoto: TLS VPN y WireGuard](./remote-access-vpn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
