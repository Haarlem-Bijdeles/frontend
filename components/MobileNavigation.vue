<template>
  <div class="wrapper">
    <notch-wrapper>
      <div class="buttons">
        <button
          class="btn"
          :aria-expanded="menuIsExpanded"
          @click="toggleMenu(!menuIsExpanded)"
        >
          <icon-bars aria-hidden="true" width="24" height="24" class="bars" />
          {{ $t('menu') }}
        </button>
        <nuxt-link class="logo-wrapper" to="/">
          <icon-logo-small
            class="logo"
            height="50"
            width="160"
            aria-hidden="true"
          />
          <span class="sr-only">Turbo Solutions</span>
        </nuxt-link>
      </div>
    </notch-wrapper>
  </div>
</template>

<script>
import IconBars from '@/icons/bars.svg'
import NotchWrapper from '@/components/NotchWrapper.vue'
import IconLogoSmall from '@/icons/logo-small.svg'

export default {
  components: {
    IconBars,
    NotchWrapper,
    IconLogoSmall,
  },
  data() {
    return {
      menuIsExpanded: false,
    }
  },

  watch: {
    $route() {
      this.toggleMenu(false)
    },
  },

  methods: {
    toggleMenu(status) {
      this.menuIsExpanded = status
      this.$emit('toggleMenu', status)
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  position: fixed;
  padding: 0.5em var(--gutter);
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-primary);
  z-index: var(--mobile-navigation);
  border-bottom: 1px solid var(--color-white);
  @media (--show-full-navigation) {
    display: none;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.btn {
  padding: 0.5em 0.75em 0.5em 0.5em;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  border: 2px solid var(--color-white);
}

.bars {
  margin-right: 0.25em;
  fill: var(--color-white);
}
</style>
