<template>
  <div>
    <article>
      <app-hero :image2="image" :title="page.title.rendered" />
      <intro :text="page.content.rendered" />
    </article>
    <slot />

    <contact v-if="page.template === 'page-contact.php'" />
    <teachers
      v-if="page.template === 'page-employers.php'"
      :teachers="page.teachers"
    />
    <way-we-work v-if="page.template === 'page-procedure.php'" :page="page" />
    <service
      v-if="page.template === 'page-service.php'"
      :service="page.service"
    />

    <videos v-if="page.videos" :videos="page.videos" />
    <testimonials :testimonials="page.testimonials" />
  </div>
</template>

<script>
import Testimonials from '@/components/Testimonials.vue'
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'
import Contact from '@/components/templates/Contact.vue'
import Videos from '@/components/Videos.vue'
import Teachers from '@/components/templates/Teachers.vue'
import WayWeWork from '@/components/templates/WayWeWork.vue'
import Service from '@/components/templates/Service.vue'

export default {
  components: {
    Testimonials,
    AppHero,
    Intro,
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
      if (this.page._embedded['wp:featuredmedia']) {
        return this.page._embedded['wp:featuredmedia'][0]
      }
      return null
    },
  },
}
</script>
