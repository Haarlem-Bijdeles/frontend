<template>
  <page :page="post">
    related posts
  </page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  components: {
    Page,
  },
  meta: {
    step: 4,
  },
  data() {
    return {
      title: '',
      text: '',
      date: '',
    }
  },

  async asyncData({ $axios, params }) {
    const response = await $axios.get(`wp/v2/posts/`, {
      params: {
        slug: params.slug,
      },
    })
    const post = response.data[0]

    return {
      title: post.title.rendered,
      text: post.content.rendered,
      date: post.date,
      post: post,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="postcss" scoped>
.text {
  max-width: 60ch;
}

time {
  font-size: 0.9em;
  color: var(--color-gray);
  margin-bottom: 1em;
  display: block;
}
</style>
