---
title: "Voz y vídeo sobre IP: SIP y RTP"
description: "Cómo funcionan las comunicaciones en tiempo real en redes IP: señalización con SIP, medios con RTP, códecs y requisitos de red."
sidebar_position: 7
---

# Voz y vídeo sobre IP: SIP y RTP

**Nivel:** Intermedio · **Sección:** [Servicios IP](./index.md)

## Visión general

La voz y el vídeo son el tráfico cotidiano más exigente: toleran muy poco retardo, jitter o pérdida. SIP establece, modifica y termina sesiones, SDP describe los medios y RTP los transporta con marcas de tiempo y números de secuencia. Las redes los soportan con VLAN de voz, QoS y un manejo cuidadoso de NAT. Los mismos protocolos son la base de VoLTE y VoNR en las redes móviles.

## Conceptos clave

- Agentes de usuario, proxies y registrars SIP
- Métodos y respuestas SIP
- Oferta/respuesta SDP
- RTP y RTCP
- Códecs y ancho de banda
- Retardo, jitter y MOS
- SIP y NAT, SBC

## Antes de empezar

- [Calidad de servicio (QoS)](qos.md)

## Estándares y especificaciones

- [RFC 3261 — SIP: Session Initiation Protocol](https://www.rfc-editor.org/rfc/rfc3261)
- [RFC 3550 — RTP: A Transport Protocol for Real-Time Applications](https://www.rfc-editor.org/rfc/rfc3550)
- [RFC 8866 — SDP: Session Description Protocol](https://www.rfc-editor.org/rfc/rfc8866)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Wireshark sample captures](https://wiki.wireshark.org/SampleCaptures) | Capturas | Principiante | Gratis |
| [Kamailio — open source SIP server](https://www.kamailio.org/) | Código abierto | Intermedio | Gratis |
| [Asterisk documentation](https://docs.asterisk.org/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *SIP: Understanding the Session Initiation Protocol* — Alan B. Johnston (De pago)

## Laboratorio práctico

Instala Asterisk, registra dos softphones, haz una llamada y analiza el diagrama de mensajes SIP y la calidad del flujo RTP con las herramientas VoIP de Wireshark.

## Temas relacionados

- [Calidad de servicio (QoS)](./qos.md)
- [Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP](./device-management.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
