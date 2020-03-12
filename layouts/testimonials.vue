<template>
  <div class="page">
    <the-header />
    <main>
      <nuxt />
    </main>
    <the-footer />
    <error-handler />
  </div>
</template>

<script>
import TheHeader from '~/components/Layout/TheHeader.vue'
import TheFooter from '~/components/Layout/TheFooter.vue'
import ErrorHandler from '~/components/Layout/ErrorHandler.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
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
