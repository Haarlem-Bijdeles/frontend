<template>
  <article>
    <app-hero
      :show-contact-buttons="showContactButtonsOnHero"
      :title="page.title"
      :image="page.featuredImage"
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
    showContactButtonsOnHero: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
