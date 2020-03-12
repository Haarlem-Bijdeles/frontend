<template>
  <header>
    <notch-wrapper>
      <div class="header-wrapper">
        <skip-links />
        <mobile-navigation @toggleMenu="toggleMenu" />
        <nuxt-link class="logo-wrapper" to="/">
          <icon-logo class="logo" aria-hidden="true" width="150" height="150" />
          <icon-logo-small
            class="logo-small"
            height="50"
            width="160"
            aria-hidden="true"
          />
          <span class="sr-only">Haarlm bijdeles</span>
        </nuxt-link>

        <transition
          name="fade2"
          @after-enter="afterEnter"
          @after-leave="afterLeave"
          @before-leave="beforeLeave"
        >
          <div v-show="showMenu" class="bg">
            <transition name="fade">
              <div v-show="showMenu" ref="bg" class="content">
                <main-navigation />
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </notch-wrapper>
  </header>
</template>

<script>
import SkipLinks from '~/components/Layout/SkipLinks.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'
import MainNavigation from '~/components/MainNavigation.vue'
import IconLogo from '~/icons/logo.svg'
import IconLogoSmall from '~/icons/logo-small.svg'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

const bodyScrollLock = require('body-scroll-lock')

export default {
  components: {
    SkipLinks,
    MobileNavigation,
    IconLogo,
    IconLogoSmall,
    MainNavigation,
    NotchWrapper,
  },
  data() {
    return {
      showMenu: false,
    }
  },

  methods: {
    toggleMenu(status) {
      this.showMenu = status
    },
    afterEnter() {
      const bg = this.$refs.bg
      bodyScrollLock.disableBodyScroll(bg)
    },
    beforeLeave() {
      const bg = this.$refs.bg
      bg.scrollTop = 0
    },
    afterLeave() {
      const bg = this.$refs.bg
      bodyScrollLock.enableBodyScroll(bg)
    },
  },
}
</script>

<style lang="postcss" scoped>
header {
  background: var(--color-primary);
  margin-bottom: 4em;

  @media (--navigation-md) {
    background: linear-gradient(
      var(--color-primary) 0,
      var(--color-primary) 4em,
      transparent 4em,
      transparent 100%
    );
    margin-bottom: 0;
  }

  @media (--navigation-lg) {
    background: transparent;
  }
}

.header-wrapper {
  display: flex;

  @media (--navigation-md) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
  @media (--navigation-lg) {
    flex-direction: row;
  }
}

.content {
  padding: 5em var(--gutter) var(--gutter);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;

  @media (--navigation-md) {
    padding: 0;
    flex-direction: column;
    overflow: visible;
    transform: translateY(0);
    display: flex !important;
    max-height: none;
    justify-content: flex-end;
    flex: 1 0 auto;
  }

  @media (--navigation-lg) {
    padding-top: var(--spacing-m);
    padding-left: 0;
  }
}

.logo-wrapper {
  @mixin link-reset;
  flex: 1 0 auto;
  position: relative;
  z-index: var(--z-header);
  width: 100%;
  @media (--navigation-lg) {
    width: auto;
    flex: 0 0 auto;
    margin-bottom: calc(var(--spacing-l) / -1);
  }
}

.bg {
  flex: 1 1 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  z-index: var(--z-main-navigation);
  padding: var(--notch);
  background: var(--color-bg-page);

  @media (--navigation-md) {
    height: auto;
    position: static;
    padding: 0;
    overflow: visible;
    display: flex !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-2em);
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: transform 0.3s;
}

.fade2-enter,
.fade2-leave-to {
  transform: translateY(-100vh);
}

.logo-wrapper {
  align-self: center;
}

.logo,
.logo-small {
  fill: var(--color-primary);
  display: none;
}

.logo {
  @media (--navigation-lg) {
    display: block;
  }
}

.logo-small {
  margin: var(--spacing-xs) auto;
  @media (--navigation-md) {
    display: block;
  }
  @media (--navigation-lg) {
    display: none;
  }
}
</style>
