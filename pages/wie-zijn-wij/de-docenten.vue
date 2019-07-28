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

  apollo: {
    page: {
      query: TeachersQuery,
      prefetch: ({ route }) => {
        return {
          slug: route.params.slug,
        }
      },
      variables() {
        return { uri: 'wie-zijn-wij/de-docenten/' }
      },
    },
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
