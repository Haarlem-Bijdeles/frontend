<template>
  <section
    v-if="testimonials.edges"
    class="testimonials"
    aria-labelledby="testimonials-title"
  >
    <h2 id="testimonials-title" class="sr-only">{{ $t('ourRatings') }}</h2>
    <testimonials-list :testimonials="testimonials.edges" />
    <nuxt-link v-if="showButton" to="/referenties" class="btn btn-ghost">
      Bekijk alle referenties
    </nuxt-link>
  </section>
</template>

<script>
import TestimonialsList from '~/components/Testimonials/TestimonialsList.vue'

export default {
  components: {
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
