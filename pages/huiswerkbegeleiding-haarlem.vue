<template>
  <div>
    <page :page="page" />
    <student-parent
      :for-students-and-parents-group="page.forStudentsAndParentsGroup"
    />
    <prices :prices-group="page.pricesGroup" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageServiceQuery from '~/graphql/PageService.gql'
import Prices from '@/components/Prices.vue'
import getSeoMetaData from '@/helpers/seo'
import StudentParent from '@/components/StudentParent.vue'

export default {
  components: {
    StudentParent,
    Page,
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
