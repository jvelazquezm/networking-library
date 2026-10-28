---
title: "Gestión de la configuración: Ansible, Terraform, Puppet y Chef"
description: "Herramientas que aplican configuración a escala: con o sin agente, push o pull, declarativas o procedimentales."
sidebar_position: 4
---

# Gestión de la configuración: Ansible, Terraform, Puppet y Chef

**Nivel:** Principiante · **Sección:** [Automatización, programabilidad e IA](./index.md)

## Visión general

Las herramientas de gestión de la configuración describen el estado deseado de muchos equipos y lo aplican de forma coherente. Ansible no usa agente y empuja la configuración por SSH o APIs, lo que lo convirtió en el favorito para redes; Puppet y Chef usan agente y funcionan por pull, habituales en servidores; Terraform gestiona infraestructura de forma declarativa mediante providers, incluidas las nubes y algunas plataformas de red. El CCNA cubre la comparación; el CCNP y niveles superiores esperan que las uses.

## Conceptos clave

- Con agente frente a sin agente
- Push frente a pull
- Declarativo frente a procedimental
- Inventarios, playbooks y módulos de Ansible
- Idempotencia
- Providers y estado de Terraform
- Conceptos de Puppet y Chef

## Antes de empezar

- [Formatos de datos: JSON, XML y YAML](data-formats.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 63: Ansible, Puppet and Chef (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Ansible documentation (Network Automation guide)](https://docs.ansible.com/) | Documentación | Intermedio | Gratis |
| [Terraform documentation](https://developer.hashicorp.com/terraform/docs) | Documentación | Intermedio | Gratis |

## Bibliografía

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (De pago)

## Laboratorio práctico

Escribe un playbook de Ansible que configure VLAN y descripciones de interfaz en dos switches de laboratorio y ejecútalo dos veces para ver la idempotencia.

## Temas relacionados

- [Formatos de datos: JSON, XML y YAML](./data-formats.md)
- [APIs REST](./rest-apis.md)
- [Python para ingenieros de redes](./python-for-networks.md)
- [Plantillas y fuente de verdad: Jinja2 y NetBox](./templating-and-source-of-truth.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
