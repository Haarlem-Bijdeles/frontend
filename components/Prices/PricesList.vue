<template>
  <ul class="list">
    <prices-list-item
      v-for="price in prices"
      :key="price.title"
      :price="price"
    />
  </ul>
</template>

<script>
import PricesListItem from '@/components/Prices/PricesListItem.vue'

export default {
  components: {
    PricesListItem,
  },
  props: {
    prices: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: var(--spacing-m);
  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: calc(var(--gutter) * 2);
  }
  @media (--viewport-lg) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: var(--gutter);
  }
}
</style>
