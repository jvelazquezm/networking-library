---
title: "Virtualización: hipervisores, VM y conmutación virtual"
description: "Hipervisores de tipo 1 y tipo 2, máquinas virtuales, NIC virtuales y switches virtuales."
sidebar_position: 1
---

# Virtualización: hipervisores, VM y conmutación virtual

**Nivel:** Principiante · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

La virtualización ejecuta muchos sistemas operativos en un mismo servidor físico. Los hipervisores ofrecen NIC virtuales conectadas a switches virtuales dentro del servidor, que a su vez se conectan a la red física. Entender dónde está realmente el primer «switch» (dentro del servidor) cambia cómo diseñas VLAN, seguridad y diagnóstico en los centros de datos.

## Conceptos clave

- Hipervisores de tipo 1 frente a tipo 2
- NIC virtuales y switches virtuales
- Linux bridge y Open vSwitch
- VLAN y trunks hacia los hipervisores
- Movilidad de VM y su impacto en la red
- Modelos de servicio cloud

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 54: Virtualization and cloud (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Open vSwitch documentation](https://docs.openvswitch.org/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Ejecuta dos VM en KVM conectadas a un bridge de Open vSwitch con etiquetas VLAN distintas y haz trunk del bridge hacia un switch físico (o virtual).

## Temas relacionados

- [Contenedores y redes de contenedores](./containers.md)
- [SDN y redes basadas en controladora](./sdn.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
