<template>
  <div>
    <page :page="page" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'

export default {
  components: {
    Page,
  },
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  computed: {
    details() {
      return this.$store.state.details
    },
    meta() {
      return this.page.yoast_meta.map(item => {
        item.hid = item.name ? item.name : item.property
        return item
      })
    },
  },

  apollo: {
    page: {
      query: PageQuery,
      prefetch: ({ route }) => {
        return {
          slug: route.params.slug,
        }
      },
      variables() {
        return { uri: this.$route.params.slug }
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
