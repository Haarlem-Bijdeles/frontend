<template>
  <div>
    <page :page="page" :is-large-hero="true">
      <usps
        v-if="page.uspsFrontPageGroup"
        :usps="page.uspsFrontPageGroup.usps"
        :offers="page.uspsFrontPageGroup.offers"
      />
    </page>
    <services-wrapper :services-group="page.servicesGroup" />
  </div>
</template>

<script>
import Page from '~/components/Page.vue'
import pages from '~/config/pages'
import ServicesWrapper from '~/components/Services/ServicesWrapper.vue'
import Usps from '~/components/Home/Usps.vue'
import PageHomeQuery from '~/graphql/PageHome.gql'
import getSeoMetaData from '~/helpers/seo'

export default {
  components: {
    Page,
    Usps,
    ServicesWrapper,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageHomeQuery,
      variables: {
        pageId: pages.home,
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
