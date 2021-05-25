<template>
  <app-image
    v-if="imageArchive"
    :src="imageArchive.archive"
    :alt="imageArchive.altText"
    :srcset="`${imageArchive.archive} 1x, ${imageArchive.archive2x} 2x`"
    class="image"
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
