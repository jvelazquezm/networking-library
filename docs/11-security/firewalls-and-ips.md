---
title: "Firewalls, NGFW, IDS/IPS and proxies"
description: "Stateless and stateful filtering, next-generation firewalls, intrusion detection and prevention, and web proxies."
sidebar_position: 8
---

# Firewalls, NGFW, IDS/IPS and proxies

**Level:** Intermediate · **Section:** [Security](./index.md)

## Overview

Firewalls enforce policy between security zones. Stateful firewalls track connections; next-generation firewalls identify applications and users and integrate IPS; intrusion detection systems watch traffic for known attacks and anomalies; proxies terminate and inspect connections on behalf of clients. Placement, zone design and rule hygiene matter more than any single product feature.

## Key concepts

- Packet filters vs stateful inspection
- Zones and security policies
- NGFW: application and user awareness
- IDS vs IPS, signatures and anomaly detection
- Forward and reverse proxies
- TLS inspection trade-offs
- Rule base hygiene

## Before you start

- [Access control lists](acls.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Suricata documentation](https://docs.suricata.io/) | Docs | Intermediate | Free |
| [OPNsense documentation](https://docs.opnsense.org/) | Docs | Intermediate | Free |
| [nftables wiki](https://wiki.nftables.org/) | Docs | Intermediate | Free |
| [Zeek documentation](https://docs.zeek.org/) | Docs | Advanced | Free |

## Bibliography

- *The Practice of Network Security Monitoring* — Richard Bejtlich (Paid)

## Hands-on lab

Build an OPNsense or nftables firewall with three zones, add Suricata in IPS mode and test it with nmap and a known exploit signature.

## Related topics

- [IPv6 first-hop security and uRPF](./ipv6-security.md)
- [802.1X and network access control](./nac-and-8021x.md)
- [MACsec and group-based policy](./macsec-and-group-policy.md)
- [Zero Trust and SASE](./zero-trust-and-sase.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
