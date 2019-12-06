<template>
  <section
    v-if="servicesGroup"
    class="services"
    aria-labelledby="services-title"
  >
    <image-hero :image="servicesGroup.servicesImage" class="image" />

    <div class="wrapper">
      <h2 id="services-title" class="title">
        {{ servicesGroup.servicesLabel }}
      </h2>
      <services-list />
    </div>
  </section>
</template>

<script>
import ImageHero from '@/components/Images/ImageHero.vue'

export default {
  components: {
    ImageHero,
  },
  props: {
    servicesGroup: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.services {
  background: var(--color-primary);
  text-align: center;
  position: relative;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  @media (--viewport-lg) {
    display: block;
  }
}

.title {
  color: var(--color-white);
  text-shadow: var(--text-shadow);
}

.wrapper {
  @mixin center;
  position: relative;
  padding-top: 5rem;
  padding-bottom: 3rem;
}
</style>
