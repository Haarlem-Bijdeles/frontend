<template>
  <div v-if="generatedImage" :class="{ large: isLarge }" class="hero">
    <app-image
      :src="generatedImage.heroMedium"
      :alt="generatedImage.altText"
      :srcset="
        `
        ${generatedImage.heroLarge} 1140w,
        ${generatedImage.heroMedium} 800w,
        ${generatedImage.heroSmall} 640w`
      "
      class="image"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <div class="wrapper">
      <h1 id="content" class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
import AppImage from '@/components/Shared/AppImage.vue'
import FallbackHeroImageQuery from '~/graphql/FallbackHeroImage.gql'

export default {
  components: {
    AppImage,
  },
  props: {
    isLarge: {
      type: Boolean,
      default: false,
    },
    image: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      generatedImage: null,
    }
  },
  mounted() {
    if (this.image) {
      this.generatedImage = this.image
    } else {
      this.getFallbackImage()
    }
  },
  methods: {
    async getFallbackImage() {
      this.$apollo.getClient()
      const { data } = await this.$apollo.query({
        query: FallbackHeroImageQuery,
      })
      this.generatedImage = data.siteDetails.heroImageGroup.image
    },
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  position: relative;
  text-shadow: 1px 1px 1px var(--color-black);
  color: var(--color-white);
  height: 8rem;
  @media (--viewport-sm) {
    height: 20rem;
  }

  &.large {
    height: 10rem;
    @media (--viewport-sm) {
      height: 30rem;
    }
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
