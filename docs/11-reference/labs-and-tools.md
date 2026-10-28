---
title: "Labs and tools"
description: "Emulators, simulators and open source stacks for hands-on practice."
sidebar_position: 4
---

# Labs and tools

You learn networking by breaking networks. Everything below is free or has a free tier, and almost all of it runs on a laptop.

:::tip Recommended starter setup
A Linux machine (or a VM) with Docker, **Containerlab**, **FRRouting** and **Wireshark** covers most of the labs in this library. Add **kind** for cloud native topics and **Open5GS** with **UERANSIM** for 5G.
:::

## Packet analysis

| Tool | What it is for |
| --- | --- |
| [Wireshark](https://www.wireshark.org/) | Packet capture and analysis with a GUI |
| [tcpdump](https://www.tcpdump.org/) | Command-line packet capture |
## Network emulation

| Tool | What it is for |
| --- | --- |
| [Containerlab](https://containerlab.dev/) | Container-based labs defined as code — the best default today |
| [GNS3](https://www.gns3.com/) | Graphical network emulator for vendor images |
| [EVE-NG](https://www.eve-ng.net/) | Web-based multi-vendor emulation platform |
| [Cisco Packet Tracer](https://www.netacad.com/cisco-packet-tracer) | Beginner-friendly simulator |
| [Mininet](https://github.com/mininet/mininet) | Emulates SDN networks on one machine |
## Routing software

| Tool | What it is for |
| --- | --- |
| [FRRouting](https://frrouting.org/) | Open source routing suite: BGP, OSPF, IS-IS, PIM… |
| [Routinator](https://github.com/NLnetLabs/routinator) | RPKI relying party software |
## Mobile networks

| Tool | What it is for |
| --- | --- |
| [Open5GS](https://open5gs.org/) | Open source 4G/5G core |
| [free5GC](https://free5gc.org/) | Open source 5G core |
| [srsRAN Project](https://www.srsran.com/) | Open source 4G/5G RAN |
| [OpenAirInterface](https://openairinterface.org/) | Open source RAN and core |
| [UERANSIM](https://github.com/aligungr/UERANSIM) | 5G UE and gNB simulator |
| [O-RAN Software Community](https://o-ran-sc.org/) | Open source RIC and O-RAN components |
## Cloud native

| Tool | What it is for |
| --- | --- |
| [kind](https://kind.sigs.k8s.io/) | Local Kubernetes clusters in containers |
| [Cilium](https://cilium.io/) | eBPF-based CNI, security and observability |
## Automation and validation

| Tool | What it is for |
| --- | --- |
| [NetBox](https://github.com/netbox-community/netbox) | Source of truth for network data |
| [Batfish](https://www.batfish.org/) | Configuration analysis and pre-change validation |
| [gNMIc](https://gnmic.openconfig.net/) | gNMI client and telemetry collector |
## Measurement and data

| Tool | What it is for |
| --- | --- |
| [iperf3](https://github.com/esnet/iperf) | Throughput testing |
| [PeeringDB](https://www.peeringdb.com/) | Database of networks, IXPs and facilities |
