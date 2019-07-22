<template>
  <!-- eslint-disable-next-line -->
  <div class="intro" v-html="text" v-if="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.intro {
  @mixin center var(--container-width-lg);
  @mixin block-padding;
}
</style>
