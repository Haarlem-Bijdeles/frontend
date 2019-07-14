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

    <testimonials />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  components: {
    AppHero,
    Intro,
    Testimonials,
  },
  meta: {
    step: 2,
  },
  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'bijles-haarlem',
      },
    })

    return {
      title: response.data[0].title.rendered,
      text: response.data[0].content.rendered,
    }
  },
}
</script>
