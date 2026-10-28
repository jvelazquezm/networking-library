---
title: "Seguridad"
description: "Conceptos de seguridad, criptografía, bastionado de equipos, ACL, seguridad de capa 2 e IPv6, NAC, firewalls, MACsec, Zero Trust, seguridad del enrutamiento, DDoS, PQC y seguridad 5G."
sidebar_position: 0
sidebar_label: Visión general
---

# 11 · Seguridad

Proteger las redes y el tráfico que transportan: los conceptos y la criptografía en los que se basa todo lo demás, el bastionado de equipos y del acceso, el filtrado y la segmentación, la protección del propio sistema de enrutamiento, la defensa frente a DDoS y las arquitecturas de seguridad de las redes modernas y móviles.

## Temas de esta sección

| Tema | Nivel | Qué aprenderás |
| --- | --- | --- |
| [Conceptos y programas de seguridad](./security-concepts.md) | Principiante | Amenazas, vulnerabilidades y exploits; la tríada CIA; defensa en profundidad; programas de seguridad y concienciación de usuarios. |
| [Criptografía básica para redes](./cryptography-basics.md) | Principiante | Cifrado simétrico y asimétrico, hashes, MAC, firmas digitales, Diffie-Hellman y certificados. |
| [Bastionado de equipos, AAA y CoPP](./device-hardening-and-aaa.md) | Principiante | Proteger los equipos de red: contraseñas y privilegios, AAA con RADIUS y TACACS+, protección del plano de gestión y Control Plane Policing. |
| [Listas de control de acceso](./acls.md) | Principiante | ACL IPv4 estándar y extendidas, numeradas y con nombre, ACL IPv6, su ubicación y los filtros sin estado equivalentes en otras plataformas. |
| [Seguridad de capa 2](./layer2-security.md) | Principiante | Port security, DHCP snooping, Dynamic ARP Inspection, IP Source Guard y los ataques habituales de capa 2. |
| [Seguridad de primer salto IPv6 y uRPF](./ipv6-security.md) | Intermedio | Proteger las redes de acceso IPv6 (RA Guard, DHCPv6 Guard, inspección ND) y antisuplantación con uRPF y BCP 38. |
| [802.1X y control de acceso a la red](./nac-and-8021x.md) | Intermedio | Autenticar equipos y usuarios antes de darles acceso a la red: 802.1X, EAP, MAB, VLAN dinámicas y postura. |
| [Firewalls, NGFW, IDS/IPS y proxies](./firewalls-and-ips.md) | Intermedio | Filtrado sin estado y con estado, firewalls de nueva generación, detección y prevención de intrusiones y proxies web. |
| [MACsec y políticas basadas en grupos](./macsec-and-group-policy.md) | Avanzado | Cifrado de capa 2 salto a salto con MACsec, y segmentación por identidad con políticas basadas en grupos (Cisco TrustSec, SGT). |
| [Zero Trust y SASE](./zero-trust-and-sase.md) | Intermedio | Nunca confíes, verifica siempre: acceso centrado en la identidad, motores de políticas, ZTNA y secure access service edge. |
| [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](./routing-security.md) | Intermedio | Proteger el sistema de enrutamiento de Internet frente a secuestros y fugas: filtrado, IRR, validación de origen con RPKI, ASPA y BGPsec. |
| [DDoS y BGP Flowspec](./ddos.md) | Intermedio | Ataques volumétricos, de protocolo y de capa de aplicación, amplificación, y mitigación con centros de limpieza, anycast, RTBH y Flowspec. |
| [Ataques de red y herramientas de evaluación](./network-attacks-and-tools.md) | Intermedio | Cómo descubren y explotan las redes los atacantes, y las herramientas que usan los defensores para ponerse a prueba: nmap, Wireshark, Scapy y más. |
| [Criptografía post-cuántica en redes](./post-quantum-cryptography.md) | Avanzado | Preparar los protocolos de red para los ordenadores cuánticos: los nuevos algoritmos del NIST, el intercambio de claves híbrido en TLS, IPsec y SSH, y la planificación de la migración. |
| [Seguridad 5G](./5g-security.md) | Avanzado | La arquitectura de seguridad 5G: autenticación, privacidad del abonado, seguridad de la SBA, seguridad en roaming y la superficie de ataque de las redes abiertas y cloud native. |

## Orden de lectura sugerido

1. [Conceptos y programas de seguridad](./security-concepts.md) — Principiante
2. [Criptografía básica para redes](./cryptography-basics.md) — Principiante
3. [Bastionado de equipos, AAA y CoPP](./device-hardening-and-aaa.md) — Principiante
4. [Listas de control de acceso](./acls.md) — Principiante
5. [Seguridad de capa 2](./layer2-security.md) — Principiante
6. [Seguridad de primer salto IPv6 y uRPF](./ipv6-security.md) — Intermedio
7. [802.1X y control de acceso a la red](./nac-and-8021x.md) — Intermedio
8. [Firewalls, NGFW, IDS/IPS y proxies](./firewalls-and-ips.md) — Intermedio
9. [Zero Trust y SASE](./zero-trust-and-sase.md) — Intermedio
10. [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](./routing-security.md) — Intermedio
11. [DDoS y BGP Flowspec](./ddos.md) — Intermedio
12. [Ataques de red y herramientas de evaluación](./network-attacks-and-tools.md) — Intermedio
13. [MACsec y políticas basadas en grupos](./macsec-and-group-policy.md) — Avanzado
14. [Criptografía post-cuántica en redes](./post-quantum-cryptography.md) — Avanzado
15. [Seguridad 5G](./5g-security.md) — Avanzado

:::tip ¿Preparas una certificación?
Consulta los [mapas de certificación](../14-reference/certifications/index.md) para ver qué temas cubre tu examen, o sigue una de las [rutas de aprendizaje](../00-start-here/learning-paths/index.md).
:::
