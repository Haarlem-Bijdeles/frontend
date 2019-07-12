<template>
  <div class="hero" :class="size">
    <img :src="image" alt="" class="image" />
    <div class="wrapper">
      <h1 id="content" class="title js-skip-content">
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
    image: {
      type: String,
      required: true,
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
