<template>
  <section
    v-if="testimonials.length"
    class="testimonials"
    aria-labelledby="testimonials-title"
  >
    <h2 id="testimonials-title" class="sr-only">{{ $t('ourRatings') }}</h2>
    <ul class="list">
      <li v-for="testimonial in testimonials" :key="testimonial.title">
        <blockquote class="quote">
          <cite class="cite">{{ testimonial.title }}</cite>
          <!-- eslint-disable-next-line -->
          <span v-html="testimonial.quote" />
        </blockquote>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data() {
    return {
      testimonials: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const response = await axios.get(`site/v1/testimonials/`)
      this.testimonials = response.data
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
