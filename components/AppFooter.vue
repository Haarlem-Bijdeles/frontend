<template>
  <footer class="footer">
    <notch-wrapper>
      <div class="wrapper">
        <nuxt-link to="/" title="Haarlem Bijdeles" class="logo">
          <icon-logo aria-hidden="true" width="120" height="120" class="logo" />
        </nuxt-link>

        <div class="quick-links">
          <nav aria-label="footer-nav-heading" class="footer-menu">
            <h2 id="footer-nav-heading">Handige links</h2>
            <ul class="menu">
              <li class="menu-item">
                <nuxt-link to="/" title="Home">Home</nuxt-link>
              </li>
              <li class="menu-item">
                <nuxt-link
                  to="/huiswerkbegeleiding-haarlem/"
                  title="Huiswerkbegeleiding"
                  >Huiswerkbegeleiding</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link to="/bijles-haarlem/" title="Bijles"
                  >Bijles</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link to="/werkwijze/" title="Werkwijze"
                  >Werkwijze</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link to="/wie-zijn-wij/blog/" title="Bijdeles Blog"
                  >Bijdeles Blog</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link to="/wie-zijn-wij/de-docenten/" title="De docenten"
                  >De docenten</nuxt-link
                >
              </li>
              <li class="menu-item">
                <nuxt-link to="/contact/" title="Contact">Contact</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="address">
          <h2>Contact</h2>
          <nuxt-linkddress itemscope itemtype="http://schema.org/Organization">
            <p itemprop="name">Haarlem Bijdeles</p>
            <p
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">Jansstraat 33</span><br />
              <span itemprop="locality">Haarlem</span>,
              <span itemprop="postal-code">2011RT</span>
            </p>
            <p
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">Wagenweg 21</span><br />
              <span itemprop="locality">Haarlem</span>,
              <span itemprop="postal-code">2012NA</span>
            </p>

            <p>
              <a href="tel:06%20-%2028%2032%2057%2033" itemprop="telephone"
                >06 - 28 32 57 33</a
              ><br />
              <a href="mailto:info@haarlembijdeles.nl" itemprop="email"
                >info@haarlembijdeles.nl</a
              ><br />
            </p>
            <p>
              KVK: 57774374
            </p>
          </nuxt-linkddress>
        </div>
        <div>
          <h2>Volg ons op</h2>
          <social-media-links
            title="Haarlem bijdeles"
            facebook-url="https://www.facebook.com/haarlembijdeles"
            twitter-url="https://twitter.com/haarlembijdeles"
            linked-in-url="https://www.linkedin.com/company-beta/5025367/"
            instagram-url="https://www.instagram.com/haarlembijdeles/"
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

export default {
  components: {
    NotchWrapper,
    SocialMediaLinks,
    IconLogo,
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
