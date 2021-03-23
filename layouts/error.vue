<template>
  <div class="container">
    <the-intro :text="text" />
  </div>
</template>

<script>
import TheIntro from '~/components/TheIntro.vue'

export default {
  components: {
    TheIntro,
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
        <p>${this.error.message}</p>
        <p><a href="/">Keer terug naar de homepage</a></p>
        `,
    }
  },
  head() {
    return {
      title: this.title,
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
}
</script>
