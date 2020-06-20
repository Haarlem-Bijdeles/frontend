<template>
  <div v-if="generatedImage" class="hero">
    <image-hero :image="generatedImage" class="image" />

    <div class="wrapper">
      <notch-wrapper>
        <h1 id="content" class="title">{{ title }}</h1>
        <div v-if="showContactButtons" class="buttons">
          <app-button class="btn" button-style="action" to="/contact">
            Maak direct een afspraak
          </app-button>
          <app-button
            class="btn"
            button-tag="a"
            href="tel:06%20-%2028%2032%2057%2033"
            button-style="ghost"
          >
            Bel ons: 06 - 28 32 57 33
          </app-button>
        </div>
      </notch-wrapper>
    </div>
  </div>
</template>

<script>
import ImageHero from '~/components/Images/ImageHero.vue'
import FallbackHeroImageQuery from '~/graphql/FallbackHeroImage.gql'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import AppButton from '~/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
    ImageHero,
    NotchWrapper,
  },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      required: true,
    },
    showContactButtons: {
      type: Boolean,
      default: false,
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

  height: 8rem;
  @media (--viewport-sm) {
    height: 20rem;
  }
}

.buttons {
  position: absolute;
  justify-content: center;
  flex-direction: row;
  display: flex;
  left: 0;
  right: 0;
  bottom: 4em;
}

.btn {
  margin: 0 var(--spacing-xs);
}

.title {
  color: var(--color-white);
  text-shadow: var(--text-shadow);
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
