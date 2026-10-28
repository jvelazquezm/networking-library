---
title: "Socket programming"
description: "Writing networked programs: the sockets API, clients and servers, TCP and UDP, blocking vs non-blocking I/O."
sidebar_position: 7
---

# Socket programming

**Level:** Intermediate · **Section:** [Transport and Application Protocols](./index.md)

## Overview

Every networked application is built on sockets. Writing a few small clients and servers — an echo server, a UDP probe, a simple HTTP client — teaches more about TCP, UDP and ports than any diagram, and makes you a much better troubleshooter of application problems.

## Key concepts

- Sockets, addresses and ports
- TCP client and server lifecycle
- UDP send and receive
- Blocking, non-blocking and event-driven I/O
- IPv4/IPv6 dual-stack sockets
- Common pitfalls: partial reads, timeouts

## Before you start

- [TCP and UDP](../01-fundamentals/tcp-and-udp.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/) | Open book | Intermediate | Free |
| [Python docs — socket module](https://docs.python.org/3/library/socket.html) | Docs | Intermediate | Free |
| [Stanford CS144 — Introduction to Computer Networking](https://cs144.github.io/) | Course | Intermediate | Free |

## Bibliography

- [*Beej's Guide to Network Programming*](https://beej.us/guide/bgnet/) — Brian “Beej” Hall (Free)

## Hands-on lab

Write a TCP echo server and a UDP latency probe in Python, run them over IPv4 and IPv6, and capture both in Wireshark.

## Related topics

- [TLS](./tls.md)
- [Load balancing and CDNs](./load-balancing-and-cdn.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
