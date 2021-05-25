<template>
  <nuxt-link :to="item.path">{{ item.label }}</nuxt-link>
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
