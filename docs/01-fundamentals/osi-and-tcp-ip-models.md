---
title: "OSI and TCP/IP models"
description: "Why networks are layered, how the OSI and TCP/IP models compare, and how encapsulation works."
sidebar_position: 6
---

# OSI and TCP/IP models

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

Layering splits the enormous problem of networking into independent pieces: each layer provides a service to the one above and uses the one below. The seven-layer OSI model is the vocabulary engineers use ('a Layer 2 problem'), while the TCP/IP model describes how the Internet is actually built. Encapsulation — wrapping data in successive headers — is the single most useful idea to internalise early.

## Key concepts

- The seven OSI layers
- The TCP/IP (Internet) model
- Encapsulation and PDUs: frame, packet, segment
- Peer-to-peer communication between layers
- Where common protocols and devices sit
- Limits of the models

## Before you start

- None — this is a good place to start.

## Standards and specifications

- [RFC 1122 — Requirements for Internet Hosts — Communication Layers](https://www.rfc-editor.org/rfc/rfc1122)
- [ITU-T X.200 — OSI Basic Reference Model](https://www.itu.int/rec/T-REC-X.200)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 3: OSI model and TCP/IP suite](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Cloudflare Learning — What is the OSI model?](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/) | Article | Beginner | Free |
| [Kurose & Ross — companion site, interactive problems and Wireshark labs](https://gaia.cs.umass.edu/kurose_ross/) | Exercises | Beginner | Free |
| [Computer Networks: A Systems Approach (Peterson & Davie)](https://book.systemsapproach.org/) | Open book | Beginner | Free |

## Bibliography

- [*Computer Networks: A Systems Approach*](https://book.systemsapproach.org/) — Larry Peterson, Bruce Davie (Free)
- *Computer Networking: A Top-Down Approach* — James Kurose, Keith Ross (Paid)
- *Computer Networks* — Andrew Tanenbaum, Nick Feamster, David Wetherall (Paid)

## Hands-on lab

Capture a web page load in Wireshark and label the Ethernet, IP, TCP and HTTP/TLS headers of one packet.

## Related topics

- [Interfaces, cabling and PoE](./interfaces-cabling-and-poe.md)
- [Performance basics: bandwidth, throughput, latency and jitter](./performance-basics.md)
- [Life of a packet](./life-of-a-packet.md)
- [Working with network devices: the CLI](./device-cli.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
