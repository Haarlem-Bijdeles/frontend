<template>
  <div>
    <page :page="page" :show-contact-buttons-on-hero="true" />
    <home-usps />
    <services-wrapper :services-group="page.servicesGroup" />
  </div>
</template>

<script>
import Page from '~/components/Page.vue'
import pages from '~/config/pages'
import ServicesWrapper from '~/components/Services/ServicesWrapper.vue'
import PageHomeQuery from '~/graphql/PageHome.gql'
import getSeoMetaData from '~/helpers/seo'
import HomeUsps from '~/components/Home/HomeUsps.vue'

export default {
  components: {
    Page,
    ServicesWrapper,
    HomeUsps,
  },
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageHomeQuery,
      variables: {
        pageId: pages.home,
      },
    })

    const page2 = page.data.page
    page2.content = null
    return {
      page: page2,
    }
  },

  head() {
    return getSeoMetaData(this.page, this.$nuxt.$route)
  },
}
</script>
