---
title: "Voice and video over IP: SIP and RTP"
description: "How real-time communications work on IP networks: signalling with SIP, media with RTP, codecs and network requirements."
sidebar_position: 7
---

# Voice and video over IP: SIP and RTP

**Level:** Intermediate · **Section:** [IP Services](./index.md)

## Overview

Voice and video are the most demanding everyday traffic: they tolerate little delay, jitter or loss. SIP sets up, modifies and tears down sessions, SDP describes the media, and RTP carries it with timestamps and sequence numbers. Networks support them with Voice VLANs, QoS and careful NAT handling. The same protocols underpin VoLTE and VoNR in mobile networks.

## Key concepts

- SIP user agents, proxies and registrars
- SIP methods and responses
- SDP offer/answer
- RTP and RTCP
- Codecs and bandwidth
- Delay, jitter and MOS
- SIP and NAT, SBCs

## Before you start

- [Quality of Service (QoS)](qos.md)

## Standards and specifications

- [RFC 3261 — SIP: Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261)
- [RFC 3550 — RTP: A Transport Protocol for Real-Time Applications](https://www.rfc-editor.org/rfc/rfc3550)
- [RFC 8866 — SDP: Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Captures | Beginner | Free |
| [Kamailio — open source SIP server](https://www.kamailio.org/) | Open source | Intermediate | Free |
| [Asterisk documentation](https://docs.asterisk.org/) | Docs | Intermediate | Free |

## Bibliography

- *SIP: Understanding the Session Initiation Protocol* — Alan B. Johnston (Paid)

## Hands-on lab

Install Asterisk, register two softphones, place a call and analyse the SIP ladder and RTP stream quality in Wireshark's VoIP tools.

## Related topics

- [Quality of Service (QoS)](./qos.md)
- [Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP](./device-management.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
