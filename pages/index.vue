<template>
  <div>
    <article>
      <app-hero
        size="large"
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        :title="title"
      />
      <usps />

      <intro :text="text" />
    </article>

    <services />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Intro from '@/components/Intro.vue'
import AppHero from '@/components/AppHero.vue'
import Services from '@/components/Services.vue'
import Usps from '@/components/Usps.vue'

export default {
  components: {
    AppHero,
    Usps,
    Intro,
    Services,
  },
  meta: {
    step: 0,
  },
  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'welkom-huiswerkbegeleiding-haarlem',
      },
    })

    return {
      title: response.data[0].title.rendered,
      text: response.data[0].content.rendered,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
