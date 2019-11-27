<template>
  <section
    v-if="testimonials"
    class="testimonials"
    aria-labelledby="testimonials-title"
  >
    <h2 id="testimonials-title" class="sr-only">{{ $t('ourRatings') }}</h2>
    <ul class="list">
      <li
        v-for="testimonial in testimonials.edges"
        :key="testimonial.node.title"
      >
        <blockquote class="quote">
          <cite class="cite">{{ testimonial.node.title }}</cite>
          <!-- eslint-disable-next-line -->
          <span v-if="testimonial.node.testimonialsGroup" v-html="testimonial.node.testimonialsGroup.quote" />
        </blockquote>
      </li>
    </ul>
  </section>
</template>

<script>
import TestimonialsQuery from '~/graphql/Testimonials.gql'

export default {
  data() {
    return {
      testimonials: [],
    }
  },
  apollo: {
    testimonials: TestimonialsQuery,
  },
}
</script>

<style lang="postcss" scoped>
.testimonials {
  @mixin center;
  @mixin block-padding;
  text-align: center;
}

.list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-gap: var(--gutter);
}

.cite {
  line-height: 1.3;
  margin-bottom: 0.25em;
  display: block;
  font-weight: var(--font-weight-bold);
}
</style>
