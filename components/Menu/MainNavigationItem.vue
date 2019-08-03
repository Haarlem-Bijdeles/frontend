<template>
  <li
    class="menu-item"
    :class="{ open: isOpen }"
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
        <menu-item :item="subItem.node" class="menu-link" />
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
  display: none;
  @mixin list-reset;

  @media (--show-full-navigation) {
    background: var(--color-bg-page);
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
  display: flex;

  &.open .submenu {
    display: block;
  }
}

.title {
  transition: box-shadow 0.1s ease-out;
  padding: 0.25em 0;
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
