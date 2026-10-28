---
title: "Active monitoring: IP SLA, TWAMP and STAMP"
description: "Measuring latency, jitter and loss with synthetic probes, from router-based IP SLA to standard TWAMP and STAMP."
sidebar_position: 4
---

# Active monitoring: IP SLA, TWAMP and STAMP

**Level:** Intermediate · **Section:** [Network Operations and Assurance](./index.md)

## Overview

Passive monitoring tells you about real traffic; active monitoring sends probes so you can measure paths before users complain. Cisco IP SLA and Juniper RPM are vendor implementations; TWAMP and its simpler successor STAMP are IETF standards for two-way measurement. Probes also drive tracking for static routes, FHRPs and SD-WAN path selection.

## Key concepts

- Synthetic probes vs passive measurement
- Latency, jitter and loss measurement
- IP SLA and RPM
- TWAMP and STAMP
- Tracking objects from probe results
- Blackbox probes for services

## Before you start

- [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](monitoring.md)

## Standards and specifications

- [RFC 5357 — Two-Way Active Measurement Protocol (TWAMP)](https://www.rfc-editor.org/rfc/rfc5357)
- [RFC 8762 — Simple Two-Way Active Measurement Protocol (STAMP)](https://www.rfc-editor.org/rfc/rfc8762)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |
| [Prometheus blackbox exporter](https://github.com/prometheus/blackbox_exporter) | Open source | Intermediate | Free |

## Bibliography

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (Paid)

## Hands-on lab

Configure an IP SLA (or blackbox exporter) probe between two sites and use it to trigger failover of a static route.

## Related topics

- [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](./monitoring.md)
- [Observability stack: Prometheus and Grafana](./observability-stack.md)
- [Packet capture and port mirroring](./packet-capture.md)
- [Network design and high availability](./network-design.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
