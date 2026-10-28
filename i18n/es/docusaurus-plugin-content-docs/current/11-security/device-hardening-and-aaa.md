---
title: "Bastionado de equipos, AAA y CoPP"
description: "Proteger los equipos de red: contraseñas y privilegios, AAA con RADIUS y TACACS+, protección del plano de gestión y Control Plane Policing."
sidebar_position: 3
---

# Bastionado de equipos, AAA y CoPP

**Nivel:** Principiante · **Sección:** [Seguridad](./index.md)

## Visión general

Un router comprometido compromete la red. El bastionado incluye credenciales locales robustas y una política de contraseñas, AAA centralizado con TACACS+ o RADIUS, MFA para los administradores, desactivar servicios innecesarios, restringir el acceso de gestión y proteger el plano de control frente a inundaciones con CoPP. Los fabricantes publican guías de bastionado que merece la pena seguir línea a línea.

## Conceptos clave

- Usuarios locales, niveles de privilegio y hash de contraseñas
- Política de contraseñas, MFA y certificados
- AAA: autenticación, autorización y registro
- TACACS+ frente a RADIUS
- Restricciones del plano de gestión
- Control Plane Policing / protection
- Guías de bastionado de los fabricantes

## Antes de empezar

- Nada más allá de la sección [Fundamentos de redes](../01-fundamentals/index.md).

## Estándares y especificaciones

- [RFC 8907 — The TACACS+ Protocol](https://www.rfc-editor.org/rfc/rfc8907)
- [RFC 2865 — Remote Authentication Dial In User Service (RADIUS)](https://www.rfc-editor.org/rfc/rfc2865)

## Recursos de aprendizaje

La mayoría de los recursos están en inglés.

| Recurso | Tipo | Nivel | Coste |
| --- | --- | --- | --- |
| [Jeremy's IT Lab — curso gratuito de CCNA, día 4 y día 48: Basic device security; security fundamentals (en inglés)](https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ) | Curso en vídeo | Principiante | Gratis |
| [Jeremy's IT Lab — curso CCNP ENCOR (YouTube, en construcción)](https://www.jeremysitlab.com/encor-youtube) | Curso en vídeo | Intermedio | Gratis |
| [FreeRADIUS documentation](https://www.freeradius.org/documentation/) | Documentación | Intermedio | Gratis |

## Bibliografía

- *CCNA 200-301 Official Cert Guide (Volumes 1 and 2)* — Wendell Odom (De pago)
- *CCNP and CCIE Enterprise Core ENCOR 350-401 Official Cert Guide* — Brad Edgeworth, Ramiro Garza Rios, Jason Gooley, David Hucaby (De pago)

## Laboratorio práctico

Configura un router para autenticar a los administradores contra un servidor TACACS+ o FreeRADIUS con autorización por comando y respaldo local.

## Temas relacionados

- [Conceptos y programas de seguridad](./security-concepts.md)
- [Criptografía básica para redes](./cryptography-basics.md)
- [Listas de control de acceso](./acls.md)
- [Seguridad de capa 2](./layer2-security.md)

:::note Ayuda a mejorar esta página
¿Conoces un recurso gratuito mejor, has visto un error o un enlace desactualizado? Consulta la [guía de contribución](../00-start-here/contributing.md).
:::
