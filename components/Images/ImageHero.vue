<template>
  <app-image
    v-if="image"
    class="image"
    :src="image.heroMedium"
    :alt="image.altText"
    :lazy="lazy"
    :srcset="`
        ${image.heroLarge} 1140w,
        ${image.heroMedium} 800w,
        ${image.heroSmall} 640w`"
    sizes="(min-width: 1140px) 1140px, 100vw"
  />
</template>

<script>
import AppImage from '~/components/Images/AppImage.vue'

export default {
  components: {
    AppImage,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    lazy: {
      type: Boolean,
      default: false,
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
