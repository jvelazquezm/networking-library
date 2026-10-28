---
title: "Troubleshooting methodology and tools"
description: "Structured approaches to finding faults and the essential tools: ping, traceroute, mtr, show commands, captures and logs."
sidebar_position: 1
---

# Troubleshooting methodology and tools

**Level:** Beginner · **Section:** [Network Operations and Assurance](./index.md)

## Overview

Good troubleshooters follow a method instead of guessing: define the problem, gather facts, form a hypothesis, test it, fix and document. Layered approaches (bottom-up, top-down, divide and conquer, follow the path) keep you systematic. The toolset is small but must be second nature — and troubleshooting is now a major part of the CCNA v2.0 blueprint.

## Key concepts

- Defining the problem and scope
- Bottom-up, top-down, divide and conquer, follow the path
- ping, traceroute and mtr
- Interface counters and error types
- Logs, debugs and their risks
- Packet captures
- Documenting and post-incident reviews

## Before you start

- [Life of a packet](../01-fundamentals/life-of-a-packet.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 11 Lab 2 and others: Troubleshooting labs](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Docs | Beginner | Free |
| [mtr — network diagnostic tool](https://github.com/traviscross/mtr) | Tool | Beginner | Free |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Labs | Beginner | Free |

## Bibliography

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (Paid)
- *Network Warrior* — Gary Donahue (Paid)

## Hands-on lab

Ask someone to break your lab in three secret ways and fix them using only show commands, logs and captures — then write a short incident report.

## Related topics

- [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](./monitoring.md)
- [Observability stack: Prometheus and Grafana](./observability-stack.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
