<template>
  <div>
    <article>
      <app-hero
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        :title="title"
      />
      <div class="wrapper">
        <contact-offices :offices="offices" />
        <form-contact />
      </div>
    </article>
    <block-map :offices="offices" />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import BlockMap from '@/components/BlockMap.vue'
import AppHero from '@/components/AppHero.vue'
import ContactOffices from '@/components/ContactOffices.vue'
import FormContact from '@/components/FormContact.vue'

export default {
  components: {
    BlockMap,
    ContactOffices,
    FormContact,
    AppHero,
  },

  head() {
    return {
      title: this.title,
    }
  },
  meta: {
    step: 5,
  },
  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'contact',
      },
    })

    const offices = await axios.get('/site/v1/offices')

    return {
      title: response.data[0].title.rendered,
      offices: offices.data,
    }
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center;
  @mixin block-padding;
  display: grid;
  grid-gap: 1em;
  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
