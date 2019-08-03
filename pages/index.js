module.exports = [
  {
    name: 'contact',
    path: '/contact',
    component: 'pages/contact.vue',
  },
  {
    name: 'bijles',
    path: '/bijles-haarlem',
    props: {
      slug: 'bijles-haarlem',
    },
    component: 'pages/page.vue',
  },
  {
    name: 'index',
    path: '',
    component: 'pages/index.vue',
  },
]
