<template>
  <ul v-if="testimonials.length" class="list">
    <testimonials-list-item
      v-for="testimonial in testimonials"
      :key="testimonial.node.title"
      :testimonial="testimonial"
    />
  </ul>
</template>

<script>
import TestimonialsListItem from '~/components/Testimonials/TestimonialsListItem.vue'

export default {
  components: {
    TestimonialsListItem,
  },
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-gap: var(--gutter);
}
</style>
