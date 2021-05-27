<template>
  <picture v-if="imageArchive" class="image">
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
    <app-image :src="imageArchive.archive" :alt="imageArchive.altText" />
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
