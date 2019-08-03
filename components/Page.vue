<template>
  <div>
    <article>
      <app-hero :title="page.title" :image="page.featuredImage" />
      <the-intro :text="page.content" />
    </article>
    <slot />
    <teachers v-if="page.teachers" :teachers="page.teachers" />
    <way-we-work v-if="page.template === 'page-way-we-work.php'" :page="page" />
    <videos v-if="page.videos" :videos="page.videos" />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import TheIntro from '@/components/TheIntro.vue'
import Videos from '@/components/Videos.vue'
import Teachers from '@/components/templates/Teachers.vue'
import WayWeWork from '@/components/templates/WayWeWork.vue'

export default {
  components: {
    AppHero,
    TheIntro,
    Videos,
    Teachers,
    WayWeWork,
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
