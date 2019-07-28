<template>
  <div class="page">
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
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheTestimonials from '@/components/TheTestimonials.vue'
import ErrorHandler from '@/components/ErrorHandler.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheTestimonials,
    ErrorHandler,
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
