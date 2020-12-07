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
      <notch-wrapper>
        <h1 id="posts-title" class="posts-title-wrapper">Meer berichten</h1>
      </notch-wrapper>
      <posts :not-in="post.databaseId" />
    </section>
  </div>
</template>

<script>
import Page from '~/components/Page.vue'
import Posts from '~/components/Blog/Posts.vue'
import ArchiveWrapper from '~/components/ArchiveWrapper.vue'
import PostDate from '~/components/Blog/PostDate.vue'
import getSeoMetaData from '~/helpers/seo'

import PostQuery from '~/graphql/Post.gql'
import BlogQuery from '~/graphql/Blog.gql'
import pages from '~/config/pages'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  name: 'PagePost',
  components: {
    NotchWrapper,
    Page,
    Posts,
    ArchiveWrapper,
    PostDate,
  },

  async asyncData({ app, route }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
      variables: {
        pageId: pages.blog,
      },
    })
    const post = await app.apolloProvider.defaultClient.query({
      query: PostQuery,
      variables: {
        uri: route.fullPath,
      },
    })

    return {
      blog: page.data.page,
      post: post.data.post,
    }
  },
  head() {
    return getSeoMetaData(this.post, this.$nuxt.$route)
  },

  computed: {
    details() {
      return this.$store.state.details
    },
    meta() {
      return this.page.yoast_meta.map((item) => {
        item.hid = item.name ? item.name : item.property
        return item
      })
    },
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
}
</style>
