<template>
  <div v-if="offices.length">
    <div class="wrapper">
      <contact-offices :offices="offices" />
      <form-contact />
    </div>
    <block-map :offices="offices" />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import BlockMap from '@/components/Contact/BlockMap.vue'
import ContactOffices from '@/components/Contact/ContactOffices.vue'
import FormContact from '@/components/Contact/FormContact.vue'

export default {
  components: {
    BlockMap,
    ContactOffices,
    FormContact,
  },

  data() {
    return {
      offices: [],
    }
  },

  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const offices = await axios.get('/site/v1/offices')
      this.offices = offices.data
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center;
  @mixin block-padding;
  display: grid;
  grid-gap: 1em;
  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
