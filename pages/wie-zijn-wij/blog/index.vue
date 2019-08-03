<template>
  <div>
    <app-hero :image="page.featuredImage" :title="page.title" />
    <div v-if="posts.edges && posts.edges.length">
      <posts :posts="posts.edges" />
    </div>
  </div>
</template>

<script>
import Posts from '~/components/Blog/Posts.vue'
import AppHero from '@/components/AppHero.vue'
import PostsQuery from '~/graphql/Posts.gql'
import BlogQuery from '~/graphql/Blog.gql'

export default {
  components: {
    Posts,
    AppHero,
  },
  meta: {
    step: 4,
  },
  head() {
    return {
      title: this.page.title,
    }
  },
  async asyncData({ app, params }) {
    const blog = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
    })
    const posts = await app.apolloProvider.defaultClient.query({
      query: PostsQuery,
    })
    return {
      page: blog.data.blog,
      posts: posts.data.posts,
    }
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>
