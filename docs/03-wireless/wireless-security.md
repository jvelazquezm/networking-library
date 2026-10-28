---
title: "Wireless security: WPA2, WPA3 and 802.1X"
description: "Authentication and encryption on Wi-Fi: PSK, SAE, Enterprise mode with 802.1X, and common attacks."
sidebar_position: 4
---

# Wireless security: WPA2, WPA3 and 802.1X

**Level:** Beginner · **Section:** [Wireless and IoT](./index.md)

## Overview

Wireless traffic is broadcast to anyone in range, so encryption and authentication are essential. WPA2 introduced AES-CCMP; WPA3 replaced the vulnerable pre-shared key handshake with SAE and added protected management frames and Enhanced Open. Enterprise networks authenticate each user with 802.1X and EAP against a RADIUS server.

## Key concepts

- Open, WEP (historical), WPA, WPA2, WPA3
- Personal (PSK, SAE) vs Enterprise (802.1X)
- 4-way handshake
- EAP methods: EAP-TLS, PEAP
- Protected management frames
- Rogue APs, evil twins and deauthentication attacks

## Before you start

- [WLAN architectures](wlan-architectures.md)

## Standards and specifications

- [IEEE 802.1X — Port-Based Network Access Control](https://1.ieee802.org/)
- [RFC 3748 — Extensible Authentication Protocol (EAP)](https://www.rfc-editor.org/rfc/rfc3748)
- [Wi-Fi Alliance — Wi-Fi security (WPA3)](https://www.wi-fi.org/discover-wi-fi/security)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 57: Wireless security](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |

## Bibliography

- *CWNA Certified Wireless Network Administrator Study Guide* — David D. Coleman, David A. Westcott (Paid)

## Hands-on lab

Set up WPA3-Enterprise with hostapd and FreeRADIUS using EAP-TLS certificates, and capture the authentication exchange.

## Related topics

- [Wi-Fi standards: from 802.11a to Wi-Fi 7](./wifi-standards.md)
- [WLAN architectures](./wlan-architectures.md)
- [WLAN design, site surveys and roaming](./wlan-design.md)
- [IoT and short-range wireless](./iot-wireless.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
