---
title: "VXLAN, Geneve y EVPN"
description: "Overlays para centros de datos multi-tenant: encapsulación VXLAN y Geneve con un plano de control EVPN."
sidebar_position: 5
---

# VXLAN, Geneve y EVPN

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Los overlays permiten que cada cliente tenga sus propias redes de capa 2 y capa 3 sobre una fábrica enrutada compartida. VXLAN encapsula tramas Ethernet en UDP con un VNI de 24 bits; Geneve añade opciones extensibles y lo usan muchas plataformas cloud y SDN. EVPN distribuye la alcanzabilidad MAC e IP con BGP, evitando el «inundar y aprender» y permitiendo anycast gateways y multihoming.

## Conceptos clave

- Cabecera VXLAN y VNI
- VTEP y replicación BUM (ingress, multicast)
- Geneve
- Rutas EVPN de tipo 2, 3 y 5
- L2VNI frente a L3VNI
- IRB simétrico y asimétrico
- Anycast gateway
- Multi-sitio y DCI

## Antes de empezar

- [Fábricas de centro de datos: leaf-spine y BGP en el DC](dc-fabrics.md)
- [EVPN](../07-service-provider/evpn.md)

## Estándares y especificaciones

- [RFC 7348 — Virtual eXtensible Local Area Network (VXLAN)](https://www.rfc-editor.org/rfc/rfc7348)
- [RFC 8926 — Geneve: Generic Network Virtualization Encapsulation](https://www.rfc-editor.org/rfc/rfc8926)
- [RFC 8365 — Network Virtualization Overlay Solution Using EVPN](https://www.rfc-editor.org/rfc/rfc8365)
- [RFC 9135 — Integrated Routing and Bridging in EVPN](https://www.rfc-editor.org/rfc/rfc9135)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Nokia SR Linux — learn.srlinux.dev tutorials](https://learn.srlinux.dev/) | Tutoriales | Intermedio | Gratis |
| [Containerlab](https://containerlab.dev/) | Herramienta de laboratorio | Intermedio | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *EVPN in the Data Center* — Dinesh Dutt (De pago)
- *Cloud Native Data Center Networking* — Dinesh Dutt (De pago)

## Laboratorio práctico

Añade VXLAN/EVPN al laboratorio leaf-spine, extiende un segmento de capa 2 entre leaves y añade una L3VNI enrutada con anycast gateway.

## Temas relacionados

- [SDN y redes basadas en controladora](./sdn.md)
- [Fábricas de centro de datos: leaf-spine y BGP en el DC](./dc-fabrics.md)
- [Fábricas de campus: SD-Access, LISP y VXLAN](./campus-fabrics.md)
- [Redes para centros de datos de IA: RoCEv2, InfiniBand y Ultra Ethernet](./ai-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
