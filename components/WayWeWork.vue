<template>
  <div class="way-we-work">
    <nav class="nav">
      <ul class="list">
        <li
          v-for="(method, index) in methods"
          :key="method.title"
          class="list-item"
        >
          <button
            class="nav-link btn btn-ghost  btn-small"
            :class="{ active: activeItem === index }"
            @click="scrollTo(index + 1)"
          >
            {{ method.title }}
          </button>
        </li>
      </ul>
    </nav>

    <archive-wrapper
      v-for="(method, index) in methods"
      :id="`werkwijze-${index + 1}`"
      :key="method.title"
      ref="archive-item"
      :images="method.images"
    >
      <template v-slot:title>
        {{ method.title }}
      </template>

      <!-- eslint-disable-next-line -->
        <div v-html="method.text" />
    </archive-wrapper>
  </div>
</template>

<script>
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'

export default {
  components: {
    ArchiveWrapper,
  },
  props: {
    methods: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeItems: [],
    }
  },
  computed: {
    activeItem() {
      return Math.min.apply(Math, this.activeItems)
    },
  },
  mounted() {
    const items = this.$refs['archive-item'].map(item => item.$el)

    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window
    ) {
      const imageObserver = new IntersectionObserver(entries => {
        const index = items.indexOf(entries[0].target)
        if (entries[0].isIntersecting) {
          this.activeItems.push(index)
        } else {
          this.activeItems = this.activeItems.filter(item => item !== index)
        }
      })
      items.forEach(element => {
        imageObserver.observe(element)
      })
    }
  },
  methods: {
    scrollTo(index) {
      document
        .querySelector(`#werkwijze-${index}`)
        .scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="postcss" scoped>
.way-we-work {
  position: relative;
  background: var(--color-white);
}

.nav {
  @mixin center;
  display: none;

  position: sticky;
  top: 0;
  background: var(--color-white);
  padding: 0.5em 0;
  @media (--viewport-md) {
    display: block;
  }
}

.list {
  @mixin list-reset;
  display: flex;
  justify-content: center;
}

.list-item {
  margin: 0 0.25em;
}

.item:nth-child(2n) >>> .image-wrapper {
  order: 2;
  @media (--viewport-sm) {
    padding: 0 0 0 var(--gutter);
  }
}
</style>
