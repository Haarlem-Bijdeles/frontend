<template>
  <li
    class="menu-item"
    :class="{ open: isOpen, 'has-popup': item.childItems.edges.length > 0 }"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <menu-item
      :item="item"
      class="menu-link"
      :aria-haspopup="item.childItems.edges.length > 0"
      :aria-expanded="isOpen"
    />
    <button
      v-if="item.childItems.edges.length"
      class="btn-show-submenu"
      :aria-expanded="isOpen"
      @click="toggleMenu"
    >
      <icon-chevron-down
        aria-hidden="true"
        width="20"
        height="20"
        class="icon-chevron-down"
      />
      <span class="sr-only">Toon submenu voor {{ item.label }}</span>
    </button>
    <ul v-if="item.childItems.edges.length" ref="submenu" class="submenu">
      <li
        v-for="subItem in item.childItems.edges"
        :key="subItem.node.label"
        class="menu-item"
      >
        <menu-item :item="subItem.node" class="submenu-link" />
      </li>
    </ul>
  </li>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
import IconChevronDown from '@/icons/chevron-down.svg'

export default {
  components: {
    MenuItem,
    IconChevronDown,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      timer: null,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    mouseover() {
      this.isOpen = true
      clearTimeout(this.timer)
    },
    mouseout() {
      this.timer = setTimeout(() => {
        this.isOpen = false
      }, 250)
    },
  },
}
</script>

<style lang="postcss" scoped>
.submenu {
  @mixin list-reset;
  margin-left: 1em;

  @media (--show-full-navigation) {
    display: none;
    background: var(--color-bg-page);
    position: absolute;
    top: 100%;
    margin-left: 0;
    padding: 0 0.5em;
    white-space: nowrap;

    @nest .open & {
      display: block;
    }
  }
}

.menu-item {
  position: relative;
  @media (--show-full-navigation) {
    display: flex;
  }
}

.title {
  transition: box-shadow 0.1s ease-out;
  padding: 0.25em 0;
}

.menu-link {
  font-size: 1.2em;
  border-bottom: 3px solid transparent;

  &.nuxt-link-active[aria-haspopup='true'],
  &.nuxt-link-exact-active {
    border-bottom-color: var(--color-black);
  }

  @media (--show-full-navigation) {
    padding: 0.75em 0.5em;
  }

  &[aria-haspopup='true'] {
    padding-right: 0.5em;
  }
}

.submenu-link {
  font-size: 1.1em;
  border-bottom: 2px solid transparent;

  &.nuxt-link-exact-active {
    border-bottom-color: var(--color-black);
  }

  @media (--show-full-navigation) {
    padding: 0.25em 0;
  }
}

.submenu-link,
.menu-link {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  line-height: 1.1;
  padding: 0.5em 0;
  border-top: 1px solid var(--color-black);

  &:hover {
    text-decoration: none;
    & .title {
      box-shadow: 0 2px 0 0 currentColor;
    }
  }
  @media (--show-full-navigation) {
    border-top: 0;
  }
}

.btn-show-submenu {
  display: none;
  @media (--show-full-navigation) {
    display: block;
    transform: translate(-0.25em, 0.25em);
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
