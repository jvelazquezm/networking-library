---
title: "Contribuir"
description: "Cómo proponer recursos, mejorar páginas y añadir temas nuevos."
sidebar_position: 4
---

# Contribuir

Esta biblioteca es tan buena como su comunidad. Cada página tiene un enlace **Editar esta página** al final que abre el archivo en GitHub.

## Formas de ayudar

- **Propón un recurso**: abre una incidencia con la plantilla *Suggest a resource*.
- **Mejora un tema**: añade explicaciones, laboratorios, diagramas o mejores recursos mediante un pull request.
- **Corrige algo desactualizado**: enlaces rotos, releases antiguas, temarios de certificación que han cambiado.
- **Propón un tema o una ruta de aprendizaje**: abre primero una incidencia para acordar dónde encaja.

## Nuestra política de recursos: primero lo abierto

Queremos que cualquiera pueda usar esta biblioteca sin pagar.

1. **Primero los recursos gratuitos y abiertos.** Se prefieren libros abiertos, estándares, documentación de fabricantes, cursos gratuitos y artículos de la comunidad.
2. **Los recursos de pago son bienvenidos cuando aportan algo único** (libros clásicos, guías oficiales de certificación) y siempre se marcan como *De pago*.
3. **Sin enlaces de afiliado.** Enlaza directamente a la editorial o a la página del producto.
4. **Enlaza, nunca copies.** No subas ni pegues libros, artículos o cursos con derechos de autor.

## Idiomas

La biblioteca está en inglés y en español.

- **El inglés es el idioma de origen.** Las páginas en inglés están en la carpeta `docs/`.
- **Las traducciones al español** están en `i18n/es/docusaurus-plugin-content-docs/current/`, con la misma estructura de carpetas.
- **Si cambias una página en un idioma**, intenta actualizar también la otra. Si no puedes, indícalo en el pull request y otra persona la traducirá.
- Si una página no tiene traducción, la web en español muestra la versión en inglés.

## Añadir un recurso

Añade una fila a la tabla **Recursos de aprendizaje** del tema:

```markdown
| [Título (Autor, año)](https://example.org/) | Libro abierto | Intermedio | Gratis |
```

Los libros van en la lista de **Bibliografía**:

```markdown
- *Título del libro* — Autores (De pago)
```

En las áreas que cambian rápido, indica la versión, la release o el año, por ejemplo *(3GPP Rel-18)* o *(2026)*.

## Añadir un tema

Copia `templates/topic-template.md` del repositorio en la carpeta de la sección correcta, rellénalo y añádelo a la tabla de la visión general de la sección. Mantén los mismos encabezados para que todas las páginas sean coherentes.

## Licencia

Al contribuir aceptas que el contenido se publique bajo **CC BY-SA 4.0** y el código bajo **MIT**.
