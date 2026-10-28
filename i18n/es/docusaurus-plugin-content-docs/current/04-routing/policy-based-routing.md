---
title: "Enrutamiento basado en políticas"
description: "Reenviar paquetes según criterios distintos del destino: origen, aplicación o DSCP."
sidebar_position: 10
---

# Enrutamiento basado en políticas

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

El enrutamiento basado en políticas sobrescribe la tabla de rutas para el tráfico seleccionado, por ejemplo para enviar el tráfico de invitados por un enlace a Internet más barato o forzar que una aplicación pase por un firewall. Es fácil de configurar pero también de olvidar, así que debe documentarse y combinarse con seguimiento para que conmute cuando el camino elegido caiga.

## Conceptos clave

- Criterios de selección: origen, destino, protocolo, DSCP
- Fijar siguiente salto o VRF
- PBR local frente a de tránsito
- Seguimiento y conmutación
- PBR frente al enrutamiento por aplicación de SD-WAN

## Antes de empezar

- [Enrutamiento estático](static-routing.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |

## Bibliografía

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (De pago)

## Laboratorio práctico

Usa PBR para enviar el tráfico de una subred por un segundo ISP mientras el resto sigue la ruta por defecto, con seguimiento para la conmutación.

## Temas relacionados

- [BGP avanzado](./bgp-advanced.md)
- [Redistribución, filtrado de rutas y route maps](./redistribution-and-filtering.md)
- [VRF y VRF-Lite](./vrf.md)
- [Redundancia de primer salto: VRRP, HSRP y GLBP](./first-hop-redundancy.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
