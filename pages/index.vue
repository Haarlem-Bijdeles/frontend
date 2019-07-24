<template>
  <div>
    <article>
      <app-hero size="large" :image="page.featuredImage" :title="page.title" />
      <usps :usps="page.usps" :offers="page.offers" />

      <the-intro :text="page.content" />
    </article>

    <services :services="page.services" />
  </div>
</template>

<script>
import TheIntro from '@/components/TheIntro.vue'
import AppHero from '@/components/AppHero.vue'
import Services from '@/components/Services.vue'
import Usps from '@/components/Usps.vue'
import FrontPageQuery from '~/graphql/FrontPage.gql'

export default {
  components: {
    AppHero,
    Usps,
    TheIntro,
    Services,
  },
  meta: {
    step: 0,
  },

  apollo: {
    page: FrontPageQuery,
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
