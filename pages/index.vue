<template>
  <div>
    <article>
      <app-hero size="large" :image2="image" :title="title" />
      <usps :usps="usps" :offers="offers" />

      <the-intro :text="text" />
    </article>

    <services :services="services" />
  </div>
</template>

<script>
import TheIntro from '@/components/TheIntro.vue'
import AppHero from '@/components/AppHero.vue'
import Services from '@/components/Services.vue'
import Usps from '@/components/Usps.vue'

export default {
  components: {
    AppHero,
    Usps,
    TheIntro,
    Services,
  },
  meta: {
    step: 0,
  },
  async asyncData({ $axios, app }) {
    const response = await $axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'welkom-huiswerkbegeleiding-haarlem',
        _embed: '1',
      },
    })
    const { data } = response

    const response2 = await $axios.get(`site/v1/home/`)

    return {
      title: data[0].title.rendered,
      text: data[0].content.rendered,
      image: data[0]._embedded['wp:featuredmedia'][0],
      usps: response2.data.usps,
      offers: response2.data.offers,
      services: response2.data.services,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
