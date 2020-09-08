<template>
  <div class="page">
    <the-header />
    {{ testimonials }}
    <main>
      <nuxt />
    </main>
    <the-testimonials />
    <the-footer />
    <error-handler />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TheHeader from '~/components/Layout/TheHeader.vue'
import TheFooter from '~/components/Layout/TheFooter.vue'
import TheTestimonials from '~/components/Layout/TheTestimonials.vue'
import ErrorHandler from '~/components/Layout/ErrorHandler.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheTestimonials,
    ErrorHandler,
  },
  computed: {
    ...mapState('testimonials2', ['testimonials']),
    // testimonials() {
    //   return this.$store.state.testimonials2.testimonials
    // },
  },
}
</script>

<style lang="postcss" scoped>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
