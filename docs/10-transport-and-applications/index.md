---
title: "Transport and Application Protocols"
description: "TCP in depth, SCTP and MPTCP, QUIC, HTTP, WebSockets and gRPC, TLS, load balancing, CDNs and socket programming."
sidebar_position: 0
sidebar_label: Overview
---

# 10 · Transport and Application Protocols

The upper layers in depth: how transport protocols share the network fairly, the modern protocols that replaced or extended TCP, the web and API protocols that applications speak, how content is delivered at scale, and how to write networked programs yourself.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [TCP in depth and congestion control](./tcp-in-depth.md) | Intermediate | Congestion control algorithms (Reno, CUBIC, BBR), loss recovery, window scaling, ECN and bufferbloat. |
| [SCTP and MPTCP](./sctp-and-mptcp.md) | Advanced | Message-oriented, multi-streamed SCTP (used in mobile signalling) and Multipath TCP (used by smartphones and ATSSS). |
| [QUIC and HTTP/3](./quic.md) | Advanced | The UDP-based transport with built-in TLS 1.3: streams without head-of-line blocking, 0-RTT and connection migration. |
| [HTTP, WebSockets and gRPC](./http-websockets-grpc.md) | Intermediate | The application protocols of the web and of APIs: HTTP semantics, HTTP/1.1 and HTTP/2, WebSockets and gRPC. |
| [TLS](./tls.md) | Intermediate | How TLS secures connections: the TLS 1.3 handshake, certificates and PKI, cipher suites, SNI and ECH, mTLS. |
| [Load balancing and CDNs](./load-balancing-and-cdn.md) | Intermediate | Distributing traffic for scale and availability: L4 vs L7 load balancing, algorithms, health checks, anycast, CDNs and global traffic management. |
| [Socket programming](./socket-programming.md) | Intermediate | Writing networked programs: the sockets API, clients and servers, TCP and UDP, blocking vs non-blocking I/O. |

## Suggested reading order

1. [TCP in depth and congestion control](./tcp-in-depth.md) — Intermediate
2. [HTTP, WebSockets and gRPC](./http-websockets-grpc.md) — Intermediate
3. [TLS](./tls.md) — Intermediate
4. [Load balancing and CDNs](./load-balancing-and-cdn.md) — Intermediate
5. [Socket programming](./socket-programming.md) — Intermediate
6. [SCTP and MPTCP](./sctp-and-mptcp.md) — Advanced
7. [QUIC and HTTP/3](./quic.md) — Advanced

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
