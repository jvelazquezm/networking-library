---
title: "DDoS and BGP Flowspec"
description: "Volumetric, protocol and application-layer attacks, amplification, and mitigation with scrubbing, anycast, RTBH and Flowspec."
sidebar_position: 12
---

# DDoS and BGP Flowspec

**Level:** Intermediate · **Section:** [Security](./index.md)

## Overview

Distributed denial-of-service attacks overwhelm links, devices or applications. Reflection and amplification multiply attack traffic using open services; botnets generate application-layer floods. Mitigation combines upstream filtering, remotely triggered black-holing, BGP Flowspec rules, scrubbing centres and anycast to absorb load across many locations.

## Key concepts

- Volumetric, protocol and L7 attacks
- Reflection and amplification
- Botnets
- RTBH and source-based RTBH
- BGP Flowspec
- Scrubbing centres and anycast
- Detection with flow data

## Before you start

- [BGP fundamentals](../04-routing/bgp-fundamentals.md)

## Standards and specifications

- [RFC 8955 — Dissemination of Flow Specification Rules](https://www.rfc-editor.org/rfc/rfc8955)
- [RFC 7999 — BLACKHOLE Community](https://www.rfc-editor.org/rfc/rfc7999)
- [RFC 5635 — Remote Triggered Black Hole Filtering with uRPF](https://www.rfc-editor.org/rfc/rfc5635)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is a DDoS attack?](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/) | Article | Beginner | Free |
| [APNIC Blog](https://blog.apnic.net/) | Blog | Intermediate | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Simulate an attack in a lab and mitigate it with RTBH and a Flowspec rule distributed from a route reflector.

## Related topics

- [Zero Trust and SASE](./zero-trust-and-sase.md)
- [Routing security: RPKI, ASPA and BGPsec](./routing-security.md)
- [Network attacks and assessment tools](./network-attacks-and-tools.md)
- [Post-quantum cryptography in networks](./post-quantum-cryptography.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
