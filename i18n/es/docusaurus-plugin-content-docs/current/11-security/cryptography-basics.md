---
title: "Criptografía básica para redes"
description: "Cifrado simétrico y asimétrico, hashes, MAC, firmas digitales, Diffie-Hellman y certificados."
sidebar_position: 2
---

# Criptografía básica para redes

**Nivel:** Principiante · **Sección:** [Seguridad](./index.md)

## Visión general

Casi todos los protocolos seguros (TLS, IPsec, SSH, WPA3, MACsec) combinan las mismas piezas. Los cifrados simétricos cifran el grueso de los datos; la criptografía asimétrica y Diffie-Hellman establecen las claves; los hashes y los MAC protegen la integridad; las firmas y los certificados demuestran la identidad. Saber qué hace cada primitiva te permite razonar sobre la seguridad de cualquier protocolo.

## Conceptos clave

- Cifrados simétricos (AES, ChaCha20) y modos
- Criptografía asimétrica (RSA, ECC)
- Diffie-Hellman y secreto perfecto hacia delante
- Hashes y HMAC
- Firmas digitales
- Certificados y PKI
- Gestión de claves

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

- [NIST — Cryptographic standards and guidelines](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Crypto 101 (free book)](https://www.crypto101.io/) | Libro abierto | Principiante | Gratis |
| [Cryptography I (Dan Boneh, Coursera — free to audit)](https://www.coursera.org/learn/crypto) | Curso | Intermedio | Gratis |

## Bibliografía

- *Serious Cryptography* — Jean-Philippe Aumasson (De pago)

## Laboratorio práctico

Usa openssl para generar un par de claves, firmar y verificar un archivo y hacer un intercambio ECDH entre dos claves.

## Temas relacionados

- [Conceptos y programas de seguridad](./security-concepts.md)
- [Bastionado de equipos, AAA y CoPP](./device-hardening-and-aaa.md)
- [Listas de control de acceso](./acls.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
