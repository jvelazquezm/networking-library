---
title: "SCTP and MPTCP"
description: "Message-oriented, multi-streamed SCTP (used in mobile signalling) and Multipath TCP (used by smartphones and ATSSS)."
sidebar_position: 2
---

# SCTP and MPTCP

**Level:** Advanced · **Section:** [Transport and Application Protocols](./index.md)

## Overview

SCTP offers reliable, message-oriented transport with multiple streams and multihoming; it never took off on the Internet but carries mobile signalling such as NGAP and S1AP and Diameter. Multipath TCP lets one connection use several paths at once — Wi-Fi and cellular — and is used by smartphones and by 5G's ATSSS feature.

## Key concepts

- SCTP associations, streams and chunks
- SCTP multihoming
- SCTP in 4G/5G signalling
- MPTCP subflows and path managers
- MPTCP in Linux
- ATSSS in 5G

## Before you start

- [TCP in depth and congestion control](tcp-in-depth.md)

## Standards and specifications

- [RFC 9260 — Stream Control Transmission Protocol](https://www.rfc-editor.org/rfc/rfc9260)
- [RFC 8684 — TCP Extensions for Multipath Operation with Multiple Addresses](https://www.rfc-editor.org/rfc/rfc8684)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Multipath TCP for Linux — documentation](https://www.mptcp.dev/) | Docs | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Enable MPTCP on two Linux hosts with two paths between them and watch subflows in ss and Wireshark while you fail one path.

## Related topics

- [TCP in depth and congestion control](./tcp-in-depth.md)
- [QUIC and HTTP/3](./quic.md)
- [HTTP, WebSockets and gRPC](./http-websockets-grpc.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
