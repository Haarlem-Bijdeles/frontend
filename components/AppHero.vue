<template>
  <div
    v-if="generatedImage"
    class="hero"
    :class="{ 'has-buttons': showContactButtons }"
  >
    <image-hero :image="generatedImage" class="image" />

    <div class="wrapper">
      <notch-wrapper>
        <h1 id="content" class="title">{{ title }}</h1>
      </notch-wrapper>
    </div>

    <div class="buttons-wrapper">
      <notch-wrapper>
        <div v-if="showContactButtons" class="buttons">
          <app-button class="btn" button-style="action" to="/contact">
            Maak direct een afspraak
          </app-button>
          <app-button
            v-if="siteDetails.addressesGroup.phonenumber"
            class="btn"
            button-tag="a"
            :href="`tel:${siteDetails.addressesGroup.phonenumber}`"
            button-style="ghost"
          >
            Bel ons: {{ siteDetails.addressesGroup.phonenumber }}
          </app-button>
        </div>
      </notch-wrapper>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ImageHero from '~/components/Images/ImageHero.vue'
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
  computed: {
    ...mapState('siteDetails', ['siteDetails']),
  },
  created() {
    if (this.image) {
      this.generatedImage = this.image.node
    } else {
      this.generatedImage = this.siteDetails.heroImageGroup.image
    }
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  position: relative;
  height: 10rem;

  &.has-buttons {
    margin-bottom: 4em;

    @media (--viewport-sm) {
      margin-bottom: 0;
    }
  }

  @media (--viewport-sm) {
    height: 20rem;
  }
}

.buttons-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5em;

  @media (--viewport-sm) {
    bottom: 4em;
  }
}

.buttons {
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media (--viewport-sm) {
    flex-direction: row;
  }
}

.btn {
  margin-bottom: var(--spacing-xs);
  max-width: none;

  @media (--viewport-sm) {
    margin: 0 var(--spacing-xs);
  }
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
