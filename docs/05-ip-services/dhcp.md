---
title: "DHCP and DHCPv6"
description: "Automatic host configuration: the DHCP exchange, options, relays, DHCPv6 and how to troubleshoot it."
sidebar_position: 1
---

# DHCP and DHCPv6

**Level:** Beginner · **Section:** [IP Services](./index.md)

## Overview

DHCP hands hosts an address, mask, gateway, DNS servers and other options so nobody configures them by hand. Clients broadcast for a server, so routers act as relays to reach central servers. DHCPv6 complements SLAAC in IPv6 networks. Troubleshooting DHCP — scope exhaustion, missing relays, rogue servers — is a skill the new CCNA v2.0 explicitly tests.

## Key concepts

- DORA exchange: Discover, Offer, Request, Acknowledge
- Leases and renewal
- Common options (router, DNS, domain)
- DHCP relay (ip helper)
- DHCPv6 stateful and stateless
- Prefix delegation
- Troubleshooting client, relay and server

## Before you start

- [IPv4 addressing and the IPv4 header](../01-fundamentals/ipv4-addressing.md)

## Standards and specifications

- [RFC 2131 — Dynamic Host Configuration Protocol](https://www.rfc-editor.org/rfc/rfc2131)
- [RFC 2132 — DHCP Options and BOOTP Vendor Extensions](https://www.rfc-editor.org/rfc/rfc2132)
- [RFC 8415 — Dynamic Host Configuration Protocol for IPv6 (DHCPv6)](https://www.rfc-editor.org/rfc/rfc8415)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 39: DHCP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Captures | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (Paid)

## Hands-on lab

Run a DHCP server (Kea or dnsmasq) on one subnet and a relay on a router to serve a second subnet; capture the relayed exchange.

## Related topics

- [DNS, DNSSEC, DoT and DoH](./dns.md)
- [NAT and PAT](./nat.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
