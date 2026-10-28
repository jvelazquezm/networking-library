---
title: "Routing security: RPKI, ASPA and BGPsec"
description: "Protecting the Internet's routing system from hijacks and leaks: filtering, IRR, RPKI route origin validation, ASPA and BGPsec."
sidebar_position: 11
---

# Routing security: RPKI, ASPA and BGPsec

**Level:** Intermediate · **Section:** [Security](./index.md)

## Overview

BGP trusts what neighbours say, so mistakes and attacks can redirect traffic for whole regions. Operators defend with prefix filtering based on IRR data, RPKI-signed ROAs and route origin validation, and coordinated action through MANRS. ASPA adds path validation against route leaks; BGPsec signs the full path but has seen little deployment.

## Key concepts

- Route hijacks and leaks
- Prefix filtering and IRR
- RPKI, ROAs and validators
- Route origin validation
- ASPA
- BGPsec
- MANRS actions

## Before you start

- [BGP fundamentals](../04-routing/bgp-fundamentals.md)

## Standards and specifications

- [RFC 6480 — An Infrastructure to Support Secure Internet Routing](https://www.rfc-editor.org/rfc/rfc6480)
- [RFC 6811 — BGP Prefix Origin Validation](https://www.rfc-editor.org/rfc/rfc6811)
- [RFC 8205 — BGPsec Protocol Specification](https://www.rfc-editor.org/rfc/rfc8205)
- [IETF draft — BGP AS_PATH Verification Based on ASPA Objects](https://datatracker.ietf.org/doc/draft-ietf-sidrops-aspa-verification/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [RIPE NCC Academy](https://academy.ripe.net/) | Course | Beginner | Free |
| [Is BGP safe yet? (Cloudflare)](https://isbgpsafeyet.com/) | Article | Beginner | Free |
| [MANRS — Mutually Agreed Norms for Routing Security](https://manrs.org/) | Guide | Intermediate | Free |
| [Routinator — RPKI validator](https://routinator.docs.nlnetlabs.nl/) | Docs | Intermediate | Free |

## Bibliography

- *Internet Routing Architectures* — Sam Halabi (Paid)

## Hands-on lab

Run Routinator as a validator, enable route origin validation in an FRRouting BGP lab and inject an invalid announcement.

## Related topics

- [MACsec and group-based policy](./macsec-and-group-policy.md)
- [Zero Trust and SASE](./zero-trust-and-sase.md)
- [DDoS and BGP Flowspec](./ddos.md)
- [Network attacks and assessment tools](./network-attacks-and-tools.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
