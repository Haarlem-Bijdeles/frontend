<template>
  <div class="page">
    <app-header />
    <main>
      <nuxt />
    </main>
    <app-footer />
    <error-handler />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ErrorHandler from '@/components/ErrorHandler.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ErrorHandler,
  },
  data() {
    return {
      test: this.$store,
    }
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
