<template>
  <div>
    <page :page="blog" />
    <archive-wrapper :image="post.featuredImage">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <post-date :date="post.date" />
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="post.content" />
    </archive-wrapper>
    <div v-if="posts.edges && posts.edges.length">
      <posts :posts="posts.edges" />
    </div>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import Posts from '~/components/Blog/Posts.vue'
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'
import PostDate from '@/components/Blog/PostDate.vue'

import PostQuery from '~/graphql/Post.gql'
import BlogQuery from '~/graphql/Blog.gql'
import PostsQuery from '~/graphql/Posts.gql'

export default {
  components: {
    Page,
    Posts,
    ArchiveWrapper,
    PostDate,
  },

  computed: {
    details() {
      return this.$store.state.details
    },
    meta() {
      return this.page.yoast_meta.map(item => {
        item.hid = item.name ? item.name : item.property
        return item
      })
    },
  },

  async asyncData({ app, params }) {
    const blog = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
    })
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.slug,
      },
    })
    const posts = await app.apolloProvider.defaultClient.query({
      query: PostsQuery,
    })

    return {
      blog: blog.data.blog,
      post: post.data.post,
      posts: posts.data.posts,
    }
  },

  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
