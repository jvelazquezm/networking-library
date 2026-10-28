---
title: "802.1X and network access control"
description: "Authenticating devices and users before they get network access: 802.1X, EAP, MAB, dynamic VLANs and posture."
sidebar_position: 7
---

# 802.1X and network access control

**Level:** Intermediate · **Section:** [Security](./index.md)

## Overview

Network access control decides who and what may connect, and where they land. 802.1X authenticates users or devices through the switch or access point to a RADIUS server using EAP; MAC Authentication Bypass covers devices that cannot do 802.1X; the RADIUS server can return VLANs, ACLs or security group tags. Posture checks add device health to the decision.

## Key concepts

- Supplicant, authenticator, authentication server
- EAP methods (EAP-TLS, PEAP, TEAP)
- MAC Authentication Bypass
- Dynamic VLANs and downloadable ACLs
- Change of Authorization
- Posture and profiling

## Before you start

- [Device hardening, AAA and CoPP](device-hardening-and-aaa.md)
- [VLANs, trunking and inter-VLAN routing](../02-switching/vlans.md)

## Standards and specifications

- [IEEE 802.1X — Port-Based Network Access Control](https://1.ieee802.org/)
- [RFC 3580 — IEEE 802.1X RADIUS Usage Guidelines](https://www.rfc-editor.org/rfc/rfc3580)
- [RFC 5176 — Dynamic Authorization Extensions to RADIUS](https://www.rfc-editor.org/rfc/rfc5176)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [FreeRADIUS documentation](https://www.freeradius.org/documentation/) | Docs | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Configure wired 802.1X with EAP-TLS against FreeRADIUS and return a VLAN based on the certificate's group.

## Related topics

- [Layer 2 security](./layer2-security.md)
- [IPv6 first-hop security and uRPF](./ipv6-security.md)
- [Firewalls, NGFW, IDS/IPS and proxies](./firewalls-and-ips.md)
- [MACsec and group-based policy](./macsec-and-group-policy.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
