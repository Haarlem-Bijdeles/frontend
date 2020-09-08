<template>
  <nav aria-labelledby="menu-title" class="nav">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>

    <div ref="menu">
      <ul v-if="headerMenu" class="menu">
        <main-navigation-item
          v-for="item in headerMenu.edges[0].node.menuItems.edges"
          :key="item.node.label"
          :item="item.node"
        />
      </ul>
    </div>
    <div
      :class="{ active: mounted }"
      :style="{ transform: arrowPosition, width: arrowWidth }"
      class="arrow"
    />
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import MainNavigationItem from '~/components/Menu/MainNavigationItem.vue'

export default {
  components: {
    MainNavigationItem,
  },
  data() {
    return {
      arrowPosition: 0,
      arrowWidth: 0,
      mounted: false,
    }
  },
  computed: {
    ...mapState('menus', ['headerMenu']),
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.setArrowPosition()
      })
    },
  },
  mounted() {
    this.setArrowPosition()
    setTimeout(() => {
      this.mounted = true
    }, 0)
  },
  methods: {
    setArrowPosition() {
      const activeLink = this.getMainLink()

      if (activeLink) {
        this.arrowPosition = `translateX(${activeLink.parentElement.offsetLeft}px)`
        this.arrowWidth = `${activeLink.offsetWidth}px`
      } else {
        this.arrowWidth = 0
      }
    },
    getMainLink() {
      let activeLink = this.$refs.menu.querySelector(
        '.menu-link.nuxt-link-active[aria-haspopup=true], .menu-link.nuxt-link-exact-active',
      )
      if (activeLink) {
        return activeLink
      }
      const activeSubLink = this.$refs.menu.querySelector(
        '.submenu-link.nuxt-link-exact-active',
      )
      if (activeSubLink) {
        const menuItem = activeSubLink.closest('.menu-item.has-popup')
        activeLink = menuItem.querySelector('.menu-link')
        return activeLink
      }
      return null
    },
  },
}
</script>

<style lang="postcss" scoped>
.nav {
  position: relative;
}

.menu {
  @mixin list-reset;
  border-bottom: 1px solid var(--color-black);

  @media (--navigation-md) {
    display: flex;
    border-bottom: 0;
    justify-content: space-between;
  }

  @media (--navigation-lg) {
    margin-left: var(--spacing-l);
  }
}

.arrow {
  height: 3px;
  background: currentColor;
  display: none;

  @media (--navigation-md) {
    display: block;
  }
  &.active {
    transition: all 0.2s ease-out;
  }
}
</style>
