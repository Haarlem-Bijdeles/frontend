<template>
  <div>
    <article>
      <app-hero :image2="image" :title="title" />
      <usps />

      <intro :text="text" />
    </article>
    <ul class="list">
      <teacher
        v-for="teacher in teachers"
        :key="teacher.name"
        :teacher="teacher"
      />
    </ul>
    <videos :videos="videos" />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'
import Teacher from '@/components/Teacher.vue'
import Videos from '@/components/Videos.vue'

export default {
  components: {
    AppHero,
    Intro,
    Teacher,
    Videos,
  },
  head() {
    return {
      title: this.title,
    }
  },

  async asyncData({ params }) {
    const teachers = await axios.get('/site/v1/teachers')
    const response = await axios.get(`wp/v2/pages/?_embed`, {
      params: {
        slug: 'de-docenten',
        _embed: '1',
      },
    })

    const { data } = response

    return {
      title: data[0].title.rendered,
      text: data[0].excerpt.rendered,
      image: data[0]._embedded['wp:featuredmedia'][0],
      teachers: teachers.data.teachers,
      videos: teachers.data.videos,
    }
  },

  meta: {
    step: 4,
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>
