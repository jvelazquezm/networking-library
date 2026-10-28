---
title: "Contribute"
description: "How to suggest resources, improve pages and add new topics."
sidebar_position: 4
---

# Contribute

This library is only as good as its community. Every page has an **Edit this page** link at the bottom that opens the file on GitHub.

## Ways to help

- **Suggest a resource** — open an issue with the *Suggest a resource* template.
- **Improve a topic** — add explanations, labs, diagrams or better resources through a pull request.
- **Fix something outdated** — broken links, old releases, changed certification blueprints.
- **Propose a topic or learning path** — open an issue first so we can agree where it fits.

## Our resource policy: open first

We want this to be a library anyone can use without paying.

1. **Free and open resources come first.** Open books, standards, vendor documentation, free courses and community articles are preferred.
2. **Paid resources are welcome when they add something unique** — classic books, official certification guides — and are always marked *Paid*.
3. **No affiliate links.** Link directly to the publisher or the product page.
4. **Link, never copy.** Do not upload or paste copyrighted books, papers or courses.

## Adding a resource

Add a row to the **Learning resources** table of the topic page:

```markdown
| [Title (Author, year)](https://example.org/) | Open book | Intermediate | Free |
```

| Column | Allowed values |
| --- | --- |
| Type | Open book, Course, Video, Video course, Article, Article series, Articles, Blog, Docs, Reference, Tutorials, Exercises, Labs, Lab tool, Simulator, Tool, Library, Open source, Guide, Interactive, Community, Research |
| Level | Beginner, Intermediate, Advanced |
| Cost | Free, Freemium, Paid |

Books go in the **Bibliography** list instead:

```markdown
- *Book title* — Author names (Paid)
```

For fast-moving areas, include the version, release or year, for example *(3GPP Rel-18)* or *(2026)*.

## Adding a topic

Copy `templates/topic-template.md` from the repository into the right section folder, fill it in and add it to the section overview table. Keep the same headings so every page stays consistent.

## Licence

By contributing you agree that content is published under **CC BY-SA 4.0** and code under **MIT**.
