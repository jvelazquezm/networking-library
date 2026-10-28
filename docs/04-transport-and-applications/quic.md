---
title: "QUIC and HTTP/3"
description: "The modern transport built over UDP: integrated TLS, streams without head-of-line blocking and connection migration."
sidebar_position: 3
---

# QUIC and HTTP/3

**Level:** Advanced · **Section:** [Transport and Applications](./index.md)

## Overview

The modern transport built over UDP: integrated TLS, streams without head-of-line blocking and connection migration.

## Key concepts

- Connection setup and 0-RTT
- Streams and multiplexing
- Loss recovery
- Connection migration
- HTTP/3 mapping

## Before you start

- [TCP and congestion control](tcp.md)
- [TLS](tls.md)

## Standards and specifications

- [RFC 9000 — QUIC: A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000)
- [RFC 9001 — Using TLS to Secure QUIC](https://www.rfc-editor.org/rfc/rfc9001)
- [RFC 9002 — QUIC Loss Detection and Congestion Control](https://www.rfc-editor.org/rfc/rfc9002)
- [RFC 9114 — HTTP/3](https://www.rfc-editor.org/rfc/rfc9114)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning Center](https://www.cloudflare.com/learning/) | Articles | Beginner | Free |
| [High Performance Browser Networking (Ilya Grigorik)](https://hpbn.co/) | Book (online) | Intermediate | Free |

## Hands-on lab

Load a site over HTTP/3 and decrypt the QUIC traffic in Wireshark using an SSLKEYLOGFILE.

## Related topics

- [TCP and congestion control](./tcp.md)
- [UDP](./udp.md)
- [DNS](./dns.md)
- [HTTP](./http.md)

:::note Help grow this page
This page is a starting point. Add resources, explanations, diagrams or labs by following the [contribution guide](../00-start-here/contributing.md).
:::
