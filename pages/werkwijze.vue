<template>
  <div>
    <page v-if="page" :page="page" />
    <way-we-work :page="page" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'
import WayWeWork from '@/components/templates/WayWeWork.vue'

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
