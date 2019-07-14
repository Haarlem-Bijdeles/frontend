<template>
  <div class="container">
    <app-hero
      image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
      :title="title"
    />
    <intro :text="text" />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'

export default {
  components: {
    AppHero,
    Intro,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: `
        <p>De pagina die u zoekt kon niet worden gevonden.</p>
        <p>Suggesties voor een mogelijk vervolg van uw tocht:</p>
        <ul>
          <li><a href="Haarlem Bijdeles}">Keer terug naar de homepage</a></li>
          <li><a href="javascript:history.back(1)">Keer terug naar de vorige pagina</a></li>
        </ul>
        `,
    }
  },
  computed: {
    title() {
      if (this.error.statusCode === 404) {
        return 'Pagina niet gevonden'
      }
      return 'An error occurred'
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
