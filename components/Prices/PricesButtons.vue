<template>
  <div class="buttons">
    <div class="button-wrapper">
      <app-button
        :is-full-width="true"
        to="/contact"
        button-style="action"
        class="btn"
      >
        {{ $t('makeAppointment') }}
      </app-button>
    </div>
    <div class="button-wrapper">
      <app-button
        :is-full-width="true"
        button-tag="a"
        v-if="siteDetails.addressesGroup.phonenumber"
        :href="`tel:${siteDetails.addressesGroup.phonenumber}`"
        button-style="ghost"
        class="btn"
      >
        {{ $t('callUs') }} {{ siteDetails.addressesGroup.phonenumber }}
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppButton,
  },
  computed: {
    ...mapState('siteDetails', ['siteDetails']),
  }
}
</script>

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
  padding-bottom: var(--spacing-xs);
  @media (--viewport-sm) {
    width: 50%;
    padding: 0 var(--spacing-xs) var(--spacing-xs);
  }
  @media (--viewport-md) {
    width: 25%;
  }
}
</style>

<i18n>
{
  "nl": {
    "makeAppointment": "Maak direct een afspraak",
    "callUs": "Bel ons:"
  }
}
</i18n>
