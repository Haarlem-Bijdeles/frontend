<template>
  <div>
    <page v-if="page" :page="page" />
    <testimonials-wrapper :testimonials="testimonials" />
  </div>
</template>

<script>
import TestimonialsQuery from '~/graphql/Testimonials.gql'
import TestimonialsWrapper from '~/components/Testimonials/TestimonialsWrapper.vue'
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'

export default {
  components: {
    Page,
    TestimonialsWrapper,
  },
  async asyncData({ app, params }) {
    const testimonials = await app.apolloProvider.defaultClient.query({
      query: TestimonialsQuery,
      variables: {
        first: 99,
      },
    })
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        uri: 'referenties',
      },
    })

    return {
      testimonials: testimonials.data.testimonials,
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
