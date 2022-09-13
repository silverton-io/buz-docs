// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buz',
  tagline: 'Event streaming for the rest of us.',
  url: 'https://buz.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'silverton-io',
  projectName: 'buz-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  staticDirectories: ['static'],
  plugins: [
    path.resolve(__dirname, 'plugins', 'snowplow')
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-E9VYMMT9R3'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Buz',
        logo: {
          alt: 'Buz',
          src: 'img/bee2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/what-is-buz',
            position: 'right',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/silverton-io/buz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Sources",
            items: [
              {
                label: "Snowplow Analytics",
                to: "/sources/snowplow-analytics"
              },
              {
                label: "Webhooks",
                to: "/sources/webhook"
              },
              {
                label: "Self-Describing JSON",
                to: "/sources/self-describing-json"
              },
              {
                label: "Pixel",
                to: "/sources/pixel"
              },
              {
                label: "CloudEvents",
                to: "/sources/cloudevents"
              },
            ]
          },
          {
            title: "Integrations",
            items: [
              {
                label: "Google Pub/Sub",
                to: "/integrations/google-pub-sub"
              },
              {
                label: "AWS Kinesis Firehose",
                to: "/integrations/aws-kinesis-firehose"
              },
              {
                label: "Kafka",
                to: "/integrations/kafka"
              },
              {
                label: "Redpanda",
                to: "/integrations/redpanda"
              },
              {
                label: "Postgres",
                to: "/integrations/postgres"
              },
            ]
          },
          {
            title: 'Buz',
            items: [
              {
                label: 'Docs',
                to: "/"
              },
              {
                label: 'On GitHub',
                href: 'https://github.com/silverton-io/buz/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Silverton Data, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      snowplow: {
        collector: 'docstream.buz.dev',
        appId: 'buz-docs',
        withCredentials: false
      },
      metadata: [
        {
          name: "Buz",
          description: "Streaming, simplified.",
          content: "data, processing, streaming, quality, contracts"
        },
        {
          property: "og:image",
          content: "https://buz.dev/img/buzz.png"
        },
        {
          property: "twitter:image",
          content: "https://buz.dev/img/buzz.png"
        }
      ],
    }),
};

module.exports = config;
