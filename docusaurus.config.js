// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pandawa',
  tagline: 'An Extensive and Modular Laravel Framework',
  url: 'https://edqe14.github.io',
  baseUrl: '/pandawa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pandawa', // Usually your GitHub org/user name.
  projectName: 'pandawa', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Edqe14/pandawa-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Edqe14/pandawa-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pandawa',
        logo: {
          src: '/img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/pandawa/pandawa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Edqe14/pandawa-docs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Pandawa\'s GitHub',
                href: 'https://github.com/pandawa',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Edqe14.\nNot affiliated with the Pandawa Team or any related contributors to this software.\n\nBuilt with Docusaurus.`.replace(/\n/gi, '<br>'),
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      },
      image: '/img/banner.png'
    }),

  plugins:
    ([
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'saveData',
            'queryString'
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/logo.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: '#7D50E5',
            },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '57x57', href: '/img/icons/apple-icon-57x57.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '57x57', href: '/img/icons/apple-icon-57x57.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '60x60', href: '/img/icons/apple-icon-60x60.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '72x72', href: '/img/icons/apple-icon-72x72.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '76x76', href: '/img/icons/apple-icon-76x76.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '114x114', href: '/img/icons/apple-icon-114x114.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '120x120', href: '/img/icons/apple-icon-120x120.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '144x144', href: '/img/icons/apple-icon-144x144.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '152x152', href: '/img/icons/apple-icon-152x152.png' },
            { tagName: 'link', rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/apple-icon-180x180.png' },
            { tagName: 'link', rel: 'icon', sizes: '192x192', href: '/img/icons/android-icon-192x192.png' },
            { tagName: 'link', rel: 'icon', sizes: '32x32', href: '/img/icons/favicon-32x32.png' },
            { tagName: 'link', rel: 'icon', sizes: '96x96', href: '/img/icons/favicon-96x96.png' },
            { tagName: 'link', rel: 'icon', sizes: '16x16', href: '/img/icons/favicon-16x16.png' }
          ],
        }
      ],
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 75,
          max: 1280, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 4, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ]
    ])
};

module.exports = config;
