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
    <section id="posts-title">
      <h1 id="posts-title" class="posts-title-wrapper">Meer berichten</h1>
      <posts :not-in="post.postId" />
    </section>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import Posts from '~/components/Blog/Posts.vue'
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'
import PostDate from '@/components/Blog/PostDate.vue'
import getSeoMetaData from '@/helpers/seo'

import PostQuery from '~/graphql/Post.gql'
import BlogQuery from '~/graphql/Blog.gql'
import pages from '@/config/pages'

export default {
  components: {
    Page,
    Posts,
    ArchiveWrapper,
    PostDate,
  },

  async asyncData({ app, params }) {
    const blog = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
      variables: {
        pageId: pages.blog,
      },
    })
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: params.postSlug,
      },
    })

    return {
      blog: blog.data.blog,
      post: post.data.post,
    }
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
  head() {
    return getSeoMetaData(this.post, this.$nuxt.$route)
  },
  nuxtI18n: {
    paths: {
      nl: '/wie-zijn-wij/blog/:postSlug',
    },
  },
}
</script>

<style lang="postcss">
.posts-title-wrapper {
  padding-top: 2rem;
  @mixin center;
}
</style>
