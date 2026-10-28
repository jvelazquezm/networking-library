---
title: "MST and spanning tree protection"
description: "Multiple Spanning Tree regions and instances, and the features that keep spanning tree safe: Root Guard, BPDU Guard, Loop Guard, BPDU Filter."
sidebar_position: 6
---

# MST and spanning tree protection

**Level:** Intermediate · **Section:** [Switching and Ethernet](./index.md)

## Overview

MSTP maps many VLANs onto a few spanning tree instances, scaling far better than per-VLAN STP and interoperating across vendors. Protection features stop accidents and attacks: BPDU Guard shuts edge ports that hear BPDUs, Root Guard keeps the root where you designed it, Loop Guard and UDLD catch unidirectional links. These are standard topics at the professional level.

## Key concepts

- MST regions, instances and the IST/CIST
- Mapping VLANs to instances
- Interoperability with RSTP and PVST+
- BPDU Guard and BPDU Filter
- Root Guard
- Loop Guard and UDLD
- STP tuning

## Before you start

- [Spanning Tree: STP, RSTP and Rapid PVST+](spanning-tree.md)

## Standards and specifications

- [IEEE 802.1Q — Bridges and Bridged Networks (MSTP)](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Design an MST region with two instances to load-share VLANs across two distribution switches and verify with show commands.

## Related topics

- [Discovery protocols: LLDP and CDP](./lldp-and-cdp.md)
- [Spanning Tree: STP, RSTP and Rapid PVST+](./spanning-tree.md)
- [Link aggregation: LACP and EtherChannel](./link-aggregation.md)
- [MLAG, vPC and EVPN multihoming](./mlag-and-multihoming.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
