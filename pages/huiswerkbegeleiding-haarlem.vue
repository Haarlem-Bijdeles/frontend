<template>
  <div>
    <page v-if="page" :page="page" />
    <service :for-students-and-parents="page.forStudentsAndParents" />
    <prices :prices="page.prices" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageServiceQuery from '~/graphql/PageService.gql'
import Service from '@/components/templates/Service.vue'
import Prices from '@/components/Prices.vue'

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
  meta: {
    step: 2,
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
