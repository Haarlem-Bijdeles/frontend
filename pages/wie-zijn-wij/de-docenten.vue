<template>
  <page :page="page" />
</template>

<script>
import TeachersQuery from '~/graphql/Teachers.gql'
import Page from '@/components/Page.vue'

export default {
  components: {
    Page,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: TeachersQuery,
      variables: {
        uri: 'wie-zijn-wij/de-docenten/',
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
