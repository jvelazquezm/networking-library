---
title: "Seguridad 5G"
description: "La arquitectura de seguridad 5G: autenticación, privacidad del abonado, seguridad de la SBA, seguridad en roaming y la superficie de ataque de las redes abiertas y cloud native."
sidebar_position: 15
---

# Seguridad 5G

**Nivel:** Avanzado · **Sección:** [Seguridad](./index.md)

## Visión general

El 5G corrigió varias debilidades de las generaciones anteriores: el identificador permanente se oculta (SUCI), la autenticación está unificada (5G-AKA, EAP-AKA'), la red de origen confirma la autenticación y el núcleo basado en servicios usa TLS y OAuth 2.0 entre funciones. La señalización de roaming pasa por proxies de protección del borde de seguridad (SEPP). Open RAN y los despliegues cloud native añaden nueva superficie de ataque que hay que gestionar.

## Conceptos clave

- 5G-AKA y EAP-AKA'
- Ocultación del SUPI (SUCI)
- Jerarquía de claves
- Seguridad de la SBA: TLS y OAuth 2.0
- SEPP y seguridad en roaming
- Seguridad del network slicing
- Amenazas en Open RAN y entornos cloud native

## Antes de empezar

- [Núcleo 5G: SBA, PFCP, GTP-U y NGAP](../08-mobile-networks/5g-core.md)

## Estándares y especificaciones

- [3GPP TS 33.501 — Security architecture and procedures for the 5G System](https://www.3gpp.org/ftp/Specs/archive/33_series/33.501)
- [ENISA — EU Agency for Cybersecurity (5G threat landscape reports)](https://www.enisa.europa.eu/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Private 5G: A Systems Approach](https://5g.systemsapproach.org/) | Libro abierto | Intermedio | Gratis |

## Bibliografía

- *5G Core Networks: Powering Digitalization* — Stefan Rommer et al. (De pago)

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [Ataques de red y herramientas de evaluación](./network-attacks-and-tools.md)
- [Criptografía post-cuántica en redes](./post-quantum-cryptography.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
