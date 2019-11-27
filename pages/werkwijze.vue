<template>
  <div>
    <page v-if="page" :page="page" />
    <way-we-work
      v-if="page.wayWeWorkGroup"
      :methods="page.wayWeWorkGroup.wayWeWork"
    />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/PageWayWeWork.gql'
import WayWeWork from '@/components/WayWeWork/WayWeWork.vue'

export default {
  components: {
    Page,
    WayWeWork,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        uri: 'werkwijze',
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
