<template>
  <div class="skip-links">
    <app-button class="btn" button-style="ghost" href="#content">
      {{ $t('content') }}
    </app-button>
    <app-button class="btn" button-style="ghost" href="#menu">
      {{ $t('menu') }}
    </app-button>
  </div>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  &:not(:focus) {
    @mixin sr-only;
  }

  &:focus,
  &:active {
    position: fixed;
    z-index: var(--z-skip-links);
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
