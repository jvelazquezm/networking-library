---
title: "Redes en la nube pública: AWS, Azure y GCP"
description: "Redes virtuales en la nube: VPC/VNet, subredes, enrutamiento, pasarelas, security groups, peering y conectividad híbrida."
sidebar_position: 12
---

# Redes en la nube pública: AWS, Azure y GCP

**Nivel:** Intermedio · **Sección:** [Centro de datos, virtualización y cloud](./index.md)

## Visión general

Cada proveedor cloud te da una red definida por software con sus propias reglas. Las VPC (AWS, GCP) y las VNet (Azure) contienen subredes, tablas de rutas y pasarelas de Internet y NAT; los security groups y las ACL de red filtran el tráfico; el peering y los hubs de tránsito conectan redes; y las VPN y las interconexiones dedicadas llegan a las sedes propias. Los conceptos son conocidos, pero los valores por defecto y los límites difieren en aspectos importantes.

## Conceptos clave

- VPC, VNet y subredes
- Tablas de rutas y pasarelas
- Security groups frente a ACL de red
- Peering y hubs de tránsito
- Balanceadores de carga en la nube
- VPN e interconexiones dedicadas
- Redes multi-cloud

## Antes de empezar

- [Subnetting, VLSM y superredes](../01-fundamentals/subnetting.md)

## Estándares y especificaciones

_No hay un estándar único que lo defina: este tema trata sobre todo de diseño, práctica o implementación._

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [AWS — Amazon VPC user guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) | Documentación | Intermedio | Gratis |
| [Microsoft Learn — Azure Virtual Network overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) | Documentación | Intermedio | Gratis |
| [Google Cloud — VPC overview](https://cloud.google.com/vpc/docs/overview) | Documentación | Intermedio | Gratis |

## Bibliografía

_Todavía no hay libros._

## Laboratorio práctico

Monta en la capa gratuita de una nube una VPC de dos niveles con subredes públicas y privadas, una pasarela NAT y una VPN entre sedes, y después elimínala.

## Temas relacionados

- [Redes en Kubernetes](./kubernetes-networking.md)
- [Service mesh](./service-mesh.md)
- [Redes de almacenamiento: SAN, iSCSI y NVMe-oF](./storage-networking.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
