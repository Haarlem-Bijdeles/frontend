<template>
  <div>
    <page :page="page" />
    <notch-wrapper v-if="offices.length">
      <div class="wrapper">
        <contact-offices :offices="offices" />
        <form-contact />
      </div>
    </notch-wrapper>
    <block-map v-if="offices && offices.length" :offices="offices" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Page from '~/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'
import BlockMap from '~/components/Contact/BlockMap.vue'
import ContactOffices from '~/components/Contact/ContactOffices.vue'
import FormContact from '~/components/Forms/FormContact.vue'
import getSeoMetaData from '~/helpers/seo'
import pages from '~/config/pages'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    Page,
    BlockMap,
    ContactOffices,
    FormContact,
    NotchWrapper,
  },

  async asyncData({ app }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: PageQuery,
      variables: {
        pageId: pages.contact,
      },
    })

    return {
      page: page.data.page,
    }
  },
  head() {
    const seoData = getSeoMetaData(this.page, this.$nuxt.$route)

    return {
      ...seoData,
      link: [
        {
          rel: 'dns-prefetch',
          href: '//maps.googleapis.com',
        },
      ],
    }
  },
  computed: {
    ...mapState('siteDetails', ['siteDetails']),
    offices() {
      return this.siteDetails.addressesGroup.addresses
    },
  },
  nuxtI18n: {
    paths: {
      nl: '/contact',
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin block-padding;
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
