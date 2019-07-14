<template>
  <div>
    <article>
      <app-hero
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        title=" Huiswerkbegeleiding"
      />
      <usps />

      <intro class="content" />
    </article>

    <student-parent />
    <prices />
    <testimonials />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import AppHero from '@/components/AppHero.vue'
import Testimonials from '@/components/Testimonials.vue'
import Prices from '@/components/Prices.vue'
import StudentParent from '@/components/StudentParent.vue'

export default {
  components: {
    AppHero,
    Intro,
    StudentParent,
    Prices,
    Testimonials,
  },
  meta: {
    step: 1,
  },
}
</script>

<style lang="postcss" scoped>
.content {
  @mixin block-padding;
}
</style>
