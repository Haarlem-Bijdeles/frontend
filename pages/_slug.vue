<template>
  <div>
    <page v-if="page" :page="page" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'

export default {
  components: {
    Page,
  },
  props: {
    slug: {
      type: String,
      default: '',
    },
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        uri: params.slug,
      },
    })

    return {
      page: page.data.page,
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
    return {
      title: this.page.title,
    }
  },
}
</script>
