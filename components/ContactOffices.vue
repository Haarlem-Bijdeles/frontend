<template>
  <div class="offices">
    <h2 class="title">Adressen</h2>
    <div class="wrapper">
      <contact-office />
      <contact-office />
    </div>
  </div>
</template>

<script>
import ContactOffice from '@/components/ContactOffice.vue'

export default {
  components: {
    ContactOffice,
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, 1fr);
}
</style>
