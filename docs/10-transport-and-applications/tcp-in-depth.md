---
title: "TCP in depth and congestion control"
description: "Congestion control algorithms (Reno, CUBIC, BBR), loss recovery, window scaling, ECN and bufferbloat."
sidebar_position: 1
---

# TCP in depth and congestion control

**Level:** Intermediate · **Section:** [Transport and Application Protocols](./index.md)

## Overview

TCP's congestion control is what keeps the Internet from collapsing. Loss-based algorithms (Reno, CUBIC) probe for bandwidth until packets drop; delay- and model-based algorithms (BBR) estimate bottleneck bandwidth and RTT. Selective acknowledgements, window scaling and ECN improve performance; oversized buffers create bufferbloat. Understanding these explains most 'the network is slow' complaints.

## Key concepts

- Slow start and congestion avoidance
- Fast retransmit and fast recovery
- SACK and window scaling
- Reno, CUBIC and BBR
- ECN and AQM (CoDel, FQ-CoDel)
- Bufferbloat
- Tuning for long fat networks

## Before you start

- [TCP and UDP](../01-fundamentals/tcp-and-udp.md)

## Standards and specifications

- [RFC 5681 — TCP Congestion Control](https://www.rfc-editor.org/rfc/rfc5681)
- [RFC 9438 — CUBIC for Fast and Long-Distance Networks](https://www.rfc-editor.org/rfc/rfc9438)
- [RFC 2018 — TCP Selective Acknowledgment Options](https://www.rfc-editor.org/rfc/rfc2018)
- [RFC 7323 — TCP Extensions for High Performance](https://www.rfc-editor.org/rfc/rfc7323)
- [RFC 8290 — The FQ-CoDel Packet Scheduler and AQM](https://www.rfc-editor.org/rfc/rfc8290)
- [IETF draft — BBR Congestion Control](https://datatracker.ietf.org/doc/draft-ietf-ccwg-bbr/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [TCP Congestion Control: A Systems Approach](https://tcpcc.systemsapproach.org/) | Open book | Intermediate | Free |
| [Stanford CS144 — Introduction to Computer Networking](https://cs144.github.io/) | Course | Intermediate | Free |
| [Bufferbloat.net](https://www.bufferbloat.net/projects/) | Articles | Intermediate | Free |

## Bibliography

- [*TCP Congestion Control: A Systems Approach*](https://tcpcc.systemsapproach.org/) — Larry Peterson, Lawrence Brakmo, Bruce Davie (Free)
- *TCP/IP Illustrated, Volume 1: The Protocols* — Kevin Fall, W. Richard Stevens (Paid)

## Hands-on lab

Use iperf3 and tc netem to add delay and loss, and compare throughput with CUBIC and BBR (sysctl net.ipv4.tcp_congestion_control).

## Related topics

- [SCTP and MPTCP](./sctp-and-mptcp.md)
- [QUIC and HTTP/3](./quic.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
