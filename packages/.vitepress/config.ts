import { defineConfig } from 'vitepress'
import { addonCategoryNames, categoryNames, coreCategoryNames, metadata } from '../metadata/metadata'
import { currentVersion, versions } from '../../meta/versions'

const Guide = [
  { text: '起步', link: '/guide/' },
  { text: '最佳实践', link: '/guide/best-practice' },
  { text: '配置', link: '/guide/config' },
  { text: '组件', link: '/guide/components' },
  { text: '贡献', link: '/contributing' },
  { text: '使用说明', link: '/guidelines' },
]

const CoreCategories = coreCategoryNames.map(c => ({
  text: c,
  activeMatch: '___', // never active
  link: `/functions#category=${c}`,
}))

const AddonCategories = [
  ...addonCategoryNames
    .map(c => ({
      text: c.slice(1),
      activeMatch: '___', // never active
      link: `/functions#category=${encodeURIComponent(c)}`,
    })),
]

const Links = [
  { text: 'Add-ons', link: '/add-ons' },
  { text: 'Ecosystem', link: '/ecosystem' },
  { text: 'Export Size', link: '/export-size' },
  { text: 'Recent Updated', link: '/functions.html#sort=updated' },
  { text: 'Why no translations?', link: '/why-no-translations' },
]

const Learn = [
  { text: 'Premium Video Course', link: 'https://vueschool.io/courses/vueuse-for-everyone?friend=vueuse' },
]

const DefaultSideBar = [
  { text: '指南', items: Guide },
  { text: '核心函数', items: CoreCategories },
  { text: 'Add-ons', items: AddonCategories },
  { text: 'Learn', items: Learn },
  { text: 'Links', items: Links },
]

const FunctionsSideBar = getFunctionsSideBar()

export default defineConfig({
  title: 'VueUse中文文档',
  description: '基与Vue Composition API的常用函数集合',
  lang: 'ch-zn',
  ignoreDeadLinks: true,

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  themeConfig: {
    logo: '/favicon.svg',
    editLink: {
      pattern: 'https://github.com/vueuse/vueuse/tree/main/packages/:path',
      text: 'Suggest changes to this page',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Anthony Fu and VueUse contributors',
    },

    algolia: {
      appId: 'NBQWY48OOR',
      apiKey: 'c5fd82eb1100c2110c1690e0756d8ba5',
      indexName: 'vueuse',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vueuse/vueuse' },
      { icon: 'discord', link: 'https://chat.antfu.me' },
      { icon: 'twitter', link: 'https://twitter.com/vueuse' },
    ],

    nav: [
      {
        text: '指南',
        items: [
          { text: '指南', items: Guide },
          { text: 'Learn', items: Learn },
          { text: 'Links', items: Links },
        ],
      },
      {
        text: '函数',
        items: [
          {
            text: '',
            items: [
              { text: '所有函数', link: '/functions#' },
              { text: '最近更新', link: '/functions#sort=updated' },
            ],
          },
          { text: '核心', items: CoreCategories },
          { text: '插件', items: AddonCategories },
        ],
      },
      {
        text: '插件',
        link: '/add-ons',
      },
      {
        text: '演练场',
        link: 'https://play.vueuse.org',
      },
      {
        text: currentVersion,
        items: [
          {
            items: [
              { text: 'Release Notes', link: 'https://github.com/vueuse/vueuse/releases' },
            ],
          },
          {
            text: 'Versions',
            items: versions.map(i => i.version === currentVersion
              ? {
                  text: `${i.version} (Current)`,
                  activeMatch: '/', // always active
                  link: '/',
                }
              : {
                  text: i.version,
                  link: i.link!,
                },
            ),
          },
        ],

      },
      {
        text: '关于本站',
        link: '/about-me',
      },
    ],
    sidebar: {
      '/guide/': DefaultSideBar,
      '/contributing': DefaultSideBar,
      '/add-ons': DefaultSideBar,
      '/about-me': DefaultSideBar,
      '/ecosystem': DefaultSideBar,
      '/guidelines': DefaultSideBar,
      '/export-size': DefaultSideBar,
      '/functions': FunctionsSideBar,
      '/core/': FunctionsSideBar,
      '/shared/': FunctionsSideBar,
      '/router/': FunctionsSideBar,
      '/electron/': FunctionsSideBar,
      '/rxjs/': FunctionsSideBar,
      '/integrations/': FunctionsSideBar,
      '/firebase/': FunctionsSideBar,
      '/math/': FunctionsSideBar,
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'VueUse' }],
    ['meta', { property: 'og:image', content: 'https://vueuse.org/og.png' }],
    ['meta', { property: 'og:description', content: 'Collection of essential Vue Composition Utilities' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@antfu7' }],
    ['meta', { name: 'twitter:image', content: 'https://vueuse.org/og.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap' }],
    ['script', { src: 'https://hm.baidu.com/hm.js?bbef9a0a3859073d2f4169e9216d756b' }],
  ],
})

function getFunctionsSideBar() {
  const links = []

  for (const name of categoryNames) {
    if (name.startsWith('_'))
      continue

    const functions = metadata.functions.filter(i => i.category === name && !i.internal)

    links.push({
      text: name,
      items: functions.map(i => ({
        text: i.name,
        link: i.external || `/${i.package}/${i.name}/`,
      })),
      link: name.startsWith('@')
        ? (functions[0].external || `/${functions[0].package}/README`)
        : undefined,
    })
  }

  return links
}
