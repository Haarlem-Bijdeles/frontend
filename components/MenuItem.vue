<template>
  <div>
    <a v-if="item.target === '_blank'" :href="item.url" target="_blank">
      {{ item.label }}
    </a>
    <nuxt-link v-else :to="item.relativeUrl">{{ item.label }}</nuxt-link>
  </div>
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
