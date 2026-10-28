---
title: "Python for network engineers"
description: "Python fundamentals applied to networks: connecting to devices, parsing output, calling APIs and building small tools."
sidebar_position: 5
---

# Python for network engineers

**Level:** Intermediate · **Section:** [Automation, Programmability and AI](./index.md)

## Overview

Python is the default language of network automation. Libraries such as Netmiko and Scrapli handle SSH sessions, NAPALM and Nornir add multi-vendor abstraction and concurrency, TextFSM and Genie parse CLI output, and requests talks to APIs. Start with small scripts that save you time and grow from there.

## Key concepts

- Python basics, data structures and files
- Virtual environments
- Netmiko and Scrapli (SSH)
- Parsing: TextFSM, TTP
- NAPALM and Nornir
- requests and API clients
- Error handling and logging

## Before you start

- [Configuration management: Ansible, Terraform, Puppet and Chef](configuration-management.md)

## Standards and specifications

_No single defining standard — this topic is mostly about design, practice or implementation._

## Learning resources

| Resource | Type | Level | Cost |
| --- | --- | --- | --- |
| [Kirk Byers — free Python for network engineers course](https://pynet.twb-tech.com/) | Course | Beginner | Free |
| [Python for Network Engineers (Natasha Samoylenko)](https://pyneng.readthedocs.io/en/latest/) | Open book | Intermediate | Free |
| [Netmiko](https://github.com/ktbyers/netmiko) | Library | Intermediate | Free |
| [Nornir documentation](https://nornir.readthedocs.io/) | Docs | Intermediate | Free |
| [NAPALM documentation](https://napalm.readthedocs.io/) | Docs | Intermediate | Free |

## Bibliography

- [*Python for Network Engineers*](https://pyneng.readthedocs.io/en/latest/) — Natasha Samoylenko (Free)
- *Network Programmability and Automation* — Matt Oswalt, Christian Adell, Scott S. Lowe, Jason Edelman (Paid)

## Hands-on lab

Write a script that backs up the configuration of every device in an inventory file and reports which ones changed since yesterday.

## Related topics

- [REST APIs](./rest-apis.md)
- [Configuration management: Ansible, Terraform, Puppet and Chef](./configuration-management.md)
- [Templating and source of truth: Jinja2 and NetBox](./templating-and-source-of-truth.md)
- [YANG, NETCONF and RESTCONF](./yang-netconf-restconf.md)

:::note Help improve this page
Found a better free resource, a mistake or an outdated link? See the [contribution guide](../00-start-here/contributing.md).
:::
