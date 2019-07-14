<template>
  <div>
    <article>
      <app-hero
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        title="Bijles"
      />
      <usps />

      <intro class="content" />
    </article>

    <testimonials />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  components: {
    AppHero,
    Intro,
    Testimonials,
  },
  meta: {
    step: 4,
  },
}
</script>

<style lang="postcss" scoped>
.content {
  @mixin block-padding;
}
</style>
