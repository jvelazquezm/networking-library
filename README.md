# The Networking Library

An open, structured and community-maintained library to learn computer networks and telecommunications — from first principles to 5G, Open RAN and cloud native networking.

The library does not try to replace books, courses or standards. It **organises** them: every topic says what to learn, where the authoritative specification lives, which resources are worth your time at each level, and how to practise.

## Structure

| # | Section | Topics |
| --- | --- | --- |
| 00 | Start here — how to use, learning paths, glossary | — |
| 01 | Fundamentals | 6 |
| 02 | LAN and Switching | 6 |
| 03 | Routing and Internet Architecture | 7 |
| 04 | Transport and Applications | 7 |
| 05 | Carrier and Transport Networks | 5 |
| 06 | Mobile Networks | 9 |
| 07 | Data Center and Cloud Native Networking | 7 |
| 08 | Automation and Programmability | 6 |
| 09 | Network Security | 7 |
| 10 | Network Operations | 5 |
| 11 | Reference — standards bodies, books, courses, labs and tools | 4 |

Plus four learning paths: *Networking from zero*, *5G end to end*, *Cloud native networking* and *Network automation*.

Every topic page uses the same layout: **Overview → Key concepts → Before you start → Standards → Learning resources → Hands-on lab → Related topics**.

## Run it locally

Requires Node.js 20 or later.

```bash
npm install
npm start        # development server at http://localhost:3000/networking-library/
npm run build    # production build; fails if any internal link is broken
```

## Publish on GitHub Pages

1. Create a public repository on GitHub, for example `networking-library`.
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
  11-reference/           Standards bodies, books, courses, labs and tools
templates/                Template for new topic pages
src/pages/index.js        Homepage
src/data/home.js          Section and path cards shown on the homepage
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
