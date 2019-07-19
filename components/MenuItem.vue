<template>
  <a v-if="item.target === '_blank'" :href="item.url" target="_blank">
    {{ item.title }}
  </a>
  <nuxt-link v-else :to="item.url">
    {{ item.title }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
