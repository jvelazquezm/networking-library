---
title: "Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP"
description: "Secure remote access, basic monitoring and moving files to and from network devices."
sidebar_position: 6
---

# Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP

**Level:** Beginner · **Section:** [IP Services](./index.md)

## Overview

Every device needs to be reached, monitored and maintained. SSH replaces Telnet for secure CLI access; SNMP exposes counters and state to monitoring systems (use v3 for security); syslog sends events to a central collector with severity levels; TFTP, FTP, SCP and SFTP move images and configurations. These are covered at CCNA level and in depth in the Operations section.

## Key concepts

- SSH configuration and key-based login
- Telnet and why not to use it
- SNMP versions, MIBs, gets and traps
- Syslog severities and facilities
- TFTP, FTP, SCP and SFTP
- Out-of-band management and management VRFs

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

- [RFC 4251 — The Secure Shell (SSH) Protocol Architecture](https://www.rfc-editor.org/rfc/rfc4251)
- [RFC 3411 — SNMP Management Frameworks Architecture](https://www.rfc-editor.org/rfc/rfc3411)
- [RFC 5424 — The Syslog Protocol](https://www.rfc-editor.org/rfc/rfc5424)
- [RFC 1350 — The TFTP Protocol (Revision 2)](https://www.rfc-editor.org/rfc/rfc1350)
- [RFC 959 — File Transfer Protocol (FTP)](https://www.rfc-editor.org/rfc/rfc959)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 40–43: SNMP, syslog, SSH, FTP and TFTP](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)

## Hands-on lab

Harden a router: disable Telnet, enable SSH with keys, send syslog to a Linux collector and poll interface counters with SNMPv3.

## Related topics

- [Time: NTP, NTS and PTP](./time-synchronization.md)
- [Quality of Service (QoS)](./qos.md)
- [Voice and video over IP: SIP and RTP](./voice-and-video.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
