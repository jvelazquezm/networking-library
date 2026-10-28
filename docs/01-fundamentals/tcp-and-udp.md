---
title: "TCP and UDP"
description: "The two main transport protocols: ports, connections, reliability, flow control and when to use each."
sidebar_position: 13
---

# TCP and UDP

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

TCP gives applications a reliable, ordered byte stream with connection setup, acknowledgements, retransmissions and flow control. UDP gives them a thin wrapper around IP with nothing guaranteed — which is exactly what real-time media, DNS and QUIC want. Port numbers let many applications share one IP address. This page covers the essentials; congestion control and modern transports are in section 10.

## Key concepts

- Ports and sockets
- TCP three-way handshake and teardown
- Sequence numbers, acknowledgements and retransmission
- Flow control and windowing
- UDP datagrams
- Choosing TCP or UDP

## Before you start

- [OSI and TCP/IP models](osi-and-tcp-ip-models.md)

## Standards and specifications

- [RFC 9293 — Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293)
- [RFC 768 — User Datagram Protocol](https://www.rfc-editor.org/rfc/rfc768)
- [IANA — Service name and port number registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 30: TCP and UDP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Kurose & Ross — companion site, interactive problems and Wireshark labs](https://gaia.cs.umass.edu/kurose_ross/) | Exercises | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |

## Bibliography

- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (Paid)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (Paid)

## Hands-on lab

Capture a TCP connection in Wireshark, use 'Follow TCP stream' and identify the handshake, data, ACKs and teardown.

## Related topics

- [Subnetting, VLSM and supernetting](./subnetting.md)
- [ARP and ICMP](./arp-and-icmp.md)
- [IPv6: addressing, NDP and SLAAC](./ipv6.md)
- [IPv6 transition mechanisms](./ipv6-transition.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
