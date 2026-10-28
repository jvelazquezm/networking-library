---
title: "Automatización en el equipo: EEM y Python en el dispositivo"
description: "Automatización que se ejecuta en el propio equipo: scripts por eventos, Cisco EEM, scripts de commit y eventos en Junos y Python en el dispositivo."
sidebar_position: 9
---

# Automatización en el equipo: EEM y Python en el dispositivo

**Nivel:** Intermedio · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

Hay automatizaciones que es mejor hacer localmente: reaccionar a la caída de una interfaz, añadir una comprobación cuando alguien hace commit de un cambio o recoger diagnósticos en el momento del fallo. Embedded Event Manager y Guest Shell de Cisco, los scripts de commit y eventos de Junos, y Python en SR Linux, EOS y NX-OS lo permiten. Complementa, no sustituye, a la automatización externa.

## Conceptos clave

- Automatización por eventos
- Applets EEM de Cisco
- Guest Shell y Python en el equipo
- Scripts de commit, op y eventos de Junos
- Agentes en SR Linux y EOS
- Cuándo elegir automatización en el equipo o externa

## Antes de empezar

- [Python para ingenieros de redes](python-for-networks.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Escribe un applet EEM (o un event handler de SR Linux) que registre y guarde diagnósticos cada vez que una interfaz concreta se caiga.

## Temas relacionados

- [YANG, NETCONF y RESTCONF](./yang-netconf-restconf.md)
- [Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC](./model-driven-telemetry.md)
- [NetDevOps, CI/CD y gemelos digitales](./netdevops.md)
- [IA en la operación de redes](./ai-for-networks.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
