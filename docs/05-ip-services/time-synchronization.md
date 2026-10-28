---
title: "Time: NTP, NTS and PTP"
description: "Why accurate time matters and how NTP, Network Time Security and the Precision Time Protocol deliver it."
sidebar_position: 4
---

# Time: NTP, NTS and PTP

**Level:** Beginner · **Section:** [IP Services](./index.md)

## Overview

Logs, certificates, authentication and distributed systems all depend on correct time. NTP synchronises clocks to milliseconds over ordinary networks using a hierarchy of strata; Network Time Security adds authentication. PTP (IEEE 1588) reaches sub-microsecond accuracy with hardware timestamping and is essential in mobile networks, finance and industry.

## Key concepts

- Why time matters
- NTP stratum hierarchy
- Client, server and peer modes
- NTP authentication and NTS
- PTP: grandmaster, boundary and transparent clocks
- Hardware timestamping
- Telecom PTP profiles (pointer to Service Provider section)

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

- [RFC 5905 — Network Time Protocol Version 4](https://www.rfc-editor.org/rfc/rfc5905)
- [RFC 8915 — Network Time Security for NTP](https://www.rfc-editor.org/rfc/rfc8915)
- [IEEE 1588 — Precision Time Protocol](https://standards.ieee.org/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 37: NTP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [NTP Pool Project](https://www.ntppool.org/) | Service | Beginner | Free |
| [Chrony documentation](https://chrony-project.org/documentation.html) | Docs | Intermediate | Free |
| [LinuxPTP project](https://linuxptp.sourceforge.net/) | Open source | Advanced | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Configure chrony with NTS against a public NTS server, then run linuxptp between two hosts and compare the achieved offsets.

## Related topics

- [DNS, DNSSEC, DoT and DoH](./dns.md)
- [NAT and PAT](./nat.md)
- [Quality of Service (QoS)](./qos.md)
- [Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP](./device-management.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
