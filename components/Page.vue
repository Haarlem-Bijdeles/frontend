<template>
  <div>
    <article>
      <app-hero :title="page.title" :image="page.featuredImage" />
      <the-intro v-if="page.content" :text="page.content" />
    </article>
    <slot />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import TheIntro from '@/components/TheIntro.vue'

export default {
  components: {
    AppHero,
    TheIntro,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
