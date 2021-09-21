<template>
  <div>
    <page :page="page" />
    <student-parent
      :for-students-and-parents-group="page.forStudentsAndParentsGroup"
    />
    <prices-wrapper :prices-group="page.pricesGroup" />
  </div>
</template>

<script>
import Page from '~/components/Page.vue'
import PageServiceQuery from '~/graphql/PageService.gql'
import PricesWrapper from '~/components/Prices/PricesWrapper.vue'
import getSeoMetaData from '~/helpers/seo'
import StudentParent from '~/components/StudentParent.vue'
import pages from '~/config/pages'

export default {
  name: 'PageServices',
  components: {
    StudentParent,
    Page,
    PricesWrapper,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageServiceQuery,
      variables: {
        pageId: pages.services,
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
  nuxtI18n: {
    paths: {
      nl: '/(huiswerkbegeleiding-amsterdam|huiswerkbegeleiding)',
    },
  },
}
</script>
