<template>
  <testimonials-wrapper :testimonials="testimonials" :show-button="true" />
</template>

<script>
import TestimonialsQuery from '~/graphql/Testimonials.gql'
import TestimonialsWrapper from '~/components/Testimonials/TestimonialsWrapper.vue'

export default {
  components: {
    TestimonialsWrapper,
  },
  data() {
    return {
      testimonials: [],
    }
  },
  apollo: {
    testimonials: {
      query: TestimonialsQuery,
      variables() {
        return {
          first: 3,
        }
      },
    },
  },
}
</script>
