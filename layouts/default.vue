<template>
  <div class="page">
    <vue-announcer />
    <the-header />
    <main>
      <nuxt />
    </main>
    <the-testimonials />
    <the-footer />
    <error-handler />
  </div>
</template>

<script>
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
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
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
