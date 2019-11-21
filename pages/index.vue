<template>
  <div>
    <article>
      <app-hero :image="page.featuredImage" :title="page.title" size="large" />
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
  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: FrontPageQuery,
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
