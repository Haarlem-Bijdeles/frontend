<template>
  <component
    :is="tag"
    :type="generatedType"
    :to="to"
    :class="cssClass"
    class="btn"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    buttonTag: {
      type: String,
      default: 'button',
      validator(value) {
        return ['nuxt-link', 'a', 'button'].includes(value)
      },
    },
    type: {
      type: String,
      default: 'button',
    },
    buttonStyle: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'ghost', 'action'].includes(value)
      },
    },
    isLarge: {
      type: Boolean,
      default: true,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClass() {
      let cssClass = ''
      cssClass += `btn-${this.buttonStyle}`
      cssClass += !this.isLarge ? ' btn-small' : ''
      cssClass += this.isFullWidth ? ' btn-full' : ''
      return cssClass
    },
    tag() {
      if (this.to) {
        return 'nuxt-link'
      }
      return this.buttonTag
    },
    generatedType() {
      if (this.tag === 'button') {
        return this.type
      }
      return null
    },
  },
}
</script>

<style lang="postcss" scoped>
.btn {
  @mixin btn;

  &:disabled {
    background: transparent;
    color: var(--color-white);
    border: 2px dashed var(--color-white);

    &.active,
    &:hover {
      background: transparent;
    }
  }
}

.btn-full {
  max-width: none;
}

.btn-small {
  font-size: 1em;
  padding: var(--spacing-xxs) var(--spacing-xs);
  font-weight: var(--font-weight-normal);
}

.btn-primary {
  @mixin btn-primary;

  &.active,
  &:hover {
    @mixin btn-primary-hover;
  }
}

.btn-action {
  @mixin btn-action;

  &.active,
  &:hover {
    @mixin btn-action-hover;
  }
}

.btn-ghost {
  @mixin btn-ghost;

  &.active,
  &:hover {
    @mixin btn-ghost-hover;
  }
}
</style>
