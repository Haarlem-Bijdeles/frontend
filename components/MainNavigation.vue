<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('mainNavigation') }}
    </h2>
    <ul ref="menu" class="menu">
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/">
          <span class="title" :class="{ 'link-active': isCurrentStep(0) }"
            >Home</span
          >
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/huiswerkbegeleiding-haarlem/">
          <span class="title" :class="{ 'link-active': isCurrentStep(1) }"
            >Huiswerkbegeleiding</span
          >
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/bijles-haarlem/">
          <span class="title" :class="{ 'link-active': isCurrentStep(2) }"
            >Bijles</span
          >
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/werkwijze/">
          <span class="title" :class="{ 'link-active': isCurrentStep(3) }"
            >Werkwijze</span
          >
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/wie-zijn-wij/de-docenten/">
          <span class="title" :class="{ 'link-active': isCurrentStep(4) }"
            >Wie zijn wij?</span
          >
        </nuxt-link>
        <icon-chevron-down
          aria-hidden="true"
          width="24"
          height="24"
          class="icon-chevron-down"
        />

        <ul class="submenu">
          <li class="submenu-item">
            <nuxt-link class="submenu-link" to="/wie-zijn-wij/de-docenten/">
              <span class="title" :class="{ 'link-active': isCurrentStep(0) }">
                De docenten
              </span>
            </nuxt-link>
          </li>
          <li class="submenu-item">
            <nuxt-link class="submenu-link" to="/wie-zijn-wij/blog/">
              <span class="title" :class="{ 'link-active': isCurrentStep(0) }"
                >Bijdeles Blog</span
              >
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/contact/">
          <span class="title" :class="{ 'link-active': isCurrentStep(0) }"
            >Contact</span
          >
        </nuxt-link>
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

export default {
  components: {
    IconChevronDown,
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
    display: flex;
    border-bottom: 0;
    justify-content: space-around;
  }
}

.submenu {
  margin-left: 1em;

  @media (--show-full-navigation) {
    display: none;
  }
}

.title {
  transition: box-shadow 0.1s ease-out;
}

.submenu-link,
.menu-link {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  line-height: 1.1;
  padding: 0.45em 0;
  border-top: 1px solid var(--color-white);

  &:hover {
    text-decoration: none;
    & .title {
      box-shadow: 0 3px 0 0 currentColor;
    }
  }
  @media (--show-full-navigation) {
    border-top: 0;
    padding: 0.25em 0;
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
  height: 2px;
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
