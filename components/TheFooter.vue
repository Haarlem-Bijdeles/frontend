<template>
  <footer class="footer">
    <notch-wrapper>
      <div class="wrapper">
        <nuxt-link to="/" title="Haarlem Bijdeles" class="logo">
          <icon-logo aria-hidden="true" width="120" height="120" class="logo" />
        </nuxt-link>

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
            <p itemprop="name">{{ generalSettings.title }}</p>
            <p
              v-for="office in generalSettings.addresses"
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
                v-if="generalSettings.phonenumber"
                :href="`tel:${generalSettings.phonenumber}`"
                itemprop="telephone"
                >{{ generalSettings.phonenumber }}</a
              >
              <br />
              <a
                v-if="generalSettings.companyEmail"
                :href="`mailto:${generalSettings.companyEmail}`"
                itemprop="email"
                >{{ generalSettings.companyEmail }}</a
              >
              <br />
            </p>
            <p v-if="generalSettings.kvk">KVK: {{ generalSettings.kvk }}</p>
          </address>
        </div>
        <div>
          <h2>Volg ons op</h2>

          <social-media-links
            v-if="generalSettings.socialMedia"
            title="Haarlem bijdeles"
            :social-media="generalSettings.socialMedia"
          />
        </div>
      </div>
    </notch-wrapper>
  </footer>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'
import IconLogo from '@/icons/logo.svg'
import MenuItem from '@/components/MenuItem.vue'
import MenuQuery from '~/graphql/Menu.gql'
import OfficesQuery from '~/graphql/Offices.gql'

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
      socialMedia: null,
    }
  },
  mounted() {
    this.getOffices()
  },

  apollo: {
    menu: {
      query: MenuQuery,
      variables: {
        location: 'FOOTER_MENU',
      },
    },
    generalSettings: {
      query: OfficesQuery,
    },
  },
}
</script>

<style lang="postcss" scoped>
.footer {
  @mixin color-negative;
}

.wrapper {
  @mixin center;
  @mixin block-padding;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: var(--gutter);
  align-items: start;
  justify-items: start;
}

.menu {
  @mixin list-reset;
}

.logo {
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: block;
}
</style>
