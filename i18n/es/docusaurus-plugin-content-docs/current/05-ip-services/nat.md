---
title: "NAT y PAT"
description: "Traducción de direcciones de red: NAT estático, NAT dinámico, PAT/overload, redirección de puertos y NAT de operador."
sidebar_position: 3
---

# NAT y PAT

**Nivel:** Principiante · **Sección:** [Servicios IP](./index.md)

## Visión general

NAT reescribe direcciones cuando los paquetes cruzan una frontera, normalmente de espacio privado a público. El NAT estático traduce uno a uno, el NAT dinámico usa un conjunto de direcciones y PAT (NAT overload) permite que miles de equipos compartan una dirección pública traduciendo puertos. NAT rompe la conectividad extremo a extremo, por eso algunos protocolos necesitan ayudas y por eso IPv6 lo evita.

## Conceptos clave

- Terminología inside/outside, local/global
- NAT estático y redirección de puertos
- Conjuntos de NAT dinámico
- PAT / NAT overload
- Comportamiento de NAT y atravesarlo (STUN, TURN)
- NAT de operador (CGNAT)

## Antes de empezar

- [Direccionamiento IPv4 y la cabecera IPv4](../01-fundamentals/ipv4-addressing.md)

## Estándares y especificaciones

- [RFC 3022 — Traditional IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc3022)
- [RFC 4787 — NAT Behavioral Requirements for Unicast UDP](https://www.rfc-editor.org/rfc/rfc4787)
- [RFC 6888 — Common Requirements for Carrier-Grade NATs](https://www.rfc-editor.org/rfc/rfc6888)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 44–45: NAT (static and dynamic) (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Practical Networking — NAT series](https://www.practicalnetworking.net/series/nat/nat/) | Serie de artículos | Principiante | Gratis |
| [Practical Networking — Cisco NAT terminology](https://www.practicalnetworking.net/stand-alone/cisco-nat-terminology/) | Artículo | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Configura PAT en un router Linux o IOS, abre varias conexiones e inspecciona la tabla de traducciones (conntrack o show ip nat translations).

## Temas relacionados

- [DHCP y DHCPv6](./dhcp.md)
- [DNS, DNSSEC, DoT y DoH](./dns.md)
- [Hora: NTP, NTS y PTP](./time-synchronization.md)
- [Calidad de servicio (QoS)](./qos.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
