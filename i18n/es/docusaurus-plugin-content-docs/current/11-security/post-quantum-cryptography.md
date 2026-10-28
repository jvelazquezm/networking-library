---
title: "Criptografía post-cuántica en redes"
description: "Preparar los protocolos de red para los ordenadores cuánticos: los nuevos algoritmos del NIST, el intercambio de claves híbrido en TLS, IPsec y SSH, y la planificación de la migración."
sidebar_position: 14
---

# Criptografía post-cuántica en redes

**Nivel:** Avanzado · **Sección:** [Seguridad](./index.md)

## Visión general

Un ordenador cuántico grande rompería la criptografía RSA y de curva elíptica que protege hoy los intercambios de claves y las firmas, y el tráfico grabado hoy podría descifrarse más adelante. El NIST ha estandarizado ML-KEM para el establecimiento de claves y ML-DSA y SLH-DSA para las firmas; los intercambios de claves híbridos ya están desplegados en TLS y SSH, y el soporte en IPsec está llegando. Los equipos de red necesitan un inventario y un plan de migración.

## Conceptos clave

- Por qué los ordenadores cuánticos amenazan la criptografía de clave pública
- Cosechar ahora, descifrar después
- ML-KEM, ML-DSA y SLH-DSA
- Intercambio de claves híbrido en TLS 1.3 y SSH
- PQC en IKEv2 e IPsec
- Agilidad criptográfica y planificación de la migración

## Antes de empezar

- [Criptografía básica para redes](cryptography-basics.md)
- [TLS](../10-transport-and-applications/tls.md)

## Estándares y especificaciones

- [NIST FIPS 203 — ML-KEM](https://csrc.nist.gov/pubs/fips/203/final)
- [NIST FIPS 204 — ML-DSA](https://csrc.nist.gov/pubs/fips/204/final)
- [RFC 9370 — Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare blog — post-quantum cryptography](https://blog.cloudflare.com/tag/post-quantum/) | Artículos | Avanzado | Gratis |
| [Open Quantum Safe project](https://openquantumsafe.org/) | Código abierto | Avanzado | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Comprueba si tu navegador negocia un intercambio de claves post-cuántico híbrido con una web importante; después compila OpenSSL con el proveedor OQS y pruébalo.

## Temas relacionados

- [DDoS y BGP Flowspec](./ddos.md)
- [Ataques de red y herramientas de evaluación](./network-attacks-and-tools.md)
- [Seguridad 5G](./5g-security.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
