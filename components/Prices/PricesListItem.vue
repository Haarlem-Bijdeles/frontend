<template>
  <li class="item">
    <price-badge v-if="price.recommended" />
    <div class="header">
      <div class="label">{{ price.title }}</div>
      <div class="value">
        <check-rounded aria-hidden="true" class="icon" width="36" height="36" />
        {{ price.price }}
      </div>
    </div>
  </li>
</template>

<script>
import PriceBadge from '~/components/Prices/PriceBadge.vue'
import CheckRounded from '~/icons/check-rounded.svg'

export default {
  components: {
    PriceBadge,
    CheckRounded,
  },
  props: {
    price: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.item {
  flex-direction: column;
  padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
  background: var(--color-white);
  position: relative;
  display: flex;
  flex: 1 0 auto;
  margin-bottom: 0;
  margin-top: var(--spacing-m);

  @media (--viewport-lg) {
    background: var(--color-white-transparent);
  }

  @media (--viewport-sm) {
    margin-top: 0;
  }
}

.label {
  font-weight: 700;
  font-size: 1.75em;
}

.value {
  position: relative;
  font-size: 2em;
  line-height: 1.2;
}

.icon {
  font-size: 1.25rem;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--color-action);
  fill: var(--color-white);
  border-radius: 50%;
}
</style>
