<template>
  <section
    v-if="testimonials"
    class="testimonials"
    aria-labelledby="testimonials-title"
  >
    <h2 id="testimonials-title" class="sr-only">{{ $t('ourRatings') }}</h2>
    <testimonials-list :testimonials="testimonials.edges" />
    <div v-if="showButton" class="button-wrapper">
      <nuxt-link to="/referenties" class="btn">
        Bekijk alle referenties
      </nuxt-link>
    </div>
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

.button-wrapper {
  max-width: 20em;
  margin: 2em auto 0;
}
</style>
