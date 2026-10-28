---
title: "Observability stack: Prometheus and Grafana"
description: "Modern metrics, logs and dashboards for networks: time-series databases, exporters, dashboards and alerting."
sidebar_position: 3
---

# Observability stack: Prometheus and Grafana

**Level:** Intermediate · **Section:** [Network Operations and Assurance](./index.md)

## Overview

Network teams increasingly use the same observability tools as software teams. Prometheus scrapes and stores time-series metrics (via SNMP or gNMI exporters), Grafana builds dashboards, Loki or similar tools handle logs and Alertmanager routes alerts. Combined with streaming telemetry, this gives far more detail than traditional NMS tools.

## Key concepts

- Metrics, logs and traces
- Time-series databases and labels
- Prometheus exporters (SNMP, gNMI, blackbox)
- PromQL basics
- Grafana dashboards
- Alerting and on-call

## Before you start

- [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](monitoring.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) | Docs | Intermediate | Free |
| [Grafana documentation](https://grafana.com/docs/grafana/latest/) | Docs | Intermediate | Free |
| [Prometheus SNMP exporter](https://github.com/prometheus/snmp_exporter) | Open source | Intermediate | Free |
| [gNMIc — gNMI client and collector](https://gnmic.openconfig.net/) | Tool | Intermediate | Free |
| [Edge Cloud Operations: A Systems Approach](https://ops.systemsapproach.org/) | Open book | Advanced | Free |

## Bibliography

_No books listed yet._

## Hands-on lab

Deploy Prometheus, Grafana and the SNMP exporter with Docker Compose against your lab devices and build an interface dashboard with alerts.

## Related topics

- [Troubleshooting methodology and tools](./troubleshooting.md)
- [Monitoring: SNMP, syslog, NetFlow, IPFIX and sFlow](./monitoring.md)
- [Active monitoring: IP SLA, TWAMP and STAMP](./active-monitoring.md)
- [Packet capture and port mirroring](./packet-capture.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
