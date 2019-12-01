<template>
  <app-image
    v-if="image"
    :src="image.archive"
    :alt="image.altText"
    :srcset="`${image.archive} 1x, ${image.archive2x} 2x`"
    class="image"
  />
</template>

<script>
import AppImage from '@/components/Shared/AppImage.vue'

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
}
</script>
