# Contributing

Thanks for helping build The Networking Library. The full guide is published on the site under **Start here → Contribute** (`docs/00-start-here/contributing.md`). This is the summary.

## Quick ways to help

- **Suggest a resource**: open an issue with the *Suggest a resource* template.
- **Edit a page**: use the *Edit this page* link at the bottom of any page, or open a pull request.
- **Propose a topic or learning path**: open an issue with the *Propose a topic* template first.

## Resource format

Add a row to the **Learning resources** table of the topic page:

```markdown
| [Title (Author, year)](https://example.org/) | Book | Intermediate | Paid |
```

- **Type**: Book, Book (open), Book (online), Course, Video, Articles, Docs, Reference, Exercises, Lab tool, Tool, Library, Open source, Guide
- **Level**: Beginner, Intermediate, Advanced
- **Cost**: Free, Freemium, Paid

## Rules

1. **Link, never copy.** No PDFs or copied text from copyrighted books, papers or courses.
2. **State the version.** For fast-moving areas (5G, cloud native, automation) include the release, version or year.
3. **Keep the page structure.** New topics start from `templates/topic-template.md`.
4. **Check the build.** Run `npm run build` before opening a pull request; it fails on broken internal links.
5. **Review AI-assisted text.** It is welcome, but a human must check it for accuracy.

## Licence

By contributing you agree that content is published under CC BY-SA 4.0 and code under MIT.
