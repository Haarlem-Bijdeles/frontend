<template>
  <div>
    <page v-if="page" :page="page" />
    <div class="wrapper">
      <contact-offices v-if="offices && offices.length" :offices="offices" />
      <form-contact />
    </div>
    <block-map v-if="offices && offices.length" :offices="offices" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'
import OfficesQuery from '~/graphql/Offices.gql'
import BlockMap from '@/components/Contact/BlockMap.vue'
import ContactOffices from '@/components/Contact/ContactOffices.vue'
import FormContact from '@/components/Contact/FormContact.vue'

export default {
  components: {
    Page,
    BlockMap,
    ContactOffices,
    FormContact,
  },
  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        uri: 'contact',
      },
    })
    const offices = await app.apolloProvider.defaultClient.query({
      query: OfficesQuery,
    })

    return {
      page: page.data.page,
      offices: offices.data.generalSettings.addresses,
    }
  },

  head() {
    return {
      title: this.page.title,
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
