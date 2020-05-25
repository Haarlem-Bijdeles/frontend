<template>
  <li class="list-item" @mousedown.left="mouseDown" @mouseup.left="mouseUp">
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      down: null,
    }
  },
  methods: {
    mouseUp() {
      const up = +new Date()
      if (up - this.down < 200) {
        this.goToItem()
      }
    },
    mouseDown() {
      this.down = +new Date()
    },
    goToItem() {
      this.$router.push(this.url)
    },
  },
}
</script>

<style lang="postcss" scoped>
.list-item {
  cursor: pointer;
  &:focus-within,
  &:hover {
    & >>> .read-more {
      @mixin link-hover;
    }
  }
}

a {
  @mixin link-reset;
}
</style>
