---
title: "Remote access VPN: TLS VPN and WireGuard"
description: "Connecting individual users: IPsec and TLS-based client VPNs, WireGuard, and how they compare with ZTNA."
sidebar_position: 4
---

# Remote access VPN: TLS VPN and WireGuard

**Level:** Intermediate · **Section:** [WAN, VPNs and Overlays](./index.md)

## Overview

Remote access VPNs bring a laptop or phone into the corporate network. Traditional options are IPsec (IKEv2) clients and TLS/DTLS-based 'SSL VPNs' that traverse almost any firewall. WireGuard is a modern, minimal protocol built into Linux and widely used for both remote access and site-to-site links. Zero Trust network access is increasingly replacing full-tunnel VPNs.

## Key concepts

- Full tunnel vs split tunnel
- IKEv2 remote access
- TLS/DTLS VPNs
- WireGuard keys and peers
- Authentication with MFA and certificates
- VPN vs ZTNA

## Before you start

- [IPsec and IKEv2](ipsec.md)

## Standards and specifications

- [WireGuard — protocol and cryptography](https://www.wireguard.com/protocol/)
- [WireGuard whitepaper (Jason A. Donenfeld)](https://www.wireguard.com/papers/wireguard.pdf)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [WireGuard quick start](https://www.wireguard.com/quickstart/) | Docs | Beginner | Free |
| [OpenVPN community documentation](https://openvpn.net/community-resources/) | Docs | Intermediate | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Set up a WireGuard server and connect a laptop and a phone, then compare split and full tunnel routing.

## Related topics

- [GRE tunnels](./gre.md)
- [IPsec and IKEv2](./ipsec.md)
- [DMVPN and NHRP](./dmvpn.md)
- [SD-WAN](./sd-wan.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
