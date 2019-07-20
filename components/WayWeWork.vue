<template>
  <div class="way-we-work">
    <nav>
      <ul>
        <li v-for="(method, index) in methods" :key="method.title">
          <a :href="`#werkwijze-${index + 1}`">
            {{ method.title }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="list">
      <archive-wrapper
        v-for="(method, index) in methods"
        :id="`#werkwijze-${index + 1}`"
        :key="method.title"
        :images="method.images"
      >
        <template v-slot:title>
          {{ method.title }}
        </template>

        <!-- eslint-disable-next-line -->
        <div v-html="method.text" />
      </archive-wrapper>
    </div>
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
}
</script>

<style lang="postcss" scoped>
.way-we-work {
  position: relative;
  background: var(--color-white);
}

nav {
  display: none;

  @mixin center;
  position: sticky;
  top: 0;
  background: var(--color-white);
  padding: 0.5em 0;
  @media (--viewport-md) {
    display: block;
  }

  & ul {
    @mixin list-reset;
    display: flex;
    justify-content: center;
  }

  & li {
    margin-right: 1em;
    padding-left: 0;
    border: 1px solid #7f7f7f;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    font-weight: 400;

    &::before {
      background: none;
    }

    &.is-active {
      background: $color-action;
      border-color: $color-action;

      a {
        color: #fff;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }

  & a {
    @mixin link-reset;
    display: block;
    text-align: center;
  }
}

.item:nth-child(2n) >>> .image-wrapper {
  order: 2;
  @media (--viewport-sm) {
    padding: 0 0 0 var(--gutter);
  }
}
</style>
