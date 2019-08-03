<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>

    <ul v-if="menu.edges.length" ref="menu" class="menu">
      <li
        v-for="item in menu.edges[0].node.menuItems.edges"
        :key="item.node.label"
        class="menu-item"
      >
        <menu-item :item="item.node" class="menu-link" />
        <ul
          v-if="item.node.childItems.edges.length"
          ref="submenu"
          class="submenu"
        >
          <li
            v-for="subItem in item.node.childItems.edges"
            :key="subItem.node.label"
            class="menu-item"
          >
            <menu-item :item="subItem.node" class="menu-link" />
          </li>
          <icon-chevron-down
            aria-hidden="true"
            width="24"
            height="24"
            class="icon-chevron-down"
          />
        </ul>
      </li>
    </ul>

    <div
      class="arrow"
      :class="{ active: mounted }"
      :style="{ transform: arrowPosition, width: arrowWidth }"
    />
  </nav>
</template>

<script>
import IconChevronDown from '@/icons/chevron-down.svg'
import MenuItem from '@/components/MenuItem.vue'
import MenuQuery from '~/graphql/Menu.gql'

export default {
  components: {
    IconChevronDown,
    MenuItem,
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

.menu,
.submenu {
  @mixin list-reset;
}

.menu {
  border-bottom: 1px solid var(--color-white);

  @media (--show-full-navigation) {
    margin-left: var(--gutter);
    display: flex;
    border-bottom: 0;
    justify-content: space-between;
  }
}

.submenu {
  margin-left: 1em;
  @mixin list-reset;

  @media (--show-full-navigation) {
    background: var(--color-white);
    position: absolute;
    left: 0;
    top: 100%;
    margin-left: 0;
    padding: 0.25em 0;
    white-space: nowrap;
  }
}

.menu-item {
  position: relative;
}

.title {
  transition: box-shadow 0.1s ease-out;
  padding: 0.25em 0;
}

.menu-item:hover .submenu {
  display: block;
}

.submenu-link,
.menu-link {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  line-height: 1.1;
  padding: 0 0.5em 0.25em;
  border-top: 1px solid var(--color-bg-page);

  &:hover {
    text-decoration: none;
    & .title {
      box-shadow: 0 2px 0 0 currentColor;
    }
  }
}

.icon-chevron-down {
  display: none;
  @media (--show-full-navigation) {
    display: none;
    display: block;
    display: none;
  }
}

.arrow {
  height: 3px;
  background: currentColor;
  display: none;

  @media (--show-full-navigation) {
    display: block;
  }
  &.active {
    transition: all 0.2s ease-out;
  }
}
</style>
