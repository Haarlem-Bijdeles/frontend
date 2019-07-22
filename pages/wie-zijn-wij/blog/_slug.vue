<template>
  <page :page="post">
    <posts :posts="posts" />
  </page>
</template>

<script>
import Page from '@/components/Blog/Page.vue'
import Posts from '~/components/Blog/Posts.vue'

export default {
  components: {
    Page,
    Posts,
  },
  meta: {
    step: 4,
  },

  async asyncData({ $axios, params }) {
    const response = await $axios.get(`wp/v2/posts/`, {
      params: {
        slug: params.slug,
      },
    })
    const response2 = await $axios.get(`wp/v2/posts/`)
    return {
      post: response.data[0],
      posts: response2.data,
    }
  },
  head() {
    return {
      title: this.post.title.rendered,
    }
  },
}
</script>
