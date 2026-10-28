---
title: "Data formats: JSON, XML and YAML"
description: "The structured data formats used by APIs and automation tools, and how to read and write them."
sidebar_position: 2
---

# Data formats: JSON, XML and YAML

**Level:** Beginner · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Automation is about structured data. JSON is the lingua franca of REST APIs; XML is used by NETCONF; YAML is used by Ansible, Containerlab and many configuration files because humans can read and write it. Being able to read, validate and convert between them is a daily skill.

## Key concepts

- JSON objects, arrays and types
- XML elements, attributes and namespaces
- YAML syntax and pitfalls
- Converting between formats
- Schemas and validation
- Jinja2 templates producing text

## Before you start

- No prerequisites beyond the [Network Fundamentals](../01-fundamentals/index.md) section.

## Standards and specifications

- [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)
- [YAML specification](https://yaml.org/spec/)
- [W3C — Extensible Markup Language (XML)](https://www.w3.org/TR/xml/)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 60: JSON, XML and YAML](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [jq manual](https://jqlang.org/manual/) | Docs | Beginner | Free |

## Bibliography

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)

## Hands-on lab

Take a device's JSON output (e.g. from an API or 'show ... | json'), extract fields with jq and convert the result to YAML.

## Related topics

- [Network management approaches](./management-approaches.md)
- [REST APIs](./rest-apis.md)
- [Configuration management: Ansible, Terraform, Puppet and Chef](./configuration-management.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
