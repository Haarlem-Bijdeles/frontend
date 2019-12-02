<template>
  <div>
    <page :page="page" />
    <service :for-students-and-parents="page.forStudentsAndParents" />
    <prices :prices="page.prices" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageServiceQuery from '~/graphql/PageService.gql'
import Service from '@/components/templates/Service.vue'
import Prices from '@/components/Prices.vue'
import getSeoMetaData from '@/helpers/seo'

export default {
  components: {
    Page,
    Service,
    Prices,
  },

  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageServiceQuery,
      variables: {
        uri: 'huiswerkbegeleiding-haarlem',
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
