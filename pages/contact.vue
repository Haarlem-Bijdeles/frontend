<template>
  <div>
    <article>
      <app-hero size="large" :image2="image" :title="title" />

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
import ContactOffices from '@/components/ContactOffices.vue'
import FormContact from '@/components/FormContact.vue'
import AppHero from '@/components/AppHero.vue'

export default {
  components: {
    AppHero,
    BlockMap,
    ContactOffices,
    FormContact,
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
        _embed: '1',
      },
    })
    const { data } = response
    const offices = await axios.get('/site/v1/offices')

    return {
      title: data[0].title.rendered,
      text: data[0].content.rendered,
      image: data[0]._embedded['wp:featuredmedia'][0],
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
