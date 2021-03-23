<template>
  <div>
    <page :page="page" />
    <way-we-work
      v-if="page.wayWeWorkGroup"
      :methods="page.wayWeWorkGroup.wayWeWork"
    />
  </div>
</template>

<script>
import Page from '~/components/Page.vue'
import PageWayWeWorkQuery from '~/graphql/PageWayWeWork.gql'
import WayWeWork from '~/components/WayWeWork/WayWeWork.vue'
import getSeoMetaData from '~/helpers/seo'
import pages from '~/config/pages'

export default {
  name: 'PageWayWeWork',
  components: {
    Page,
    WayWeWork,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageWayWeWorkQuery,
      variables: {
        pageId: pages.wayWeWork,
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
      nl: '/werkwijze',
    },
  },
}
</script>
