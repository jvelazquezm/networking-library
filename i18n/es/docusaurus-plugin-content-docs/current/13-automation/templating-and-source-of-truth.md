---
title: "Plantillas y fuente de verdad: Jinja2 y NetBox"
description: "Generar configuraciones a partir de datos con Jinja2 y mantener el estado deseado en una fuente de verdad como NetBox."
sidebar_position: 6
---

# Plantillas y fuente de verdad: Jinja2 y NetBox

**Nivel:** Intermedio · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

La automatización escalable separa los datos de la configuración. Una fuente de verdad como NetBox almacena equipos, interfaces, direcciones IP, VLAN y circuitos; las plantillas Jinja2 convierten esos datos en configuraciones de cada fabricante; y los pipelines las aplican y comprueban la deriva. Es el patrón que siguen la mayoría de los equipos de automatización maduros.

## Conceptos clave

- Estado deseado frente a estado real
- Modelo de datos de NetBox
- APIs y plugins de NetBox
- Sintaxis Jinja2: variables, bucles, filtros
- Plantillas por fabricante
- Detección de deriva

## Antes de empezar

- [Python para ingenieros de redes](python-for-networks.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [NetBox documentation](https://netboxlabs.com/docs/netbox/) | Documentación | Intermedio | Gratis |
| [Jinja2 template designer documentation](https://jinja.palletsprojects.com/en/stable/templates/) | Documentación | Intermedio | Gratis |
| [NetBox demo instance](https://demo.netbox.dev/) | Demo | Intermedio | Gratis |

## Bibliografía

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)

## Laboratorio práctico

Modela una pequeña fábrica en NetBox y genera con Jinja2 las configuraciones de sus equipos usando la API de NetBox.

## Temas relacionados

- [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](./configuration-management.md)
- [Python para ingenieros de redes](./python-for-networks.md)
- [YANG, NETCONF y RESTCONF](./yang-netconf-restconf.md)
- [Telemetría y operación dirigidas por modelos: gNMI, gNOI y gRPC](./model-driven-telemetry.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
