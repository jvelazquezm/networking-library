---
title: "SD-WAN"
description: "Software-defined WAN: centralised control, transport independence, application-aware routing and the main vendor architectures."
sidebar_position: 6
---

# SD-WAN

**Level:** Intermediate · **Section:** [WAN, VPNs and Overlays](./index.md)

## Overview

SD-WAN separates the WAN's control and management from its many transports. Edge devices build encrypted overlays over MPLS, broadband and 5G; a central controller distributes routing and policy; traffic is steered per application according to measured loss, latency and jitter. Architectures differ between vendors (Cisco Catalyst SD-WAN, Fortinet, VMware/Velocloud, Juniper, Huawei), but the concepts are common.

## Key concepts

- Underlay vs overlay
- Orchestrator, controller and edge roles
- Zero-touch provisioning
- Application-aware routing and SLA probes
- Centralised vs local policy
- Direct Internet access and cloud on-ramps
- SD-WAN and SASE

## Before you start

- [WAN technologies](wan-technologies.md)
- [IPsec and IKEv2](ipsec.md)

## Standards and specifications

- [MEF 70 — SD-WAN service attributes and services](https://www.mef.net/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Labs | Intermediate | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Use a free SD-WAN sandbox (for example Cisco DevNet) to explore controller policy and watch application-aware routing react to a degraded link.

## Related topics

- [Remote access VPN: TLS VPN and WireGuard](./remote-access-vpn.md)
- [DMVPN and NHRP](./dmvpn.md)
- [LISP](./lisp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
