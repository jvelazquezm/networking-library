---
title: "REST APIs"
description: "How REST APIs work: resources, HTTP methods and CRUD, status codes, authentication and tools like curl and Postman."
sidebar_position: 3
---

# REST APIs

**Level:** Beginner · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Controllers, cloud platforms and modern devices expose REST APIs: resources identified by URLs, manipulated with HTTP methods that map to create, read, update and delete. Responses carry JSON and status codes; authentication uses tokens or keys. Reading API documentation and making calls with curl, Postman or Python is a core automation skill.

## Key concepts

- Resources and URIs
- HTTP verbs and CRUD
- Status codes
- Authentication: basic, tokens, OAuth
- Pagination and rate limiting
- API documentation (OpenAPI)
- REST API security

## Before you start

- [Data formats: JSON, XML and YAML](data-formats.md)

## Standards and specifications

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- [Roy Fielding — Architectural Styles (REST dissertation)](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm)

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 61: REST APIs](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [MDN Web Docs — HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) | Docs | Beginner | Free |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Labs | Intermediate | Free |

## Bibliography

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)

## Hands-on lab

Use curl and then Python requests to read and change a resource on a free DevNet or NetBox demo API.

## Related topics

- [Network management approaches](./management-approaches.md)
- [Data formats: JSON, XML and YAML](./data-formats.md)
- [Configuration management: Ansible, Terraform, Puppet and Chef](./configuration-management.md)
- [Python for network engineers](./python-for-networks.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
