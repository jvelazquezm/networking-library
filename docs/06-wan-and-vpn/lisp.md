---
title: "LISP"
description: "Locator/ID Separation Protocol: separating who a host is from where it is, and its role in campus fabrics."
sidebar_position: 7
---

# LISP

**Level:** Advanced · **Section:** [WAN, VPNs and Overlays](./index.md)

## Overview

LISP splits an IP address's two roles — identity (EID) and location (RLOC) — and uses a mapping system to look up where an endpoint currently is. That makes mobility, multihoming and multi-tenancy easier and is the control plane of Cisco SD-Access. It is now an IETF standard and appears in ENCOR and CCIE Enterprise.

## Key concepts

- EIDs and RLOCs
- Map-server and map-resolver
- Ingress and egress tunnel routers
- Map-cache and map-request
- Host mobility
- LISP in SD-Access

## Before you start

- [GRE tunnels](gre.md)

## Standards and specifications

- [RFC 9300 — The Locator/ID Separation Protocol (LISP)](https://www.rfc-editor.org/rfc/rfc9300)
- [RFC 9301 — LISP Control Plane](https://www.rfc-editor.org/rfc/rfc9301)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [DMVPN and NHRP](./dmvpn.md)
- [SD-WAN](./sd-wan.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
