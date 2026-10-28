---
title: "DMVPN y NHRP"
description: "VPN dinámicas multipunto: mGRE, NHRP e IPsec construyendo túneles entre sedes remotas bajo demanda."
sidebar_position: 5
---

# DMVPN y NHRP

**Nivel:** Avanzado · **Sección:** [WAN, VPN y overlays](./index.md)

## Visión general

DMVPN permite que cientos de sedes remotas se conecten a un hub con una única interfaz GRE multipunto y creen túneles directos entre ellas bajo demanda, resueltos mediante NHRP y protegidos con IPsec. La fase 3 añade redirecciones y atajos NHRP para un enrutamiento escalable. Es tecnología de Cisco construida sobre estándares abiertos (GRE, NHRP, IPsec) y sigue siendo habitual en WAN empresariales y en el laboratorio del CCIE Enterprise.

:::info Notas sobre fabricantes
DMVPN es un diseño de Cisco. Otros fabricantes ofrecen funciones de VPN dinámica parecidas con otros nombres, y SD-WAN se ha quedado con la mayoría de los despliegues nuevos.
:::

## Conceptos clave

- GRE multipunto
- Registro y resolución NHRP
- Fases 1, 2 y 3
- Diseño del enrutamiento sobre DMVPN
- Diseños con dos hubs
- Perfiles IPsec

## Antes de empezar

- [Túneles GRE](gre.md)
- [IPsec e IKEv2](ipsec.md)

## Estándares y especificaciones

- [RFC 2332 — NBMA Next Hop Resolution Protocol (NHRP)](https://www.rfc-editor.org/rfc/rfc2332)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (De pago)

## Laboratorio práctico

Monta una red DMVPN fase 3 con dos hubs y tres sedes remotas y comprueba que el tráfico entre sedes no pasa por el hub.

## Temas relacionados

- [IPsec e IKEv2](./ipsec.md)
- [VPN de acceso remoto: TLS VPN y WireGuard](./remote-access-vpn.md)
- [SD-WAN](./sd-wan.md)
- [LISP](./lisp.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
