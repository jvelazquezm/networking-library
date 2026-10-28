---
title: "NAT and DHCP"
description: "How hosts get their configuration automatically and how address translation lets private networks reach the Internet."
sidebar_position: 6
---

# NAT and DHCP

**Level:** Beginner · **Section:** [Fundamentals](./index.md)

## Overview

How hosts get their configuration automatically and how address translation lets private networks reach the Internet.

## Key concepts

- DHCP DORA exchange
- Leases, options and relays
- Static NAT, dynamic NAT and PAT
- Carrier-grade NAT
- NAT traversal problems

## Before you start

- None beyond the earlier topics in this section.

## Standards and specifications

- [RFC 2131 — Dynamic Host Configuration Protocol](https://www.rfc-editor.org/rfc/rfc2131)
- [RFC 8415 — DHCP for IPv6 (DHCPv6)](https://www.rfc-editor.org/rfc/rfc8415)
- [RFC 3022 — Traditional IP Network Address Translator](https://www.rfc-editor.org/rfc/rfc3022)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning Center](https://www.cloudflare.com/learning/) | Articles | Beginner | Free |

## Hands-on lab

Configure a DHCP server and a PAT gateway on Linux and trace a connection through the translation table (conntrack).

## Related topics

- [Network models: OSI and TCP/IP](./network-models.md)
- [Physical layer and media](./physical-layer.md)
- [IPv4 addressing and subnetting](./ipv4-addressing.md)
- [IPv6](./ipv6.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
