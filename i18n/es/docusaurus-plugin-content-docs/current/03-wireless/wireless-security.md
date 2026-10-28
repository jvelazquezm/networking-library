---
title: "Seguridad inalámbrica: WPA2, WPA3 y 802.1X"
description: "Autenticación y cifrado en Wi-Fi: PSK, SAE, modo Enterprise con 802.1X y ataques habituales."
sidebar_position: 4
---

# Seguridad inalámbrica: WPA2, WPA3 y 802.1X

**Nivel:** Principiante · **Sección:** [Redes inalámbricas e IoT](./index.md)

## Visión general

El tráfico inalámbrico llega a cualquiera que esté al alcance, así que el cifrado y la autenticación son imprescindibles. WPA2 introdujo AES-CCMP; WPA3 sustituyó el vulnerable intercambio con clave precompartida por SAE y añadió tramas de gestión protegidas y Enhanced Open. Las redes empresariales autentican a cada usuario con 802.1X y EAP contra un servidor RADIUS.

## Conceptos clave

- Abierta, WEP (histórico), WPA, WPA2, WPA3
- Personal (PSK, SAE) frente a Enterprise (802.1X)
- Saludo a cuatro vías
- Métodos EAP: EAP-TLS, PEAP
- Tramas de gestión protegidas
- AP no autorizados, gemelos malvados y ataques de desautenticación

## Antes de empezar

- [Arquitecturas WLAN](wlan-architectures.md)

## Estándares y especificaciones

- [IEEE 802.1X — Port-Based Network Access Control](https://1.ieee802.org/)
- [RFC 3748 — Extensible Authentication Protocol (EAP)](https://www.rfc-editor.org/rfc/rfc3748)
- [Wi-Fi Alliance — Wi-Fi security (WPA3)](https://www.wi-fi.org/discover-wi-fi/security)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 57: Wireless security (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |

## Bibliografía

- *CWNA Certified Wireless Network Administrator Study Guide* — David D. Coleman, David A. Westcott (De pago)

## Laboratorio práctico

Configura WPA3-Enterprise con hostapd y FreeRADIUS usando certificados EAP-TLS, y captura el intercambio de autenticación.

## Temas relacionados

- [Estándares Wi-Fi: de 802.11a a Wi-Fi 7](./wifi-standards.md)
- [Arquitecturas WLAN](./wlan-architectures.md)
- [Diseño WLAN, site surveys y roaming](./wlan-design.md)
- [IoT e inalámbricas de corto alcance](./iot-wireless.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
