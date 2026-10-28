---
title: "Zero Trust and SASE"
description: "Never trust, always verify: identity-centric access, policy engines, ZTNA and secure access service edge."
sidebar_position: 10
---

# Zero Trust and SASE

**Level:** Intermediate · **Section:** [Security](./index.md)

## Overview

Zero Trust drops the idea that anything inside the network perimeter is trustworthy. Every access request is evaluated on identity, device posture and context by a policy decision point and enforced close to the resource. ZTNA replaces broad VPN access with per-application access; SASE delivers networking and security (SD-WAN, secure web gateway, CASB, ZTNA, firewall) as a cloud service.

## Key concepts

- Implicit trust vs Zero Trust
- Policy decision and enforcement points
- Identity, device posture and context
- Microsegmentation
- ZTNA vs VPN
- SASE and SSE components

## Before you start

- [Firewalls, NGFW, IDS/IPS and proxies](firewalls-and-ips.md)

## Standards and specifications

- [NIST SP 800-207 — Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is Zero Trust?](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) | Article | Beginner | Free |
| [CISA — Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model) | Guide | Intermediate | Free |

## Bibliography

- *Zero Trust Networks* — Razi Rais, Christina Morillo, Evan Gilman, Doug Barth (Paid)

## Hands-on lab

Publish an internal web app through a ZTNA proxy (for example an open-source identity-aware proxy) instead of a VPN and require MFA.

## Related topics

- [Firewalls, NGFW, IDS/IPS and proxies](./firewalls-and-ips.md)
- [MACsec and group-based policy](./macsec-and-group-policy.md)
- [Routing security: RPKI, ASPA and BGPsec](./routing-security.md)
- [DDoS and BGP Flowspec](./ddos.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
