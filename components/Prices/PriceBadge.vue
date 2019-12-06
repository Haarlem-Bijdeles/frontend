<template>
  <div class="badge">{{ $t('recommended') }}</div>
</template>

<style lang="postcss" scoped>
.badge {
  --badge-height: var(--spacing-l);
  background: var(--color-action);
  line-height: var(--badge-height);
  position: absolute;
  top: -1.5em;
  padding: 0;
  text-align: center;
  font-weight: 700;
  color: #fff;
  z-index: 9;
  left: var(--spacing-l);
  right: var(--spacing-l);

  @media (--viewport-sm) {
    left: 50%;
    margin-left: -5em;
    width: 10em;
  }

  &::before,
  &::after {
    z-index: 1;
    content: '';
    display: block;
    top: var(--spacing-xxs);
    position: absolute;
    border-top: calc(var(--badge-height) / 2) solid var(--color-action-dark);
    border-bottom: calc(var(--badge-height) / 2) solid var(--color-action-dark);
  }

  &::before {
    right: 100%;
    margin-right: 0;
    border-right: calc(var(--badge-height) / 2) solid var(--color-action-dark);
    border-left: calc(var(--badge-height) / 2) solid transparent;
  }
  &::after {
    left: 100%;
    margin-left: 0;
    border-left: calc(var(--badge-height) / 2) solid var(--color-action-dark);
    border-right: calc(var(--badge-height) / 2) solid transparent;
  }
}
</style>

<i18n>
{
  "nl": {
    "recommended": "Meest gekozen"
  }
}
</i18n>
