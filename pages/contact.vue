<template>
  <div>
    <article class="wrapper">
      <contact-offices />
      <form-contact />
    </article>
    <block-map />
  </div>
</template>

<script>
import BlockMap from '@/components/BlockMap.vue'
import ContactOffices from '@/components/ContactOffices.vue'
import FormContact from '@/components/FormContact.vue'

export default {
  components: {
    BlockMap,
    ContactOffices,
    FormContact,
  },

  head() {
    return {
      title: this.$t('contact'),
    }
  },
  meta: {
    step: 5,
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center;
  @mixin block-padding;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 2fr 1fr;
}
</style>
