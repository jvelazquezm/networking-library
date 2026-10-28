---
title: "Contribute"
description: "How to suggest resources, improve pages and add new topics."
sidebar_position: 4
---

# Contribute

This library is only as good as its community. Every page has an **Edit this page** link at the bottom that takes you straight to the file on GitHub.

## Ways to help

- **Suggest a resource** — open an issue using the *Suggest a resource* template.
- **Improve a topic** — add explanations, labs, diagrams or better resources through a pull request.
- **Fix something outdated** — broken links, old releases, deprecated tools.
- **Propose a topic or learning path** — open an issue first so we can agree where it fits.

## Adding a resource

Add a row to the **Learning resources** table of the relevant topic page:

```markdown
| [Title (Author)](https://example.org/) | Book | Intermediate | Paid |
```

| Column | Allowed values |
| --- | --- |
| Type | Book, Book (open), Book (online), Course, Video, Articles, Docs, Reference, Exercises, Lab tool, Tool, Library, Open source, Guide |
| Level | Beginner, Intermediate, Advanced |
| Cost | Free, Freemium, Paid |

**Quality bar.** A resource should be accurate, reasonably current and better than what is already listed. For fast-moving areas, include the version, release or year in the title, for example *(3GPP Rel-18)* or *(2025)*.

## What we cannot accept

- Copies of copyrighted books, papers or courses — **link to them instead**.
- Affiliate links or self-promotion without substance.
- Content generated without review. AI-assisted writing is fine as long as a human has checked it for accuracy.

## Adding a topic

Copy `templates/topic-template.md` from the repository into the right section folder, fill it in and add it to the section's overview table. Keep the same headings so every page stays consistent.

## Licence

By contributing you agree that your content is published under **CC BY-SA 4.0** and any code under **MIT**.
