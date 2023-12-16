// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'html',
      value: '<b>Start Here<b/>',
    },
    {
      type: 'doc',
      id: 'get-started',
    },
    {
      type: 'category',
      label: 'Setup Guides',
      link: {
        type: 'doc',
        id: 'setup-guides'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'setup-guides',
      }],
    },
    {
      type: 'category',
      label: 'User Guides',
      link: {
        type: 'doc',
        id: 'user-guides'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'user-guides',
      }],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'doc',
        id: 'integrations'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'integrations',
      }],
    },
    {
      type: 'doc',
      id: 'faqs',
    },
    {
      type: 'html',
      value: '<br><b>Reference<b/>',
    },
    {
      type: 'doc',
      id: 'pipelines',
    },
    {
      type: 'category',
      label: 'Language',
      link: {
        type: 'doc',
        id: 'language'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'language',
      }],
    },
    {
      type: 'category',
      label: 'Operators',
      link: {
        type: 'doc',
        id: 'operators'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'operators',
      }],
    },
    {
      type: 'category',
      label: 'Connectors',
      link: {
        type: 'doc',
        id: 'connectors'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'connectors',
      }],
    },
    {
      type: 'category',
      label: 'Formats',
      link: {
        type: 'doc',
        id: 'formats'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'formats',
      }],
    },
    {
      type: 'category',
      label: 'Contexts',
      link: {
        type: 'doc',
        id: 'contexts'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'contexts',
      }],
    },
    {
      type: 'category',
      label: 'Data Model',
      link: {
        type: 'doc',
        id: 'data-model'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'data-model',
      }],
    },
    {
      type: 'category',
      label: 'Metrics',
      link: {
        type: 'doc',
        id: 'metrics',
      },
      items: [{
        type: 'autogenerated',
        dirName: 'metrics',
      }],
    },
    {
      type: 'doc',
      id: 'command-line',
    },
    {
      type: 'doc',
      id: 'rest-api',
    },
    {
      type: 'doc',
      id: 'python',
    },
    {
      type: 'doc',
      id: 'configuration',
    },
    {
      type: 'doc',
      id: 'glossary',
    },
    {
      type: 'html',
      value: '<br><b>Developers<b/>',
    },
    {
      type: 'category',
      label: 'Contribute',
      link: {
        type: 'doc',
        id: 'contribute'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'contribute',
      }],
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'doc',
        id: 'architecture'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'architecture',
      }],
    },
    {
      type: 'category',
      label: 'Developer Guides',
      link: {
        type: 'doc',
        id: 'developer-guides'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'developer-guides',
      }],
    },
    {
      type: 'html',
      value: '<br><b>About<b/>',
    },
    {
      type: 'doc',
      id: 'why-tenzir',
    },
    {
      type: 'doc',
      id: 'target-audience',
    },
    {
      type: 'category',
      label: 'Use Cases',
      link: {
        type: 'doc',
        id: 'use-cases'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'use-cases',
      }],
    },
  ],
};

module.exports = sidebars;
