---
title: "IPsec e IKEv2"
description: "Cifrar tráfico IP: la arquitectura IPsec, ESP, la negociación IKEv2, modo túnel y transporte, y VPN basadas en políticas o en rutas."
sidebar_position: 3
---

# IPsec e IKEv2

**Nivel:** Intermedio · **Sección:** [WAN, VPN y overlays](./index.md)

## Visión general

IPsec protege el tráfico en la capa IP y es el estándar para VPN entre sedes con routers, firewalls y nubes. IKEv2 autentica a los extremos y negocia las claves; ESP cifra y autentica los paquetes. Las VPN basadas en rutas, con interfaces de túnel virtuales, son mucho más fáciles de operar que las basadas en políticas, y todos los proveedores cloud las soportan.

## Conceptos clave

- Asociaciones de seguridad y SPI
- AH frente a ESP
- Modo túnel frente a transporte
- Intercambios IKEv2 y autenticación (PSK, certificados)
- VPN basadas en políticas frente a basadas en rutas
- NAT traversal
- Pasarelas VPN en la nube

## Antes de empezar

- [Túneles GRE](gre.md)
- [Criptografía básica para redes](../11-security/cryptography-basics.md)

## Estándares y especificaciones

- [RFC 4301 — Security Architecture for the Internet Protocol](https://www.rfc-editor.org/rfc/rfc4301)
- [RFC 4303 — IP Encapsulating Security Payload (ESP)](https://www.rfc-editor.org/rfc/rfc4303)
- [RFC 7296 — Internet Key Exchange Protocol Version 2 (IKEv2)](https://www.rfc-editor.org/rfc/rfc7296)
- [RFC 3948 — UDP Encapsulation of IPsec ESP Packets](https://www.rfc-editor.org/rfc/rfc3948)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [strongSwan documentation](https://docs.strongswan.org/) | Documentación | Intermedio | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Monta una VPN IPsec basada en rutas entre strongSwan y un router (o una pasarela VPN en la capa gratuita de una nube) y ejecuta BGP sobre el túnel.

## Temas relacionados

- [Tecnologías WAN](./wan-technologies.md)
- [Túneles GRE](./gre.md)
- [VPN de acceso remoto: TLS VPN y WireGuard](./remote-access-vpn.md)
- [DMVPN y NHRP](./dmvpn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
