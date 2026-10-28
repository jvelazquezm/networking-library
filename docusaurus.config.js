// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// ---------------------------------------------------------------------------
// Change these two values to match your GitHub account and repository name.
// The site will be published at https://<GITHUB_USER>.github.io/<REPO_NAME>/
// ---------------------------------------------------------------------------
const GITHUB_USER = 'jvelazquezm';
const REPO_NAME = 'networking-library';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Networking Library',
  tagline:
    'An open, structured library to learn computer networks and telecommunications — from first principles to 5G, Open RAN and cloud native.',
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

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
        language: ['en'],
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
          {to: '/library/reference', label: 'Reference', position: 'left'},
          {to: '/library/start-here/glossary', label: 'Glossary', position: 'left'},
          {to: '/library/start-here/contributing', label: 'Contribute', position: 'right'},
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
              {label: 'Standards bodies', to: '/library/reference/standards-bodies'},
              {label: 'Books', to: '/library/reference/books'},
              {label: 'Labs & tools', to: '/library/reference/labs-and-tools'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Contribute', to: '/library/start-here/contributing'},
              {
                label: 'Suggest a resource',
                href: `https://github.com/${GITHUB_USER}/${REPO_NAME}/issues/new/choose`,
              },
            ],
          },
        ],
        copyright: `Content licensed under CC BY-SA 4.0 · Code under MIT · Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'python'],
      },
    }),
};

export default config;
