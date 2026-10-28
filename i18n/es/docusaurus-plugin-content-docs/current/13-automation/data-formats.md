---
title: "Formatos de datos: JSON, XML y YAML"
description: "Los formatos de datos estructurados que usan las APIs y las herramientas de automatización, y cómo leerlos y escribirlos."
sidebar_position: 2
---

# Formatos de datos: JSON, XML y YAML

**Nivel:** Principiante · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

La automatización va de datos estructurados. JSON es la lengua franca de las APIs REST; NETCONF usa XML; y YAML lo usan Ansible, Containerlab y muchos archivos de configuración porque las personas pueden leerlo y escribirlo. Saber leer, validar y convertir entre ellos es una habilidad diaria.

## Conceptos clave

- Objetos, arrays y tipos JSON
- Elementos, atributos y espacios de nombres XML
- Sintaxis YAML y sus trampas
- Convertir entre formatos
- Esquemas y validación
- Plantillas Jinja2 que generan texto

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

- [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)
- [YAML specification](https://yaml.org/spec/)
- [W3C — Extensible Markup Language (XML)](https://www.w3.org/TR/xml/)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 60: JSON, XML and YAML (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [jq manual](https://jqlang.org/manual/) | Documentación | Principiante | Gratis |

## Bibliografía

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)

## Laboratorio práctico

Toma la salida JSON de un equipo (por ejemplo de una API o de «show ... | json»), extrae campos con jq y convierte el resultado a YAML.

## Temas relacionados

- [Enfoques de gestión de redes](./management-approaches.md)
- [APIs REST](./rest-apis.md)
- [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](./configuration-management.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
