import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Akabot Documentation',
  tagline: 'Agentic Process Automation Platform',
  favicon: 'img/favicon.ico',

  url: 'https://docs.akabot.com:8081',
  baseUrl: '/',

  organizationName: 'akaBot',
  projectName: 'aka-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr'},
      vi: {label: 'Tiếng Việt', direction: 'ltr'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          lastVersion: 'current',
          versions: {
            current: {
              label: '3.x (Latest)',
              path: 'latest',
              banner: 'none',
            },
          },
          editUrl: 'https://github.com/akaBot2026/aka-docs/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'vi'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/akabot-social-card.png',

    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'akaBot Logo',
        src: 'img/akabot-logo.svg',
        srcDark: 'img/akabot-logo-dark.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'User Guide',      to: '/docs/latest/user-guide/introduction'},
            {label: 'Installation',    to: '/docs/latest/installation/system-requirements'},
            {label: 'API Reference',   to: '/docs/latest/api-reference/overview'},
            {label: 'SDK / Developer', to: '/docs/latest/sdk/overview'},
            {label: 'Admin & Ops',     to: '/docs/latest/admin/overview'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'akaBot Website',  href: 'https://akabot.com'},
            {label: 'Support Portal',  href: 'https://support.akabot.com'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', href: 'https://akabot.com/privacy'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akabot - FPT Corporation. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'python', 'powershell', 'bash', 'json', 'yaml'],
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
