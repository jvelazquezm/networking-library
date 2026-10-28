---
title: "Campus fabrics: SD-Access, LISP and VXLAN"
description: "Bringing fabric concepts to the campus: overlay with VXLAN, control plane with LISP or EVPN, and group-based policy."
sidebar_position: 6
---

# Campus fabrics: SD-Access, LISP and VXLAN

**Level:** Intermediate · **Section:** [Data Center, Virtualization and Cloud](./index.md)

## Overview

Campus fabrics replace VLAN sprawl and spanning tree with a routed underlay and an overlay that follows users wherever they connect. Cisco SD-Access uses LISP as the control plane, VXLAN as the data plane and Security Group Tags for policy, orchestrated by Catalyst Center; other vendors build campus fabrics with EVPN-VXLAN. The concepts are tested in ENCOR and CCIE Enterprise.

:::info Vendor notes
SD-Access is Cisco's implementation. Juniper, Arista, Aruba and Huawei offer EVPN-VXLAN-based campus fabrics.
:::

## Key concepts

- Underlay and overlay in the campus
- Fabric edge, border and control-plane nodes
- LISP-based vs EVPN-based campus fabrics
- Macro- and micro-segmentation
- Group-based policy (SGT)
- Controller-driven provisioning

## Before you start

- [VXLAN, Geneve and EVPN](vxlan-evpn.md)
- [LISP](../06-wan-and-vpn/lisp.md)

## Standards and specifications

- [RFC 9300 — The Locator/ID Separation Protocol (LISP)](https://www.rfc-editor.org/rfc/rfc9300)
- [RFC 7348 — VXLAN](https://www.rfc-editor.org/rfc/rfc7348)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Labs | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

_No lab yet._ Have an idea for a hands-on exercise? [Contributions are welcome](../00-start-here/contributing.md).

## Related topics

- [Data center fabrics: leaf-spine and BGP in the DC](./dc-fabrics.md)
- [VXLAN, Geneve and EVPN](./vxlan-evpn.md)
- [AI data center networking: RoCEv2, InfiniBand and Ultra Ethernet](./ai-networking.md)
- [Data plane acceleration: DPDK, SR-IOV, DPUs, eBPF/XDP and P4](./data-plane-acceleration.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
