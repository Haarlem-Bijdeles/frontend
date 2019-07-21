<template>
  <page :page="page" />
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  components: {
    Page,
  },

  async asyncData({ $axios, params }) {
    const response = await $axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'de-docenten',
        _embed: 1,
      },
    })
    const page = response.data[0]

    return {
      page,
      slug: params.slug,
    }
  },
  head() {
    return {
      title: this.page.title.rendered,
    }
  },
}
</script>
