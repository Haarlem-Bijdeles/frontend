<template>
  <div>
    <article>
      <app-hero
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        :title="title"
      />
      <usps />
      <intro :text="text" />
    </article>

    <student-parent />
    <prices />
    <testimonials />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Intro from '@/components/Intro.vue'
import AppHero from '@/components/AppHero.vue'
import Testimonials from '@/components/Testimonials.vue'
import Prices from '@/components/Prices.vue'
import StudentParent from '@/components/StudentParent.vue'

export default {
  components: {
    AppHero,
    Intro,
    StudentParent,
    Prices,
    Testimonials,
  },
  meta: {
    step: 1,
  },
  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'huiswerkbegeleiding-haarlem',
      },
    })

    return {
      title: response.data[0].title.rendered,
      text: response.data[0].content.rendered,
    }
  },
}
</script>
