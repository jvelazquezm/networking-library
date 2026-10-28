---
title: "Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP"
description: "Acceso remoto seguro, monitorización básica y transferencia de archivos hacia y desde los equipos de red."
sidebar_position: 6
---

# Gestión de equipos: SSH, SNMP, syslog, TFTP, FTP y SFTP

**Nivel:** Principiante · **Sección:** [Servicios IP](./index.md)

## Visión general

Todo equipo necesita ser accesible, monitorizado y mantenido. SSH sustituye a Telnet para el acceso seguro a la CLI; SNMP expone contadores y estado a los sistemas de monitorización (usa la versión 3 por seguridad); syslog envía eventos con niveles de severidad a un colector central; TFTP, FTP, SCP y SFTP mueven imágenes y configuraciones. Se tratan a nivel CCNA aquí y en profundidad en la sección de Operación.

## Conceptos clave

- Configuración de SSH e inicio de sesión con claves
- Telnet y por qué no usarlo
- Versiones de SNMP, MIB, gets y traps
- Severidades y facilities de syslog
- TFTP, FTP, SCP y SFTP
- Gestión fuera de banda y VRF de gestión

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

- [RFC 4251 — The Secure Shell (SSH) Protocol Architecture](https://www.rfc-editor.org/rfc/rfc4251)
- [RFC 3411 — SNMP Management Frameworks Architecture](https://www.rfc-editor.org/rfc/rfc3411)
- [RFC 5424 — The Syslog Protocol](https://www.rfc-editor.org/rfc/rfc5424)
- [RFC 1350 — The TFTP Protocol (Revision 2)](https://www.rfc-editor.org/rfc/rfc1350)
- [RFC 959 — File Transfer Protocol (FTP)](https://www.rfc-editor.org/rfc/rfc959)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 40–43: SNMP, syslog, SSH, FTP and TFTP (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Neil Anderson — Free CCNA Lab Guide (Packet Tracer, 300+ pages)](https://www.flackbox.com/cisco-ccna-lab-guide) | Laboratorios | Principiante | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)

## Laboratorio práctico

Bastiona un router: desactiva Telnet, activa SSH con claves, envía syslog a un colector Linux y consulta los contadores de interfaz con SNMPv3.

## Temas relacionados

- [Hora: NTP, NTS y PTP](./time-synchronization.md)
- [Calidad de servicio (QoS)](./qos.md)
- [Voz y vídeo sobre IP: SIP y RTP](./voice-and-video.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
