<template>
  <article>
    <app-hero
      :title="page.title"
      :image="page.featuredImage"
      :is-large="isLargeHero"
    />
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
    isLargeHero: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
