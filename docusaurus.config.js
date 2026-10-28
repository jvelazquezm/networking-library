// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// ---------------------------------------------------------------------------
// Change these two values to match your GitHub account and repository name.
// The site will be published at https://<GITHUB_USER>.github.io/<REPO_NAME>/
// ---------------------------------------------------------------------------
const GITHUB_USER = 'jvelazquezm';
const REPO_NAME = 'networking-library';

// Docusaurus builds each language separately; this tells us which one is being built.
const LOCALE = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en';
const TAGLINES = {
  en: 'An open, vendor-neutral library to learn computer networks and telecommunications — from first principles to expert level: Segment Routing, 5G, Open RAN and cloud native.',
  es: 'Una biblioteca abierta y neutral para aprender redes y telecomunicaciones — desde los fundamentos hasta nivel experto: Segment Routing, 5G, Open RAN y cloud native.',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Networking Library',
  tagline: TAGLINES[LOCALE] ?? TAGLINES.en,
  favicon: 'img/favicon.svg',

  url: `https://${GITHUB_USER}.github.io`,
  baseUrl: `/${REPO_NAME}/`,
  organizationName: GITHUB_USER,
  projectName: REPO_NAME,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    // .md files are plain CommonMark (easy for contributors); .mdx files get MDX.
    format: 'detect',
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  // English is the source language. Spanish translations live in i18n/es/.
  // A page without a Spanish translation is shown in English.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      es: {label: 'Español', htmlLang: 'es'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'library',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${GITHUB_USER}/${REPO_NAME}/edit/main/`,
          editLocalizedFiles: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'es'],
        docsRouteBasePath: 'library',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
      navbar: {
        title: 'The Networking Library',
        logo: {alt: 'Networking Library logo', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'librarySidebar', position: 'left', label: 'Library'},
          {to: '/library/start-here/learning-paths', label: 'Learning paths', position: 'left'},
          {to: '/library/reference/certifications', label: 'Certifications', position: 'left'},
          {to: '/library/reference', label: 'Reference', position: 'left'},
          {to: '/library/start-here/glossary', label: 'Glossary', position: 'left'},
          {to: '/library/start-here/contributing', label: 'Contribute', position: 'right'},
          {type: 'localeDropdown', position: 'right'},
          {
            href: `https://github.com/${GITHUB_USER}/${REPO_NAME}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Start',
            items: [
              {label: 'How to use this library', to: '/library/start-here'},
              {label: 'Learning paths', to: '/library/start-here/learning-paths'},
              {label: 'Glossary', to: '/library/start-here/glossary'},
            ],
          },
          {
            title: 'Reference',
            items: [
              {label: 'Certification maps', to: '/library/reference/certifications'},
              {label: 'Standards bodies', to: '/library/reference/standards-bodies'},
              {label: 'Books', to: '/library/reference/books'},
              {label: 'Courses & videos', to: '/library/reference/courses-and-videos'},
              {label: 'Labs & tools', to: '/library/reference/labs-and-tools'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Contribute', to: '/library/start-here/contributing'},
              {label: 'Community', to: '/library/reference/community'},
              {
                label: 'Suggest a resource',
                href: `https://github.com/${GITHUB_USER}/${REPO_NAME}/issues/new/choose`,
              },
            ],
          },
        ],
        copyright:
          LOCALE === 'es'
            ? 'Contenido bajo licencia CC BY-SA 4.0 · Código bajo MIT · Hecho con Docusaurus'
            : 'Content licensed under CC BY-SA 4.0 · Code under MIT · Built with Docusaurus',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'python'],
      },
    }),
};

export default config;
