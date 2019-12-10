<template>
  <div>
    <page :page="page" />
    <notch-wrapper v-if="offices.length">
      <div class="wrapper">
        <contact-offices v-if="offices && offices.length" :offices="offices" />
        <form-contact />
      </div>
    </notch-wrapper>
    <block-map v-if="offices && offices.length" :offices="offices" />
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
import PageQuery from '~/graphql/Page.gql'
import SiteDetailsQuery from '~/graphql/SiteDetails.gql'
import BlockMap from '@/components/Contact/BlockMap.vue'
import ContactOffices from '@/components/Contact/ContactOffices.vue'
import FormContact from '@/components/Forms/FormContact.vue'
import getSeoMetaData from '@/helpers/seo'
import pages from '@/config/pages'
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'

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
    const siteDetails = await app.apolloProvider.defaultClient.query({
      query: SiteDetailsQuery,
    })

    return {
      page: page.data.page,
      offices: siteDetails.data.siteDetails.addressesGroup.addresses,
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
