<template>
  <div>
    <page :page="page" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  components: {
    Page,
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

  async asyncData({ $axios, params }) {
    const response = await $axios.get(`wp/v2/pages/`, {
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
