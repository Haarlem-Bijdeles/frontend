<template>
  <article>
    <app-hero v-if="showHero" :title="page.title" :image="page.featuredImage" />
    <slot />
    <the-intro v-if="page.content" :text="page.content" />
  </article>
</template>

<script>
import AppHero from '~/components/AppHero.vue'
import TheIntro from '~/components/TheIntro.vue'

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
    showHero: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
