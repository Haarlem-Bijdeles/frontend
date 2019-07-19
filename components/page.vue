<template>
  <div>
    <article>
      <app-hero :image2="image" :title="page.title.rendered" />
      <intro :text="page.content.rendered" />
    </article>
    <slot />
    <testimonials :testimonials="page.testimonials" />
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue'
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'

export default {
  components: {
    Testimonials,
    AppHero,
    Intro,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    image() {
      if (this.page._embedded['wp:featuredmedia']) {
        return this.page._embedded['wp:featuredmedia'][0]
      }
      return null
    },
  },
}
</script>
