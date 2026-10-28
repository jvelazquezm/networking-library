---
title: "Load balancing and CDNs"
description: "Distributing traffic for scale and availability: L4 vs L7 load balancing, algorithms, health checks, anycast, CDNs and global traffic management."
sidebar_position: 6
---

# Load balancing and CDNs

**Level:** Intermediate · **Section:** [Transport and Application Protocols](./index.md)

## Overview

Large services spread traffic across many servers and many locations. Load balancers work at Layer 4 (connections) or Layer 7 (requests), choosing backends with algorithms such as round robin, least connections or consistent hashing, and removing failed servers with health checks. CDNs cache content at the edge and use anycast and DNS steering to send users to the nearest point of presence.

## Key concepts

- L4 vs L7 load balancing
- Algorithms: round robin, least connections, hashing
- Health checks and session persistence
- Direct server return and anycast
- Reverse proxies and API gateways
- CDN caching and edge compute
- DNS-based global load balancing

## Before you start

- [HTTP, WebSockets and gRPC](http-websockets-grpc.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is load balancing?](https://www.cloudflare.com/learning/performance/what-is-load-balancing/) | Article | Beginner | Free |
| [Cloudflare Learning — What is a CDN?](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) | Article | Beginner | Free |
| [HAProxy documentation](https://docs.haproxy.org/) | Docs | Intermediate | Free |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Open book | Intermediate | Free |

## Bibliography

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Free)

## Hands-on lab

Put HAProxy in front of three web servers, test different algorithms and kill one server to watch health checks remove it.

## Related topics

- [HTTP, WebSockets and gRPC](./http-websockets-grpc.md)
- [TLS](./tls.md)
- [Socket programming](./socket-programming.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
