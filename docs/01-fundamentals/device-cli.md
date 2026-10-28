---
title: "Working with network devices: the CLI"
description: "Navigating and configuring network operating systems: Cisco IOS, Junos, Arista EOS and Nokia SR OS / SR Linux."
sidebar_position: 8
---

# Working with network devices: the CLI

**Level:** Beginner · **Section:** [Network Fundamentals](./index.md)

## Overview

Most network devices are still configured through a command-line interface, and each vendor has its own dialect. The ideas are shared — operational vs configuration modes, running vs saved configuration, commit models, show commands — but the syntax differs. Learning two CLIs early (for example IOS and Junos) makes it obvious which concepts are universal and which are vendor quirks.

## Key concepts

- Operational vs configuration modes
- Running, startup and candidate configurations
- Commit, rollback and configuration archives
- Show and debug commands
- Console, SSH and out-of-band management
- Hierarchical (Junos, SR OS) vs flat (IOS, EOS) configuration

## Before you start

- None — this is a good place to start.

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 4: Intro to the CLI](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Juniper Open Learning (free courses)](https://learningportal.juniper.net/) | Course | Beginner | Free |
| [Cisco Packet Tracer](https://www.netacad.com/cisco-packet-tracer) | Simulator | Beginner | Free |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutorials | Intermediate | Free |
| [Arista EOS User Manual](https://www.arista.com/en/um-eos) | Docs | Intermediate | Free |

## Bibliography

- [*Junos OS Basics (Day One series)*](https://www.juniper.net/documentation/) — Juniper Networks (Free)
- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Configure the same hostname, interface IP and static route on an IOS device (Packet Tracer) and on an SR Linux or cEOS container in Containerlab, then compare.

## Related topics

- [OSI and TCP/IP models](./osi-and-tcp-ip-models.md)
- [Life of a packet](./life-of-a-packet.md)
- [Linux networking essentials](./linux-networking.md)
- [IPv4 addressing and the IPv4 header](./ipv4-addressing.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
