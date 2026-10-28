---
title: "Transport and Applications"
description: "TCP, UDP, QUIC, DNS, HTTP, TLS and how content is delivered at scale."
sidebar_position: 0
sidebar_label: Overview
---

# 04 · Transport and Applications

The upper layers that users actually feel: reliable transport and congestion control, naming, the web protocols and the content delivery infrastructure behind them.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [TCP and congestion control](./tcp.md) | Intermediate | How TCP turns an unreliable network into a reliable byte stream, and how congestion control keeps the Internet from collapsing. |
| [UDP](./udp.md) | Beginner | The minimal transport protocol and why real-time media, DNS and QUIC are built on it. |
| [QUIC and HTTP/3](./quic.md) | Advanced | The modern transport built over UDP: integrated TLS, streams without head-of-line blocking and connection migration. |
| [DNS](./dns.md) | Beginner | The Internet's naming system: hierarchy, resolution, record types, caching and DNSSEC. |
| [HTTP](./http.md) | Beginner | The protocol of the web from HTTP/1.1 to HTTP/3: semantics, caching and performance. |
| [TLS](./tls.md) | Intermediate | How TLS secures connections: the handshake, certificates and the PKI, and what changed in TLS 1.3. |
| [CDNs and load balancing](./cdn-and-load-balancing.md) | Intermediate | How large services deliver content fast and stay up: anycast, CDNs, L4 vs L7 load balancing and global traffic management. |

## Suggested order

[UDP](./udp.md) → [DNS](./dns.md) → [HTTP](./http.md) → [TCP and congestion control](./tcp.md) → [TLS](./tls.md) → [CDNs and load balancing](./cdn-and-load-balancing.md) → [QUIC and HTTP/3](./quic.md)

:::tip New to this area?
Check the [learning paths](../00-start-here/learning-paths/index.md) for a guided route that combines this section with others.
:::
