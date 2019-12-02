<template>
  <page :page="page" />
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'
import getSeoMetaData from '@/helpers/seo'

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
    return getSeoMetaData(this.page, this.$nuxt.$route)
  },
}
</script>
