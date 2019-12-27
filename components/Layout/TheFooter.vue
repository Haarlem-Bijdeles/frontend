<template>
  <footer class="footer">
    <notch-wrapper>
      <div class="wrapper">
        <div class="quick-links">
          <nav v-if="menu" aria-label="footer-nav-heading" class="footer-menu">
            <h2 id="footer-nav-heading">{{ $t('usefulLinks') }}</h2>
            <ul v-if="menu.edges.length" class="menu">
              <li
                v-for="item in menu.edges[0].node.menuItems.edges"
                :key="item.node.label"
                class="menu-item"
              >
                <menu-item :item="item.node" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="address">
          <h2>Contact</h2>
          <address itemscope itemtype="http://schema.org/Organization">
            <p itemprop="name">Haarlem bijdeles</p>
            <p
              v-for="office in offices"
              :key="office.zipcode"
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">{{ office.street }}</span>
              <br />
              <span itemprop="locality">{{ office.city }}</span
              >,
              <span itemprop="postal-code">{{ office.zipcode }}</span>
            </p>

            <p>
              <a
                v-if="siteDetails.addressesGroup.phonenumber"
                :href="`tel:${siteDetails.addressesGroup.phonenumber}`"
                itemprop="telephone"
                >{{ siteDetails.addressesGroup.phonenumber }}</a
              >
              <br />
              <a
                v-if="siteDetails.addressesGroup.email"
                :href="`mailto:${siteDetails.addressesGroup.email}`"
                itemprop="email"
                >{{ siteDetails.addressesGroup.email }}</a
              >
              <br />
            </p>
            <p v-if="siteDetails.addressesGroup.kvk">
              KVK: {{ siteDetails.addressesGroup.kvk }}
            </p>
          </address>
        </div>
        <nuxt-link to="/" title="Haarlem Bijdeles" class="logo">
          <icon-logo aria-hidden="true" width="120" height="120" class="logo" />
        </nuxt-link>

        <div>
          <h2>Volg ons op</h2>

          <social-media-links
            v-if="socialMedia"
            :social-media="socialMedia"
            title="Haarlem bijdeles"
          />
        </div>
      </div>
    </notch-wrapper>
  </footer>
</template>

<script>
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'
import IconLogo from '@/icons/logo.svg'
import MenuItem from '@/components/MenuItem.vue'
import MenuQuery from '~/graphql/Menu.gql'
import SiteDetailsQuery from '~/graphql/SiteDetails.gql'

export default {
  components: {
    NotchWrapper,
    SocialMediaLinks,
    IconLogo,
    MenuItem,
  },
  data() {
    return {
      address: null,
    }
  },
  computed: {
    socialMedia() {
      const socialMedia = {}
      const socialMediaSettings = this.siteDetails.socialMediaGroup
      if (socialMediaSettings.facebook)
        socialMedia.facebook = socialMediaSettings.facebook
      if (socialMediaSettings.twitter)
        socialMedia.twitter = socialMediaSettings.twitter
      if (socialMediaSettings.linkedin)
        socialMedia.linkedin = socialMediaSettings.linkedin
      if (socialMediaSettings.instagram)
        socialMedia.instagram = socialMediaSettings.instagram
      return socialMedia
    },
    hasSocialMedia() {
      return Object.keys(this.socialMedia).length
    },
    offices() {
      return this.siteDetails.addressesGroup.addresses
    },
  },

  apollo: {
    menu: {
      query: MenuQuery,
      variables: {
        location: 'FOOTER_MENU',
      },
    },
    siteDetails: {
      query: SiteDetailsQuery,
    },
  },
}
</script>

<style lang="postcss" scoped>
.footer {
  @mixin color-negative;
}

.wrapper {
  @mixin block-padding;
  display: grid;
  grid-gap: var(--gutter);
  align-items: start;
  justify-items: start;

  @media (--viewport-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--viewport-md) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.menu {
  @mixin list-reset;
}

.menu-item {
  padding-bottom: var(--spacing-xxs);
}

.logo {
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: none;

  @media (--viewport-sm) {
    display: block;
  }

  @media (--viewport-md) {
    grid-column-start: 1;
    grid-row-start: 1;
  }
}
</style>

<i18n>
{
  "nl": {
    "usefulLinks": "Handige links"
  }
}
</i18n>
