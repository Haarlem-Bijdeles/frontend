<template>
  <div v-if="generatedImage" :class="{ large: isLarge }" class="hero">
    <image-hero :image="generatedImage" class="image" />

    <div class="wrapper">
      <notch-wrapper>
        <h1 id="content" class="title">{{ title }}</h1>
      </notch-wrapper>
    </div>
  </div>
</template>

<script>
import ImageHero from '~/components/Images/ImageHero.vue'
import FallbackHeroImageQuery from '~/graphql/FallbackHeroImage.gql'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    ImageHero,
    NotchWrapper,
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
  created() {
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
  text-shadow: var(--text-shadow);
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

.title {
  color: var(--color-white);
}

.wrapper {
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
