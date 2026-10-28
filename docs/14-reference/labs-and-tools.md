---
title: "Labs and tools"
description: "Emulators, simulators and open-source stacks for hands-on practice."
sidebar_position: 4
---

# Labs and tools

You learn networking by breaking networks. Everything below is free or has a free tier, and almost all of it runs on a laptop.

:::tip Recommended starter setup
A Linux machine (or VM) with Docker, **Containerlab**, **FRRouting**, **Nokia SR Linux** or **Arista cEOS** images and **Wireshark** covers most labs in this library. Add **Packet Tracer** for CCNA-style Cisco labs, **kind** for cloud native and **Open5GS** with **UERANSIM** for 5G.
:::

## Network emulation and simulation

| Tool | What it is for | Cost |
| --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Container-based labs defined as code — the best default today | Free |
| [Cisco Packet Tracer](https://www.netacad.com/cisco-packet-tracer) | Beginner-friendly Cisco simulator | Free |
| [GNS3](https://www.gns3.com/) | Graphical emulator for vendor images | Free |
| [EVE-NG Community](https://www.eve-ng.net/) | Web-based multi-vendor emulation | Free / Paid |
| [Cisco Modeling Labs](https://www.cisco.com/c/en/us/products/cloud-systems-management/modeling-labs/index.html) | Official Cisco images | Paid (free tier) |
| [Mininet](https://github.com/mininet/mininet) | Emulated SDN networks | Free |

## Free network operating system images

| Image | Vendor | Notes |
| --- | --- | --- |
| [SR Linux](https://learn.srlinux.dev/) | Nokia | Container image, no registration. |
| [cEOS-lab / vEOS-lab](https://www.arista.com/en/support/software-download) | Arista | Free with registration. |
| [FRRouting](https://frrouting.org/) | Open source | BGP, OSPF, IS-IS, PIM, EVPN, SR. |
| [VyOS](https://vyos.io/) | Open source | Router and firewall. |

## Packet analysis and testing

| Tool | What it is for |
| --- | --- |
| [Wireshark](https://www.wireshark.org/) | Packet capture and analysis |
| [tcpdump](https://www.tcpdump.org/) | Command-line capture |
| [Scapy](https://scapy.net/) | Crafting packets in Python |
| [iperf3](https://github.com/esnet/iperf) | Throughput testing |
| [Nmap](https://nmap.org/) | Discovery and scanning |

## Mobile networks

| Tool | What it is for |
| --- | --- |
| [Open5GS](https://open5gs.org/) | 4G/5G core |
| [free5GC](https://free5gc.org/) | 5G core |
| [srsRAN Project](https://www.srsran.com/) | 4G/5G RAN |
| [OpenAirInterface](https://openairinterface.org/) | RAN and core |
| [UERANSIM](https://github.com/aligungr/UERANSIM) | 5G UE and gNB simulator |
| [O-RAN Software Community](https://docs.o-ran-sc.org/) | RIC and O-RAN components |

## Cloud native

| Tool | What it is for |
| --- | --- |
| [kind](https://kind.sigs.k8s.io/) | Local Kubernetes clusters |
| [Cilium](https://cilium.io/) | eBPF networking, security and observability |

## Automation, validation and observability

| Tool | What it is for |
| --- | --- |
| [NetBox](https://github.com/netbox-community/netbox) | Source of truth |
| [Batfish](https://www.batfish.org/) | Configuration analysis |
| [gNMIc](https://gnmic.openconfig.net/) | gNMI client and collector |
| [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/oss/grafana/) | Metrics and dashboards |
| [Routinator](https://routinator.docs.nlnetlabs.nl/) | RPKI validation |
| [PeeringDB](https://www.peeringdb.com/) | Networks, IXPs and facilities |
