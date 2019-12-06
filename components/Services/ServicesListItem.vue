<template>
  <li class="item">
    <div class="header">
      <h3 class="title">{{ service.title }}</h3>
    </div>
    <ul class="usps">
      <li v-for="item in service.usps" :key="item.text" class="usp">
        {{ item.text }}
      </li>
    </ul>
    <a v-if="service.link" :href="service.link.url" class="btn btn-ghost">
      {{ $t('moreInformation') }}
      <span class="sr-only">over {{ service.title }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.item {
  flex-direction: column;
  display: flex;
  padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
  background: var(--color-white);
  position: relative;

  @media (--viewport-lg) {
    background: var(--color-white-transparent);
  }
}

.header {
  text-align: center;
  margin-bottom: var(--spacing-m);
  position: relative;
}

.usps {
  @mixin list-reset;

  flex: 1 1 auto;
  margin-bottom: 1.5em;
}

.usp {
  padding: 0 0 var(--spacing-xs);

  &:last-child {
    padding-bottom: 0;
  }
}

.btn {
  align-self: center;
}
</style>

<i18n>
{
  "nl": {
    "moreInformation": "Meer informatie"
  }
}
</i18n>
