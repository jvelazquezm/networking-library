---
title: "Performance basics: bandwidth, throughput, latency and jitter"
description: "The metrics that describe how a network performs and why they are often confused."
sidebar_position: 5
---

# Performance basics: bandwidth, throughput, latency and jitter

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

Bandwidth is the capacity of a link; throughput is what you actually get; latency is how long a bit takes to arrive and jitter is how much that delay varies. Applications care about different metrics: file transfers want throughput, voice wants low jitter, gaming and trading want low latency. Understanding how they interact — including queuing delay and bufferbloat — is the base for QoS, TCP tuning and capacity planning.

## Key concepts

- Bandwidth vs throughput vs goodput
- Propagation, serialisation, queuing and processing delay
- Round-trip time
- Jitter and packet loss
- Bandwidth-delay product
- Bufferbloat

## Before you start

- None — this is a good place to start.

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Cloudflare Learning — What is latency?](https://www.cloudflare.com/learning/performance/glossary/what-is-latency/) | Article | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |
| [Bufferbloat.net](https://www.bufferbloat.net/projects/) | Articles | Intermediate | Free |

## Bibliography

- [*High Performance Browser Networking*](https://hpbn.co/) — Ilya Grigorik (Free)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (Paid)

## Hands-on lab

Measure latency and throughput to a nearby and a distant server with ping and iperf3, then compute the bandwidth-delay product of each path.

## Related topics

- [Networking devices and their roles](./networking-devices.md)
- [Interfaces, cabling and PoE](./interfaces-cabling-and-poe.md)
- [OSI and TCP/IP models](./osi-and-tcp-ip-models.md)
- [Life of a packet](./life-of-a-packet.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
