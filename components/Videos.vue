<template>
  <section v-if="videos.length" aria-labelledby="videos-title">
    <notch-wrapper>
      <div class="videos">
        <h2 id="videos-title" class="sr-only">Onze videos</h2>
        <div v-for="video in videos" :key="video" class="video-container">
          <iframe
            :src="`//player.vimeo.com/video/${video}`"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
  },
  props: {
    videos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.videos {
  @mixin block-padding;

  @media (--viewport-md) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--gutter);
  }
}
</style>
