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
    path.resolve(__dirname, 'plugins', 'snowplow'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
              "from": "/connections/snowplow_analytics_to_kafka",
              "to": "/sources/snowplow-analytics/integrations/kafka"
          },
          {
              "from": "/connections/snowplow_analytics_to_redpanda",
              "to": "/sources/snowplow-analytics/integrations/redpanda"
          },
          {
              "from": "/connections/snowplow_analytics_to_pub_sub",
              "to": "/sources/snowplow-analytics/integrations/google-pub-sub"
          },
          {
              "from": "/connections/snowplow_analytics_to_kinesis",
              "to": "/sources/snowplow-analytics/integrations/aws-kinesis"
          },
          {
              "from": "/connections/snowplow_analytics_to_kinesis_firehose",
              "to": "/sources/snowplow-analytics/integrations/aws-kinesis-firehose"
          },
          {
              "from": "/connections/snowplow_analytics_to_msk",
              "to": "/sources/snowplow-analytics/integrations/aws-msk"
          },
          {
              "from": "/connections/snowplow_analytics_to_materialize",
              "to": "/sources/snowplow-analytics/integrations/materialize"
          },
          {
              "from": "/connections/snowplow_analytics_to_postgres",
              "to": "/sources/snowplow-analytics/integrations/postgres"
          },
          {
              "from": "/connections/snowplow_analytics_to_mysql",
              "to": "/sources/snowplow-analytics/integrations/mysql"
          },
          {
              "from": "/connections/snowplow_analytics_to_mongodb",
              "to": "/sources/snowplow-analytics/integrations/mongodb"
          },
          {
              "from": "/connections/snowplow_analytics_to_elasticsearch",
              "to": "/sources/snowplow-analytics/integrations/elasticsearch"
          },
          {
              "from": "/connections/snowplow_analytics_to_clickhouse",
              "to": "/sources/snowplow-analytics/integrations/clickhouse"
          },
          {
              "from": "/connections/snowplow_analytics_to_planetscale",
              "to": "/sources/snowplow-analytics/integrations/planetscale"
          },
          {
              "from": "/connections/snowplow_analytics_to_vitess",
              "to": "/sources/snowplow-analytics/integrations/vitess"
          },
          {
              "from": "/connections/snowplow_analytics_to_timescale",
              "to": "/sources/snowplow-analytics/integrations/timescale"
          },
          {
              "from": "/connections/snowplow_analytics_to_nats",
              "to": "/sources/snowplow-analytics/integrations/nats"
          },
          {
              "from": "/connections/snowplow_analytics_to_pubnub",
              "to": "/sources/snowplow-analytics/integrations/pubnub"
          },
          {
              "from": "/connections/snowplow_analytics_to_amplitude",
              "to": "/sources/snowplow-analytics/integrations/amplitude"
          },
          {
              "from": "/connections/snowplow_analytics_to_indicative",
              "to": "/sources/snowplow-analytics/integrations/indicative"
          },
          {
              "from": "/connections/cloudevents_to_kafka",
              "to": "/sources/cloudevents/integrations/kafka"
          },
          {
              "from": "/connections/cloudevents_to_redpanda",
              "to": "/sources/cloudevents/integrations/redpanda"
          },
          {
              "from": "/connections/cloudevents_to_pub_sub",
              "to": "/sources/cloudevents/integrations/google-pub-sub"
          },
          {
              "from": "/connections/cloudevents_to_kinesis",
              "to": "/sources/cloudevents/integrations/aws-kinesis"
          },
          {
              "from": "/connections/cloudevents_to_kinesis_firehose",
              "to": "/sources/cloudevents/integrations/aws-kinesis-firehose"
          },
          {
              "from": "/connections/cloudevents_to_msk",
              "to": "/sources/cloudevents/integrations/aws-msk"
          },
          {
              "from": "/connections/cloudevents_to_materialize",
              "to": "/sources/cloudevents/integrations/materialize"
          },
          {
              "from": "/connections/cloudevents_to_postgres",
              "to": "/sources/cloudevents/integrations/postgres"
          },
          {
              "from": "/connections/cloudevents_to_mysql",
              "to": "/sources/cloudevents/integrations/mysql"
          },
          {
              "from": "/connections/cloudevents_to_mongodb",
              "to": "/sources/cloudevents/integrations/mongodb"
          },
          {
              "from": "/connections/cloudevents_to_elasticsearch",
              "to": "/sources/cloudevents/integrations/elasticsearch"
          },
          {
              "from": "/connections/cloudevents_to_clickhouse",
              "to": "/sources/cloudevents/integrations/clickhouse"
          },
          {
              "from": "/connections/cloudevents_to_planetscale",
              "to": "/sources/cloudevents/integrations/planetscale"
          },
          {
              "from": "/connections/cloudevents_to_vitess",
              "to": "/sources/cloudevents/integrations/vitess"
          },
          {
              "from": "/connections/cloudevents_to_timescale",
              "to": "/sources/cloudevents/integrations/timescale"
          },
          {
              "from": "/connections/cloudevents_to_nats",
              "to": "/sources/cloudevents/integrations/nats"
          },
          {
              "from": "/connections/cloudevents_to_pubnub",
              "to": "/sources/cloudevents/integrations/pubnub"
          },
          {
              "from": "/connections/cloudevents_to_amplitude",
              "to": "/sources/cloudevents/integrations/amplitude"
          },
          {
              "from": "/connections/cloudevents_to_indicative",
              "to": "/sources/cloudevents/integrations/indicative"
          },
          {
              "from": "/connections/webhook_to_kafka",
              "to": "/sources/webhook/integrations/kafka"
          },
          {
              "from": "/connections/webhook_to_redpanda",
              "to": "/sources/webhook/integrations/redpanda"
          },
          {
              "from": "/connections/webhook_to_pub_sub",
              "to": "/sources/webhook/integrations/google-pub-sub"
          },
          {
              "from": "/connections/webhook_to_kinesis",
              "to": "/sources/webhook/integrations/aws-kinesis"
          },
          {
              "from": "/connections/webhook_to_kinesis_firehose",
              "to": "/sources/webhook/integrations/aws-kinesis-firehose"
          },
          {
              "from": "/connections/webhook_to_msk",
              "to": "/sources/webhook/integrations/aws-msk"
          },
          {
              "from": "/connections/webhook_to_materialize",
              "to": "/sources/webhook/integrations/materialize"
          },
          {
              "from": "/connections/webhook_to_postgres",
              "to": "/sources/webhook/integrations/postgres"
          },
          {
              "from": "/connections/webhook_to_mysql",
              "to": "/sources/webhook/integrations/mysql"
          },
          {
              "from": "/connections/webhook_to_mongodb",
              "to": "/sources/webhook/integrations/mongodb"
          },
          {
              "from": "/connections/webhook_to_elasticsearch",
              "to": "/sources/webhook/integrations/elasticsearch"
          },
          {
              "from": "/connections/webhook_to_clickhouse",
              "to": "/sources/webhook/integrations/clickhouse"
          },
          {
              "from": "/connections/webhook_to_planetscale",
              "to": "/sources/webhook/integrations/planetscale"
          },
          {
              "from": "/connections/webhook_to_vitess",
              "to": "/sources/webhook/integrations/vitess"
          },
          {
              "from": "/connections/webhook_to_timescale",
              "to": "/sources/webhook/integrations/timescale"
          },
          {
              "from": "/connections/webhook_to_nats",
              "to": "/sources/webhook/integrations/nats"
          },
          {
              "from": "/connections/webhook_to_pubnub",
              "to": "/sources/webhook/integrations/pubnub"
          },
          {
              "from": "/connections/webhook_to_amplitude",
              "to": "/sources/webhook/integrations/amplitude"
          },
          {
              "from": "/connections/webhook_to_indicative",
              "to": "/sources/webhook/integrations/indicative"
          },
          {
              "from": "/connections/pixel_to_kafka",
              "to": "/sources/pixel/integrations/kafka"
          },
          {
              "from": "/connections/pixel_to_redpanda",
              "to": "/sources/pixel/integrations/redpanda"
          },
          {
              "from": "/connections/pixel_to_pub_sub",
              "to": "/sources/pixel/integrations/google-pub-sub"
          },
          {
              "from": "/connections/pixel_to_kinesis",
              "to": "/sources/pixel/integrations/aws-kinesis"
          },
          {
              "from": "/connections/pixel_to_kinesis_firehose",
              "to": "/sources/pixel/integrations/aws-kinesis-firehose"
          },
          {
              "from": "/connections/pixel_to_msk",
              "to": "/sources/pixel/integrations/aws-msk"
          },
          {
              "from": "/connections/pixel_to_materialize",
              "to": "/sources/pixel/integrations/materialize"
          },
          {
              "from": "/connections/pixel_to_postgres",
              "to": "/sources/pixel/integrations/postgres"
          },
          {
              "from": "/connections/pixel_to_mysql",
              "to": "/sources/pixel/integrations/mysql"
          },
          {
              "from": "/connections/pixel_to_mongodb",
              "to": "/sources/pixel/integrations/mongodb"
          },
          {
              "from": "/connections/pixel_to_elasticsearch",
              "to": "/sources/pixel/integrations/elasticsearch"
          },
          {
              "from": "/connections/pixel_to_clickhouse",
              "to": "/sources/pixel/integrations/clickhouse"
          },
          {
              "from": "/connections/pixel_to_planetscale",
              "to": "/sources/pixel/integrations/planetscale"
          },
          {
              "from": "/connections/pixel_to_vitess",
              "to": "/sources/pixel/integrations/vitess"
          },
          {
              "from": "/connections/pixel_to_timescale",
              "to": "/sources/pixel/integrations/timescale"
          },
          {
              "from": "/connections/pixel_to_nats",
              "to": "/sources/pixel/integrations/nats"
          },
          {
              "from": "/connections/pixel_to_pubnub",
              "to": "/sources/pixel/integrations/pubnub"
          },
          {
              "from": "/connections/pixel_to_amplitude",
              "to": "/sources/pixel/integrations/amplitude"
          },
          {
              "from": "/connections/pixel_to_indicative",
              "to": "/sources/pixel/integrations/indicative"
          },
          {
              "from": "/connections/self_describing_json_to_kafka",
              "to": "/sources/self-describing-json/integrations/kafka"
          },
          {
              "from": "/connections/self_describing_json_to_redpanda",
              "to": "/sources/self-describing-json/integrations/redpanda"
          },
          {
              "from": "/connections/self_describing_json_to_pub_sub",
              "to": "/sources/self-describing-json/integrations/google-pub-sub"
          },
          {
              "from": "/connections/self_describing_json_to_kinesis",
              "to": "/sources/self-describing-json/integrations/aws-kinesis"
          },
          {
              "from": "/connections/self_describing_json_to_kinesis_firehose",
              "to": "/sources/self-describing-json/integrations/aws-kinesis-firehose"
          },
          {
              "from": "/connections/self_describing_json_to_msk",
              "to": "/sources/self-describing-json/integrations/aws-msk"
          },
          {
              "from": "/connections/self_describing_json_to_materialize",
              "to": "/sources/self-describing-json/integrations/materialize"
          },
          {
              "from": "/connections/self_describing_json_to_postgres",
              "to": "/sources/self-describing-json/integrations/postgres"
          },
          {
              "from": "/connections/self_describing_json_to_mysql",
              "to": "/sources/self-describing-json/integrations/mysql"
          },
          {
              "from": "/connections/self_describing_json_to_mongodb",
              "to": "/sources/self-describing-json/integrations/mongodb"
          },
          {
              "from": "/connections/self_describing_json_to_elasticsearch",
              "to": "/sources/self-describing-json/integrations/elasticsearch"
          },
          {
              "from": "/connections/self_describing_json_to_clickhouse",
              "to": "/sources/self-describing-json/integrations/clickhouse"
          },
          {
              "from": "/connections/self_describing_json_to_planetscale",
              "to": "/sources/self-describing-json/integrations/planetscale"
          },
          {
              "from": "/connections/self_describing_json_to_vitess",
              "to": "/sources/self-describing-json/integrations/vitess"
          },
          {
              "from": "/connections/self_describing_json_to_timescale",
              "to": "/sources/self-describing-json/integrations/timescale"
          },
          {
              "from": "/connections/self_describing_json_to_nats",
              "to": "/sources/self-describing-json/integrations/nats"
          },
          {
              "from": "/connections/self_describing_json_to_pubnub",
              "to": "/sources/self-describing-json/integrations/pubnub"
          },
          {
              "from": "/connections/self_describing_json_to_amplitude",
              "to": "/sources/self-describing-json/integrations/amplitude"
          },
          {
              "from": "/connections/self_describing_json_to_indicative",
              "to": "/sources/self-describing-json/integrations/indicative"
          }
      ]
      }
    ]
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
