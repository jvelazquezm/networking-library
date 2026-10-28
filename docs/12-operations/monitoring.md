---
title: "Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow"
description: "The classic monitoring data sources: polled counters, events and flow records \u2014 and what each is good for."
sidebar_position: 2
---

# Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow

**Level:** Beginner · **Section:** [Network Operations and Assurance](./index.md)

## Overview

Network monitoring combines three kinds of data. SNMP polls counters and state (and receives traps); syslog streams events; flow export (NetFlow, IPFIX, sFlow) summarises who talked to whom and how much. Together they answer whether the network is up, what changed and where the traffic is going. Streaming telemetry is the modern successor for counters and state.

:::info Vendor notes
NetFlow is Cisco's protocol; IPFIX is the IETF standard derived from NetFlow v9, and sFlow is a sampling-based alternative supported by many vendors.
:::

## Key concepts

- SNMPv2c vs SNMPv3, MIBs and OIDs
- Polling intervals and counter wraps
- Syslog severities and central collection
- NetFlow v9 and IPFIX
- sFlow sampling
- Flow analysis for capacity and security
- Alerting basics

## Before you start

- [Device management: SSH, SNMP, syslog, TFTP, FTP and SFTP](../05-ip-services/device-management.md)

## Standards and specifications

- [RFC 3411 — SNMP Management Frameworks Architecture](https://www.rfc-editor.org/rfc/rfc3411)
- [RFC 5424 — The Syslog Protocol](https://www.rfc-editor.org/rfc/rfc5424)
- [RFC 3954 — Cisco Systems NetFlow Services Export Version 9](https://www.rfc-editor.org/rfc/rfc3954)
- [RFC 7011 — IPFIX Protocol Specification](https://www.rfc-editor.org/rfc/rfc7011)
- [sFlow specification](https://sflow.org/developers/specifications.php)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 40–41: SNMP and syslog](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [pmacct — flow collection](https://github.com/pmacct/pmacct) | Open source | Intermediate | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Export IPFIX from a Linux router (or a virtual router) to a collector, find the top talkers and correlate with SNMP interface graphs.

## Related topics

- [Troubleshooting methodology and tools](./troubleshooting.md)
- [Observability stack: Prometheus and Grafana](./observability-stack.md)
- [Active monitoring: IP SLA, TWAMP and STAMP](./active-monitoring.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
