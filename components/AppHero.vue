<template>
  <div v-if="image2" class="hero" :class="size">
    <img
      v-if="image2.media_details.sizes.hero_large"
      :src="image2.media_details.sizes.hero_medium.source_url"
      :alt="image2.title.rendered"
      class="image"
      :srcset="
        `
        ${image2.media_details.sizes.hero_large.source_url} 1140w,
        ${image2.media_details.sizes.hero_medium.source_url} 800w,
        ${image2.media_details.sizes.hero_small.source_url} 640w`
      "
      sizes="(min-width: 1140px) 1140px, 100vw"
    />

    <div class="wrapper">
      <h1 id="content" class="title">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small',
    },
    image2: {
      type: Object,
      default: () => {},
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  position: relative;
  text-shadow: 1px 1px 1px var(--color-black);
  color: var(--color-white);
}

.small {
  height: 8rem;
  @media (--viewport-sm) {
    height: 20rem;
  }
}

.large {
  height: 10rem;
  @media (--viewport-sm) {
    height: 30rem;
  }
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  color: var(--color-white);
}

.wrapper {
  @mixin center;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
