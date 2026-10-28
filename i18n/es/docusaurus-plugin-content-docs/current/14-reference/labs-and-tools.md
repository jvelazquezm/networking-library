---
title: "Laboratorios y herramientas"
description: "Emuladores, simuladores y pilas de código abierto para practicar."
sidebar_position: 4
---

# Laboratorios y herramientas

Las redes se aprenden rompiéndolas. Todo lo que aparece aquí es gratuito o tiene una opción gratuita, y casi todo funciona en un portátil.

:::tip Equipo de inicio recomendado
Una máquina Linux (o una VM) con Docker, **Containerlab**, **FRRouting**, imágenes de **Nokia SR Linux** o **Arista cEOS** y **Wireshark** cubre la mayoría de los laboratorios de esta biblioteca. Añade **Packet Tracer** para laboratorios Cisco de nivel CCNA, **kind** para cloud native y **Open5GS** con **UERANSIM** para 5G.
:::

## Emulación y simulación de redes

| Herramienta | Para qué sirve | Coste |
| --- | --- | --- |
| [Containerlab](https://containerlab.dev/) | Laboratorios basados en contenedores definidos como código: la mejor opción hoy | Gratis |
| [Cisco Packet Tracer](https://www.netacad.com/cisco-packet-tracer) | Simulador de Cisco para principiantes | Gratis |
| [GNS3](https://www.gns3.com/) | Emulador gráfico para imágenes de fabricantes | Gratis |
| [EVE-NG Community](https://www.eve-ng.net/) | Emulación multifabricante vía web | Gratis / De pago |
| [Cisco Modeling Labs](https://www.cisco.com/c/en/us/products/cloud-systems-management/modeling-labs/index.html) | Imágenes oficiales de Cisco | De pago (con opción gratuita) |
| [Mininet](https://github.com/mininet/mininet) | Redes SDN emuladas | Gratis |

## Imágenes gratuitas de sistemas operativos de red

| Imagen | Fabricante | Notas |
| --- | --- | --- |
| [SR Linux](https://learn.srlinux.dev/) | Nokia | Imagen de contenedor, sin registro. |
| [cEOS-lab / vEOS-lab](https://www.arista.com/en/support/software-download) | Arista | Gratis con registro. |
| [FRRouting](https://frrouting.org/) | Código abierto | BGP, OSPF, IS-IS, PIM, EVPN, SR. |
| [VyOS](https://vyos.io/) | Código abierto | Router y firewall. |

## Análisis de paquetes y pruebas

| Herramienta | Para qué sirve |
| --- | --- |
| [Wireshark](https://www.wireshark.org/) | Captura y análisis de paquetes |
| [tcpdump](https://www.tcpdump.org/) | Captura desde la línea de comandos |
| [Scapy](https://scapy.net/) | Crear paquetes con Python |
| [iperf3](https://github.com/esnet/iperf) | Pruebas de throughput |
| [Nmap](https://nmap.org/) | Descubrimiento y escaneo |

## Redes móviles

| Herramienta | Para qué sirve |
| --- | --- |
| [Open5GS](https://open5gs.org/) | Núcleo 4G/5G |
| [free5GC](https://free5gc.org/) | Núcleo 5G |
| [srsRAN Project](https://www.srsran.com/) | RAN 4G/5G |
| [OpenAirInterface](https://openairinterface.org/) | RAN y núcleo |
| [UERANSIM](https://github.com/aligungr/UERANSIM) | Simulador de UE y gNB 5G |
| [O-RAN Software Community](https://docs.o-ran-sc.org/) | RIC y componentes O-RAN |

## Cloud native

| Herramienta | Para qué sirve |
| --- | --- |
| [kind](https://kind.sigs.k8s.io/) | Clústeres Kubernetes locales |
| [Cilium](https://cilium.io/) | Redes, seguridad y observabilidad con eBPF |

## Automatización, validación y observabilidad

| Herramienta | Para qué sirve |
| --- | --- |
| [NetBox](https://github.com/netbox-community/netbox) | Fuente de verdad |
| [Batfish](https://www.batfish.org/) | Análisis de configuraciones |
| [gNMIc](https://gnmic.openconfig.net/) | Cliente y colector gNMI |
| [Prometheus](https://prometheus.io/) y [Grafana](https://grafana.com/oss/grafana/) | Métricas y paneles |
| [Routinator](https://routinator.docs.nlnetlabs.nl/) | Validación RPKI |
| [PeeringDB](https://www.peeringdb.com/) | Redes, IXP e instalaciones |
