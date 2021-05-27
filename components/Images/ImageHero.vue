<template>
  <picture v-if="image" class="picture">
    <source
      v-if="image.heroSmallAvif"
      :srcset="`
        ${image.heroLargeAvif} 1140w,
        ${image.heroMediumAvif} 800w,
        ${image.heroSmallAvif} 640w`"
      sizes="(min-width: 1140px) 1140px, 100vw"
      type="image/avif"
    />
    <source
      v-if="image.heroSmallWebP"
      :srcset="`
        ${image.heroLargeWebP} 1140w,
        ${image.heroMediumWebP} 800w,
        ${image.heroSmallWebP} 640w`"
      sizes="(min-width: 1140px) 1140px, 100vw"
      type="image/webp"
    />
    <source
      :srcset="`
        ${image.heroLarge} 1140w,
        ${image.heroMedium} 800w,
        ${image.heroSmall} 640w`"
      sizes="(min-width: 1140px) 1140px, 100vw"
      type="image/jpeg"
    />
    <app-image
      :src="image.heroMedium"
      :alt="image.altText"
      :lazy="lazy"
      class="image"
    />
  </picture>
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
