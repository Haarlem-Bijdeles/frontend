<template>
  <div>
    <article>
      <app-hero :image2="image" :title="title" />
      <usps />

      <intro :text="text" />
    </article>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'

export default {
  components: {
    AppHero,
    Intro,
  },
  meta: {
    step: 2,
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'bijles-haarlem',
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
}
</script>
