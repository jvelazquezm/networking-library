---
title: "YANG, NETCONF y RESTCONF"
description: "Gestión dirigida por modelos: modelos de datos YANG (IETF, OpenConfig, nativos), transacciones NETCONF y RESTCONF sobre HTTP."
sidebar_position: 7
---

# YANG, NETCONF y RESTCONF

**Nivel:** Intermedio · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

La programabilidad dirigida por modelos sustituye el screen-scraping por datos estructurados y validados. YANG define el esquema de la configuración y el estado; NETCONF lo manipula sobre SSH con datastores, bloqueos y commits; y RESTCONF expone los mismos modelos sobre HTTP con JSON o XML. OpenConfig ofrece modelos neutrales que usan los grandes operadores.

## Conceptos clave

- Módulos, containers, lists y leaves de YANG
- Configuración frente a estado operativo
- Modelos IETF, OpenConfig y nativos
- Datastores y operaciones NETCONF
- Configuración candidata y confirmed commit
- Recursos RESTCONF
- Herramientas: pyang, ncclient

## Antes de empezar

- [Formatos de datos: JSON, XML y YAML](data-formats.md)

## Estándares y especificaciones

- [RFC 7950 — The YANG 1.1 Data Modeling Language](https://www.rfc-editor.org/rfc/rfc7950)
- [RFC 6241 — Network Configuration Protocol (NETCONF)](https://www.rfc-editor.org/rfc/rfc6241)
- [RFC 8040 — RESTCONF Protocol](https://www.rfc-editor.org/rfc/rfc8040)
- [RFC 8342 — Network Management Datastore Architecture (NMDA)](https://www.rfc-editor.org/rfc/rfc8342)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [OpenConfig](https://www.openconfig.net/) | Modelos | Intermedio | Gratis |
| [YANG Catalog](https://www.yangcatalog.org/) | Referencia | Intermedio | Gratis |
| [ncclient documentation](https://ncclient.readthedocs.io/) | Documentación | Intermedio | Gratis |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Laboratorios | Intermedio | Gratis |

## Bibliografía

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Explora el modelo de interfaces de OpenConfig con pyang y después lee y modifica una interfaz de un equipo de laboratorio con ncclient y con RESTCONF.

## Temas relacionados

- [Python para ingenieros de redes](./python-for-networks.md)
- [Plantillas y fuente de verdad: Jinja2 y NetBox](./templating-and-source-of-truth.md)
- [Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC](./model-driven-telemetry.md)
- [Automatización en el equipo: EEM y Python en el dispositivo](./on-box-automation.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
