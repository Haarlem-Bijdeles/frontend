<template>
  <div class="page">
    <app-header />
    <main>
      <nuxt />
    </main>
    <testimonials />
    <error-handler />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ErrorHandler from '@/components/ErrorHandler.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ErrorHandler,
    Testimonials,
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
