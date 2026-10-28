---
title: "Security"
description: "Security concepts, cryptography, device hardening, ACLs, Layer 2 and IPv6 security, NAC, firewalls, MACsec, Zero Trust, routing security, DDoS, PQC and 5G security."
sidebar_position: 0
sidebar_label: Overview
---

# 11 · Security

Protecting networks and the traffic they carry: the concepts and cryptography behind everything else, hardening devices and access, filtering and segmentation, securing the routing system itself, defending against DDoS, and the security architectures of modern and mobile networks.

## Topics in this section

| Topic | Level | What you will learn |
| --- | --- | --- |
| [Security concepts and programs](./security-concepts.md) | Beginner | Threats, vulnerabilities and exploits; the CIA triad; defence in depth; security programmes and user awareness. |
| [Cryptography basics for networks](./cryptography-basics.md) | Beginner | Symmetric and asymmetric encryption, hashing, MACs, digital signatures, Diffie-Hellman and certificates. |
| [Device hardening, AAA and CoPP](./device-hardening-and-aaa.md) | Beginner | Securing network devices: passwords and privilege, AAA with RADIUS and TACACS+, management plane protection and Control Plane Policing. |
| [Access control lists](./acls.md) | Beginner | Standard and extended, numbered and named IPv4 ACLs, IPv6 ACLs, placement and the equivalent stateless filters on other platforms. |
| [Layer 2 security](./layer2-security.md) | Beginner | Port security, DHCP snooping, Dynamic ARP Inspection, IP Source Guard and common Layer 2 attacks. |
| [IPv6 first-hop security and uRPF](./ipv6-security.md) | Intermediate | Protecting IPv6 access networks — RA Guard, DHCPv6 Guard, ND inspection — and anti-spoofing with uRPF and BCP 38. |
| [802.1X and network access control](./nac-and-8021x.md) | Intermediate | Authenticating devices and users before they get network access: 802.1X, EAP, MAB, dynamic VLANs and posture. |
| [Firewalls, NGFW, IDS/IPS and proxies](./firewalls-and-ips.md) | Intermediate | Stateless and stateful filtering, next-generation firewalls, intrusion detection and prevention, and web proxies. |
| [MACsec and group-based policy](./macsec-and-group-policy.md) | Advanced | Hop-by-hop Layer 2 encryption with MACsec, and segmentation by identity with group-based policy (Cisco TrustSec, SGTs). |
| [Zero Trust and SASE](./zero-trust-and-sase.md) | Intermediate | Never trust, always verify: identity-centric access, policy engines, ZTNA and secure access service edge. |
| [Routing security: RPKI, ASPA and BGPsec](./routing-security.md) | Intermediate | Protecting the Internet's routing system from hijacks and leaks: filtering, IRR, RPKI route origin validation, ASPA and BGPsec. |
| [DDoS and BGP Flowspec](./ddos.md) | Intermediate | Volumetric, protocol and application-layer attacks, amplification, and mitigation with scrubbing, anycast, RTBH and Flowspec. |
| [Network attacks and assessment tools](./network-attacks-and-tools.md) | Intermediate | How attackers discover and exploit networks, and the tools defenders use to test themselves: nmap, Wireshark, Scapy and more. |
| [Post-quantum cryptography in networks](./post-quantum-cryptography.md) | Advanced | Preparing network protocols for quantum computers: NIST's new algorithms, hybrid key exchange in TLS, IPsec and SSH, and migration planning. |
| [5G security](./5g-security.md) | Advanced | The 5G security architecture: authentication, subscriber privacy, SBA security, roaming security and the attack surface of open, cloud-native networks. |

## Suggested reading order

1. [Security concepts and programs](./security-concepts.md) — Beginner
2. [Cryptography basics for networks](./cryptography-basics.md) — Beginner
3. [Device hardening, AAA and CoPP](./device-hardening-and-aaa.md) — Beginner
4. [Access control lists](./acls.md) — Beginner
5. [Layer 2 security](./layer2-security.md) — Beginner
6. [IPv6 first-hop security and uRPF](./ipv6-security.md) — Intermediate
7. [802.1X and network access control](./nac-and-8021x.md) — Intermediate
8. [Firewalls, NGFW, IDS/IPS and proxies](./firewalls-and-ips.md) — Intermediate
9. [Zero Trust and SASE](./zero-trust-and-sase.md) — Intermediate
10. [Routing security: RPKI, ASPA and BGPsec](./routing-security.md) — Intermediate
11. [DDoS and BGP Flowspec](./ddos.md) — Intermediate
12. [Network attacks and assessment tools](./network-attacks-and-tools.md) — Intermediate
13. [MACsec and group-based policy](./macsec-and-group-policy.md) — Advanced
14. [Post-quantum cryptography in networks](./post-quantum-cryptography.md) — Advanced
15. [5G security](./5g-security.md) — Advanced

:::tip Preparing for a certification?
See the [certification maps](../14-reference/certifications/index.md) to find which of these topics your exam covers, or follow one of the [learning paths](../00-start-here/learning-paths/index.md).
:::
