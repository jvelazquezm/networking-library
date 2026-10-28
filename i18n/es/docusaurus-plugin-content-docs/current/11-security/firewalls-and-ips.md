---
title: "Firewalls, NGFW, IDS/IPS y proxies"
description: "Filtrado sin estado y con estado, firewalls de nueva generación, detección y prevención de intrusiones y proxies web."
sidebar_position: 8
---

# Firewalls, NGFW, IDS/IPS y proxies

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

Los firewalls aplican la política entre zonas de seguridad. Los firewalls con estado siguen las conexiones; los de nueva generación identifican aplicaciones y usuarios e integran IPS; los sistemas de detección de intrusiones vigilan el tráfico en busca de ataques conocidos y anomalías; y los proxies terminan e inspeccionan conexiones en nombre de los clientes. La ubicación, el diseño de zonas y la higiene de las reglas importan más que cualquier función concreta de un producto.

## Conceptos clave

- Filtros de paquetes frente a inspección con estado
- Zonas y políticas de seguridad
- NGFW: reconocimiento de aplicaciones y usuarios
- IDS frente a IPS, firmas y detección de anomalías
- Proxies directos e inversos
- Compromisos de la inspección TLS
- Higiene del conjunto de reglas

## Antes de empezar

- [Listas de control de acceso](acls.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Suricata documentation](https://docs.suricata.io/) | Documentación | Intermedio | Gratis |
| [OPNsense documentation](https://docs.opnsense.org/) | Documentación | Intermedio | Gratis |
| [nftables wiki](https://wiki.nftables.org/) | Documentación | Intermedio | Gratis |
| [Zeek documentation](https://docs.zeek.org/) | Documentación | Avanzado | Gratis |

## Bibliografía

- *The Practice of Network Security Monitoring* — Richard Bejtlich (De pago)

## Laboratorio práctico

Monta un firewall OPNsense o nftables con tres zonas, añade Suricata en modo IPS y pruébalo con nmap y una firma de exploit conocida.

## Temas relacionados

- [Seguridad de primer salto IPv6 y uRPF](./ipv6-security.md)
- [802.1X y control de acceso a la red](./nac-and-8021x.md)
- [MACsec y políticas basadas en grupos](./macsec-and-group-policy.md)
- [Zero Trust y SASE](./zero-trust-and-sase.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
