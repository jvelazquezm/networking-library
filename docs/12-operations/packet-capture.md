---
title: "Packet capture and port mirroring"
description: "Getting packets to an analyser: SPAN, RSPAN, ERSPAN, TAPs, on-box capture and analysing captures in Wireshark."
sidebar_position: 5
---

# Packet capture and port mirroring

**Level:** Intermediate · **Section:** [Network Operations and Assurance](./index.md)

## Overview

When counters and logs are not enough, you need the packets. Port mirroring (SPAN locally, RSPAN over a VLAN, ERSPAN over GRE) copies traffic to an analyser; network TAPs do it passively in hardware; many devices can capture on-box. Wireshark and tshark then decode, filter and follow conversations. Knowing capture filters versus display filters saves hours.

## Key concepts

- SPAN, RSPAN and ERSPAN
- Network TAPs and packet brokers
- Embedded / on-box capture
- Capture filters (BPF) vs display filters
- Following streams and expert info
- tshark for automation
- Privacy and legal considerations

## Before you start

- [Troubleshooting methodology and tools](troubleshooting.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Docs | Beginner | Free |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Captures | Beginner | Free |
| [Wireshark display filter reference](https://www.wireshark.org/docs/dfref/) | Reference | Intermediate | Free |
| [Jeremy's IT Lab — CCNP ENCOR course (YouTube, in progress)](https://www.jeremysitlab.com/encor-youtube) | Video course | Intermediate | Free |

## Bibliography

- *Wireshark Network Analysis* — Laura Chappell (Paid)

## Hands-on lab

Mirror a switch port to an analyser, capture a slow file transfer and use Wireshark's TCP analysis to identify retransmissions and window issues.

## Related topics

- [Observability stack: Prometheus and Grafana](./observability-stack.md)
- [Active monitoring: IP SLA, TWAMP and STAMP](./active-monitoring.md)
- [Network design and high availability](./network-design.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
