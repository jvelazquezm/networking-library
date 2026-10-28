---
title: "MACsec and group-based policy"
description: "Hop-by-hop Layer 2 encryption with MACsec, and segmentation by identity with group-based policy (Cisco TrustSec, SGTs)."
sidebar_position: 9
---

# MACsec and group-based policy

**Level:** Advanced · **Section:** [Security](./index.md)

## Overview

MACsec encrypts every frame on a link at line rate, protecting data-centre interconnects, campus uplinks and WAN circuits without the overhead of IPsec. Group-based policy separates policy from addressing: endpoints get a group tag at authentication time and policy is expressed between groups, enforced anywhere in the network. Cisco TrustSec is the best-known implementation; group-based policy also exists in VXLAN-GBP.

:::info Vendor notes
TrustSec and SGTs are Cisco technologies; other vendors implement group-based policy with their own tags or with the VXLAN Group Policy Option.
:::

## Key concepts

- MACsec (802.1AE) and MKA
- Switch-to-host and switch-to-switch MACsec
- MACsec over WAN circuits
- Security group tags and SGACLs
- Tag propagation inline and over SXP
- VXLAN Group Policy Option

## Before you start

- [802.1X and network access control](nac-and-8021x.md)

## Standards and specifications

- [IEEE 802.1AE — MAC Security (MACsec)](https://1.ieee802.org/)
- [IEEE 802.1X — Port-Based Network Access Control (MKA)](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [802.1X and network access control](./nac-and-8021x.md)
- [Firewalls, NGFW, IDS/IPS and proxies](./firewalls-and-ips.md)
- [Zero Trust and SASE](./zero-trust-and-sase.md)
- [Routing security: RPKI, ASPA and BGPsec](./routing-security.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
