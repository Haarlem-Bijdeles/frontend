<template>
  <div class="way-we-work">
    <nav class="nav" aria-label="Onze werkwijze">
      <notch-wrapper>
        <ul class="list">
          <li
            v-for="(method, index) in methods"
            :key="method.title"
            class="list-item"
          >
            <app-button
              :class="{ active: activeItem === index }"
              :href="`#werkwijze-${index + 1}`"
              button-style="ghost"
              :is-large="false"
              class="nav-link"
              @click="animateScrollToAnchor(index + 1, $event)"
            >
              {{ method.title }}
            </app-button>
          </li>
        </ul>
      </notch-wrapper>
    </nav>

    <archive-wrapper
      v-for="(method, index) in methods"
      :id="`werkwijze-${index + 1}`"
      ref="archive-item"
      :key="method.title"
      :image="method.image"
      class="item"
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
import ArchiveWrapper from '~/components/ArchiveWrapper.vue'
import AppButton from '~/components/Shared/AppButton.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
    AppButton,
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
    const items = this.$refs['archive-item'].map((item) => item.$el)

    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window
    ) {
      const imageObserver = new IntersectionObserver((entries) => {
        const index = items.indexOf(entries[0].target)
        if (entries[0].isIntersecting) {
          this.activeItems.push(index)
        } else {
          this.activeItems = this.activeItems.filter((item) => item !== index)
        }
      })
      items.forEach((element) => {
        imageObserver.observe(element)
      })
    }
  },
  methods: {
    animateScrollToAnchor(index, event) {
      event.preventDefault()
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
  display: none;

  position: sticky;
  top: 0;
  background: var(--color-white);
  padding: var(--spacing-xs) 0;
  @media (--viewport-md) {
    display: block;
  }
}

.nav-link {
  max-width: none;
}

.list {
  @mixin list-reset;
  display: flex;
  justify-content: center;
}

.list-item {
  margin: 0 var(--spacing-xxs);
}

.item:nth-child(2n) >>> .image-wrapper {
  order: 2;
  @media (--viewport-sm) {
    padding: 0 0 0 var(--gutter);
  }
}
</style>
