<template>
  <section
    v-if="testimonials"
    class="testimonials"
    aria-labelledby="testimonials-title"
  >
    <h2 id="testimonials-title" class="sr-only">{{ $t('ourRatings') }}</h2>
    <testimonials-list :testimonials="testimonials.edges" />
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
  },
}
</script>

<style lang="postcss" scoped>
.testimonials {
  @mixin center;
  @mixin block-padding;
  text-align: center;
}
</style>
