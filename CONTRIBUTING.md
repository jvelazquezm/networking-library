# Contributing

Thanks for helping build The Networking Library. The full guide is published on the site under **Start here → Contribute** (`docs/00-start-here/contributing.md`). This is the summary.

## Quick ways to help

- **Suggest a resource**: open an issue with the *Suggest a resource* template.
- **Edit a page**: use the *Edit this page* link at the bottom of any page, or open a pull request.
- **Propose a topic or learning path**: open an issue with the *Propose a topic* template first.
- **Update a certification map** when a vendor changes its blueprint.

## Resource policy: open first

1. **Free and open resources come first.** Paid resources are welcome when they add something unique and are always marked *Paid*.
2. **No affiliate links.** Link directly to the publisher or product page.
3. **Link, never copy.** No PDFs or copied text from copyrighted books, papers or courses.
4. **State the version** (release, edition or year) for fast-moving areas.

## Languages: English and Spanish

- English pages (the source) live in `docs/`.
- Spanish pages live in `i18n/es/docusaurus-plugin-content-docs/current/`, mirroring the same paths.
- Update both languages in the same pull request when you can. If you only write one, say so and someone will translate it — the pull request check lists English pages changed without their Spanish counterpart.
- Navbar, footer and interface strings are in `i18n/es/docusaurus-theme-classic/` and `i18n/es/code.json`; homepage text is in `src/data/home.js`.

## Formats

Learning resources table row:

```markdown
| [Title (Author, year)](https://example.org/) | Open book | Intermediate | Free |
```

Bibliography entry:

```markdown
- *Book title* — Author names (Paid)
```

New topics start from `templates/topic-template.md`. Keep the headings so every page stays consistent.

## Checks

Run `npm run build` before opening a pull request — it fails on broken internal links. External links are checked by CI on every pull request and every week.

AI-assisted contributions are welcome, but a human must check them for accuracy.

## Licence

By contributing you agree that content is published under CC BY-SA 4.0 and code under MIT.
