<template>
  <div>
    <article>
      <app-hero size="large" :image2="image" :title="title" />
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
        _embed: '1',
      },
    })
    const { data } = response

    return {
      title: data[0].title.rendered,
      text: data[0].content.rendered,
      image: data[0]._embedded['wp:featuredmedia'][0],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
