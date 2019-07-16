<template>
  <div>
    <article>
      <app-hero :image2="image" :title="title" />

      <intro :text="text" />
    </article>
    <way-we-work />
  </div>
</template>

<script>
import axios from '~/plugins/axios'

import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'
import WayWeWork from '@/components/WayWeWork.vue'

export default {
  components: {
    AppHero,
    Intro,
    WayWeWork,
  },
  meta: {
    step: 3,
  },

  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'werkwijze',
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
