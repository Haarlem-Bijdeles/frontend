<template>
  <section
    v-if="testimonials.edges"
    class="testimonials"
    aria-labelledby="testimonials-title"
  >
    <h2 id="testimonials-title" class="sr-only">{{ $t('ourRatings') }}</h2>
    <testimonials-list :testimonials="testimonials.edges" />
    <app-button v-if="showButton" to="/referenties" button-style="ghost">
      {{ $t('btnShowAll') }}
    </app-button>
  </section>
</template>

<script>
import TestimonialsList from '~/components/Testimonials/TestimonialsList.vue'
import AppButton from '@/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
    TestimonialsList,
  },
  props: {
    testimonials: {
      type: Object,
      required: true,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.testimonials {
  @mixin center;
  @mixin block-padding;
  text-align: center;
}

.btn {
  margin: var(--spacing-l) auto 0;
}
</style>

<i18n>
{
  "nl": {
    "btnShowAll": "Bekijk alle referenties",
    "ourRatings": "Onze waarderingen"
  }
}
</i18n>
