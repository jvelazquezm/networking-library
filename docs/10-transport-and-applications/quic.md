---
title: "QUIC and HTTP/3"
description: "The UDP-based transport with built-in TLS 1.3: streams without head-of-line blocking, 0-RTT and connection migration."
sidebar_position: 3
---

# QUIC and HTTP/3

**Level:** Advanced · **Section:** [Transport and Application Protocols](./index.md)

## Overview

QUIC rebuilds reliable transport in user space over UDP, integrating TLS 1.3 so the handshake takes one round trip (or zero on resumption). Independent streams avoid TCP's head-of-line blocking, connection IDs let sessions survive address changes, and encryption of nearly all headers prevents ossification. HTTP/3 runs on QUIC and is used by a large share of web traffic.

## Key concepts

- Connection setup and 0-RTT
- Streams and flow control
- Loss detection and congestion control
- Connection IDs and migration
- Header protection and ossification
- HTTP/3 and QPACK
- QUIC and middleboxes

## Before you start

- [TCP in depth and congestion control](tcp-in-depth.md)
- [TLS](tls.md)

## Standards and specifications

- [RFC 9000 — QUIC: A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000)
- [RFC 9001 — Using TLS to Secure QUIC](https://www.rfc-editor.org/rfc/rfc9001)
- [RFC 9002 — QUIC Loss Detection and Congestion Control](https://www.rfc-editor.org/rfc/rfc9002)
- [RFC 9114 — HTTP/3](https://www.rfc-editor.org/rfc/rfc9114)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is HTTP/3?](https://www.cloudflare.com/learning/performance/what-is-http3/) | Article | Intermediate | Free |
| [The Illustrated QUIC Connection](https://quic.xargs.org/) | Interactive | Advanced | Free |
| [QUIC working group](https://quicwg.org/) | Standards body | Advanced | Free |

## Bibliography

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Free)

## Hands-on lab

Load a site over HTTP/3 and decrypt the QUIC traffic in Wireshark using an SSLKEYLOGFILE from your browser.

## Related topics

- [TCP in depth and congestion control](./tcp-in-depth.md)
- [SCTP and MPTCP](./sctp-and-mptcp.md)
- [HTTP, WebSockets and gRPC](./http-websockets-grpc.md)
- [TLS](./tls.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
