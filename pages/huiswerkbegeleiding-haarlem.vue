<template>
  <div>
    <article>
      <app-hero :image2="image" :title="title" />
      <usps />
      <intro :text="text" />
    </article>

    <student-parent />
    <prices />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Intro from '@/components/Intro.vue'
import AppHero from '@/components/AppHero.vue'
import Prices from '@/components/Prices.vue'
import StudentParent from '@/components/StudentParent.vue'

export default {
  components: {
    AppHero,
    Intro,
    StudentParent,
    Prices,
  },
  meta: {
    step: 1,
  },
  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'huiswerkbegeleiding-haarlem',
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
