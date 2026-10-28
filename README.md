# The Networking Library

An open, vendor-neutral and community-maintained library to learn computer networks and telecommunications — from first principles to expert level, including Segment Routing, 5G, Open RAN and cloud native networking.

**Live site:** https://jvelazquezm.github.io/networking-library/ · **En español:** https://jvelazquezm.github.io/networking-library/es/

The library does not try to replace books, courses or standards. It **organises** them: every topic explains what to learn, links the authoritative specifications, lists the best resources — **free and open resources first** — and suggests a hands-on lab.

## Structure

| # | Section | Topics |
| --- | --- | --- |
| 00 | Start here — how to use, learning paths, glossary, contribution guide | — |
| 01 | Network Fundamentals | 15 |
| 02 | Switching and Ethernet | 11 |
| 03 | Wireless and IoT | 6 |
| 04 | IP Routing | 14 |
| 05 | IP Services | 7 |
| 06 | WAN, VPNs and Overlays | 7 |
| 07 | Service Provider and Transport Networks | 13 |
| 08 | Mobile Networks | 11 |
| 09 | Data Center, Virtualization and Cloud | 13 |
| 10 | Transport and Application Protocols | 7 |
| 11 | Security | 15 |
| 12 | Network Operations and Assurance | 6 |
| 13 | Automation, Programmability and AI | 11 |
| 14 | Reference — standards bodies, books, courses, labs, community, certification maps | — |

**136 topics** at three levels (Beginner, Intermediate, Advanced), six learning paths and **certification maps** for Cisco, Juniper, Nokia, Arista, Huawei and vendor-neutral certifications.

Every topic page uses the same layout: **Overview → Key concepts → Before you start → Standards → Learning resources → Bibliography → Hands-on lab → Related topics**.

## Languages

The site is published in **English** (source, `docs/`) and **Spanish** (`i18n/es/`), with a language selector in the navbar. See [CONTRIBUTING.md](CONTRIBUTING.md#languages-english-and-spanish) for how to keep both in sync.

## Run it locally

Requires Node.js 20 or later.

```bash
npm install
npm start        # development server (English) at http://localhost:3000/networking-library/
npm start -- --locale es   # development server in Spanish
npm run build    # production build of both languages; fails if any internal link is broken
```

## Publish on GitHub Pages

1. Create a public repository on GitHub, for example `networking-library` (already done for this project).
2. Open `docusaurus.config.js` and set `GITHUB_USER` (and `REPO_NAME` if you chose another name).
3. Push this project to the `main` branch.
4. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Every push to `main` now rebuilds and publishes the site at `https://<GITHUB_USER>.github.io/<REPO_NAME>/`.

Want your own domain later? Add a `static/CNAME` file with the domain, update `url` and set `baseUrl: '/'` in the config.

## Project layout

```
docs/                     All library content (Markdown)
  00-start-here/          How to use, learning paths, glossary, contribution guide
  01-fundamentals/ ...    One folder per section; index.md is the section overview
  14-reference/           Standards bodies, books, courses, labs, community, certification maps
i18n/es/                  Spanish translation (same structure as docs/), navbar, footer and UI strings
templates/                Template for new topic pages
src/pages/index.js        Homepage
src/data/home.js          Homepage text and cards in both languages
.github/workflows/        Deploy to Pages, build check and link checker
```

## Quality checks

- **Every pull request** runs a full build, which fails on broken internal links, and checks external links with lychee.
- **Every Monday** the link checker runs again and opens an issue if any external link has broken.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: link to resources rather than copying them, use the resource table format, and state the version or release for anything fast-moving.

## Licence

- Content (everything under `docs/`): [CC BY-SA 4.0](LICENSE)
- Code (site configuration and components): [MIT](LICENSE-CODE)
