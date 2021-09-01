<template>
  <div class="archive-bg">
    <notch-wrapper>
      <div class="wrapper">
        <div v-if="image" class="image-wrapper">
          <image-archive :image="image" class="image-archive" />
        </div>

        <div class="text">
          <h2 class="title">
            <slot name="title" />
          </h2>

          <slot />
        </div>
      </div>
    </notch-wrapper>
  </div>
</template>

<script>
import ImageArchive from '~/components/Images/ImageArchive.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    ImageArchive,
    NotchWrapper,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.archive-bg {
  background: linear-gradient(
    to bottom,
    var(--color-gray-lighter) 0,
    var(--color-white) 20rem
  );
}

.wrapper {
  @mixin block-padding;
  flex-wrap: wrap;
  @media (--viewport-sm) {
    display: flex;
  }
}

.title {
  flex: 0 0 100%;
}

.image-wrapper {
  flex: 0 0 33%;
  margin-bottom: var(--spacing-m);
  max-width: 20em;

  @media (--viewport-sm) {
    max-width: none;
    padding-right: var(--gutter);
  }
}

.text {
  flex: 0 0 66%;
}

.image-archive {
  @media (--viewport-sm) {
    margin: 0 auto;
  }
}
</style>
