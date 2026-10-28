---
title: "Fábricas de campus: SD-Access, LISP y VXLAN"
description: "Llevar los conceptos de fábrica al campus: overlay con VXLAN, plano de control con LISP o EVPN y políticas basadas en grupos."
sidebar_position: 6
---

# Fábricas de campus: SD-Access, LISP y VXLAN

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Las fábricas de campus sustituyen la proliferación de VLAN y spanning tree por un underlay enrutado y un overlay que sigue a los usuarios allí donde se conecten. Cisco SD-Access usa LISP como plano de control, VXLAN como plano de datos y Security Group Tags para las políticas, orquestado por Catalyst Center; otros fabricantes construyen fábricas de campus con EVPN-VXLAN. Los conceptos se evalúan en ENCOR y en el CCIE Enterprise.

:::info Notas sobre fabricantes
SD-Access es la implementación de Cisco. Juniper, Arista, Aruba y Huawei ofrecen fábricas de campus basadas en EVPN-VXLAN.
:::

## Conceptos clave

- Underlay y overlay en el campus
- Nodos fabric edge, border y de plano de control
- Fábricas de campus basadas en LISP frente a EVPN
- Macro y microsegmentación
- Políticas basadas en grupos (SGT)
- Aprovisionamiento desde controladora

## Antes de empezar

- [VXLAN, Geneve y EVPN](vxlan-evpn.md)
- [LISP](../06-wan-and-vpn/lisp.md)

## Estándares y especificaciones

- [RFC 9300 — The Locator/ID Separation Protocol (LISP)](https://www.rfc-editor.org/rfc/rfc9300)
- [RFC 7348 — VXLAN](https://www.rfc-editor.org/rfc/rfc7348)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [Cisco DevNet sandboxes (free labs)](https://developer.cisco.com/site/sandbox/) | Laboratorios | Intermedio | Gratis |

## Bibliografía

- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

_Todavía no hay laboratorio._ ¿Se te ocurre un ejercicio práctico? [Las contribuciones son bienvenidas](../00-start-here/contributing.md).

## Temas relacionados

- [Fábricas de centro de datos: leaf-spine y BGP en el DC](./dc-fabrics.md)
- [VXLAN, Geneve y EVPN](./vxlan-evpn.md)
- [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](./ai-networking.md)
- [Aceleración del plano de datos: DPDK, SR-IOV, DPU, eBPF/XDP y P4](./data-plane-acceleration.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
