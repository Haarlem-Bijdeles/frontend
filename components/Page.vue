<template>
  <div>
    <article>
      <app-hero :title="page.title" :image="page.featuredImage" />
      <the-intro v-if="page.content" :text="page.content" />
    </article>
    <slot />
    <teacher-list v-if="page.teachers" :teachers="page.teachers" />
    <videos v-if="page.videos" :videos="page.videos" />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import TheIntro from '@/components/TheIntro.vue'
import Videos from '@/components/Videos.vue'
import TeacherList from '@/components/Teachers/TeacherList.vue'

export default {
  components: {
    AppHero,
    TheIntro,
    Videos,
    TeacherList,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    image() {
      if (this.page._embedded && this.page._embedded['wp:featuredmedia']) {
        return this.page._embedded['wp:featuredmedia'][0]
      }
      return null
    },
  },
}
</script>
