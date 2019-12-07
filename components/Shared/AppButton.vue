<template>
  <component
    :is="tag"
    :type="generatedType"
    :to="to"
    :href="href"
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
    href: {
      type: String,
      default: null,
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
      if (this.href) {
        return 'a'
      }
      return 'button'
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
  @mixin link-reset;

  text-align: center;
  font-weight: var(--font-weight-bold);
  border-radius: 0.25em;
  display: block;
  padding: var(--spacing-xs) var(--spacing-m);
  font-family: var(--font-family-headings);
  transition: background-color 0.2s ease-out;
  max-width: 20em;
  border: 2px solid transparent;

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
  background: var(--color-primary);
  color: var(--color-white);

  &.active,
  &:hover {
    background: var(--color-primary-dark);
  }
}

.btn-action {
  color: #f9f9f9;
  background-color: #06b226;

  &.active,
  &:hover {
    background-color: #059921;
  }
}

.btn-ghost {
  background: var(--color-white);
  color: var(--color-text);
  border-color: var(--color-text);

  &.active,
  &:hover {
    background: var(--color-text);
    color: var(--color-white);
  }
}
</style>
