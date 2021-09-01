<template>
  <li>
    <blockquote class="quote">
      <cite class="cite">{{ testimonial.node.title }}</cite>
      <span
        v-if="testimonial.node.testimonialsGroup"
        v-html="testimonial.node.testimonialsGroup.quote"
      />
    </blockquote>
  </li>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.cite {
  line-height: 1.3;
  margin-bottom: var(--spacing-xxs);
  display: block;
  font-weight: var(--font-weight-bold);
}
</style>
