<template>
  <div>
    <article>
      <app-hero :title="page.title" :image="page.featuredImage" />
      <the-intro :text="page.content" />
    </article>
    <slot />
    <contact v-if="page.template === 'page-contact.php'" />
    <teachers v-if="page.teachers" :teachers="page.teachers" />
    <way-we-work v-if="page.template === 'page-way-we-work.php'" :page="page" />
    <service
      v-if="page.template === 'page-service.php'"
      :for-students-and-parents="page.forStudentsAndParents"
    />
    <videos v-if="page.videos" :videos="page.videos" />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import TheIntro from '@/components/TheIntro.vue'
import Contact from '@/components/templates/Contact.vue'
import Videos from '@/components/Videos.vue'
import Teachers from '@/components/templates/Teachers.vue'
import WayWeWork from '@/components/templates/WayWeWork.vue'
import Service from '@/components/templates/Service.vue'

export default {
  components: {
    AppHero,
    TheIntro,
    Contact,
    Videos,
    Teachers,
    WayWeWork,
    Service,
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
