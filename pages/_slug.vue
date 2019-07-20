<template>
  <page :page="page" />
</template>

<script>
import axios from '~/plugins/axios'
import Page from '@/components/Page.vue'

export default {
  components: {
    Page,
  },

  computed: {
    meta() {
      return this.page.yoast_meta.map(item => {
        item.hid = item.name ? item.name : item.property
        return item
      })
    },
  },

  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: params.slug,
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
      meta: this.meta,
    }
  },
}
</script>
