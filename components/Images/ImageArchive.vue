<template>
  <picture v-if="imageArchive" class="picture">
    <source
      v-if="imageArchive.archiveAvif"
      :srcset="`${imageArchive.archiveAvif} 1x, ${imageArchive.archiveAvif2x} 2x`"
      type="image/avif"
    />
    <source
      v-if="imageArchive.archiveWebP"
      :srcset="`${imageArchive.archiveWebP} 1x, ${imageArchive.archiveWebP2x} 2x`"
      type="image/webp"
    />
    <source
      :srcset="`${imageArchive.archive} 1x, ${imageArchive.archive2x} 2x`"
      type="image/jpeg"
    />
    <app-image
      :src="imageArchive.archive"
      :alt="imageArchive.altText"
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
      required: true,
    },
  },
  computed: {
    imageArchive() {
      if (this.image.node) {
        return this.image.node
      }
      return this.image
    },
  },
}
</script>

<style lang="postcss" scoped>
.picture {
  display: block;
  border: 5px solid var(--color-white);
  box-shadow: 0 0 3px var(--color-gray);
}

.image {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
