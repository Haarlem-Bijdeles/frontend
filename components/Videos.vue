<template>
  <section v-if="videos.length" class="videos" aria-labelledby="videos-title">
    <h2 id="videos-title" class="sr-only">Onze videos</h2>
    <div v-for="video in videos" :key="video" class="video-container">
      <iframe
        :src="`//player.vimeo.com/video/${video}`"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
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
  @mixin center;
  @mixin block-padding;

  @media (--viewport-md) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--gutter);
  }
}
</style>
