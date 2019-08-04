<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>

    <ul v-if="menu.edges.length" ref="menu" class="menu">
      <main-navigation-item
        v-for="item in menu.edges[0].node.menuItems.edges"
        :key="item.node.label"
        :item="item.node"
      />
    </ul>

    <div
      class="arrow"
      :class="{ active: mounted }"
      :style="{ transform: arrowPosition, width: arrowWidth }"
    />
  </nav>
</template>

<script>
import MenuQuery from '~/graphql/Menu.gql'
import MainNavigationItem from '@/components/Menu/MainNavigationItem.vue'

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
    step() {
      return this.$store.state.step
    },
  },
  watch: {
    $route() {
      this.setArrowPosition()
    },
  },
  mounted() {
    this.setArrowPosition()
    setTimeout(() => {
      this.mounted = true
    }, 0)
  },
  methods: {
    isCurrentStep(step) {
      return this.step === step
    },
    setArrowPosition() {
      const activeLink = this.$refs.menu.querySelector(
        `:nth-child(${this.step + 1}`,
      )
      if (activeLink) {
        this.arrowPosition = `translateX(${activeLink.offsetLeft}px)`
        this.arrowWidth = `${activeLink.offsetWidth}px`
      }
    },
  },
  apollo: {
    menu: {
      query: MenuQuery,
      variables: {
        location: 'HEADER_MENU',
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
nav {
  position: relative;
}

.menu {
  @mixin list-reset;
  border-bottom: 1px solid var(--color-black);

  @media (--show-full-navigation) {
    margin-left: var(--gutter);
    display: flex;
    border-bottom: 0;
    justify-content: space-between;
  }
}
</style>
