<template>
  <li :class="$style['list-item']">
    <component
      :is="icon"
      aria-hidden="true"
      width="64"
      height="64"
      :class="$style.icon"
    />
    <h2 :class="$style.title">{{ usp.title }}</h2>
    <p>{{ usp.text }}</p>
  </li>
</template>

<script>
import IconUsp1 from '~/icons/usp-1.svg'
import IconUsp2 from '~/icons/usp-2.svg'
import IconUsp3 from '~/icons/usp-3.svg'
export default {
  props: {
    usp: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icon() {
      switch (this.usp.icon) {
        case 'usp-1':
          return IconUsp1
        case 'usp-2':
          return IconUsp2
        default:
          return IconUsp3
      }
    },
  },
}
</script>

<style lang="postcss" module>
.icon {
  width: 4em;
  height: 4em;
  margin-bottom: var(--spacing-xs);
}

.title {
  margin-bottom: 0.25em;
  font-size: 1.25rem;
}
</style>
