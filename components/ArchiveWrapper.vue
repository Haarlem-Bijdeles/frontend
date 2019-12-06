<template>
  <div class="archive-bg">
    <div class="wrapper">
      <h2 class="title">
        <slot name="title" />
      </h2>
      <div v-if="image" class="image-wrapper">
        <image-archive :image="image" />
      </div>

      <div class="text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import ImageArchive from '@/components/Images/ImageArchive.vue'

export default {
  components: {
    ImageArchive,
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
    var(--color-gray-light) 0,
    var(--color-white) 20rem
  );
}

.wrapper {
  @mixin center;
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
  margin-bottom: 1em;
  max-width: 20em;

  @media (--viewport-sm) {
    max-width: none;
    padding-right: var(--gutter);
  }
}

.text {
  flex: 0 0 66%;
}

.image {
  display: block;
  width: 100%;
  border: 5px var(--color-white) solid;
  box-shadow: 0 0 3px #999;
  @media (--viewport-sm) {
    margin: 0 auto;
  }
}
</style>
