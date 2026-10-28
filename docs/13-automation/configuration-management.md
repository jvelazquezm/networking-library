---
title: "Configuration management: Ansible, Terraform, Puppet and Chef"
description: "Tools that apply configuration at scale: agentless vs agent-based, push vs pull, declarative vs procedural."
sidebar_position: 4
---

# Configuration management: Ansible, Terraform, Puppet and Chef

**Level:** Beginner · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Configuration management tools describe the desired state of many devices and apply it consistently. Ansible is agentless and push-based over SSH or APIs, which made it the network favourite; Puppet and Chef are agent-based and pull-based, common on servers; Terraform manages infrastructure declaratively through providers, including clouds and some network platforms. CCNA covers the comparison; CCNP and beyond expect you to use them.

## Key concepts

- Agentless vs agent-based
- Push vs pull
- Declarative vs procedural
- Ansible inventories, playbooks and modules
- Idempotency
- Terraform providers and state
- Puppet and Chef concepts

## Before you start

- [Data formats: JSON, XML and YAML](data-formats.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — Free CCNA course, Day 63: Ansible, Puppet and Chef](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Video course | Beginner | Free |
| [Ansible network automation guide](https://docs.ansible.com/ansible/latest/network/index.html) | Docs | Intermediate | Free |
| [Terraform documentation](https://developer.hashicorp.com/terraform/docs) | Docs | Intermediate | Free |

## Bibliography

- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)

## Hands-on lab

Write an Ansible playbook that configures VLANs and interface descriptions on two lab switches, and run it twice to see idempotency.

## Related topics

- [Data formats: JSON, XML and YAML](./data-formats.md)
- [REST APIs](./rest-apis.md)
- [Python for network engineers](./python-for-networks.md)
- [Templating and source of truth: Jinja2 and NetBox](./templating-and-source-of-truth.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
