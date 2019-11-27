<template>
  <page v-if="page" :page="page" />
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'

export default {
  components: {
    Page,
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

  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
