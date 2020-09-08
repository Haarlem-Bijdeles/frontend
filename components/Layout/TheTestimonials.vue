<template>
  <testimonials-wrapper
    v-if="testimonials"
    :testimonials="testimonials"
    :show-button="true"
  />
</template>

<script>
import { mapState } from 'vuex'
import TestimonialsWrapper from '~/components/Testimonials/TestimonialsWrapper.vue'

export default {
  components: {
    TestimonialsWrapper,
  },
  computed: {
    ...mapState('testimonials', ['testimonials']),
  },
}
</script>
