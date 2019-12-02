const getMetaTitle = (page, key) => {
  if (page.seo[key]) {
    return page.seo[key]
  } else if (page.seo.title) {
    return page.seo.title
  }

  return page.title
}

const getMetaDescripion = (page, key) => {
  if (page.seo[key]) {
    return page.seo[key]
  } else if (page.seo.metaDesc) {
    return page.seo.metaDesc
  }
  return null
}

const getMetaImage = (page, key) => {
  if (page.seo[key]) {
    return page.seo[key]
  } else if (page.featuredImage.heroSmall) {
    return page.featuredImage.heroSmall
  } else if (page.featuredImage.archive2x) {
    return page.featuredImage.archive2x
  }
  return null
}

export default (page, path) => {
  return {
    title: page.seo.title,
    meta: [
      {
        name: 'description',
        hid: 'description',
        content: page.seo.metaDesc,
      },
      // Open Graph
      {
        hid: 'og:title',
        name: 'og:title',
        content: page.seo.title,
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'nl_NL',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: getMetaDescripion(page, 'opengraphDescription'),
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Haarlem bijdeles',
      },
      {
        name: 'og:url',
        content: `https://www.haarlembijdeles.nl${path}`,
      },
      { name: 'og:image', content: getMetaImage(page, 'opengraphImage') },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@haarlembijdeles' },
      { name: 'twitter:creator', content: '@haarlembijdeles' },
      {
        name: 'twitter:title',
        content: getMetaTitle(page, 'twitterTitle'),
      },
      {
        name: 'twitter:description',
        content: page.seo.metaDesc,
      },
      { name: 'twitter:image', content: getMetaImage(page, 'twitterImage') },
      { name: 'twitter:image:alt', content: page.seo.title },
    ],
  }
}
