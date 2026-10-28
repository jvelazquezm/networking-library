---
title: "APIs REST"
description: "Cómo funcionan las APIs REST: recursos, métodos HTTP y CRUD, códigos de estado, autenticación y herramientas como curl y Postman."
sidebar_position: 3
---

# APIs REST

**Nivel:** Principiante · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

Las controladoras, las plataformas cloud y los equipos modernos exponen APIs REST: recursos identificados por URL y manipulados con métodos HTTP que equivalen a crear, leer, actualizar y borrar. Las respuestas llevan JSON y códigos de estado; la autenticación usa tokens o claves. Leer documentación de APIs y hacer llamadas con curl, Postman o Python es una habilidad básica de automatización.

## Conceptos clave

- Recursos y URI
- Verbos HTTP y CRUD
- Códigos de estado
- Autenticación: básica, tokens, OAuth
- Paginación y límites de peticiones
- Documentación de APIs (OpenAPI)
- Seguridad de las APIs REST

## Antes de empezar

- [Formatos de datos: JSON, XML y YAML](data-formats.md)

## Estándares y especificaciones

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- [Roy Fielding — Architectural Styles (REST dissertation)](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 61: REST APIs (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [MDN Web Docs — HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) | Documentación | Principiante | Gratis |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Laboratorios | Intermedio | Gratis |

## Bibliografía

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)

## Laboratorio práctico

Usa curl y después Python requests para leer y modificar un recurso en una API de demostración gratuita de DevNet o de NetBox.

## Temas relacionados

- [Enfoques de gestión de redes](./management-approaches.md)
- [Formatos de datos: JSON, XML y YAML](./data-formats.md)
- [Gestión de la configuración: Ansible, Terraform, Puppet y Chef](./configuration-management.md)
- [Python para ingenieros de redes](./python-for-networks.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
