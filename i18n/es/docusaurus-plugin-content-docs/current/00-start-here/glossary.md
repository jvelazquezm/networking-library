---
title: "Glosario"
description: "Definiciones breves de los términos y siglas que se usan en la biblioteca."
sidebar_position: 3
---

# Glosario

Definiciones breves y en lenguaje sencillo. Cada término se explica en profundidad en su página de tema; usa el buscador para encontrarlo. Los términos se mantienen en inglés porque así se usan en la práctica.

**3GPP**  
3rd Generation Partnership Project: el organismo que estandariza las redes móviles (LTE, 5G, 6G).

**5QI**  
5G QoS Identifier: número que asocia un flujo QoS a características estandarizadas como prioridad y presupuesto de retardo.

**AAA**  
Autenticación, autorización y registro (accounting): controlar y registrar quién puede hacer qué en un equipo o red.

**ACL**  
Lista de control de acceso: lista ordenada de reglas de permitir/denegar para filtrar o clasificar tráfico.

**AMF**  
Access and Mobility Management Function: la función del núcleo 5G que gestiona el registro y la movilidad.

**Anycast**  
Anunciar la misma dirección IP desde varias ubicaciones para que el tráfico llegue a la más cercana.

**ARP**  
Address Resolution Protocol: asocia direcciones IPv4 a direcciones MAC en un enlace.

**AS (Autonomous System)**  
Sistema autónomo: red con una única política de enrutamiento, identificada por un número de AS y conectada a otras con BGP.

**BFD**  
Bidirectional Forwarding Detection: protocolo ligero que detecta fallos de camino en milisegundos.

**BGP**  
Border Gateway Protocol: el protocolo de vector de caminos que se usa entre sistemas autónomos.

**BNG**  
Broadband Network Gateway: el router que autentica y gestiona a los abonados de banda ancha fija.

**BPDU**  
Bridge Protocol Data Unit: el mensaje que usa spanning tree para elegir una raíz y construir una topología sin bucles.

**CAPWAP**  
Control and Provisioning of Wireless Access Points: el protocolo entre los puntos de acceso ligeros y las controladoras.

**CIDR**  
Classless Inter-Domain Routing: escribir las redes como dirección/longitud de prefijo, por ejemplo 192.0.2.0/24.

**CNF**  
Función de red cloud native: función de red empaquetada como contenedores, normalmente sobre Kubernetes.

**CNI**  
Container Network Interface: la especificación de plugins que usa Kubernetes para conectar los pods a la red.

**Control plane**  
Plano de control: la parte de un equipo de red que decide adónde debe ir el tráfico (protocolos de enrutamiento, señalización).

**CoPP**  
Control Plane Policing: limitar el tráfico dirigido a la CPU de un equipo para proteger su plano de control.

**CU / DU / RU**  
Unidades central, distribuida y de radio: la división funcional de una estación base 5G.

**Data plane**  
Plano de datos: la parte de un equipo de red que reenvía los paquetes; también llamado plano de reenvío o de usuario.

**DHCP**  
Dynamic Host Configuration Protocol: entrega automáticamente a los equipos su configuración IP.

**DMVPN**  
Dynamic Multipoint VPN: diseño de Cisco que usa mGRE, NHRP e IPsec para crear túneles entre sedes bajo demanda.

**DNS**  
Domain Name System: el sistema distribuido que traduce nombres en direcciones y otros registros.

**DPU**  
Data processing unit: tarjeta de red programable que descarga funciones de red, almacenamiento y seguridad.

**DSCP**  
Differentiated Services Code Point: el campo de la cabecera IP con el que se marca el tráfico para QoS.

**DWDM**  
Dense Wavelength Division Multiplexing: transportar muchas longitudes de onda ópticas por una misma fibra.

**eBPF**  
Tecnología del kernel de Linux que ejecuta programas aislados dentro del kernel; muy usada en redes y observabilidad.

**ECMP**  
Equal-cost multipath: repartir el tráfico entre varios caminos del mismo coste.

**eCPRI**  
Enhanced Common Public Radio Interface: protocolo de fronthaul por paquetes entre las unidades de radio y de banda base.

**EIGRP**  
Enhanced Interior Gateway Routing Protocol: el protocolo avanzado de vector distancia de Cisco.

**EVPN**  
Ethernet VPN: plano de control basado en BGP para VPN de capa 2 y capa 3 sobre MPLS, SR o VXLAN.

**FHRP**  
Protocolo de redundancia de primer salto (VRRP, HSRP o GLBP): mantiene disponible la puerta de enlace.

**Flex-Algo**  
IGP Flexible Algorithm: permite a un IGP calcular árboles de caminos más cortos adicionales con otras métricas o restricciones.

**gNB**  
La estación base 5G (next-generation NodeB).

**gNMI**  
gRPC Network Management Interface: protocolo para configuración y telemetría en streaming.

**GRE**  
Generic Routing Encapsulation: protocolo de túnel sencillo que transporta cualquier protocolo de capa 3, incluido el multicast.

**GTP-U**  
GPRS Tunnelling Protocol de plano de usuario: tuneliza el tráfico de usuario entre la RAN y la UPF o las pasarelas.

**HSRP**  
Hot Standby Router Protocol: el protocolo de redundancia de primer salto de Cisco.

**IGP**  
Protocolo de pasarela interior: protocolo de enrutamiento usado dentro de un sistema autónomo (OSPF, IS-IS, EIGRP).

**IKEv2**  
Internet Key Exchange versión 2: negocia las claves y asociaciones de seguridad de IPsec.

**IMS**  
IP Multimedia Subsystem: la arquitectura basada en SIP que entrega voz y mensajería en 4G y 5G.

**IPFIX**  
IP Flow Information Export: el estándar del IETF para exportar registros de flujos, derivado de NetFlow v9.

**IPsec**  
Conjunto de protocolos que autentican y cifran paquetes IP.

**IS-IS**  
Intermediate System to Intermediate System: IGP de estado de enlace muy usado por los operadores.

**IXP**  
Punto neutro de Internet: lugar donde las redes se interconectan para intercambiar tráfico.

**LACP**  
Link Aggregation Control Protocol: negocia grupos de enlaces paralelos.

**Latency**  
Latencia: el tiempo que tardan los datos en ir del origen al destino.

**LISP**  
Locator/ID Separation Protocol: separa la identidad de un equipo de su ubicación mediante un sistema de mapeo.

**LLDP**  
Link Layer Discovery Protocol: el estándar IEEE para anunciar la identidad de un equipo a sus vecinos.

**MACsec**  
IEEE 802.1AE: cifrado de tramas Ethernet salto a salto.

**MPLS**  
Multiprotocol Label Switching: reenvío basado en etiquetas cortas en lugar de búsquedas IP.

**MTU**  
Unidad máxima de transmisión: el paquete más grande que puede transportar un enlace sin fragmentar.

**NAT**  
Traducción de direcciones de red: reescribir direcciones cuando los paquetes cruzan una frontera.

**NDP**  
Neighbor Discovery Protocol: el mecanismo de IPv6 para resolución de direcciones, descubrimiento de routers y más.

**NETCONF**  
Protocolo para la configuración transaccional y dirigida por modelos de equipos de red.

**Network slice**  
Network slice: red lógica de extremo a extremo con características propias sobre infraestructura compartida.

**NFV**  
Network Functions Virtualisation: ejecutar funciones de red como software sobre hardware de propósito general.

**NHRP**  
Next Hop Resolution Protocol: resuelve direcciones de túnel en direcciones del underlay en DMVPN.

**NR**  
New Radio: la tecnología de acceso radio del 5G.

**NTP**  
Network Time Protocol: sincroniza relojes a través de redes de paquetes.

**O-RAN**  
Open RAN: arquitectura de RAN desagregada con interfaces abiertas, especificada por la O-RAN Alliance.

**OSPF**  
Open Shortest Path First: IGP de estado de enlace.

**PAT**  
Traducción de direcciones y puertos (NAT overload): muchos equipos comparten una dirección pública traduciendo puertos.

**PCE**  
Path Computation Element: controladora que calcula caminos con una visión global de la red.

**PFCP**  
Packet Forwarding Control Protocol: lo usa la SMF para controlar la UPF en 5G.

**PIM**  
Protocol Independent Multicast: construye árboles de distribución multicast.

**PoE**  
Power over Ethernet: llevar alimentación y datos por el mismo cable de par trenzado.

**PON**  
Red óptica pasiva: acceso por fibra punto a multipunto (GPON, XGS-PON).

**PTP**  
Precision Time Protocol (IEEE 1588): distribuye la hora con gran precisión por redes de paquetes.

**QoS**  
Calidad de servicio: técnicas para priorizar y garantizar el tratamiento de cierto tráfico.

**RADIUS**  
Protocolo de autenticación, autorización y registro centralizados para el acceso a la red.

**RDMA**  
Remote Direct Memory Access: mover datos entre la memoria de dos máquinas sin intervención de sus CPU; lo usan las redes de IA y de almacenamiento.

**RFC**  
Request for Comments: la serie de documentos del IETF que publica los estándares y buenas prácticas de Internet.

**RIC**  
RAN Intelligent Controller: el componente O-RAN que aloja xApps (casi tiempo real) y rApps (no tiempo real).

**RoCEv2**  
RDMA over Converged Ethernet versión 2: RDMA transportado sobre UDP/IP en redes Ethernet.

**RPKI**  
Resource Public Key Infrastructure: vincula criptográficamente los prefijos IP con los AS autorizados a originarlos.

**RSVP-TE**  
Resource Reservation Protocol con extensiones de ingeniería de tráfico: señaliza caminos MPLS explícitos.

**SD-WAN**  
WAN definida por software: overlays controlados centralmente sobre varios transportes WAN con enrutamiento por aplicación.

**SDN**  
Redes definidas por software: separar el plano de control del de datos y controlarlo de forma centralizada.

**Segment Routing**  
Enfoque de enrutamiento en origen en el que el camino se codifica en el paquete como una lista de segmentos.

**SIP**  
Session Initiation Protocol: establece y gestiona sesiones de voz, vídeo y mensajería.

**SLAAC**  
Stateless Address Autoconfiguration: los equipos IPv6 configuran sus propias direcciones a partir de los anuncios de router.

**SMF**  
Session Management Function: la función del núcleo 5G que gestiona las sesiones PDU.

**SNMP**  
Simple Network Management Protocol: consulta y recibe información de gestión de los equipos.

**SRv6**  
Segment Routing sobre IPv6: segmentos codificados como direcciones IPv6.

**STP / RSTP / MSTP**  
Spanning Tree Protocol y sus versiones rápida y de múltiples instancias: evitan los bucles de capa 2.

**Subnet**  
Subred: subdivisión lógica de una red IP que comparte un prefijo común.

**TACACS+**  
Protocolo de AAA centralizado para la administración de equipos, que separa autenticación, autorización y registro.

**Throughput**  
Throughput: cantidad de datos transferidos con éxito por unidad de tiempo.

**TI-LFA**  
Topology-Independent Loop-Free Alternate: fast reroute con Segment Routing y cobertura total.

**TLS**  
Transport Layer Security: autentica y cifra las conexiones de las aplicaciones.

**TSN**  
Time-Sensitive Networking: estándares IEEE 802.1 para Ethernet determinista.

**UPF**  
User Plane Function: la función del núcleo 5G que reenvía el tráfico de usuario.

**VLAN**  
LAN virtual: red lógica de capa 2 separada mediante etiquetas 802.1Q.

**VRF**  
Virtual routing and forwarding: tablas de enrutamiento independientes en un mismo router.

**VRRP**  
Virtual Router Redundancy Protocol: el protocolo estándar del IETF de redundancia de primer salto.

**VXLAN**  
Virtual eXtensible LAN: encapsula tramas de capa 2 en UDP para construir overlays.

**WPA3**  
Wi-Fi Protected Access 3: la seguridad Wi-Fi actual, con SAE para redes personales.

**xApp / rApp**  
Aplicaciones que se ejecutan en los RIC casi en tiempo real y no en tiempo real de O-RAN.

**YANG**  
Lenguaje de modelado de datos para la configuración y el estado de las redes.

**Zero Trust**  
Modelo de seguridad que no concede confianza implícita por la ubicación en la red.
