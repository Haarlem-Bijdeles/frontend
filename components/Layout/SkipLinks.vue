<template>
  <div class="skip-links">
    <a href="#content" class="btn">{{ $t('content') }}</a>
    <a href="#menu" class="btn">{{ $t('menu') }}</a>
  </div>
</template>

<style lang="postcss" scoped>
a {
  @mixin link-reset;
  background: var(--color-secondary);

  &:not(:focus) {
    @mixin sr-only;
  }

  &:focus,
  &:active {
    position: fixed;
    z-index: 100;
    top: 1rem;
    left: 1rem;
  }
}
</style>

<i18n>
{
  "nl": {
    "content": "Naar hoofdinhoud",
    "menu": "Naar hoofdnavigatie"
  }
}
</i18n>
