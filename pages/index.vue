<template>
  <div>
    <article>
      <app-hero
        size="large"
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        title=" Huiswerkbegeleiding in het centrum van Haarlem"
      />
      <usps />

      <intro class="content" />
    </article>

    <services />
    <testimonials />
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import AppHero from '@/components/AppHero.vue'
import Services from '@/components/Services.vue'
import Testimonials from '@/components/Testimonials.vue'
import Usps from '@/components/Usps.vue'

export default {
  components: {
    Usps,
    AppHero,
    Services,
    Testimonials,
    Intro,
  },
}
</script>

<style lang="postcss" scoped>
.content {
  @mixin block-padding;
}
</style>
