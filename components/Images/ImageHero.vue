<template>
  <lazy-loading-image
    v-if="image"
    class="image"
    :src="image.heroMedium"
    :alt="image.altText"
    :srcset="`
        ${image.heroLarge} 1140w,
        ${image.heroMedium} 800w,
        ${image.heroSmall} 640w`"
    sizes="(min-width: 1140px) 1140px, 100vw"
  />
</template>

<script>
import LazyLoadingImage from '~/components/Images/LazyLoadingImage.vue'

export default {
  components: {
    LazyLoadingImage,
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
.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
