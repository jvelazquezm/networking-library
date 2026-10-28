---
title: "Standards bodies"
description: "Who defines networking technologies, where to find the specifications and how to read them."
sidebar_position: 1
---

# Standards bodies

Books explain, but standards define. When two sources disagree, the specification wins. Almost all of these publish their specifications for free.

| Organisation | Defines | Where to find specs | Cost |
| --- | --- | --- | --- |
| [IETF](https://www.ietf.org/) | Internet protocols: IP, TCP, BGP, DNS, QUIC, MPLS, SR, YANG… | [RFC Editor](https://www.rfc-editor.org/), [Datatracker](https://datatracker.ietf.org/) | Free |
| [IEEE 802](https://www.ieee802.org/) | Ethernet (802.3), bridging, VLANs and TSN (802.1), Wi-Fi (802.11) | [IEEE GET Program](https://ieeexplore.ieee.org/browse/standards/get-program/page) | Free (GET) / Paid |
| [3GPP](https://www.3gpp.org/) | Mobile networks: LTE, 5G, 6G | [3GPP specifications](https://www.3gpp.org/specifications-technologies) | Free |
| [ITU](https://www.itu.int/) | Optical transport, PON, timing (ITU-T); IMT-2020/2030 (ITU-R) | [ITU-T Recommendations](https://www.itu.int/en/ITU-T/publications/Pages/recs.aspx) | Free |
| [ETSI](https://www.etsi.org/) | NFV, MEC, European telecom standards | [ETSI standards search](https://www.etsi.org/standards) | Free |
| [O-RAN Alliance](https://www.o-ran.org/) | Open RAN architecture and interfaces | [O-RAN specifications](https://specifications.o-ran.org/) | Free (registration) |
| [MEF](https://www.mef.net/) | Carrier Ethernet, SD-WAN and network service definitions | mef.net | Free |
| [Broadband Forum](https://www.broadband-forum.org/) | Fixed broadband architectures, BNG, TR-069/TR-369 | broadband-forum.org | Free |
| [OIF](https://www.oiforum.com/) | Optical interoperability (400ZR, 800ZR) | oiforum.com | Free |
| [Open Networking Foundation](https://opennetworking.org/) | SDN, OpenFlow | opennetworking.org | Free |
| [OpenConfig](https://www.openconfig.net/) | Vendor-neutral YANG models, gNMI, gNOI | GitHub | Free |
| [Ultra Ethernet Consortium](https://ultraethernet.org/) | Ethernet transport for AI and HPC | ultraethernet.org | Free |
| [CNCF](https://www.cncf.io/) | Cloud-native projects (Kubernetes, Cilium, Envoy…) | Project documentation | Free |
| [Wi-Fi Alliance](https://www.wi-fi.org/) | Wi-Fi certification programmes and WPA | wi-fi.org | Partly free |

## How to read an RFC

- **Check the status.** *Proposed Standard* and *Internet Standard* are normative; *Informational*, *Experimental* and *Best Current Practice* each mean something different.
- **Check what updates or obsoletes it.** The header lists both — RFC 793 (TCP), for example, is obsoleted by RFC 9293.
- **Know the keywords.** MUST, SHOULD and MAY have precise meanings defined in RFC 2119 and RFC 8174.
- **Read the errata** on the RFC Editor page for the document.
- **Follow work in progress** on the IETF Datatracker, where Internet-Drafts become RFCs.

## How to read a 3GPP specification

- **The series tells you the area:** 21 (vocabulary), 22 (service requirements), 23 (architecture and procedures), 24 (signalling protocols), 28 (management), 29 (core network protocols), 33 (security), 36 (LTE radio), 38 (NR radio).
- **The first number of the version is the release.** TS 23.501 v18.x.y belongs to Release 18.
- **Start with the overview specifications** — TS 23.501 for the 5G System and TS 38.300 for NR — before diving into protocol details.
- **Stage 1, 2 and 3** are requirements, architecture and detailed protocols. Read them in that order.
