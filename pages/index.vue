<template>
  <div>
    <page :page="page" :is-large-hero="true">
      <usps
        v-if="page.uspsFrontPageGroup"
        :usps="page.uspsFrontPageGroup.usps"
        :offers="page.uspsFrontPageGroup.offers"
      />
    </page>
    <services :services="page.servicesGroup.services" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'

import Services from '@/components/Home/Services.vue'
import Usps from '@/components/Home/Usps.vue'
import PageHomeQuery from '~/graphql/PageHome.gql'
import getSeoMetaData from '@/helpers/seo'

export default {
  components: {
    Page,
    Usps,
    Services,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageHomeQuery,
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
