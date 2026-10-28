---
title: "Device hardening, AAA and CoPP"
description: "Securing network devices: passwords and privilege, AAA with RADIUS and TACACS+, management plane protection and Control Plane Policing."
sidebar_position: 3
---

# Device hardening, AAA and CoPP

**Level:** Beginner · **Section:** [Security](./index.md)

## Overview

A compromised router compromises the network. Hardening covers strong local credentials and password policy, centralised AAA with TACACS+ or RADIUS, MFA for administrators, disabling unused services, restricting management access, and protecting the control plane from floods with CoPP. Vendors publish hardening guides that are worth following line by line.

## Key concepts

- Local users, privilege levels and password hashing
- Password policy, MFA and certificates
- AAA: authentication, authorisation, accounting
- TACACS+ vs RADIUS
- Management plane restrictions
- Control Plane Policing / protection
- Vendor hardening guides

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

- [RFC 8907 — The TACACS+ Protocol](https://www.rfc-editor.org/rfc/rfc8907)
- [RFC 2865 — Remote Authentication Dial In User Service (RADIUS)](https://www.rfc-editor.org/rfc/rfc2865)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 4 and Day 48: Basic device security; security fundamentals](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [FreeRADIUS documentation](https://www.freeradius.org/documentation/) | Docs | Intermediate | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Configure a router to authenticate administrators against a TACACS+ or FreeRADIUS server with per-command authorisation and a local fallback.

## Related topics

- [Security concepts and programs](./security-concepts.md)
- [Cryptography basics for networks](./cryptography-basics.md)
- [Access control lists](./acls.md)
- [Layer 2 security](./layer2-security.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
