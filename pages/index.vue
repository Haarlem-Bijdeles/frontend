<template>
  <div>
    <page :page="page" :show-contact-buttons-on-hero="true" />
    <services-wrapper :services-group="page.servicesGroup" />
  </div>
</template>

<script>
import Page from '~/components/Page.vue'
import pages from '~/config/pages'
import ServicesWrapper from '~/components/Services/ServicesWrapper.vue'
import PageHomeQuery from '~/graphql/PageHome.gql'
import getSeoMetaData from '~/helpers/seo'

export default {
  components: {
    Page,
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
