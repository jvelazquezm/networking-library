---
title: "CDNs and load balancing"
description: "How large services deliver content fast and stay up: anycast, CDNs, L4 vs L7 load balancing and global traffic management."
sidebar_position: 7
---

# CDNs and load balancing

**Level:** Intermediate · **Section:** [Transport and Applications](./index.md)

## Overview

How large services deliver content fast and stay up: anycast, CDNs, L4 vs L7 load balancing and global traffic management.

## Key concepts

- Anycast
- Edge caching
- L4 vs L7 load balancers
- Health checks
- GSLB and DNS-based steering

## Before you start

- [HTTP](http.md)
- [DNS](dns.md)

## Standards and specifications

_No single defining standard — this topic is mostly about practice and implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning Center](https://www.cloudflare.com/learning/) | Articles | Beginner | Free |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Book (online) | Intermediate | Free |

## Hands-on lab

Put HAProxy in front of two web servers, then kill one and watch health checks remove it.

## Related topics

- [TCP and congestion control](./tcp.md)
- [UDP](./udp.md)
- [QUIC and HTTP/3](./quic.md)
- [DNS](./dns.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
