---
title: "Redistribución, filtrado de rutas y route maps"
description: "Pasar rutas entre protocolos de forma segura y controlar qué rutas se aceptan o se anuncian."
sidebar_position: 9
---

# Redistribución, filtrado de rutas y route maps

**Nivel:** Intermedio · **Sección:** [Enrutamiento IP](./index.md)

## Visión general

Las redes reales ejecutan varios protocolos de enrutamiento y deben intercambiar rutas entre ellos. La redistribución es potente y peligrosa: la redistribución mutua en varios puntos puede crear bucles y enrutamiento subóptimo. Las listas de prefijos, los route maps (Cisco) o políticas de enrutamiento (Junos, SR OS), las etiquetas y el ajuste de distancias la mantienen bajo control.

## Conceptos clave

- Redistribución entre IGP y BGP
- Métricas semilla
- Listas de prefijos y listas de acceso
- Route maps y políticas de enrutamiento
- Etiquetas de ruta para evitar bucles
- Distribute lists y ajuste de la distancia administrativa

## Antes de empezar

- [OSPF](ospf.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [ipSpace.net blog (Ivan Pepelnjak)](https://blog.ipspace.net/) | Blog | Avanzado | Gratis |

## Bibliografía

- *CCNP Enterprise Advanced Routing ENARSI 300-410 Official Cert Guide* — Raymond Lacoste, Brad Edgeworth (De pago)
- *Routing TCP/IP, Volume I and II* — Jeff Doyle (De pago)

## Laboratorio práctico

Redistribuye mutuamente entre OSPF y EIGRP (u OSPF e IS-IS) en dos puntos, reproduce un bucle de enrutamiento y corrígelo con etiquetas.

## Temas relacionados

- [Fundamentos de BGP](./bgp-fundamentals.md)
- [BGP avanzado](./bgp-advanced.md)
- [Enrutamiento basado en políticas](./policy-based-routing.md)
- [VRF y VRF-Lite](./vrf.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
