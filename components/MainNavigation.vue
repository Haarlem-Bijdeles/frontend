<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>

    <ul ref="menu" class="menu">
      <li v-for="(item, index) in menu" :key="item.ID" class="menu-item">
        <menu-item :item="item" :index="index" class="menu-link" />
        <ul v-if="item.children.length !== 0" class="submenu">
          <li
            v-for="subitem in item.children"
            :key="subitem.ID"
            class="submenu-item"
          >
            <menu-item :item="subitem" :index="index" class="submenu-link" />
          </li>
        </ul>
        <icon-chevron-down
          aria-hidden="true"
          width="24"
          height="24"
          class="icon-chevron-down"
        />
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
import axios from '~/plugins/axios'

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
      menu: null,
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
    this.getOffices()
  },
  methods: {
    async getOffices() {
      const response = await axios.get('/site/v1/details')
      this.menu = response.data.menus.header
    },
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
