---
title: "Cryptography basics for networks"
description: "Symmetric and asymmetric encryption, hashing, MACs, digital signatures, Diffie-Hellman and certificates."
sidebar_position: 2
---

# Cryptography basics for networks

**Level:** Beginner · **Section:** [Security](./index.md)

## Overview

Almost every secure protocol — TLS, IPsec, SSH, WPA3, MACsec — combines the same building blocks. Symmetric ciphers encrypt bulk data; asymmetric cryptography and Diffie-Hellman establish keys; hashes and MACs protect integrity; signatures and certificates prove identity. Knowing what each primitive does lets you reason about any protocol's security.

## Key concepts

- Symmetric ciphers (AES, ChaCha20) and modes
- Asymmetric cryptography (RSA, ECC)
- Diffie-Hellman and forward secrecy
- Hashes and HMAC
- Digital signatures
- Certificates and PKI
- Key management

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

- [NIST — Cryptographic standards and guidelines](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Crypto 101 (free book)](https://www.crypto101.io/) | Open book | Beginner | Free |
| [Cryptography I (Dan Boneh, Coursera — free to audit)](https://www.coursera.org/learn/crypto) | Course | Intermediate | Free |

## Bibliography

- *Serious Cryptography* — Jean-Philippe Aumasson (Paid)

## Hands-on lab

Use openssl to generate a key pair, sign and verify a file, and perform an ECDH exchange between two keys.

## Related topics

- [Security concepts and programs](./security-concepts.md)
- [Device hardening, AAA and CoPP](./device-hardening-and-aaa.md)
- [Access control lists](./acls.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
