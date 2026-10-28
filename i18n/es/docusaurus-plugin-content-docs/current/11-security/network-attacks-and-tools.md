---
title: "Ataques de red y herramientas de evaluación"
description: "Cómo descubren y explotan las redes los atacantes, y las herramientas que usan los defensores para ponerse a prueba: nmap, Wireshark, Scapy y más."
sidebar_position: 13
---

# Ataques de red y herramientas de evaluación

**Nivel:** Intermedio · **Sección:** [Seguridad](./index.md)

## Visión general

Entender los ataques te convierte en un mejor defensor. El reconocimiento con escáneres, la suplantación y el man-in-the-middle en capa 2 y 3, el abuso de protocolos y los errores de configuración son las puertas de entrada habituales. Las mismas herramientas (nmap, Wireshark, Scapy, herramientas tipo Responder) te permiten auditar tus propias redes. Prueba siempre solo las redes en las que estés autorizado.

## Conceptos clave

- Reconocimiento y escaneo
- Suplantación y man-in-the-middle
- Ataques a protocolos y al enrutamiento
- Ataques inalámbricos
- Escaneo de vulnerabilidades
- Límites legales y éticos

## Antes de empezar

- [Conceptos y programas de seguridad](security-concepts.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nmap reference guide](https://nmap.org/book/man.html) | Documentación | Principiante | Gratis |
| [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | Documentación | Principiante | Gratis |
| [Scapy documentation](https://scapy.readthedocs.io/) | Documentación | Intermedio | Gratis |
| [OWASP — free resources](https://owasp.org/) | Comunidad | Intermedio | Gratis |

## Bibliografía

- [*Nmap Network Scanning*](https://nmap.org/book/) — Gordon “Fyodor” Lyon (Gratis (parcialmente en línea))

## Laboratorio práctico

Escanea tu propio laboratorio con nmap y después crea con Scapy un paquete que active una de tus reglas de firewall o IPS.

## Temas relacionados

- [Seguridad del enrutamiento: RPKI, ASPA y BGPsec](./routing-security.md)
- [DDoS y BGP Flowspec](./ddos.md)
- [Criptografía post-cuántica en redes](./post-quantum-cryptography.md)
- [Seguridad 5G](./5g-security.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
