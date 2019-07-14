<template>
  <section class="videos" aria-labelledby="videos-title">
    <h2 id="videos-title" class="sr-only">Onze videos</h2>
    <div class="video-container">
      <iframe
        src="//player.vimeo.com/video/111396892"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
    <div class="video-container">
      <iframe
        src="//player.vimeo.com/video/98130637"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  </section>
</template>

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
