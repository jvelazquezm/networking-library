---
title: "Ethernet switching and MAC learning"
description: "Ethernet frames, MAC addresses, MAC learning, flooding and forwarding."
sidebar_position: 1
---

# Ethernet switching and MAC learning

**Level:** Beginner · **Section:** [Switching and Ethernet](./index.md)

## Overview

A switch learns which MAC addresses live behind which port by reading source addresses, forwards known unicast frames only where they need to go, and floods broadcast, multicast and unknown unicast traffic. That simple algorithm, done in hardware at line rate, is the heart of every LAN. Understanding the frame format and the MAC table explains most Layer 2 behaviour you will ever troubleshoot.

## Key concepts

- Ethernet II frame format
- MAC addresses: OUI, unicast, multicast, broadcast
- MAC learning, aging and the MAC table
- Flooding of BUM traffic
- Collision and broadcast domains
- Store-and-forward vs cut-through

## Before you start

- [OSI and TCP/IP models](../01-fundamentals/osi-and-tcp-ip-models.md)

## Standards and specifications

- [IEEE 802.3 — Ethernet](https://www.ieee802.org/3/)
- [IEEE 802.1Q — Bridges and Bridged Networks](https://1.ieee802.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 5–6: Ethernet LAN switching](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |
| [Practical Networking — CCNA topic index](https://www.practicalnetworking.net/index/ccna/) | Articles | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Acing the CCNA Exam (Volumes 1 and 2)* — Jeremy McDowell (Paid)

## Hands-on lab

Connect three switches in Packet Tracer, generate traffic between hosts and watch the MAC tables populate and age out.

## Related topics

- [VLANs, trunking and inter-VLAN routing](./vlans.md)
- [DTP and VTP](./dtp-and-vtp.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
