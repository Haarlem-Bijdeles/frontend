<template>
  <footer>
    <notch-wrapper>
      <div class="wrapper">
        <a
          href="https://www.haarlembijdeles.nl"
          title="Haarlem Bijdeles"
          class="logo"
        >
          <icon-logo aria-hidden="true" width="120" height="120" class="logo" />
        </a>

        <div class="quick-links">
          <h2 id="footer-nav-heading">Handige links</h2>

          <nav
            aria-label="footer-nav-heading"
            class="footer-menu"
            tabindex="-1"
          >
            <div class="menu__bg"></div>

            <ul class="footer-menu__list">
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1379 current_page_item menu-item-1864"
                  href="https://www.haarlembijdeles.nl/"
                  title="Home"
                  >Home</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1863"
                  href="https://www.haarlembijdeles.nl/huiswerkbegeleiding-haarlem/"
                  title="Huiswerkbegeleiding"
                  >Huiswerkbegeleiding</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1862"
                  href="https://www.haarlembijdeles.nl/bijles-haarlem/"
                  title="Bijles"
                  >Bijles</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1861"
                  href="https://www.haarlembijdeles.nl/examentraining-haarlem/"
                  title="Examentraining"
                  >Examentraining</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1868"
                  href="https://www.haarlembijdeles.nl/werkwijze/"
                  title="Werkwijze"
                  >Werkwijze</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1865"
                  href="https://www.haarlembijdeles.nl/wie-zijn-wij/blog/"
                  title="Bijdeles Blog"
                  >Bijdeles Blog</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1867"
                  href="https://www.haarlembijdeles.nl/wie-zijn-wij/de-docenten/"
                  title="De docenten"
                  >De docenten</a
                >
              </li>
              <li class="footer-menu__item">
                <a
                  class="footer-menu__link  menu-item menu-item-type-post_type menu-item-object-page menu-item-1866"
                  href="https://www.haarlembijdeles.nl/contact/"
                  title="Contact"
                  >Contact</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="address">
          <h2>Contact</h2>
          <address itemscope itemtype="http://schema.org/Organization">
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
          </address>
        </div>
        <social-media-links />
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
footer {
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

ul {
  @mixin list-reset;
}

.logo {
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: block;
}
</style>
