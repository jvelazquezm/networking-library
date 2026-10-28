---
title: "Python para ingenieros de redes"
description: "Fundamentos de Python aplicados a redes: conectarse a equipos, analizar salidas, llamar a APIs y construir pequeñas herramientas."
sidebar_position: 5
---

# Python para ingenieros de redes

**Nivel:** Intermedio · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

Python es el lenguaje por defecto de la automatización de redes. Bibliotecas como Netmiko y Scrapli gestionan las sesiones SSH, NAPALM y Nornir añaden abstracción multifabricante y concurrencia, TextFSM y Genie analizan la salida de la CLI y requests habla con las APIs. Empieza con scripts pequeños que te ahorren tiempo y crece desde ahí.

## Conceptos clave

- Fundamentos de Python, estructuras de datos y archivos
- Entornos virtuales
- Netmiko y Scrapli (SSH)
- Análisis de salidas: TextFSM, TTP
- NAPALM y Nornir
- requests y clientes de APIs
- Gestión de errores y registros

## Antes de empezar

- [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](configuration-management.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Kirk Byers — free Python for network engineers course](https://pynet.twb-tech.com/) | Curso | Principiante | Gratis |
| [Python for Network Engineers (Natasha Samoylenko)](https://pyneng.readthedocs.io/en/latest/) | Libro abierto | Intermedio | Gratis |
| [Netmiko](https://github.com/ktbyers/netmiko) | Biblioteca | Intermedio | Gratis |
| [Nornir documentation](https://nornir.readthedocs.io/) | Documentación | Intermedio | Gratis |
| [NAPALM documentation](https://napalm.readthedocs.io/) | Documentación | Intermedio | Gratis |

## Bibliografía

- [*Python for Network Engineers*](https://pyneng.readthedocs.io/en/latest/) — Natasha Samoylenko (Gratis)
- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)

## Laboratorio práctico

Escribe un script que haga copia de la configuración de todos los equipos de un inventario e informe de cuáles han cambiado desde ayer.

## Temas relacionados

- [APIs REST](./rest-apis.md)
- [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](./configuration-management.md)
- [Plantillas y fuente de verdad: Jinja2 y NetBox](./templating-and-source-of-truth.md)
- [YANG, NETCONF y RESTCONF](./yang-netconf-restconf.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
