---
title: "TLS"
description: "Cómo protege TLS las conexiones: el saludo de TLS 1.3, certificados y PKI, suites de cifrado, SNI y ECH, mTLS."
sidebar_position: 5
---

# TLS

**Nivel:** Intermedio · **Sección:** [Protocolos de transporte y aplicación](./index.md)

## Visión general

TLS autentica a los servidores (y opcionalmente a los clientes) con certificados y cifra el tráfico con claves acordadas mediante un intercambio Diffie-Hellman efímero. TLS 1.3 eliminó opciones obsoletas y redujo el saludo a un viaje de ida y vuelta. Las cadenas de certificados, la revocación, SNI y Encrypted Client Hello importan a los ingenieros de redes que montan balanceadores, inspeccionan tráfico o diagnostican conexiones fallidas.

## Conceptos clave

- Saludo de TLS 1.3
- Certificados, cadenas y almacenes de confianza
- Secreto perfecto hacia delante
- Suites de cifrado
- Reanudación de sesión y 0-RTT
- SNI y Encrypted Client Hello
- TLS mutuo
- Inspección TLS y sus compromisos

## Antes de empezar

- [Criptografía básica para redes](../11-security/cryptography-basics.md)

## Estándares y especificaciones

- [RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc8446)
- [RFC 5280 — Internet X.509 PKI Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is SSL/TLS?](https://www.cloudflare.com/learning/ssl/what-is-ssl/) | Artículo | Principiante | Gratis |
| [Let's Encrypt — How it works](https://letsencrypt.org/how-it-works/) | Artículo | Principiante | Gratis |
| [The Illustrated TLS 1.3 Connection](https://tls13.xargs.org/) | Interactivo | Intermedio | Gratis |

## Bibliografía

- *Bulletproof TLS and PKI* — Ivan Ristić (De pago)

## Laboratorio práctico

Inspecciona una cadena de certificados con openssl s_client; después emite tu propio certificado con un cliente ACME y sírvelo desde nginx.

## Temas relacionados

- [QUIC y HTTP/3](./quic.md)
- [HTTP, WebSockets y gRPC](./http-websockets-grpc.md)
- [Balanceo de carga y CDN](./load-balancing-and-cdn.md)
- [Programación de sockets](./socket-programming.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
