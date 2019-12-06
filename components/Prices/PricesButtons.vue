<template>
  <div class="buttons">
    <div class="button-wrapper">
      <nuxt-link to="/contact" class="btn btn-action">
        {{ $t('makeAppointment') }}
      </nuxt-link>
    </div>
    <div class="button-wrapper">
      <a href="tel:06%20-%2028%2032%2057%2033" class="btn btn-ghost">
        {{ $t('callUs') }}
      </a>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (--viewport-sm) {
    margin: 0 calc(var(--gutter) / -2);
    flex-direction: row;
  }
}

.button-wrapper {
  padding-bottom: 0.5em;
  @media (--viewport-sm) {
    width: 50%;
    padding: 0 0.5em 0.5em;
  }
  @media (--viewport-md) {
    width: 25%;
  }
}

.btn {
  width: 100%;
  max-width: none;
}
</style>

<i18n>
{
  "nl": {
    "makeAppointment": "Maak direct een afspraak",
    "callUs": "Bel Tim: 06 - 28 32 57 33"
  }
}
</i18n>
