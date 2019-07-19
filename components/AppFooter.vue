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
            <ul class="menu">
              <li v-for="item in menu" :key="item.ID" class="menu-item">
                <menu-item :item="item" class="menu-link" />
              </li>
            </ul>
          </nav>
        </div>
        <div class="address">
          <h2>Contact</h2>
          <address
            v-if="address"
            itemscope
            itemtype="http://schema.org/Organization"
          >
            <p itemprop="name">Haarlem Bijdeles</p>
            <p
              v-for="office in address.offices"
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
                v-if="address.phonenumber"
                :href="`tel:${address.phonenumber}`"
                itemprop="telephone"
              >
                {{ address.phonenumber }}
              </a>
              <br />
              <a
                v-if="address.email"
                :href="`mailto:${address.email}`"
                itemprop="email"
              >
                {{ address.email }}
              </a>
              <br />
            </p>
            <p v-if="address.kvk">KVK: {{ address.kvk }}</p>
          </address>
        </div>
        <div>
          <h2>Volg ons op</h2>
          <social-media-links
            v-if="socialMedia"
            title="Haarlem bijdeles"
            :facebook-url="socialMedia.facebook"
            :twitter-url="socialMedia.twitter"
            :linked-in-url="socialMedia.linkedin"
            :instagram-url="socialMedia.instagram"
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
import axios from '~/plugins/axios'
import MenuItem from '@/components/MenuItem.vue'

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
      menu: null,
    }
  },
  mounted() {
    this.getOffices()
  },
  methods: {
    async getOffices() {
      const response = await axios.get('/site/v1/details')
      this.address = response.data.address
      this.socialMedia = response.data.social_media
      this.menu = response.data.menus.header
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
