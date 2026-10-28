---
title: "TCP and congestion control"
description: "How TCP turns an unreliable network into a reliable byte stream, and how congestion control keeps the Internet from collapsing."
sidebar_position: 1
---

# TCP and congestion control

**Level:** Intermediate · **Section:** [Transport and Applications](./index.md)

## Overview

How TCP turns an unreliable network into a reliable byte stream, and how congestion control keeps the Internet from collapsing.

## Key concepts

- Three-way handshake and teardown
- Sequence numbers and acknowledgements
- Flow control and windows
- Congestion control (Reno, CUBIC, BBR)
- Bufferbloat

## Before you start

- [Network models: OSI and TCP/IP](../01-fundamentals/network-models.md)

## Standards and specifications

- [RFC 9293 — Transmission Control Protocol (TCP)](https://www.rfc-editor.org/rfc/rfc9293)
- [RFC 5681 — TCP Congestion Control](https://www.rfc-editor.org/rfc/rfc5681)
- [RFC 9438 — CUBIC for Fast and Long-Distance Networks](https://www.rfc-editor.org/rfc/rfc9438)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Book (open) | Beginner | Free |
| [Stanford CS144 — Introduction to Computer Networking](https://cs144.github.io/) | Course | Intermediate | Free |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Book (online) | Intermediate | Free |

## Hands-on lab

Use iperf3 and tc netem to add delay and loss, and plot how throughput changes with CUBIC vs BBR.

## Related topics

- [UDP](./udp.md)
- [QUIC and HTTP/3](./quic.md)
- [DNS](./dns.md)
- [HTTP](./http.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
