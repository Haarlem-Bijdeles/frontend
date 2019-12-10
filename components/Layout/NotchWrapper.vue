<template>
  <div class="notch-wrapper">
    <div class="layout-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'large',
    },
  },
}
</script>

<style lang="postcss" scoped>
.notch-wrapper {
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
}

.layout-wrapper {
  max-width: var(--container-width-xlg);
  width: 100%;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  margin: 0 auto;
}
</style>
