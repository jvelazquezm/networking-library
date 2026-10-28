---
title: "Post-quantum cryptography in networks"
description: "Preparing network protocols for quantum computers: NIST's new algorithms, hybrid key exchange in TLS, IPsec and SSH, and migration planning."
sidebar_position: 14
---

# Post-quantum cryptography in networks

**Level:** Advanced · **Section:** [Security](./index.md)

## Overview

A large quantum computer would break the RSA and elliptic-curve cryptography that protects today's key exchanges and signatures, and traffic recorded today could be decrypted later. NIST has standardised ML-KEM for key establishment and ML-DSA and SLH-DSA for signatures; hybrid key exchanges are already deployed in TLS and SSH, and IPsec support is arriving. Network teams need an inventory and a migration plan.

## Key concepts

- Why quantum computers threaten public-key cryptography
- Harvest now, decrypt later
- ML-KEM, ML-DSA and SLH-DSA
- Hybrid key exchange in TLS 1.3 and SSH
- PQC in IKEv2 and IPsec
- Crypto agility and migration planning

## Before you start

- [Cryptography basics for networks](cryptography-basics.md)
- [TLS](../10-transport-and-applications/tls.md)

## Standards and specifications

- [NIST FIPS 203 — ML-KEM](https://csrc.nist.gov/pubs/fips/203/final)
- [NIST FIPS 204 — ML-DSA](https://csrc.nist.gov/pubs/fips/204/final)
- [RFC 9370 — Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare blog — post-quantum cryptography](https://blog.cloudflare.com/tag/post-quantum/) | Articles | Advanced | Free |
| [Open Quantum Safe project](https://openquantumsafe.org/) | Open source | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Check whether your browser negotiates a hybrid post-quantum key exchange with a major site, then build OpenSSL with the OQS provider and test it.

## Related topics

- [DDoS and BGP Flowspec](./ddos.md)
- [Network attacks and assessment tools](./network-attacks-and-tools.md)
- [5G security](./5g-security.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
