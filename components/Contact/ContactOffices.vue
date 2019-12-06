<template>
  <div class="offices">
    <h2 class="title">{{ $t('addresses') }}</h2>
    <div class="wrapper">
      <contact-office
        v-for="office in offices"
        :key="office.zipcode"
        :office="office"
      />
    </div>
  </div>
</template>

<script>
import ContactOffice from '@/components/Contact/ContactOffice.vue'

export default {
  components: {
    ContactOffice,
  },
  props: {
    offices: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
