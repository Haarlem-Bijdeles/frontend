<template>
  <notch-wrapper v-if="text">
    <!-- eslint-disable-next-line -->
    <div class="intro" v-html="text" />
  </notch-wrapper>
</template>

<script>
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
  },
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
  @mixin block-padding;
}
</style>
