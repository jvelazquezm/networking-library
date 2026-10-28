---
title: "VPN de acceso remoto: TLS VPN y WireGuard"
description: "Conectar usuarios individuales: clientes VPN IPsec y basados en TLS, WireGuard, y su comparación con ZTNA."
sidebar_position: 4
---

# VPN de acceso remoto: TLS VPN y WireGuard

**Nivel:** Intermedio · **Sección:** [WAN, VPN y overlays](./index.md)

## Visión general

Las VPN de acceso remoto llevan un portátil o un móvil al interior de la red corporativa. Las opciones tradicionales son los clientes IPsec (IKEv2) y las «VPN SSL» basadas en TLS/DTLS, que atraviesan casi cualquier firewall. WireGuard es un protocolo moderno y minimalista integrado en Linux y muy usado tanto para acceso remoto como entre sedes. El acceso Zero Trust está sustituyendo cada vez más a las VPN de túnel completo.

## Conceptos clave

- Túnel completo frente a túnel dividido
- Acceso remoto con IKEv2
- VPN TLS/DTLS
- Claves y peers de WireGuard
- Autenticación con MFA y certificados
- VPN frente a ZTNA

## Antes de empezar

- [IPsec e IKEv2](ipsec.md)

## Estándares y especificaciones

- [WireGuard — protocol and cryptography](https://www.wireguard.com/protocol/)
- [WireGuard whitepaper (Jason A. Donenfeld)](https://www.wireguard.com/papers/wireguard.pdf)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [WireGuard quick start](https://www.wireguard.com/quickstart/) | Documentación | Principiante | Gratis |
| [OpenVPN community documentation](https://openvpn.net/community-resources/) | Documentación | Intermedio | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Monta un servidor WireGuard, conecta un portátil y un móvil, y compara el enrutamiento con túnel dividido y completo.

## Temas relacionados

- [Túneles GRE](./gre.md)
- [IPsec e IKEv2](./ipsec.md)
- [DMVPN y NHRP](./dmvpn.md)
- [SD-WAN](./sd-wan.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
