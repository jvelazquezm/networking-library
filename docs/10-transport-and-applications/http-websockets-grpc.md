---
title: "HTTP, WebSockets and gRPC"
description: "The application protocols of the web and of APIs: HTTP semantics, HTTP/1.1 and HTTP/2, WebSockets and gRPC."
sidebar_position: 4
---

# HTTP, WebSockets and gRPC

**Level:** Intermediate · **Section:** [Transport and Application Protocols](./index.md)

## Overview

HTTP's semantics — methods, status codes, headers, caching — are shared across HTTP/1.1, HTTP/2 and HTTP/3. HTTP/2 multiplexes requests over one connection; WebSockets upgrade a connection for full-duplex messaging; gRPC uses HTTP/2 and Protocol Buffers for efficient RPC and powers gNMI telemetry and many cloud-native systems, including parts of 5G and Kubernetes.

## Key concepts

- Methods, status codes and headers
- Caching and conditional requests
- HTTP/1.1 vs HTTP/2 multiplexing
- Proxies and reverse proxies
- WebSockets upgrade and framing
- gRPC and Protocol Buffers
- REST vs RPC

## Before you start

- [TCP and UDP](../01-fundamentals/tcp-and-udp.md)

## Standards and specifications

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
- [RFC 9111 — HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111)
- [RFC 9113 — HTTP/2](https://www.rfc-editor.org/rfc/rfc9113)
- [RFC 6455 — The WebSocket Protocol](https://www.rfc-editor.org/rfc/rfc6455)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [MDN Web Docs — HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) | Docs | Intermediate | Free |
| [MDN Web Docs — The WebSockets API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) | Docs | Intermediate | Free |
| [gRPC documentation](https://grpc.io/docs/) | Docs | Intermediate | Free |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Open book | Intermediate | Free |

## Bibliography

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Free)

## Hands-on lab

Compare the same page over HTTP/1.1 and HTTP/2 in your browser's developer tools, then write a tiny gRPC service and capture it.

## Related topics

- [SCTP and MPTCP](./sctp-and-mptcp.md)
- [QUIC and HTTP/3](./quic.md)
- [TLS](./tls.md)
- [Load balancing and CDNs](./load-balancing-and-cdn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
