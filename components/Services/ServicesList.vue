<template>
  <ul class="list">
    <li
      v-for="service in servicesGroup.services"
      :key="service.title"
      class="item"
    ></li>
  </ul>
</template>

<script>
export default {
  props: {
    servicesGroup: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: var(--spacing-l);
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
}
</style>
