---
title: "TLS"
description: "How TLS secures connections: the TLS 1.3 handshake, certificates and PKI, cipher suites, SNI and ECH, mTLS."
sidebar_position: 5
---

# TLS

**Level:** Intermediate · **Section:** [Transport and Application Protocols](./index.md)

## Overview

TLS authenticates servers (and optionally clients) with certificates and encrypts traffic with keys agreed through an ephemeral Diffie-Hellman exchange. TLS 1.3 removed obsolete options and cut the handshake to one round trip. Certificate chains, revocation, SNI and Encrypted Client Hello all matter to network engineers who build load balancers, inspect traffic or troubleshoot failed connections.

## Key concepts

- TLS 1.3 handshake
- Certificates, chains and trust stores
- Forward secrecy
- Cipher suites
- Session resumption and 0-RTT
- SNI and Encrypted Client Hello
- Mutual TLS
- TLS inspection and its trade-offs

## Before you start

- [Cryptography basics for networks](../11-security/cryptography-basics.md)

## Standards and specifications

- [RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc8446)
- [RFC 5280 — Internet X.509 PKI Certificate and CRL Profile](https://www.rfc-editor.org/rfc/rfc5280)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is SSL/TLS?](https://www.cloudflare.com/learning/ssl/what-is-ssl/) | Article | Beginner | Free |
| [Let's Encrypt — How it works](https://letsencrypt.org/how-it-works/) | Article | Beginner | Free |
| [The Illustrated TLS 1.3 Connection](https://tls13.xargs.org/) | Interactive | Intermediate | Free |

## Bibliography

- *Bulletproof TLS and PKI* — Ivan Ristić (Paid)

## Hands-on lab

Inspect a certificate chain with openssl s_client, then issue your own certificate with an ACME client and serve it from nginx.

## Related topics

- [QUIC and HTTP/3](./quic.md)
- [HTTP, WebSockets and gRPC](./http-websockets-grpc.md)
- [Load balancing and CDNs](./load-balancing-and-cdn.md)
- [Socket programming](./socket-programming.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
