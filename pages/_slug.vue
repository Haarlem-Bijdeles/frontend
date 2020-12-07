<template>
  <page :page="page" />
</template>

<script>
import Page from '~/components/Page.vue'
import PageByUriQuery from '~/graphql/PageByUri.gql'
import getSeoMetaData from '~/helpers/seo'

export default {
  name: 'PagePage',
  components: {
    Page,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageByUriQuery,
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
