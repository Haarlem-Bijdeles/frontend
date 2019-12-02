<template>
  <div>
    <app-hero :image="page.featuredImage" :title="page.title" />
    <posts />
  </div>
</template>

<script>
import Posts from '~/components/Blog/Posts.vue'
import AppHero from '@/components/AppHero.vue'
import BlogQuery from '~/graphql/Blog.gql'
import getSeoMetaData from '@/helpers/seo'

export default {
  components: {
    Posts,
    AppHero,
  },
  async asyncData({ app, params }) {
    const blog = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
    })
    return {
      page: blog.data.blog,
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
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>
