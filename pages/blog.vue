<template>
  <div>
    <app-hero :image="page.featuredImage" :title="page.title" />
    <posts />
  </div>
</template>

<script>
import Posts from '~/components/Blog/Posts.vue'
import AppHero from '~/components/AppHero.vue'
import BlogQuery from '~/graphql/Blog.gql'
import getSeoMetaData from '~/helpers/seo'
import pages from '~/config/pages'

export default {
  name: 'PageBlog',
  components: {
    Posts,
    AppHero,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
      variables: {
        pageId: pages.blog,
      },
    })
    return {
      page: page.data.page,
    }
  },
  data() {
    return {
      page: 0,
      showMoreButton: true,
    }
  },
  head() {
    return getSeoMetaData(this.page, this.$nuxt.$route)
  },
  nuxtI18n: {
    paths: {
      nl: '/wie-zijn-wij/blog',
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>
