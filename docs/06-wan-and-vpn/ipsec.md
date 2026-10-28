---
title: "IPsec and IKEv2"
description: "Encrypting IP traffic: the IPsec architecture, ESP, IKEv2 negotiation, tunnel and transport mode, policy- and route-based VPNs."
sidebar_position: 3
---

# IPsec and IKEv2

**Level:** Intermediate · **Section:** [WAN, VPNs and Overlays](./index.md)

## Overview

IPsec secures traffic at the IP layer and is the standard for site-to-site VPNs between routers, firewalls and clouds. IKEv2 authenticates the peers and negotiates keys; ESP encrypts and authenticates the packets. Route-based VPNs with virtual tunnel interfaces are far easier to operate than policy-based ones, and every cloud provider supports them.

## Key concepts

- Security associations and SPIs
- AH vs ESP
- Tunnel vs transport mode
- IKEv2 exchanges and authentication (PSK, certificates)
- Policy-based vs route-based VPNs
- NAT traversal
- Cloud VPN gateways

## Before you start

- [GRE tunnels](gre.md)
- [Cryptography basics for networks](../11-security/cryptography-basics.md)

## Standards and specifications

- [RFC 4301 — Security Architecture for the Internet Protocol](https://www.rfc-editor.org/rfc/rfc4301)
- [RFC 4303 — IP Encapsulating Security Payload (ESP)](https://www.rfc-editor.org/rfc/rfc4303)
- [RFC 7296 — Internet Key Exchange Protocol Version 2 (IKEv2)](https://www.rfc-editor.org/rfc/rfc7296)
- [RFC 3948 — UDP Encapsulation of IPsec ESP Packets](https://www.rfc-editor.org/rfc/rfc3948)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [strongSwan documentation](https://docs.strongswan.org/) | Docs | Intermediate | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Build a route-based IPsec VPN between strongSwan and a router (or a cloud VPN gateway on a free tier) and run BGP over the tunnel.

## Related topics

- [WAN technologies](./wan-technologies.md)
- [GRE tunnels](./gre.md)
- [Remote access VPN: TLS VPN and WireGuard](./remote-access-vpn.md)
- [DMVPN and NHRP](./dmvpn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
